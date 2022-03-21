<template>
  <div class="relative block w-full bg-white ">
    <div class="container py-20 md:py-40">
      <div class="block md:hidden absolute top-48 -right-28 blur-xl opacity-50">
        <IllustrationSphere class="w-60 h-60" />
      </div>
      <div class="grid grid-cols-12 gap-0 md:gap-12 h-full">
        <div class="col-span-12 md:col-span-7 self-center">
          <div class="flex items-center space-x-0 md:space-x-8 flex-wrap md:flex-nowrap text-left place-content-center md:place-content-start">
            <div class="shrink-0">
              <img
                class="mask-squircle block h-40 w-40 rounded-lg object-cover object-center"
                :src="assetMe"
                alt="Matt Fletcher Avatar"
              >
            </div>
            <div class="mt-6 md:mt-0">
              <Text
                type="heading-1"
                weight="700"
                as="h1"
                class=""
              >
                Hi, I'm Matt.
                <span class="text-purple-500 block md:inline">Full stack developer.</span>
              </Text>
              <Text
                type="body"
                as="p"
                class="mt-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Based in Plymouth, UK.
              </Text>
              <Text type="body" as="p" class="mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </Text>
            </div>
          </div>
        </div>
        <div class="hidden md:flex col-span-5 self-center place-content-end">
          <div class="w-full h-auto p-8 bg-gray-50 rounded-2xl rotate-6">
            <div class="mx-auto" :style="{ maxWidth: '250px' }">
              <IllustrationCode class="block max-w-full w-full max-h-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import assetMe from './../assets/me.jpg?w=300&h=300&webp&imagetools'

</script>
