<template>
  <button
    :class="{
      'button text-center transition-all duration-200 cursor-pointer rounded-full': true,
      'text-white bg-purple-500 hover:bg-purple-600 focus:bg-purple-600': props.variant === 'primary',
      'text-white bg-black hover:bg-gray-900 focus:bg-gray-900': props.variant === 'secondary',

      'text-purple-500 bg-transparent border-2 border-purple-500 hover:bg-purple-500 focus:bg-purple-500 hover:text-white focus:text-white': props.variant === 'primary-outline',
      'text-black bg-transparent border-2 border-black hover:bg-black focus:bg-black hover:text-white focus:text-white': props.variant === 'secondary-outline',

      'px-6 py-2.5': !props.circle,
      'w-10 h-10': props.circle,

      'disabled:opacity-70 disabled:cursor-not-allowed': props.disabled,
    }"
    type="button"
    :disabled="props.disabled"
  >
    <div class="flex justify-center items-center">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<'primary' | 'primary-outline' | 'secondary' | 'secondary-outline'>,
    default: 'primary',
  },
  circle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

</script>

<style scoped>
.button {
  font-size: 0.9rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.6px;
}

</style>
