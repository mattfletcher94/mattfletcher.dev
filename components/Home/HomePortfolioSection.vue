<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Project } from '~/models/Project'

const props = defineProps({
  projects: {
    type: Array as PropType<Project[]>,
    required: true,
  },
})
</script>

<template>
  <div v-once class="relative block w-full mt-20 lg:mt-40">
    <div class="container">
      <div class="prosey-lg text-center max-w-3xl mx-auto">
        <h2 class="font-black text-primary-500">
          <span class="text-gradient" style="font-size: 0.9em;">Portfolio.</span>
          <br>
          <span class="text-theme-foreground-0">
            What I do in my spare time.
          </span>
        </h2>
        <router-link class="btn btn--primary" to="/portfolio/">
          See all
          <IconArrowRight class="h-4 w-4 ml-2" />
        </router-link>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3 mt-8">
        <router-link
          v-for="project in projects"
          :key="project._path"
          :to="project._path"
          class="card rounded-2xl bg-theme-surface-1 overflow-hidden"
        >
          <div class="aspect-w-16 aspect-h-16 overflow-hidden bg-gray-900">
            <div>
              <img
                class="img absolute inset-0 w-full h-full object-center object-cover"
                :src="project.image"
                :alt="project.title"
                loading="lazy"
              >
              <div class="overlay-bg absolute inset-0" />
              <div class="overlay-content absolute inset-0 flex items-end w-full h-full p-4">
                <div class="prosey text-left w-full">
                  <div class="block w-full text-xs font-bold text-white">
                    <div
                      v-for="tag in project.tags"
                      :key="tag"
                      class="inline-block align-top rounded-lg mr-1 mb-1 text-white/90"
                    >
                      #{{ tag }}
                    </div>
                  </div>
                  <h3 class="font-black line-clamp-2 mt-1 text-white mb-0">
                    {{ project.title }}
                  </h3>
                </div>
              </div>
              <div class="overlay-content-2 absolute inset-0 flex items-end w-full h-full p-4">
                <div class="prosey text-left w-full">
                  <p class="text-white line-clamp-4">
                    {{ project.description }}
                  </p>
                  <p class="font-bold text-white">
                    Read more <IconArrowRight class="ml-1 h-4 w-5" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay-bg {
  background: linear-gradient(rgba(0,0,0,0), rgba(17, 24, 39, 0.3) 30%, rgba(17, 24, 39, 0.85));
}

.overlay-content {
  opacity: 1;
  transform :translateY(0px);
  transition: all 0.3s ease 0.3s;
}
.overlay-content-2 {
  opacity: 0;
  transform: translateY(-24px);
  transition: all 0.3s ease;
  overflow-x: hidden;
  overflow-y: auto;
}

/** Media query if on touchscreen */
@media (hover: hover) {

  .card:hover .overlay-content,
  .card:focus .overlay-content {
    transition: all 0.3s ease;
    transform: translateY(24px);
    opacity: 0;
  }
  .card:hover .overlay-content-2,
  .card:focus .overlay-content-2 {
    transition: all 0.3s ease 0.3s;
    transform :translateY(0px);
    opacity: 1;
  }
}
</style>
