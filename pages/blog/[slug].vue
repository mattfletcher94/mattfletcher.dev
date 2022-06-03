<script setup lang="ts">
import type { Post } from '~~/models/Post'
import IconArrowRight from '~~/components/Icon/IconArrowRight.vue'
const { fullPath, path, params } = useRoute()

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

const post = data.value.post
const prev = data.value.surrounds[0]
const next = data.value.surrounds[1]

definePageMeta({
  layout: 'main',
})

useSiteHead({
  title: post.title,
  meta: [
    { name: 'description', content: post.description },
    { name: 'keywords', content: post.keywords },
  ],
})

useProgressDone()
</script>

<template>
  <div class="container mt-12">
    <div class="max-w-4xl mx-auto">
      <div v-if="post.banner" class="block aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          class="h-full w-full object-center object-cover rounded-lg"
          :src="post.banner"
          :alt="post.title"
          loading="lazy"
        >
      </div>
      <div class="prosey-md text-left mt-6">
        <router-link to="/blog" class="inline-block align-middle mb-6 no-underline font-bold text-theme-foreground-1 hover:text-primary-500 focus:text-primary-500">
          <IconArrowLeft class="mr-1 w-5 h-5" />
          Back to blog
        </router-link>
        <ContentRenderer :value="post" />
      </div>
      <div class="block mt-6 md:mt-12">
        <div class="grid grid-cols-2 gap-6">
          <div>
            <router-link v-if="prev" :to="prev._path" class="block h-full  bg-theme-surface-1 text-theme-foreground-1 rounded-lg p-4 text-left transition-colors">
              <div class="md:flex items-center gap-6">
                <div class="md:order-2">
                  <div class="prosey">
                    <h4 class="font-bold">
                      {{ prev.title }}
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
            <router-link v-if="next" :to="next._path" class="block h-full bg-theme-surface-1 text-theme-foreground-1 rounded-lg p-4 text-right md:text-left transition-colors">
              <div class="md:flex items-center gap-6">
                <div>
                  <div class="prosey">
                    <h4 class="font-bold">
                      {{ next.title }}
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
