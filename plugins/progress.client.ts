import NProgress from 'nprogress'

export default defineNuxtPlugin(async () => {
  NProgress.configure({
    showSpinner: false,
    easing: 'ease',
    speed: 500,
  })
  const router = useRouter()
  router.beforeEach((to, from, next) => {
    if (!to.hash && to.fullPath !== from.fullPath)
      NProgress.start()

    next()
  })
  return {
    provide: {
      NProgress,
    },
  }
})
