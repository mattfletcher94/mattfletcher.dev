<script lang="ts" setup>
</script>

<template>
  <div class="relative block w-full">
    <div class="container py-20 md:py-40">
      <div class="grid grid-cols-12 md:gap-12">
        <div class="order-2 md:order-1 col-span-12 md:col-span-8">
          <div class="prosey-lg max-w-lg">
            <h1 class="h1 mb-8">
              Hi, I'm Matt. <br>
              <span class="text-gradient block md:inline">Full stack developer.</span>
            </h1>
            <h2 class="mt-0 mb-8">
              Based in Plymouth, UK.
              <br>
              Computer Science Degree.
            </h2>
            <p class="mt-0 mb-8">
              I'm a self-motivated full-stack developer with a passion for building
              user-centric web applications. I'm proficient in fundamental front-end and server-side languages,
              with a strong emphasis on Vue, React & Express.
            </p>
            <a class="btn btn--primary" href="/matt-fletcher-cv.pdf" download aria-label="Download resume">
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div class="order-1 md:order-2 col-span-12 md:col-span-4 mb-12 md:mb-0">
          <div class="flex items-center justify-center md:justify-end w-full h-full">
            <div class="block w-full max-w-[240px] md:max-w-[300px]">
              <div class="block w-full aspect-w-12 aspect-h-12">
                <img
                  class="max-w-full mask-squircle object-cover object-center"
                  src="/images/me.webp"
                  alt="Matt Fletcher Avatar"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
