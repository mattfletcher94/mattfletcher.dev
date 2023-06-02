<script setup lang="ts">
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { nextTick, ref, watch } from 'vue'

// Props
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

// Emit
const emit = defineEmits<{
  (event: 'close'): void
  (event: 'update:open', isOpen: boolean): void
}>()

const navigation = ref([
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Portfolio',
    path: '/portfolio/',
  },
  {
    name: 'Blog',
    path: '/blog/',
  },
  {
    name: 'Contact',
    path: '/contact/',
  },
])

const colorMode = useColorMode()

const darkModeEnabled = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(val: boolean) {
    colorMode.preference = val ? 'dark' : 'light'
  },
})

const toggleDarkMode = () => {
  if (colorMode.preference !== 'dark')
    colorMode.preference = 'dark'

  else
    colorMode.preference = 'light'
}

// Handle close
const handleClose = () => {
  emit('close')
}

// HTML Refs
const dialogHeader = ref<null | HTMLElement>(null)
const dialogContent = ref<null | HTMLElement>(null)
const dialogFooter = ref<null | HTMLElement>(null)

// Content height
const contentHeight = ref('calc(100%- 4rem')

// Watch open prop
watch(() => props.open, async (open) => {
  if (!open)
    return

  await nextTick()
  const headerHeight = Math.ceil(dialogHeader.value?.getBoundingClientRect().height || 0)
  const footerHeight = Math.ceil(dialogFooter.value?.getBoundingClientRect().height || 0)
  contentHeight.value = `calc(100% - ${headerHeight + footerHeight}px)`
})
</script>

<template>
  <TransitionRoot
    appear
    :show="props.open"
    as="template"
  >
    <Dialog
      as="template"
      @close="handleClose()"
    >
      <div
        class="fixed inset-0 overflow-hidden"
        style="z-index: 1000"
      >
        <div class="flex items-end h-full w-full">
          <TransitionChild
            as="template"
            enter="duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="fixed inset-0 bg-gray-500/70"
            />
          </TransitionChild>
          <TransitionChild
            as="template"
            enter="duration-300 ease-in-out"
            enter-from="opacity-0 translate-y-2/4"
            enter-to="opacity-100 translate-y-0"
            leave="duration-300 ease-in-out"
            leave-from="opacity-100 translate-y-0"
            leave-to="opacity-0 translate-y-2/4"
          >
            <div
              class="dialog w-full h-full max-h-[70vh] bg-theme-surface-0 rounded-t-3xl shadow-2xl overflow-hidden ring-1 ring-black ring-opacity-5"
            >
              <div ref="dialogHeader" class="dialog-header block w-full">
                <div class="block p-4 border-b border-b-theme-surface-1 text-theme-foreground-0  text-base">
                  <div class="flex items-center">
                    <router-link to="/" aria-label="Home" class="!outline-none">
                      <img src="/images/avatar.webp" width="30" height="30" alt="Matt Fletcher Avatar" class="inline-block  align-middle mr-2">
                      matt.fletcher.dev
                    </router-link>
                    <div class="ml-auto">
                      <ClientOnly>
                        <button
                          class="rounded-full p-3 hover:bg-theme-surface-1 transition-all flex-items-center justify-center outline-none"
                          type="button"
                          title="Toggle dark mode"
                          @click="toggleDarkMode"
                        >
                          <svg v-if="darkModeEnabled" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                          <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" /></svg>
                        </button>
                      </ClientOnly>
                    </div>
                    <button class="rounded-full p-3 hover:bg-theme-surface-1 transition-all" aria-label="Open menu" type="button" @click="handleClose()">
                      <svg xmlns="http://www.w3.org/2000/svg" class=" h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div ref="dialogContent" class="dialog-content block w-full overflow-y-auto overflow-x-hidden" :style="{ height: contentHeight }">
                <div class="block">
                  <router-link
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.path"
                    class="nav-item block w-full p-4 transition-opacity duration-300 hover:opacity-70 !outline-none"
                    @click="handleClose()"
                  >
                    {{ item.name }}
                  </router-link>
                </div>
              </div>
              <div ref="dialogFooter" class="dialog-footer block w-full">
                <div class="block p-4 border-t border-t-theme-surface-1">
                  <div class="flex items-center">
                    <!--
                    <a class="btn btn--primary" href="/matt-fletcher-cv.pdf" download aria-label="Download resume">
                      Download Resume
                      <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                    -->
                    <a
                      href="https://instagram.com/mattfletcher.dev"
                      target="_blank"
                      class="ml-auto w-8 h-8 rounded-full flex no-underline transition-all duration-300 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                    >
                      <IconInstagram class="w-5 h-5 mt-1.5 mx-auto" />
                    </a>
                    <a
                      href="https://github.com/mattfletcher94"
                      target="_blank"
                      class="w-8 h-8 rounded-full flex no-underline transition-all duration-300 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                    >
                      <IconGithub class="w-5 h-5 mt-1.5 mx-auto" />
                    </a>
                    <a
                      href="mailto:mattfletcher94@outlook.com"
                      class="w-8 h-8 rounded-full flex no-underline transition-all duration-300 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                    >
                      <IconEmail class="w-5 h-5 mt-1.5 mx-auto" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>
.nav-item::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 2px;
  height: 100%;
  background-color: var(--primary-500);
  opacity: 0;
  transition: opacity 300ms ease;
}
.nav-item-active::after {
  opacity: 1;
}
</style>
