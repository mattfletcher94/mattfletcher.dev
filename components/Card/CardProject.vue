<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
  image: string
  slug: string
  type: string
  tags: string[]
}>()
</script>

<template>
  <div class="block">
    <div class="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden bg-gray-900">
      <router-link :to="props.slug" :title="props.title">
        <img
          class="relative block w-full h-full object-center object-cover opacity-100"
          :src="props.image"
          :alt="props.title"
          loading="lazy"
        >
        <div class="absolute inset-0 bg-gray-900 bg-opacity-30" />
      </router-link>
    </div>
    <div class="block mt-6">
      <div class="prosey text-center mx-auto">
        <h4 class="font-bold text-sm mb-1">
          <div class="block text-xs font-bold text-white">
            <div
              v-for="tag in props.tags"
              :key="tag"
              class="inline-block align-top rounded-lg mr-1 mb-1 text-white/90"
            >
              #{{ tag }}
            </div>
          </div>
        </h4>
        <h3 class="font-black">
          {{ props.title }}
        </h3>
        <p>
          {{ props.description }}
        </p>
        <router-link class="btn btn--primary" :to="props.slug" :title="props.title">
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>
