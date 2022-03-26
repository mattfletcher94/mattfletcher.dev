<template>
  <div class="relative block w-full md:mt-20">
    <div class="block">
      <div class="absolute top-0 left-0 w-2/3 h-full bg-gray-50" />
      <div ref="container" class="container pb-6 pt-12 md:pt-20 md:pb-12">
        <div class="prose text-left">
          <Text type="heading-2" as="h3" class="mb-6" weight="700">
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
          <div
            ref="timelineSnap"
            class="timeline-snap md:px-4"
            @mousedown="handleTimelineSnapMouseDown"
            @mouseup="handleTimelineSnapMouseUp"
            @mousemove="handleTimelineSnapMouseMove"
            @mouseleave="handleTimelineSnapMouseLeave"
          >
            <div class="timeline-snap__item">
              <div class="flex flex-col justify-between h-full ">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span">
                      Current role
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      Full time Developer at Pitched
                    </Text>
                  </div>
                </div>
                <div />
              </div>
            </div>
            <div class="timeline-snap__item">
              <div class="flex flex-col justify-between h-full">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span" muted>
                      July 2021
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      Completed my BSc Computer Science degree with a First Class Honors.
                    </Text>
                  </div>
                </div>
                <div />
              </div>
            </div>
            <div class="timeline-snap__item">
              <div class="flex flex-col justify-between h-full">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span" muted>
                      July 2020
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      Finished my one year work placement at Pitched
                    </Text>
                  </div>
                </div>
                <div />
              </div>
            </div>
            <div class="timeline-snap__item">
              <div class="flex flex-col justify-between h-full">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span" muted>
                      September 2018
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      Started Studying Computer Science at Plymouth University
                    </Text>
                  </div>
                </div>
                <div />
              </div>
            </div>
            <div class="timeline-snap__item">
              <div class="flex flex-col justify-between h-full">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span" muted>
                      April 2016
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      My journey as a Developer started.
                    </Text>
                  </div>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
        <div class="prose text-left">
          <Text type="body" as="h4" class="mb-2" weight="600">
            Want to know more?
          </Text>
          <a href="/matt-fletcher-cv.DOCX" aria-label="Download Resume" download>
            <Button variant="primary">
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const container = ref<HTMLElement | null>(null)
const timelineSnap = ref<HTMLElement | null>(null)
const containerLeft = ref<number>(0)

onMounted(() => {
  if (!container.value)
    return

  // Calculate container pixels from left side of screen including dyanmiac padding
  if (typeof window !== 'undefined') {
    const containerOffsetLeft = container.value.getBoundingClientRect().left
    const containerPaddingLeft = parseInt(window ? window.getComputedStyle(container.value).paddingLeft : '0')
    containerLeft.value = containerOffsetLeft + containerPaddingLeft
  }
})

const isTouchDevice = ref(typeof window !== 'undefined' ? window.matchMedia('(hover: none)').matches : false)
const isDown = ref(false)
const startX = ref(0)
const scrollTop = ref(0)

function handleTimelineSnapMouseDown(e: MouseEvent) {
  if (!timelineSnap.value || isTouchDevice.value)
    return
  isDown.value = true
  startX.value = e.pageX - timelineSnap.value.offsetLeft
  scrollTop.value = timelineSnap.value.scrollLeft
}

function handleTimelineSnapMouseUp(e: MouseEvent) {
  if (isTouchDevice.value)
    return
  isDown.value = false
}

function handleTimelineSnapMouseLeave(e: MouseEvent) {
  if (isTouchDevice.value)
    return
  isDown.value = false
}

function handleTimelineSnapMouseMove(e: MouseEvent) {
  if (!timelineSnap.value || isTouchDevice.value)
    return
  if (isDown.value) {
    e.preventDefault()
    const x = e.pageX - timelineSnap.value.offsetLeft
    const walkX = (x - startX.value) * 2
    timelineSnap.value.scrollLeft = scrollTop.value - walkX
  }
}

</script>

<style scoped>
.timeline-snap {
  position: relative;
  display: block;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 1rem;
  white-space: nowrap;
  scroll-behavior: smooth;
  @apply block w-full pb-12 cursor-grab overflow-x-scroll overflow-y-hidden md:overflow-x-hidden;
}
.timeline-snap::-webkit-scrollbar {
  display: none;
}
.timeline-snap__item {
  @apply inline-block align-top p-6 h-44 w-[20rem] bg-white rounded-3xl shadow-xl mr-4;
  scroll-snap-align: start;
}

.timeline-snap__item::before,
.timeline-snap__item::after {
  content: "";
  right: -1rem;
  top: calc(50% - 8px);
  @apply absolute shadow-lg bg-white w-4 h-4;
}
.timeline-snap__item::after {
  right: -1.5rem;
  @apply shadow-none w-8;
}

.timeline-snap__item:last-child::before,
.timeline-snap__item:last-child::after {
  display: none;
}

.timeline-snap__item__btn {
  @apply py-1.5 px-1 !text-xs !bg-transparent text-black !font-bold;
}

.timeline-snap__item:nth-child(1) {
  z-index: 50;
}
.timeline-snap__item:nth-child(2) {
  z-index: 49;
}
.timeline-snap__item:nth-child(3) {
  z-index: 48;
}
.timeline-snap__item:nth-child(4) {
  z-index: 47;
}
.timeline-snap__item:nth-child(5) {
  z-index: 46;
}
.timeline-snap__item:nth-child(6) {
  z-index: 45;
}
.timeline-snap__item:nth-child(7) {
  z-index: 44;
}
.timeline-snap__item:nth-child(8) {
  z-index: 43;
}
.timeline-snap__item:nth-child(9) {
  z-index: 42;
}
.timeline-snap__item:nth-child(10) {
  z-index: 41;
}
.timeline-snap__item:nth-child(11) {
  z-index: 40;
}
.timeline-snap__item:nth-child(12) {
  z-index: 39;
}
.timeline-snap__item:nth-child(13) {
  z-index: 38;
}
.timeline-snap__item:nth-child(14) {
  z-index: 37;
}
.timeline-snap__item:nth-child(15) {
  z-index: 36;
}

</style>
