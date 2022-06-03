<script setup lang="ts">
import type { Post } from '~~/models/Post'

definePageMeta({
  layout: 'main',
})

const { data, error, refresh } = await useAsyncData('getBlogPageData', async (ctx) => {
  return Promise.all([
    queryContent<Post>('blog')
      .sort({ date: -1 })
      .only(['title', 'image', 'type', 'tags', '_path'])
      .find(),
  ]).then(([posts]) => {
    return Promise.resolve({
      posts,
    })
  })
})

useSiteHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'Blog description' },
    { name: 'keywords', content: 'Blog' },
  ],
})

useProgressDone()
</script>

<template>
  <div class="container mt-12">
    <div class="prosey text-center max-w-3xl mx-auto">
      <h1 class="font-black">
        My Blog
      </h1>
      <p>
        Sometimes I write tutorials and articles about full stack development.
        Lately I have been posting web development related content on my
        <a href="https://instagram.com/mattfletcher.dev" target="_blank" aria-label="Instagram">Instagram page</a>
        with a link to these blog posts for short and snappy tutorials.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8">
      <CardPost
        v-for="post in data.posts"
        :key="post.slug"
        :title="post.title"
        :image="post.image"
        :type="post.type"
        :tags="post.tags"
        :slug="post._path"
        class="w-full max-w-lg md:max-w-none mx-auto"
      />
    </div>
  </div>
</template>
