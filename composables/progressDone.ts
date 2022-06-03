/**
 * Completes the progress bar within the onBeforeMount hook.
 */
let hasCompletedFirstRender = false
export function useProgressDone() {
  onBeforeMount(() => {
    const { $NProgress } = useNuxtApp()
    $NProgress.done()

    if (hasCompletedFirstRender) {
      setTimeout(() => {
        console.log('do scroll to top')
        window.scrollTo(0, 0)
      }, 350)
    }
    hasCompletedFirstRender = true
  })
}

