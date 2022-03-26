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
        <div class="dialog-wrapper">
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
            enter-from="opacity-0 translate-y-2/4 md:translate-y-0 md:scale-95"
            enter-to="opacity-100 translate-y-0"
            leave="duration-300 ease-in-out"
            leave-from="opacity-100 translate-y-0"
            leave-to="opacity-0 translate-y-2/4 md:translate-y-0 md:scale-95"
          >
            <div
              class="dialog"
              :style="{ maxWidth: props.width }"
            >
              <div v-if="$slots.header" ref="dialogHeader" class="dialog-header">
                <slot name="header" />
              </div>
              <div v-if="$slots.content" ref="dialogContent" class="dialog-content" :style="{ maxHeight: contentHeight }">
                <slot name="content" />
              </div>
              <div v-if="$slots.footer" ref="dialogFooter" class="dialog-footer">
                <slot name="footer" />
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

// Props
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: '600px',
  },
  closeable: {
    type: Boolean,
    default: true,
  },
})

// Emit
const emit = defineEmits<{
  (event: 'close'): void
  (event: 'update:open', isOpen: boolean): void
}>()

// Handle close
const handleClose = () => {
  if (!props.closeable)
    return
  emit('close')
}

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
.dialog-wrapper {
  @apply flex md:items-center items-end h-full w-full pt-12 md:p-6;
}

.dialog {
  @apply w-full mx-auto h-full;
  @apply bg-white rounded-b-none rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden ring-1 ring-black ring-opacity-5;
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
</style>
