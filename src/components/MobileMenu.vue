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
        <div class="flex items-center h-full w-full">
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
            enter-from="opacity-0 -translate-x-2/4"
            enter-to="opacity-100 translate-x-0"
            leave="duration-300 ease-in-out"
            leave-from="opacity-100 translate-x-0"
            leave-to="opacity-0 -translate-x-2/4"
          >
            <div
              class="dialog bg-white rounded-r-3xl shadow-2xl overflow-hidden ring-1 ring-black ring-opacity-5"
            >
              <div ref="dialogHeader" class="dialog-header">
                <div class="block p-4 border-b border-b-gray-200">
                  <div class="flex items-center">
                    <router-link to="#section-about">
                      <Text weight="600" class="">
                        Matt Fletcher
                      </Text>
                    </router-link>
                    <button
                      aria-label="Open Menu"
                      class="ml-auto flex items-center w-8 h-8 rounded-full focus-within:bg-black focus-within:text-white transition-colors"
                      @click="handleClose()"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div ref="dialogContent" class="dialog-content" :style="{ height: contentHeight }">
                <div class="block">
                  <router-link
                    class="nav-item"
                    :class="{ 'nav-item--active': uiStore.scrollSpyActiveID === 'section-skills' }"
                    to="#section-skills"
                    @click="handleClose()"
                  >
                    <Text weight="600" class="!text-sm">
                      Skills
                    </Text>
                  </router-link>
                  <router-link
                    class="nav-item"
                    :class="{ 'nav-item--active': uiStore.scrollSpyActiveID === 'section-experience' }"
                    to="#section-experience"
                    @click="handleClose()"
                  >
                    <Text weight="600" class="!text-sm">
                      Experience
                    </Text>
                  </router-link>
                  <router-link
                    class="nav-item"
                    :class="{ 'nav-item--active': uiStore.scrollSpyActiveID === 'section-projects' }"
                    to="#section-projects"
                    @click="handleClose()"
                  >
                    <Text weight="600" class="!text-sm">
                      Projects
                    </Text>
                  </router-link>
                  <router-link
                    class="nav-item"
                    :class="{ 'nav-item--active': uiStore.scrollSpyActiveID === 'section-contact' }"
                    to="#section-contact"
                    @click="handleClose()"
                  >
                    <Text weight="600" class="!text-sm">
                      Contact
                    </Text>
                  </router-link>
                </div>
              </div>
              <div ref="dialogFooter" class="dialog-footer">
                <div class="block p-4 border-t border-t-gray-200">
                  <div class="flex items-center">
                    <a href="#">
                      <Button>
                        Resume
                        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </Button>
                    </a>
                    <a
                      href="https://github.com/mattfletcher94"
                      target="_blank"
                      class="ml-auto w-10 h-10 rounded-full flex no-underline transition-all duration-300 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                    >
                      <IconGithub class="w-6 h-6 mt-2 mx-auto" />
                    </a>
                    <a
                      href="mailto:mattfletcher94@outlook.com"
                      class="ml-4 w-10 h-10 rounded-full flex no-underline transition-all duration-300 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                    >
                      <IconEmail class="w-6 h-6 mt-2 mx-auto" />
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

<script setup lang="ts">
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { nextTick, ref, watch } from 'vue'
import { useUiStore } from '../stores/ui'

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

// Handle close
const handleClose = () => {
  emit('close')
}

const uiStore = useUiStore()

// HTML Refs
const dialogHeader = ref<null | HTMLElement>(null)
const dialogContent = ref<null | HTMLElement>(null)
const dialogFooter = ref<null | HTMLElement>(null)

// Content height
const contentHeight = ref('calc(100%- 4rem')

// Watch open prop
watch(() => props.open, async(open) => {
  if (!open) return

  await nextTick()
  const headerHeight = Math.ceil(dialogHeader.value?.getBoundingClientRect().height || 0)
  const footerHeight = Math.ceil(dialogFooter.value?.getBoundingClientRect().height || 0)
  contentHeight.value = `calc(100% - ${headerHeight + footerHeight}px)`
})

</script>

<style scoped>
.dialog {
  @apply h-full;
  width: 280px;
}
.dialog-header {
  @apply block w-full;
}
.dialog-content {
  @apply block w-full overflow-y-auto overflow-x-hidden;
}
.dialog-footer {
  @apply block w-full;
}

.nav-item {
  @apply block w-full p-4;
}

.nav-item::before {
  content: "";
  @apply absolute top-0 left-0 w-[4px] h-full rounded-full bg-purple-500 opacity-0 transition-opacity duration-300;
}

.nav-item--active::before {
  @apply opacity-100;
}

</style>
