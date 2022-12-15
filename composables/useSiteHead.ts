import type { MetaObject } from '@nuxt/schema'

/**
 * Use head with templates
 */
export function useSiteHead(meta: MetaObject, appendWebsiteName = true) {
  const websiteName = 'Matt Fletcher - Full Stack Developer Based in Hampshire, UK'
  const newMeta = { ...meta }
  if (appendWebsiteName)
    newMeta.title = meta.title ? `${meta.title} | ${websiteName}` : websiteName

  else
    newMeta.title = meta.title

  useHead(newMeta)
}

