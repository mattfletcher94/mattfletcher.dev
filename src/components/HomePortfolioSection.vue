<template>
  <div class="relative block w-full bg-white py-12 md:py-20">
    <div class="absolute top-0 left-0 w-full h-2/3" />
    <div class="container">
      <div class="block">
        <div class="prose mx-auto text-center w-full max-w-2xl">
          <Text type="heading-2" as="h2" class="mb-6" weight="700">
            My <span class="text-purple-500">Projects</span>
          </Text>
          <Text type="body" as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </div>
      </div>
    </div>
    <div class="container container-no-padding">
      <div class="block mx-auto">
        <Carousel
          class="home-portfolio-section-carousel mt-6 md:mt-12"
          :settings="carouselSettings"
          :breakpoints="carouselBreakpoints"
        >
          <Slide v-for="project in projectsStore.projects" :key="project.title" class="pb-12">
            <div class="carousel__item rounded-3xl bg-white overflow-hidden">
              <div class="block w-full text-left">
                <div class="block w-full p-6 overflow-hidden">
                  <img
                    class="absolute inset-0 w-full h-full object-center object-cover blur-3xl"
                    :src="project.image"
                    :alt="project.title"
                    loading="lazy"
                  >
                  <img
                    class="rounded-lg block mx-auto object-cover object-center z-10 shadow-2xl"
                    :src="project.image"
                    :alt="project.title"
                    loading="lazy"
                    :style="{
                      height: '200px',
                      width: '200px',
                    }"
                  >
                </div>
              </div>
              <div class="block w-full p-8">
                <div class="prose text-left">
                  <Text
                    class="md:line-clamp-1"
                    type="heading-5"
                    weight="600"
                    as="h3"
                  >
                    {{ project.title }}
                  </Text>
                  <Text
                    class="line-clamp-2"
                    type="body"
                    as="p"
                    muted
                  >
                    {{ project.description }}
                  </Text>
                  <div class="block mt-2 mb-6">
                    <div class="flex items-center space-x-2 overflow-hidden">
                      <div
                        v-for="tag in project.tags"
                        :key="tag"
                      >
                        <div class="flex items-center py-0.5 px-2 rounded-full bg-gray-100 whitespace-nowrap" :title="tag">
                          <Text type="small" as="span" weight="600">
                            {{ tag }}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div class="absolute right-0 top-0 h-full bg-gradient-to-r from-transparent to-white w-8 pointer-events-none" />
                  </div>
                  <Button variant="secondary" class="w-full">
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// @ts-expect-error Doesn't include the type
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { useProjectsStore } from '../stores/projects'

const projectsStore = useProjectsStore()

const carouselSettings = ref({
  itemsToShow: 1.2,
  wrapAround: true,
})

const carouselBreakpoints = ref({
  768: {
    itemsToShow: 2.8,
    wrapAround: true,
  },
})

</script>

<style>
.home-portfolio-section-carousel .carousel__slide > .carousel__item {
  @apply block w-full ;
  transform: scale(1);
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
}
.home-portfolio-section-carousel .carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.home-portfolio-section-carousel .carousel__slide--next > .carousel__item {
  transform: scale(0.8);
  @apply shadow-md;
}
.home-portfolio-section-carousel .carousel__slide--prev > .carousel__item {
  transform: scale(0.8);
  @apply shadow-md;
}
.home-portfolio-section-carousel .carousel__slide--active > .carousel__item {
  transform: scale(1);
  @apply shadow-xl;
}

/* Breakpoint below 768px */
@media (max-width: 768px) {
  .home-portfolio-section-carousel .carousel__slide--next > .carousel__item {
    transform: scale(0.95);
  }
  .home-portfolio-section-carousel .carousel__slide--prev > .carousel__item {
    transform: scale(0.95);
  }

  .container-no-padding {
    @apply !px-0;
  }
}

.home-portfolio-section-carousel .carousel__pagination {
  @apply absolute bottom-0 left-0 right-0 h-2 items-center;
}

.home-portfolio-section-carousel .carousel__pagination-item {
  @apply align-top;
}

.home-portfolio-section-carousel .carousel__pagination-button {
  @apply my-0 mx-1 w-2.5 h-2.5 rounded-full bg-black bg-opacity-40 transition-all ease-in-out duration-300;
}

.home-portfolio-section-carousel  .carousel__pagination-button--active {
  @apply bg-opacity-100 w-2.5;
}

.home-portfolio-section-carousel .carousel__next,
.home-portfolio-section-carousel .carousel__prev {
  @apply
    absolute
    w-12
    h-12
    rounded-full
    bg-gray-100
    text-black
    shadow-lg
    hover:bg-gray-900
    focus:bg-gray-900
    transition-all
    duration-300;
  transform: translate(-50%, -50%);
}

.home-portfolio-section-carousel .carousel__prev {
  transform: translate(50%, -50%);
}
</style>
