<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Skill } from '~/models/Skill'

const props = defineProps({
  skills: {
    type: Array as PropType<Skill[]>,
    required: true,
  },
})
</script>

<template>
  <div v-once class="relative block w-full bg-theme-surface-0 mt-20">
    <div class="absolute top-0 left-0 w-full h-full bg-theme-surface-0" />
    <div class="container">
      <div class="prosey-lg text-center max-w-3xl mx-auto">
        <h2 class="font-black text-primary-500">
          <span class="text-gradient" style="font-size: 0.9em;">My Skills.</span>
          <br>
          <span class="text-theme-foreground-0">
            What I'm great at.
          </span>
        </h2>
      </div>
      <div class="grid grid-cols-1 gap-4 xs:grid-cols-2 xs:gap-4 lg:grid-cols-4 lg:gap-6 mt-8">
        <CardSkill
          v-for="skill in skills"
          :key="skill.title"
          :title="skill.title"
          :subtitle="skill.subtitle"
          :rating="skill.rating"
        >
          <template #icon>
            <IconVue v-if="skill.title === 'Vue.js'" class="w-auto h-8" />
            <IconReact v-if="skill.title === 'React'" class="w-auto h-8" />
            <IconWordpress v-if="skill.title === 'Wordpress'" class="w-auto h-8 dark:bg-gray-100 dark:rounded-lg dark:p-1" />
            <IconCSS v-if="skill.title === 'CSS'" class="w-auto h-8" />
            <IconNodejs v-if="skill.title === 'Node.js'" class="w-auto h-8" />
            <IconMongoDB v-if="skill.title === 'DB / API'" class="w-auto h-8" />
            <IconSupabase v-if="skill.title === 'Supabase'" class="w-auto h-8" />
            <IconFigma v-if="skill.title === 'UI / UX'" class="w-auto h-8" />
          </template>
        </CardSkill>
      </div>
      <div class="mt-12 text-center">
        <a class="btn btn--primary" href="/matt-fletcher-cv.pdf" download aria-label="Download resume">
          Download Resume
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
