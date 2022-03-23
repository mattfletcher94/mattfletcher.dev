import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { imagetools } from 'vite-imagetools'
import Components from 'unplugin-vue-components/vite'
import generateSitemap from 'vite-ssg-sitemap'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Matt Fletcher - Developer based in Plymouth, UK.',
        short_name: 'Matt Fletcher',
        theme_color: '#000000',
        display: 'browser',
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
    }),
    Components({
      dts: true,
    }),
    imagetools(),
  ],

  // @ts-expect-error Idk
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() {
      generateSitemap()
    },
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})
