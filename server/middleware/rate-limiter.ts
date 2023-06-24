import { RateLimiter } from 'limiter'

const tokensPerInterval = 30
const interval = 15 * 60 * 1000
const limiter = new RateLimiter(
  {
    tokensPerInterval,
    interval,
    fireImmediately: true,
  })

export default fromNodeMiddleware(async (req, res, next) => {
  const remainingRequest = await limiter.removeTokens(1)
  res.setHeader('X-RateLimit-Limit', tokensPerInterval)
  res.setHeader('X-RateLimit-Remaining', remainingRequest)
  res.setHeader('X-RateLimit-Reset', interval)
  if (remainingRequest < 0) {
    res.writeHead(429, { 'Content-Type': 'text/plain;charset=UTF-8' })
    res.end('429 Too Many Requests - please slow down')
  }
  next()
})
