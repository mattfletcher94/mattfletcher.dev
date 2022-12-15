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
        window.scrollTo(0, 0)
      }, 300)
    }
    hasCompletedFirstRender = true
  })
}

