<script setup lang="ts">
import type { Project } from '~/models/Project'
const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { data } = await useAsyncData(`portfolio-${slug.value}`, async (ctx) => {
  const { fullPath } = useRoute()
  const [project, surrounds] = await Promise.all([
    queryContent<Project>(fullPath).findOne(),
    queryContent<Project>('portfolio').sort({ date: -1 }).findSurround(fullPath),
  ])

  return {
    project: {
      ...project,
      path: project._path,
    },
    surrounds: {
      prev: surrounds[0] ? { ...surrounds[0], path: surrounds[0]._path } : null,
      next: surrounds[1] ? { ...surrounds[1], path: surrounds[1]._path } : null,
    },
  }
}, {
  watch: [() => slug.value],
})

definePageMeta({
  layout: 'main',
})

useSiteHead({
  title: data.value?.project.title,
  meta: [
    { name: 'description', content: data.value?.project.description },
    { name: 'keywords', content: data.value?.project.keywords },
  ],
})
</script>

<template>
  <div v-if="data" class="container mt-12">
    <div class="max-w-4xl mx-auto">
      <div v-if="data.project.banner || data.project.image" class="block aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          class="h-full w-full object-center object-cover rounded-lg"
          :src="data.project.banner ? data.project.banner : data.project.image"
          :alt="data.project.title"
          loading="lazy"
        >
      </div>
      <div class="prosey-md text-left mt-6">
        <router-link to="/portfolio/" class="inline-block align-middle mb-6 no-underline font-bold text-theme-foreground-1 hover:text-primary-500 focus:text-primary-500">
          <IconArrowLeft class="mr-1 w-5 h-5" />
          Back to portfolio
        </router-link>
        <ContentRenderer v-if="data.project" :value="data.project" />
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
