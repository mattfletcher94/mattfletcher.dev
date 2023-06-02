<script lang="ts" setup>
defineProps<{
  type: string
  date?: string
  title: string
  image: string
  tags: string[]
  slug: string
}>()
</script>

<template>
  <div class="bg-theme-surface-1 rounded-3xl overflow-hidden" :title="title">
    <div class="p-4">
      <div class="aspect-w-12 aspect-h-9 rounded-xl overflow-hidden">
        <img
          class="object-center object-cover "
          :alt="title"
          :src="image"
        >
      </div>
    </div>
    <div class="prosey text-left mt-2 px-6 pb-6">
      <div class="tags text-xs font-bold text-theme-foreground-1 flex gap-2">
        <div
          v-for="tag in tags"
          :key="tag"
        >
          #{{ tag }}
        </div>
      </div>
      <h3 class="font-bold min-h-[64px] mt-4 line-clamp-2">
        {{ title }}
      </h3>
      <router-link class="btn btn--secondary" :to="slug" :title="title">
        Read more <IconArrowRight class="w-4 h-4 ml-2" />
      </router-link>
    </div>
  </div>
</template>
