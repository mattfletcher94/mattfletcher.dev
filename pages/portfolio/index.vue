<script setup lang="ts">
import type { Project } from '~~/models/Project'

definePageMeta({
  layout: 'main',
})

useSiteHead({
  title: 'Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio description' },
    { name: 'keywords', content: 'Portfolio' },
  ],
})

const { data, error, refresh } = await useAsyncData('getPortfolioPageData', async (ctx) => {
  const [portfolio] = await Promise.all([
    queryContent<Project>('portfolio').sort({ date: -1 }).find(),
  ])

  return {
    projects: portfolio.map(project => ({
      ...project,
      path: project._path,
    })),
  }
})
</script>

<template>
  <div class="container mt-12">
    <div class="prosey text-center max-w-3xl mx-auto">
      <h1 class="font-black">
        My Portfolio
      </h1>
      <p>
        Please feel free to browse some projects I have worked on in my spare time or projects that I was
        proud of while studying Computer Science at University. It's obvious that I am a HUGE fan of Vue.js and
        use it whenever I have the opportunity to.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
      <CardProject
        v-for="project in data?.projects"
        :key="project.path"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :slug="project._path"
        :type="project.type"
        :tags="project.tags"
      />
    </div>
  </div>
</template>
