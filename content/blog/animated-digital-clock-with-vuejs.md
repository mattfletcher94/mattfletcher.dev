---
title: Animated Digital Clock with Vue 3
description: Learn how to create an animated digital clock widget with Vue 3 and TailwindCSS.
keywords: Vuejs, Animation, Clock, Widget, Transition Component, Tutorial
image: /images/blog-animated-digital-clock.webp
date: '4'
type: Tutorial
tags:
- Tutorial
- UI/UX
- Vue.js
---
# Creating an Animated Digital Clock Widget with Vue 3 and TailwindCSS

*Note: This tutorial is part of my instagram series.* 

<a href="https://www.instagram.com/p/CeT3p4LjBfo/?utm_source=ig_web_copy_link" target="_blank">See instagram post.<a>

In this tutorial you will learn how to create an animated digital clock widget with Vue 3. We will be using the setup script, TypeScript and Tailwind CSS. 

![Animated digital clock with Vue.js](/gif/blog-digital-clock.gif)

## Vue Digital Clock Component

This component is actually very simple. All we do is create a reactive date object with the 'ref' function, and update it every second with the setInterval function. Next, we have some useful computed functions which return the hours, minutes and seconds of the current datetime. The padStart function ensure there will always be at least two digits in our units. This means that rather than rendering the second unit as '1' second, we render it as '01'.

```html
<script lang="ts" setup>
import { computed, ref } from 'vue'
import DigitalClockDigit from '~/components/DigitalClockDigit.vue'

// Create reactive date object
const time = ref(new Date())

// Set interval every second
setInterval(() => {
  time.value = new Date()
}, 1000)

// Computed functions to get units
const getSeconds = computed(() =>
  time.value.getSeconds().toString().padStart(2, '0'),
)
const getMinutes = computed(() =>
  time.value.getMinutes().toString().padStart(2, '0'),
)
const getHours = computed(() =>
  time.value.getHours().toString().padStart(2, '0'),
)
</script>

<template>
  <section class="clock mt-12">
    <div class="clock__col">
      <DigitalClockDigit :value="getHours" />
      <div class="clock__unit">
        Hours
      </div>
    </div>
    <div class="clock__col">
      <DigitalClockDigit :value="getMinutes" />
      <div class="clock__unit">
        Minutes
      </div>
    </div>
    <div class="clock__col">
      <DigitalClockDigit :value="getSeconds" />
      <div class="clock__unit">
        Seconds
      </div>
    </div>
  </section>
</template>

<style>
.clock {
  @apply
    relative grid grid-cols-3 gap-2 bg-gray-900 p-8;
}
.clock__col {
  @apply
    flex flex-col items-center justify-center
    bg-gray-700 border border-gray-600 rounded-xl py-4;
}
.clock__unit {
  @apply
    text-gray-400 uppercase text-xs font-black mt-1;
}
</style>
```

## Vue Digit Component

It made sense to extract the unit part of the digital clock out into it's own component. This component takes in a prop of value, which is the value of the unit. Whenever the value changes, the 'change' transition runs. 

```html
<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
})

</script>
<template>
  <div class="clock__digit">
    <Transition mode="out-in" name="change">
      <div :key="props.value.charAt(0)">{{ props.value.charAt(0) }}</div>
    </Transition>
    <Transition mode="out-in" name="change">
      <div :key="props.value.charAt(1)">{{ props.value.charAt(1) }}</div>
    </Transition>
  </div>
</template>
<style scoped>
.clock__digit {
  @apply text-4xl font-black text-gray-100;
}
.clock__digit > div {
  @apply relative inline-block align-top;
}
.change-leave-active,
.change-enter-active {
  transition: all 200ms ease;
}
.change-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}
.change-leave-to {
  transform: translateY(12px);
  opacity: 0;
}
</style>
```