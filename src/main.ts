import { ViteSSG } from 'vite-ssg'
import type { RouteRecordRaw } from 'vue-router'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import App from './App.vue'
import './css/index.css'
import 'vue3-carousel/dist/carousel.css'
import { pinia } from './modules/pinia'
import PageIndex from './pages/PageIndex.vue'

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(App, {
  routes: [
    {
      path: '/',
      component: PageIndex,
    } as RouteRecordRaw,
  ],
},
({ app, router, isClient }) => {
  app.use(pinia)
  router.options.scrollBehavior = (to) => {
    if (to.hash) {
      if (to.hash === '#')
        return { left: 0, top: 0 }
      return {
        el: to.hash,
      }
    }
  }
  if (isClient && import.meta.env.PROD)
    useRegisterSW({})
})

/*
const app = createApp(App)
const head = createHead()
app.use(router)
app.use(pinia)
app.use(head)
app.mount('#app')
*/
