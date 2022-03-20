<template>
  <div id="section-about" ref="sectionAbout">
    <HomeBannerSection />
  </div>
  <div id="section-skills" ref="sectionSkills">
    <HomeSkillsetSection />
  </div>
  <div id="section-experience" ref="sectionExperience">
    <HomeTimelineSection />
  </div>
  <div id="section-projects" ref="sectionProjects">
    <HomePortfolioSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHead } from '@vueuse/head'
import { useUiStore } from '../stores/ui'

const uiStore = useUiStore()

const sectionAbout = ref<null | HTMLElement>(null)
const sectionSkills = ref<null | HTMLElement>(null)
const sectionProjects = ref<null | HTMLElement>(null)
const sectionExperience = ref<null | HTMLElement>(null)

onMounted(() => {
  if (!sectionSkills.value || !sectionProjects.value || !sectionExperience.value || !sectionAbout.value)
    return

  const observer = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting)
        uiStore.scrollSpyActiveID = entries[i].target.id
    }
  }, {
    rootMargin: '-50% 0px',
  })

  observer.observe(sectionSkills.value)
  observer.observe(sectionProjects.value)
  observer.observe(sectionExperience.value)
  observer.observe(sectionAbout.value)
})

useHead({
  title: 'Matt Fletcher - Developer based in Plymouth, UK.',
  meta: [
    {
      name: 'description',
      content: 'Website description',
    },
  ],
})

</script>
