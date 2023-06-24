import { Configuration, OpenAIApi } from 'openai'
import { z } from 'zod'
import { RateLimiter } from 'limiter'

const tokensPerInterval = 30
const interval = 15 * 60 * 1000
const limiter = new RateLimiter({
  tokensPerInterval,
  interval,
  fireImmediately: true,
})

export default defineEventHandler(async (event) => {
  const remainingRequest = await limiter.removeTokens(1)
  event.node.res.setHeader('X-RateLimit-Limit', tokensPerInterval)
  event.node.res.setHeader('X-RateLimit-Remaining', remainingRequest)
  event.node.res.setHeader('X-RateLimit-Reset', interval)
  if (remainingRequest < 0) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too many Requests',
    })
  }

  const runtimeConfig = useRuntimeConfig()
  const body = await readBody(event)

  const bodySchema = z.object({
    prompt: z.string(),
    content: z.string(),
  })

  const bodyResult = bodySchema.safeParse(body)
  if (!bodyResult.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      data: {
        message: 'Invalid request body.',
        errors: bodyResult.error,
      },
    })
  }

  const systemPrompt = `
    Your role is as an AI-powered assistant embedded in a Chrome extension, designed to respond to user inquiries about the content of the active web page. Utilize the provided webpage or selected text to generate accurate and insightful answers.

    Here are your key responsibilities:
    
    Strive to make your responses relevant to the query and the web page's context.
    Aim for clarity and brevity in your responses, minimizing the use of specialized jargon or technical terminology.
    Leverage Markdown for structuring your replies. This could involve headers, bullet points, links, quotes, or any other pertinent elements.
    If you need to incorporate links, ensure you substitute relative links with the complete URL (derived from websiteContext.url). Ensure links adhere to Markdown standards.
    Supplement your answers with useful resource links, which could include other pages from the same website, relevant articles, or pertinent external websites.
    Scrutinize the information on the webpage for credibility to avoid spreading misleading or inaccurate information.
    Primarily base your response on the websiteContent given, but also draw upon the websiteContext and other resources to enhance your response.
    In situations where you cannot provide a direct answer, guide the user on how they can locate the information, or recommend alternative resources.
  `.replace(/\n\s+/g, '\n')

  try {
    const openai = new OpenAIApi(new Configuration({ apiKey: runtimeConfig.openAIKey }))
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0.5,
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'system',
          content: `Here is the information about the page: """${body.content}"""`,
        },
        {
          role: 'user',
          content: body.prompt,
        },
      ],
    })
    return completion.data.choices[0].message?.content ?? ''
  }
  catch (error: any) {
    let errorMessage = 'Something went wrong. Please try again.'

    if (!error.response || !error.response.data)
      errorMessage = 'Something went wrong. Please try again.'

    else if (error.response.status === 400 && error.response.data.error.code === 'context_length_exceeded')
      errorMessage = 'This web page is too long for me to read. Please select a smaller portion of the web page and try again.'

    else if (error.response.status === 402 && error.response.data.error.code === 'too_many_requests')
      errorMessage = 'I am too busy right now. Please try again later.'

    else if (error.response.status === 402 && error.response.data.error.code === 'insufficient_funds')
      errorMessage = 'Sorry, we\'ve received too many request today and have exceeded our daily quota. Please try again tomorrow.'

    else if (error.response.status === 401)
      errorMessage = 'Sorry, we\'re currently unable to process your request. Please try again later'

    throw createError({
      statusCode: error.response?.status || 500,
      statusMessage: error.response?.statusText || 'Internal Server Error',
      data: {
        message: errorMessage,
      },
    })
  }
})
