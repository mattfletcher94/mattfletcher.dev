<script setup lang="ts">
import type { Post } from '~~/models/Post'
import IconArrowRight from '~~/components/Icon/IconArrowRight.vue'
const { fullPath } = useRoute()

definePageMeta({
  layout: 'main',
})

const { data } = await useAsyncData(fullPath, async () => {
  const [post, surrounds] = await Promise.all([
    queryContent<Post>(fullPath).findOne(),
    queryContent<Post>('blog').sort({ date: -1 }).findSurround(fullPath),
  ])

  return {
    post: {
      ...post,
      path: post._path,
    },
    surrounds: {
      prev: surrounds[0] ? { ...surrounds[0], path: surrounds[0]._path } : null,
      next: surrounds[1] ? { ...surrounds[1], path: surrounds[1]._path } : null,
    },
  }
})

useSiteHead({
  title: data.value?.post.title,
  meta: [
    { name: 'description', content: data.value?.post.description },
    { name: 'keywords', content: data.value?.post.keywords },
  ],
})
</script>

<template>
  <div v-if="data" class="container mt-12">
    <div class="max-w-4xl mx-auto">
      <div v-if="data.post.banner" class="block aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          class="h-full w-full object-center object-cover rounded-lg"
          :src="data.post.banner"
          :alt="data.post.title"
          loading="lazy"
        >
      </div>
      <div class="prosey-md text-left mt-6">
        <router-link to="/blog" class="inline-block align-middle mb-6 no-underline font-bold text-theme-foreground-1 hover:text-primary-500 focus:text-primary-500">
          <IconArrowLeft class="mr-1 w-5 h-5" />
          Back to blog
        </router-link>
        <ContentRenderer :value="data.post" />
      </div>
      <div class="block mt-6 md:mt-12">
        <div class="grid grid-cols-2 gap-6">
          <div>
            <router-link v-if="data.surrounds.prev" :to="data.surrounds.prev._path" class="block h-full  bg-theme-surface-1 text-theme-foreground-1 rounded-lg p-4 text-left transition-colors">
              <div class="md:flex items-center gap-6">
                <div class="md:order-2">
                  <div class="prosey">
                    <h4 class="font-bold">
                      {{ data.surrounds.prev.title }}
                    </h4>
                  </div>
                </div>
                <div class="md:order-1">
                  <IconArrowLeft class="h-6 w-6" />
                </div>
              </div>
            </router-link>
          </div>
          <div>
            <router-link v-if="data.surrounds.next" :to="data.surrounds.next._path" class="block h-full bg-theme-surface-1 text-theme-foreground-1 rounded-lg p-4 text-right md:text-left transition-colors">
              <div class="md:flex items-center gap-6">
                <div>
                  <div class="prosey">
                    <h4 class="font-bold">
                      {{ data.surrounds.next.title }}
                    </h4>
                  </div>
                </div>
                <div class="ml-auto">
                  <IconArrowRight class="h-6 w-6" />
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
