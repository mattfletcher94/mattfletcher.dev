<template>
  <div class="relative block w-full mt-20">
    <div class="block">
      <div class="absolute top-0 left-0 w-2/3 h-full bg-gray-50" />
      <div ref="container" class="container py-20">
        <div class="prose text-left">
          <Text type="heading-2" as="h3" class="mb-6 ">
            Work
            <span class="text-purple-500">Experience</span>
            <span class="hidden md:inline"> and <br></span>
            <span class="inline md:hidden"> / </span>
            Acamdemic
            <span class="text-purple-500">Achievements</span>
          </Text>
        </div>
        <div
          class="block"
          :style="{
            width: `calc(100vw - ${containerLeft}px)`,
          }"
        >
          <ul
            class="flex w-full mt-2 md:mt-12"
          >
            <li class="timeline-card z-10">
              <div class="flex flex-col justify-between h-full ">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span">
                      July 2022 -> present
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      Full time Developer at Pitched
                    </Text>
                  </div>
                </div>
                <div>
                  <Button
                    variant="secondary"
                    class="py-1.5 px-2 !text-xs !bg-transparent text-black !font-bold"
                    @click="isOpen = true"
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </li>
            <li class="timeline-arrow">
              <div class="flex h-full items-center">
                <svg class="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" /></svg>
              </div>
            </li>
            <li class="timeline-card">
              <div class="flex flex-col justify-between h-full">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span" muted>
                      September 2021
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      Graduated from Plymouth University with a First Class Honours
                    </Text>
                  </div>
                </div>
                <div>
                  <Button
                    variant="secondary"
                    class="py-1.5 px-2 !text-xs !bg-transparent text-black !font-bold"
                    @click="isOpen = true"
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </li>
            <li class="timeline-arrow">
              <div class="flex h-full items-center">
                <svg class="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" /></svg>
              </div>
            </li>
            <li class="timeline-card">
              <div class="flex flex-col justify-between h-full">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span" muted>
                      July 2020
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      Completed 1 year work placement at Pitched
                    </Text>
                  </div>
                </div>
                <div>
                  <Button
                    variant="secondary"
                    class="py-1.5 px-2 !text-xs !bg-transparent text-black !font-bold"
                    @click="isOpen = true"
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </li>

            <li class="timeline-arrow">
              <div class="flex h-full items-center">
                <svg class="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" /></svg>
              </div>
            </li>
            <li class="timeline-card">
              <div class="flex flex-col justify-between h-full">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span" muted>
                      September 2018
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      Began pursuing a Computer Science degree at Plymouth University
                    </Text>
                  </div>
                </div>
                <div>
                  <Button
                    variant="secondary"
                    class="py-1.5 px-2 !text-xs !bg-transparent text-black !font-bold"
                    @click="isOpen = true"
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </li>

            <li class="timeline-arrow">
              <div class="flex h-full items-center">
                <svg class="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" /></svg>
              </div>
            </li>
            <li class="timeline-card">
              <div class="flex flex-col justify-between h-full">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span" muted>
                      April 2016
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      My Developer journey began
                    </Text>
                  </div>
                </div>
                <div>
                  <Button
                    variant="secondary"
                    class="py-1.5 px-2 !text-xs !bg-transparent text-black !font-bold"
                    @click="isOpen = true"
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <BottomSheet :open="isOpen" @close="isOpen = false">
      <template #content>
        <div class="p-8">
          content
        </div>
      </template>
    </BottomSheet>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isOpen = ref(false)

const container = ref<HTMLElement | null>(null)
const containerLeft = ref<number>(0)

onMounted(() => {
  if (!container.value)
    return

  // Calculate container pixels from left side of screen including dyanmiac padding
  const containerOffsetLeft = container.value.getBoundingClientRect().left
  const containerPaddingLeft = parseInt(window.getComputedStyle(container.value).paddingLeft)
  containerLeft.value = containerOffsetLeft + containerPaddingLeft
})

</script>

<style scoped>
.timeline-card {
  @apply shrink-0 align-top p-6 h-44 w-96 bg-white rounded-3xl shadow-xl;
  margin-right: 30px;
}
.timeline-card::before {
  content: "";
  position: absolute;
  right: -30px;
  top: calc(50% - 10px);
  height: 20px;
  width: 30px;
  background-color: white;
  @apply shadow-lg
}
.timeline-card::after {
  content: "";
  position: absolute;
  right: -40px;
  top: calc(50% - 10px);
  height: 20px;
  width: 50px;
  background-color: white;
}
.timeline-arrow {
  @apply shrink-0 align-top w-8 h-8 text-center bg-white shadow-lg hidden;
}
</style>
