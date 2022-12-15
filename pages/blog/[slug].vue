<script setup lang="ts">
import type { Post } from '~~/models/Post'
import IconArrowRight from '~~/components/Icon/IconArrowRight.vue'
const { fullPath } = useRoute()

const { data } = await useAsyncData(fullPath, async () => {
  return Promise.all([
    queryContent<Post>(fullPath).findOne(),
    queryContent('blog').findSurround(fullPath),
  ]).then(([post, surrounds]) => {
    return Promise.resolve({
      post,
      surrounds,
    })
  })
})

definePageMeta({
  layout: 'main',
})

useSiteHead({
  title: data.value?.post.title,
  meta: [
    { name: 'description', content: data.value?.post.description },
    { name: 'keywords', content: data.value?.post.keywords },
  ],
})

useProgressDone()
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
            <router-link v-if="data.surrounds[0] && data.surrounds[0]._path" :to="data.surrounds[0]._path" class="block h-full  bg-theme-surface-1 text-theme-foreground-1 rounded-lg p-4 text-left transition-colors">
              <div class="md:flex items-center gap-6">
                <div class="md:order-2">
                  <div class="prosey">
                    <h4 class="font-bold">
                      {{ data.surrounds[0].title }}
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
            <router-link v-if="data.surrounds[1] && data.surrounds[1]._path" :to="data.surrounds[1]._path" class="block h-full bg-theme-surface-1 text-theme-foreground-1 rounded-lg p-4 text-right md:text-left transition-colors">
              <div class="md:flex items-center gap-6">
                <div>
                  <div class="prosey">
                    <h4 class="font-bold">
                      {{ data.surrounds[1].title }}
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
