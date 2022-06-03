<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Post } from '~/models/Post'

defineProps({
  posts: {
    type: Array as PropType<Post[]>,
    required: true,
  },
})
</script>

<template>
  <div v-once class="relative block w-full mt-20 lg:mt-40">
    <div class="container">
      <div class="prosey-lg text-center max-w-3xl mx-auto">
        <h2 class="font-black ">
          <span class="text-gradient" style="font-size: 0.9em;">Latest posts.</span>
          <br>
          <span class="text-theme-foreground-0">
            Sometimes, I write tutorials.
          </span>
        </h2>
        <router-link class="btn btn--primary" to="/blog">
          See all
          <IconArrowRight class="h-4 w-4 ml-2" />
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8">
        <CardPost
          v-for="(post, i) in posts"
          :key="post.slug"
          :title="post.title"
          :image="post.image"
          :type="post.type"
          :tags="post.tags"
          :slug="post._path"
          class="md:block w-full max-w-lg mx-auto"
          :class="{
            hidden: i !== 0,
          }"
        />
      </div>
    </div>
  </div>
</template>

