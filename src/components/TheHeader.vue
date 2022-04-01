<template>
  <header
    class="fixed top-0 left-0 w-full bg-white z-[1000] backdrop-blur bg-opacity-90 transition-shadow ease-in-out duration-300"
    :class="{
      'shadow-md': scrollY > 0
    }"
  >
    <div class="container h-16">
      <div class="flex items-center justify-between h-full">
        <div class="flex items-center space-x-4">
          <button
            aria-label="Open Menu"
            class="flex md:hidden items-center w-8 h-8 rounded-full focus-within:bg-black focus-within:text-white transition-colors"
            @click="isMobileMenuOpen = true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </button>
          <router-link class="nav-item" to="#section-about" aria-label="About section">
            <img :src="assetAvatar" width="30" height="30" alt="Matt Fletcher Avatar" class="inline-block mr-2">
            <Text weight="600">
              Matt Fletcher
            </Text>
          </router-link>
        </div>
        <div class="hidden md:flex">
          <div ref="navSlider" class="nav-slider" />
          <div class="flex items-center space-x-6">
            <router-link
              ref="sectionSkillsLink"
              class="nav-item"
              to="#section-skills"
            >
              <Text weight="600" class="!text-sm">
                Skills
              </Text>
            </router-link>
            <router-link
              ref="sectionExperienceLink"
              class="nav-item"
              to="#section-experience"
            >
              <Text weight="600" class="!text-sm">
                Experience
              </Text>
            </router-link>
            <router-link
              ref="sectionProjectsLink"
              class="nav-item"
              to="#section-projects"
            >
              <Text weight="600" class="!text-sm">
                Projects
              </Text>
            </router-link>

            <router-link
              ref="sectionContactLink"
              class="nav-item"
              to="#section-contact"
            >
              <Text weight="600" class="!text-sm">
                Contact
              </Text>
            </router-link>
            <a href="/matt-fletcher-cv.pdf" download aria-label="Download resume">
              <Button>
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </Button>
            </a>
          </div>
        </div>
        <div class="flex md:hidden">
          <a href="/matt-fletcher-cv.pdf" download aria-label="Download resume">
            <Button>
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </Button>
          </a>
        </div>
      </div>
    </div>
    <MobileMenu
      :open="isMobileMenuOpen"
      @close="isMobileMenuOpen = false"
    />
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { useUiStore } from '../stores/ui'
import assetAvatar from '../assets/avatar.png?w=300&h=300&webp&imagetools'

const uiStore = useUiStore()

const isMobileMenuOpen = ref(false)
const navSlider = ref<null | HTMLElement>(null)
const sectionSkillsLink = ref<null | any>(null)
const sectionProjectsLink = ref<null | any>(null)
const sectionExperienceLink = ref<null | any>(null)
const sectionContactLink = ref<null | any>(null)

function handleScrollSpyChange(scrollSpyActiveID: string | null) {
  if (!scrollSpyActiveID || !navSlider.value || !sectionSkillsLink.value || !sectionProjectsLink.value || !sectionExperienceLink.value)
    return

  let navItem = null

  if (scrollSpyActiveID === 'section-skills')
    navItem = sectionSkillsLink.value
  else if (scrollSpyActiveID === 'section-projects')
    navItem = sectionProjectsLink.value
  else if (scrollSpyActiveID === 'section-experience')
    navItem = sectionExperienceLink.value
  else if (scrollSpyActiveID === 'section-contact')
    navItem = sectionContactLink.value

  if (!navItem || !navItem.$el) {
    navSlider.value.style.opacity = '0'
    return
  }

  const left = navItem.$el.offsetLeft
  const width = navItem.$el.offsetWidth

  navSlider.value.style.transform = `translateX(${left}px)`
  navSlider.value.style.width = `${width}px`
  navSlider.value.style.opacity = '1'
}

uiStore.$subscribe((_, state) => {
  handleScrollSpyChange(state.scrollSpyActiveID)
})

handleScrollSpyChange(uiStore.scrollSpyActiveID)

const { y: scrollY } = useWindowScroll()

</script>

<style scoped>
.nav-item {
  @apply flex items-center transition-opacity duration-300;
}

.nav-item:hover {
  @apply opacity-70;
}

.nav-menu-btn {
  @apply flex items-center justify-center w-10 h-10 rounded-full;
  cursor: pointer;
  transition: all ease-in-out 200ms;
}
.nav-menu-btn:hover,
.nav-menu-btn:focus-within {
  @apply  bg-black text-white;
}

.nav-slider {
  @apply absolute w-0 left-0 bottom-0 h-1 bg-primary-500 rounded-full transition-all ease-in-out opacity-0;
  transition-duration: 500ms;
  transform-origin: center;
}

</style>
