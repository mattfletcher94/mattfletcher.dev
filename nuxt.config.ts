// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
  },
  content: {
    watch: false,
    highlight: {
      preload: ['javascript', 'css', 'html'],
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/index.css',
    viewer: false,
  },
  vueuse: {
    ssrHandlers: true,
  },
  typescript: {
    strict: true,
  },
  css: [
    '@fontsource/nunito-sans/400.css',
    '@fontsource/nunito-sans/600.css',
    '@fontsource/nunito-sans/700.css',
    '@fontsource/nunito-sans/800.css',
    '@fontsource/nunito-sans/900.css',
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Matt Fletcher' },
        { name: 'theme-color', content: '#000000' },
      ],
      link: [
        { rel: 'manifest', href: '/manifest.webmanifest' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  build: {
    transpile: ['@headlessui/vue'],
  },
  ssr: true,
})
