<template>
  <div class="relative block w-full">
    <div class="block">
      <div class="absolute top-0 left-0 w-2/3 h-2/3 bg-gray-50" />
      <div class="container py-20">
        <div class="prose text-left">
          <Text type="heading-2" as="h3" class="mb-6 ">
            Work
            <span class="text-purple-500">Experience</span>
            <span class="hidden md:inline">and <br></span>
            <span class="inline md:hidden"> / </span>
            Acamdemic
            <span class="text-purple-500">Achievements</span>
          </Text>
          <Text type="body" as="p" class="hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </div>
        <div
          class="block"
          :style="{
            width: 'calc(100% + 2rem)'
          }"
        >
          <ul
            class="block mt-2 md:mt-12 pb-6 overflow-y-hidden overflow-x-scroll whitespace-nowrap"
          >
            <li class="inline-block p-4 h-48 w-80 mr-8 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div class="flex space-x-6 text-left">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span" muted>
                      July 2022 -> present
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      Full time Developer at Pitched
                    </Text>
                    <Button
                      variant="secondary"
                      class="py-1.5 px-4 !text-xs"
                      @click="isOpen = true"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li class="inline-block p-4 h-48 w-80 mr-8 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div class="flex space-x-6 text-left">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span" muted>
                      September 2021
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      Graduated from Plymouth University with a First Class Honours
                    </Text>
                    <Button
                      variant="secondary"
                      class="py-1.5 px-4 !text-xs"
                      @click="isOpen = true"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li class="inline-block p-4 h-48 w-80 mr-8 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div class="flex space-x-6 text-left">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span" muted>
                      July 2020
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      Completed 1 year work placement at Pitched
                    </Text>
                    <Button
                      variant="secondary"
                      class="py-1.5 px-4 !text-xs"
                      @click="isOpen = true"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li class="inline-block p-4 h-48 w-80 mr-8 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div class="flex space-x-6 text-left">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span" muted>
                      September 2018
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      Began pursuing a Computer Science degree at Plymouth University
                    </Text>
                    <Button
                      variant="secondary"
                      class="py-1.5 px-4 !text-xs"
                      @click="isOpen = true"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li class="inline-block p-4 h-48 w-80 mr-8 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div class="flex space-x-6 text-left">
                <div>
                  <div class="prose mx-auto text-left whitespace-normal">
                    <Text type="small" as="span" muted>
                      April 2016
                    </Text>
                    <Text type="body" weight="600" as="h4" class="mt-0">
                      My Developer journey began
                    </Text>
                    <Button
                      variant="secondary"
                      class="py-1.5 px-4 !text-xs"
                      @click="isOpen = true"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--
      <div class="block">
        <div class="grid grid-cols-12 gap-16 h-full">
          <div class="col-span-6">
            <div class="prose mx-auto text-left w-full max-w-3xl">
              <Text type="heading-2" as="h3" class="mb-6 ">
                Professional Experience
              </Text>
              <Text type="body" as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </div>
            <ul
              class="block mt-12 overflow-y-auto overflow-x-hidden p-8 bg-white shadow-2xl rounded-3xl"
              :style="{
                maxHeight: '400px'
              }"
            >
              <li class="ml-4 pb-8">
                <div class="absolute top-0 left-4 w-2 h-full bg-purple-500" />
                <div class="flex space-x-6 text-left">
                  <div class="flex shrink-0 w-10 h-10 rounded-full items-center bg-purple-500" />
                  <div>
                    <div class="prose mx-auto text-left">
                      <Text type="small" as="span" muted>
                        July 2022
                      </Text>
                      <Text type="body" weight="600" as="h4" class="mt-0">
                        Full time Developer at Pitched
                      </Text>
                      <Text type="body" as="p" class="mt-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque unde perspiciatis corrupti eum.
                      </Text>
                    </div>
                  </div>
                </div>
              </li>
              <li class="ml-4 pb-8">
                <div class="absolute top-0 left-4 w-2 h-full bg-purple-500" />
                <div class="flex space-x-6 text-left">
                  <div class="flex shrink-0 w-10 h-10 rounded-full items-center bg-purple-500" />
                  <div>
                    <div class="prose mx-auto text-left">
                      <Text type="small" as="span" muted>
                        September 2021
                      </Text>
                      <Text type="body" weight="600" as="h4" class="mt-0">
                        Graduated from Plymouth University with a First Class Honours
                      </Text>
                      <Text type="body" as="p" class="mt-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque unde perspiciatis corrupti eum.
                      </Text>
                    </div>
                  </div>
                </div>
              </li>
              <li class="ml-4 pb-8">
                <div class="absolute top-0 left-4 w-2 h-full bg-gray-100" />
                <div class="flex space-x-6 text-left">
                  <div class="flex shrink-0 w-10 h-10 rounded-full items-center bg-gray-100" />
                  <div>
                    <div class="prose mx-auto text-left">
                      <Text type="small" as="span" muted>
                        July 2020
                      </Text>
                      <Text type="body" weight="600" as="h4" class="mt-0">
                        Completed 1 year work placement at Pitched
                      </Text>
                      <Text type="body" as="p" class="mt-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque unde perspiciatis corrupti eum.
                      </Text>
                    </div>
                  </div>
                </div>
              </li>
              <li class="ml-4 pb-8">
                <div class="absolute top-0 left-4 w-2 h-full bg-gray-100" />
                <div class="flex space-x-6 text-left">
                  <div class="flex shrink-0 w-10 h-10 rounded-full items-center bg-gray-100" />
                  <div>
                    <div class="prose mx-auto text-left">
                      <Text type="small" as="span" muted>
                        September 2018
                      </Text>
                      <Text type="body" weight="600" as="h4" class="mt-0">
                        Began pursuing a Computer Science degree at Plymouth University
                      </Text>
                      <Text type="body" as="p" class="mt-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque unde perspiciatis corrupti eum.
                      </Text>
                    </div>
                  </div>
                </div>
              </li>
              <li class="ml-4 pb-8">
                <div class="flex space-x-6 text-left">
                  <div class="flex shrink-0 w-10 h-10 rounded-full items-center bg-gray-100" />
                  <div>
                    <div class="prose mx-auto text-left">
                      <Text type="small" as="span" muted>
                        September 2016
                      </Text>
                      <Text type="body" weight="600" as="h4" class="mt-0">
                        My Developer journey began
                      </Text>
                      <Text type="body" as="p" class="mt-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque unde perspiciatis corrupti eum.
                      </Text>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-span-6">
            <div class="prose mx-auto text-left w-full max-w-3xl">
              <Text type="heading-2" as="h3" class="mb-6 ">
                What I'm up to
              </Text>
              <Text type="body" as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </div>
            <div class="block mt-12">
              <ul
                class="block mt-12 overflow-y-auto overflow-x-hidden p-8 bg-white shadow-2xl rounded-3xl"
                :style="{
                  maxHeight: '400px'
                }"
              >
                <li class="ml-4 pb-8">
                  <div class="absolute top-0 left-4 w-2 h-full bg-gray-100" />
                  <div class="flex space-x-6 text-left">
                    <div class="flex shrink-0 w-10 h-10 rounded-full items-center bg-gray-100" />
                    <div>
                      <div class="prose mx-auto text-left">
                        <Text type="small" as="span" muted>
                          On-going
                        </Text>
                        <Text type="body" weight="600" as="h4" class="mt-0">
                          digramming.io
                        </Text>
                        <Text type="body" as="p" class="mt-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque unde perspiciatis corrupti eum.
                        </Text>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="ml-4 pb-8">
                  <div class="absolute top-0 left-4 w-2 h-full bg-gray-100" />
                  <div class="flex space-x-6 text-left">
                    <div class="flex shrink-0 w-10 h-10 rounded-full items-center bg-gray-100" />
                    <div>
                      <div class="prose mx-auto text-left">
                        <Text type="small" as="span" muted>
                          March 2022
                        </Text>
                        <Text type="body" weight="600" as="h4" class="mt-0">
                          My Portfolio Website
                        </Text>
                        <Text type="body" as="p" class="mt-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque unde perspiciatis corrupti eum.
                        </Text>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="ml-4 pb-8">
                  <div class="absolute top-0 left-4 w-2 h-full bg-gray-100" />
                  <div class="flex space-x-6 text-left">
                    <div class="flex shrink-0 w-10 h-10 rounded-full items-center bg-gray-100" />
                    <div>
                      <div class="prose mx-auto text-left">
                        <Text type="small" as="span" muted>
                          December 2020
                        </Text>
                        <Text type="body" weight="600" as="h4" class="mt-0">
                          Published Maria Hocking's website
                        </Text>
                        <Text type="body" as="p" class="mt-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque unde perspiciatis corrupti eum.
                        </Text>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="ml-4 pb-8">
                  <div class="absolute top-0 left-4 w-2 h-full bg-gray-100" />
                  <div class="flex space-x-6 text-left">
                    <div class="flex shrink-0 w-10 h-10 rounded-full items-center bg-gray-100" />
                    <div>
                      <div class="prose mx-auto text-left">
                        <Text type="small" as="span" muted>
                          September 2020
                        </Text>
                        <Text type="body" weight="600" as="h4" class="mt-0">
                          Published Listify
                        </Text>
                        <Text type="body" as="p" class="mt-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque unde perspiciatis corrupti eum.
                        </Text>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="ml-4 pb-8">
                  <div class="flex space-x-6 text-left">
                    <div class="flex shrink-0 w-10 h-10 rounded-full items-center bg-gray-100" />
                    <div>
                      <div class="prose mx-auto text-left">
                        <Text type="small" as="span" muted>
                          July 2020
                        </Text>
                        <Text type="body" weight="600" as="h4" class="mt-0">
                          Refreshed Promobility's website
                        </Text>
                        <Text type="body" as="p" class="mt-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque unde perspiciatis corrupti eum.
                        </Text>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      -->
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
import { ref } from 'vue'

const isOpen = ref(false)

</script>
