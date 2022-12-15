<script setup lang="ts">
import type { Post } from '~/models/Post'
import type { Project } from '~~/models/Project'

definePageMeta({
  layout: 'main',
})

const { data } = await useAsyncData('getFrontPageData', async (ctx) => {
  return Promise.all([
    import('~/assets/data/skills.json'),
    queryContent<Post>('blog').limit(3).sort({ date: -1 }).only(['title', 'image', 'type', 'tags', '_path']).find(),
    queryContent<Project>('portfolio').sort({ date: -1 }).only(['title', 'image', 'type', 'type', 'description', 'tags', '_path']).find(),
  ]).then(([skills, posts, projects]) => {
    return Promise.resolve({
      skills: skills.default,
      posts,
      projects,
    })
  })
})

useSiteHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'self-motivated full-stack developer with a passion for building web applications, with a strong emphasis on Vue, React, Node.js and DB development',
    },
    {
      name: 'keywords',
      content: 'Matt Fletcher, Full Stack Developer, Hampshire, Vue.js, Portfolio',
    },
  ],
})

useProgressDone()
</script>

<template>
  <div>
    <HomeBannerSection />
    <HomeSkillsSection
      :skills="data?.skills || []"
    />
    <HomePortfolioSection
      :projects="data?.projects || []"
    />
    <HomeBlogSection
      :posts="data?.posts || []"
    />
  </div>
</template>
