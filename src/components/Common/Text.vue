<template>
  <component
    :is="props.as"
    :class="[
      'text',
      `text--${props.type}`,
      `text--weight-${props.weight}`,
      props.muted ? 'text--muted' : ''
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<'body' | 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4' | 'heading-5' | 'small'>,
    default: 'body',
  },
  weight: {
    type: String as PropType<'300' | '400' | '600' | '700'>,
    default: '400',
  },
  as: {
    type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'div' | 'span'>,
    default: 'p',
  },
  muted: {
    type: Boolean,
    default: false,
  },
})

</script>

<style scoped>
.text {
  position: relative;
}

.text--heading-1 {
  font-size: 3.052rem;
  line-height: 1.3;

}

.text--heading-2 {
  font-size: 2.441rem;
  line-height: 1.3;
}

.text--heading-3 {
  font-size: 1.953rem;
  line-height: 1.3;
}

.text--heading-4 {
  font-size: 1.563rem;
  line-height: 1.3;
}

.text--heading-5 {
  font-size: 1.25rem;
  line-height: 1.3;
}

.text--body {
  font-size: 1rem;
  line-height: 1.75;
}

.text--small {
  font-size: 0.8rem;
  line-height: 1.75;
}

.text--weight-300 {
  font-weight: 300;
}

.text--weight-400 {
  font-weight: 400;
}

.text--weight-600 {
  font-weight: 600;
}

.text--weight-700 {
  font-weight: 700;
}

.text--muted {
  color: #6f6f6f;
}

</style>
