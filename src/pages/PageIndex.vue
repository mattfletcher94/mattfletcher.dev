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
  <div id="section-contact" ref="sectionContact">
    <HomeContactSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHead } from '@vueuse/head'
import { useUiStore } from '../stores/ui'

const uiStore = useUiStore()

const sectionAbout = ref<HTMLElement>()
const sectionSkills = ref<HTMLElement>()
const sectionProjects = ref<HTMLElement>()
const sectionExperience = ref<HTMLElement>()
const sectionContact = ref<HTMLElement>()

onMounted(() => {
  if (!sectionSkills.value || !sectionProjects.value || !sectionExperience.value || !sectionAbout.value || !sectionContact.value)
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
  observer.observe(sectionContact.value)
})

useHead({
  title: 'Matt Fletcher - Full Stack Developer based in Plymouth, UK.',
  meta: [
    {
      name: 'description',
      content: 'self-motivated full-stack developer with a passion for building web applications, with a strong emphasis on Vue, React, Express and MongoDB',
    },
    {
      name: 'keywords',
      contenet: 'Matt Fletcher, Full Stack Developer, Plymouth, Vue.js, Portfolio',
    },
    {
      name: 'author',
      content: 'Matt Fletcher',
    },
  ],
})

</script>
