import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Project extends ParsedContent {
  'title': string
  'description': string
  'keywords': string
  'image': string
  'banner'?: string
  'type': string
  'tags': string[]
  '_path': string
}
