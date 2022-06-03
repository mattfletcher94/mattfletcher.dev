<script lang="ts" setup>
const navigation = ref([
  {
    name: 'Portfolio',
    path: '/portfolio/',
  },
  {
    name: 'Blog',
    path: '/blog/',
  },
  {
    name: 'Contact',
    path: '/contact/',
  },
])

const route = useRoute()

const colorMode = useColorMode()

const darkModeEnabled = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(val: boolean) {
    colorMode.preference = val ? 'dark' : 'light'
  },
})

const toggleDarkMode = () => {
  if (colorMode.preference !== 'dark')
    colorMode.preference = 'dark'

  else
    colorMode.preference = 'light'
}

const isMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 left-0 w-full bg-theme-surface-0 z-50 text-base font-semibold text-theme-foreground-0 border-b border-b-theme-surface-1">
    <div class="container h-16">
      <div class="flex items-center justify-between h-full">
        <div class="flex items-center space-x-4">
          <router-link
            class="transition-opacity duration-300 hover:opacity-70 !outline-none"
            to="/"
            aria-label="Home Page"
          >
            <img
              src="/images/avatar.webp"
              alt="Matt Fletcher Avatar"
              class="inline-block mr-2 w-8 h-8"
            >
            mattfletcher.dev
          </router-link>
        </div>
        <div>
          <div class="hidden md:flex items-center gap-6">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.path"
              class="nav-item flex items-center transition-opacity duration-300 hover:opacity-70 !outline-none"
              :class="route.fullPath.includes(item.path) ? 'nav-item-active' : ''"
            >
              {{ item.name }}
            </router-link>
            <a class="btn btn--primary py-1.5" href="/matt-fletcher-cv.pdf" download aria-label="Download resume">
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
            <div>
              <div class="w-9 h-9 flex-items-center justify-center rounded-full bg-theme-surface-1">
                <ClientOnly>
                  <button
                    class="flex-items-center justify-center h-9 w-9 outline-none"
                    type="button"
                    title="Toggle dark mode"
                    @click="toggleDarkMode"
                  >
                    <svg v-if="darkModeEnabled" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                    <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" /></svg>
                  </button>
                </ClientOnly>
              </div>
            </div>
          </div>
          <button class="block md:hidden rounded-full w-12 h-12 hover:bg-theme-surface-1 transition-all" aria-label="Open menu" type="button" @click="isMenuOpen = !isMenuOpen">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w5-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <TheMenu
      :open="isMenuOpen"
      @close="isMenuOpen = false"
    />
  </header>
</template>

<style scoped>
.nav-item::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-500);
  opacity: 0;
  transition: opacity 300ms ease;
}
.nav-item-active::after {
  opacity: 1;
}
</style>
