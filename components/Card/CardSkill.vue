<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  rating: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div
    class="card-skill bg-theme-surface-1 rounded-3xl p-6 overflow-hidden"
  >
    <div class="block text-center">
      <slot name="icon" />
    </div>
    <div class="block text-center mt-4">
      <div class="prosey">
        <h3 class="mb-1 font-black">
          {{ props.title }}
        </h3>
        <p class="text-theme-foreground-1 text-sm font-bold min-h-0 xs:min-h-[40px]">
          {{ props.subtitle }}
        </p>
      </div>
    </div>
    <div class="block max-w-[160px] mx-auto mt-6">
      <div class="flex w-full  items-center" title="Competency level">
        <div class="w-full h-6 rounded-full bg-slate-300">
          <div
            class="w-full h-full rounded-full"
            :class="{
              'bg-amber-500': props.rating === 1,
              'bg-yellow-400': props.rating === 2,
              'bg-emerald-500': props.rating === 3,
              'bg-gradient-to-r from-lime-400 to-teal-500': props.rating === 4,
              'bg-gradient-to-r from-indigo-400 to-blue-600': props.rating === 5,
            }"
            :style="{
              width: `${props.rating * 20}%`,
            }"
          >
            <p class="absolute inset-0 mt-1 text-center text-xs font-black text-white">
              <template v-if="props.rating === 5">
                EXCELLENT
              </template>
              <template v-if="props.rating === 4">
                GOOD
              </template>
              <template v-if="props.rating === 3">
                LEARNING
              </template>
              <template v-if="props.rating === 2">
                Working on it
              </template>
              <template v-if="props.rating === 1">
                Keep going!
              </template>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

