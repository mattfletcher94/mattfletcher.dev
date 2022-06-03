import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    // '@kevinmarrec/nuxt-pwa',
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
  /* pwa: {
    manifest: {
      lang: 'en',
      name: 'Matt Fletcher - Developer based in Plymouth, UK.',
      short_name: 'Matt Fletcher',
      description: 'Matt Fletcher, Full Stack Developer, Plymouth, Vue.js, Portfolio',
      theme_color: '#6366f1',
      display: 'minimal-ui',
      start_url: '/',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  }, */
  meta: {
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
      /*
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
      <meta name="msapplication-TileColor" content="#a855f7">
      <meta name="theme-color" content="#000000">
      */
      { rel: 'manifest', href: '/manifest.webmanifest' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%21%40%23%24%25%5E%26%2A%28%29_%2B%7B%7D%3A%22%3C%3E%3F%5C%7C%5B%5D%3B%5C%27%2C.%2F%60~' },
    ],
  },
  build: {
    transpile: ['@headlessui/vue'],
  },
  pageTransition: {
    name: 'page',
  },
  // target: 'static',
  ssr: true,
})
