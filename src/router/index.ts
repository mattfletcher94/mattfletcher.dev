/* import { createRouter, createWebHistory } from 'vue-router'
import { home } from './home'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      if (to.hash === '#')
        return { left: 0, top: 0 }
      return {
        el: to.hash,
      }
    }
  },
  routes: [
    home,
  ],
})

export default router
*/
