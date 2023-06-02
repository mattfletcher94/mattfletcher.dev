<script setup lang="ts">
import type { Post } from '~/models/Post'
import type { Project } from '~~/models/Project'

definePageMeta({
  layout: 'main',
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

const { data } = await useAsyncData('front-page-data', async (ctx) => {
  const [skills, portfolio, posts] = await Promise.all([
    import('~/assets/data/skills.json'),
    queryContent<Project>('portfolio').sort({ date: -1 }).find(),
    queryContent<Post>('blog').limit(3).sort({ date: -1 }).find(),
  ])

  return {
    skills: skills.default,
    portfolio: portfolio.map(project => ({
      ...project,
      path: project._path,
    })),
    posts: posts.map(post => ({
      ...post,
      path: post._path,
    })),
  }
})
</script>

<template>
  <div>
    <HomeBannerSection />
    <HomeSkillsSection
      :skills="data?.skills || []"
    />
    <HomePortfolioSection
      :projects="data?.portfolio || []"
    />
    <HomeBlogSection
      :posts="data?.posts || []"
    />
  </div>
</template>
