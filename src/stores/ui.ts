import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    scrollSpyActiveID: null as string | null,
  }),
})
