<template>
  <div v-once class="relative block w-full bg-white">
    <div class="absolute top-0 left-0 w-full h-2/3 bg-gray-50" />
    <div class="container pt-12 md:pt-20 pb-20">
      <div class="block">
        <div class="grid grid-cols-12 gap-0 md:gap-12 h-full">
          <div class="col-span-12 md:col-span-4">
            <div class="prose mx-auto text-left w-full max-w-3xl">
              <Text type="heading-2" as="h2" class="mb-6" weight="700">
                My <span class="text-purple-500">Skills</span>
                <Button variant="primary" class="block md:hidden float-right top-2">
                  Resume
                  <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </Button>
              </Text>
              <Text type="body" as="p">
                Since my development journey started, I have learned many different programming languages and frameworks.
                My preferred framework is Vue with Tailwind for the front-end, and Nest.js for building API's.
                I have not included the essentials such as HTML, CSS, Typescript, and OOP since they are implied from the listed skills.
              </Text>
              <Button variant="primary" class="hidden md:inline-block">
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </Button>
            </div>
          </div>
          <div class="col-span-12 md:col-span-8">
            <div class="block mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
              <TabGroup @change="handleChange">
                <TabList class="tab-btns">
                  <div
                    ref="tabSlider"
                    class="tab-slider"
                  />
                  <Tab v-slot="{ selected }" as="template">
                    <button
                      class="tab-btn"
                      :class="{ 'text-white': selected }"
                    >
                      Frontend
                    </button>
                  </Tab>
                  <Tab v-slot="{ selected }" as="template">
                    <button
                      class="tab-btn"
                      :class="{ 'text-white': selected }"
                    >
                      Backend
                    </button>
                  </Tab>
                  <Tab v-slot="{ selected }" as="template">
                    <button
                      class="tab-btn"
                      :class="{ 'text-white': selected }"
                    >
                      Other
                    </button>
                  </Tab>
                </TabList>
                <TabPanels as="div" class="">
                  <TabPanel
                    v-for="skillCategory in skillsStore.asCategories"
                    :key="skillCategory.category"
                    v-slot="{ selected }"
                    as="div"
                    class="overflow-hidden"
                  >
                    <TransitionRoot
                      appear
                      :show="selected"
                      as="div"
                      enter="transform transition duration-500 ease-in-out"
                      enter-from="opacity-0 translate-y-4"
                      enter-to="opacity-100 translate-y-0"
                      leave="transform transition duration-500 ease-in-out"
                      leave-from="opacity-100 translate-y-0"
                      leave-to="opacity-0 translate-y-4"
                    >
                      <div class="">
                        <Disclosure
                          v-for="skill in skillCategory.skills"
                          :key="skill.title"
                          v-slot="{ open }"
                        >
                          <DisclosureButton
                            class="block w-full transition-colors duration-300 hover:bg-gray-50 p-6 border-t border-t-gray-100"
                            :class="{
                              'bg-white': !open,
                              'bg-gray-50': open,
                            }"
                          >
                            <div class="block w-full">
                              <div class="flex items-center text-left">
                                <div class="flex w-12 h-12 rounded-full shrink-0 items-center bg-gray-100">
                                  <IconVue v-if="skill.title === 'Vue'" class="w-6 h-6 mx-auto" />
                                  <IconReact v-else-if="skill.title === 'React'" class="w-6 h-6 mx-auto" />
                                  <IconWordpress v-else-if="skill.title === 'Wordpress'" class="w-6 h-6 mx-auto" />
                                  <IconCSS v-else-if="skill.title === 'CSS'" class="w-6 h-6 mx-auto" />
                                  <IconWebGL v-else-if="skill.title === 'Canvas'" class="w-7 h-7 mx-auto" />
                                  <IconNodejs v-else-if="skill.title === 'Node.js'" class="w-6 h-6 mx-auto" />
                                  <IconNetCore v-else-if="skill.title === '.Net'" class="w-6 h-6 mx-auto" />
                                  <IconFigma v-else-if="skill.title === 'Figma'" class="w-6 h-6 mx-auto" />
                                  <IconOpenGL v-else-if="skill.title === 'OpenGL'" class="w-7 h-7 mx-auto" />
                                  <IconMongoDB v-else-if="skill.title === 'Database'" class="w-6 h-6 mx-auto" />
                                  <IconGraphQL v-else-if="skill.title === 'API Development'" class="w-6 h-6 mx-auto" />
                                  <IconUI v-else-if="skill.title === 'UI/UX'" class="w-6 h-6 mx-auto" />
                                  <IconDevops v-else-if="skill.title === 'DevOps'" class="w-6 h-6 mx-auto" />
                                  <IconSupabase v-else-if="skill.title === 'Supabase'" class="w-6 h-6 mx-auto" />
                                </div>
                                <div class="ml-4 pr-4 md:pr-0">
                                  <Text type="body" weight="600" as="h3">
                                    {{ skill.title }}
                                  </Text>
                                  <div v-if="skill.subtitle" class="block md:hidden">
                                    <Text type="small" as="h4" muted weight="400">
                                      {{ skill.subtitle }}
                                    </Text>
                                  </div>
                                </div>
                                <div v-if="skill.subtitle" class="mx-2 hidden md:flex">
                                  <Text type="body" as="span">
                                    ·
                                  </Text>
                                </div>
                                <div v-if="skill.subtitle" class="hidden md:flex">
                                  <Text type="small" as="h4" muted weight="400">
                                    {{ skill.subtitle }}
                                  </Text>
                                </div>
                                <div v-if="skill.rating > 0" class="ml-auto">
                                  <div class="flex items-center" title="Competency level">
                                    <div class="w-12 h-3 rounded-full bg-gray-100 mr-2">
                                      <div
                                        class="w-full h-full rounded-full"
                                        :class="{
                                          'bg-amber-500': skill.rating == 1,
                                          'bg-yellow-400': skill.rating == 2,
                                          'bg-emerald-500': skill.rating == 3,
                                          'bg-teal-500': skill.rating == 4,
                                          'bg-cyan-500': skill.rating == 5,
                                        }"
                                        :style="{
                                          width: `${skill.rating * 20}%`,
                                        }"
                                      />
                                    </div>
                                    <Text type="small" as="span" muted>
                                      {{ skill.rating * 20 }}%
                                    </Text>
                                  </div>
                                </div>
                                <div>
                                  <div
                                    class="w-8 h-8 md:w-12 md:h-12 transition-transform duration-300 ease-in-out text-center"
                                    :class="{
                                      '-rotate-180': open,
                                      'rotate-0': !open,
                                    }"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mt-1 md:mt-3 mx-auto h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DisclosureButton>
                          <transition
                            enter-active-class="transition duration-300 ease-out"
                            enter-from-class="transform -translate-x-4 opacity-0"
                            enter-to-class="transform translate-x-0 opacity-100"
                            leave-active-class="transition duration-300 ease-out"
                            leave-from-class="transform translate-x-0 opacity-100"
                            leave-to-class="transform -translate-x-4 opacity-0"
                          >
                            <DisclosurePanel
                              class="p-6"
                              :class="{
                                'bg-white': !open,
                                'bg-gray-50': open,
                              }"
                            >
                              <Text type="body" as="p">
                                {{ skill.description }}
                              </Text>
                            </DisclosurePanel>
                          </transition>
                        </Disclosure>
                      </div>
                    </TransitionRoot>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionRoot,
} from '@headlessui/vue'
import { ref } from 'vue'
import { useSkillsStore } from '../stores/skills'

const skillsStore = useSkillsStore()
const activeTabIndex = ref<number>(0)
const tabSlider = ref<HTMLElement | null>(null)

const handleChange = async(index: number) => {
  const oldActiveTabIndex = activeTabIndex.value
  activeTabIndex.value = index
  if (tabSlider.value) {
    if (activeTabIndex.value < oldActiveTabIndex)
      tabSlider.value.style.transform = `scaleX(1.75) translateX(${index * 100}%)`
    else
      tabSlider.value.style.transform = `scaleX(1.75) translateX(${oldActiveTabIndex * 100}%)`

    setTimeout(() => {
      if (tabSlider.value)
        tabSlider.value.style.transform = `scaleX(1) translateX(${index * 100}%)`
    }, 200)
  }
}

</script>

<style scoped>
.tab-slider {
  @apply absolute w-1/3 left-0 top-0 h-full bg-black rounded-full transition-transform ease-in-out;
  transition-duration: 300ms;
  transform-origin: center;
}

.tab-btns {
  @apply border-white overflow-hidden rounded-full;
  border-width: 1rem;
}

.tab-btn {
  font-size: 0.9rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.6px;
  @apply  w-1/3 rounded-full py-3 transition-all duration-500 ease-in-out;
}
</style>
