declare interface Window {
  // extend the window
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*&imagetools' {
  /**
   * actual types
   * - code https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
   * - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
   */
  const out: any
  export default out
}

declare module '*.DOCX' {
  /**
   * actual types
   * - code https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
   * - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
   */
  const out: any
  export default out
}

declare module '*.md' {
  const attributes: Record<string, unknown>
  const html: string
  export { attributes, html }
}
