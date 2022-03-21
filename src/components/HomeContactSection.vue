<template>
  <div class="relative block w-full md:mt-20">
    <div class="block">
      <div class="absolute top-0 left-0 w-full h-full bg-gray-50" />
      <div ref="container" class="container py-10 md:py-20">
        <div class="grid grid-cols-12 gap-0 md:gap-12 h-full">
          <div class="col-span-12 md:col-span-5">
            <div class="prose text-left">
              <Text type="heading-2" as="h3" class="mb-8 md:mb-16" weight="700">
                <span class="text-black">Contact</span> me
              </Text>
              <Text type="body" as="p">
                <span class="block w-20 h-[4px] bg-purple-500 rounded-full mb-2" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </Text>
              <div class="hidden md:block">
                <a href="https://github.com/mattfletcher94" target="_blank" class="no-underline">
                  <Text>
                    <IconGithub class="w-6 h-6 mr-2" /> github
                  </Text>
                </a>
                <a href="https://github.com/mattfletcher94" target="_blank" class="no-underline">
                  <Text>
                    <IconGithub class="w-6 h-6 mr-2" /> mattfletcher94@outlook.com
                  </Text>
                </a>
              </div>
            </div>
          </div>
          <div class="col-span-12 md:col-span-7">
            <form
              class="block w-full text-black"
              style="font-size: 1rem;"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="cap-field"
            >
              <label class="hidden">
                cap field
                <input name="cap-field">
              </label>
              <input type="hidden" name="form-name" value="contact">
              <div class="block w-full">
                <input
                  id="name"
                  name="name"
                  type="text"
                  class="form-input peer"
                  placeholder="Your name"
                  autocomplete="off"
                  style="outline:none;box-shadow: none!important;"
                >
                <label
                  for="name"
                  class="
                    form-label
                    peer-placeholder-shown:opacity-100
                    peer-focus:opacity-75
                    peer-placeholder-shown:scale-100
                    peer-focus:scale-75
                    peer-placeholder-shown:translate-y-0
                    peer-focus:-translate-y-3.5
                    peer-placeholder-shown:translate-x-0
                    peer-focus:translate-x-1
                  "
                >
                  Your name
                </label>
              </div>
              <div class="block w-full mt-6">
                <input
                  id="email"
                  name="email"
                  type="text"
                  class="form-input peer"
                  placeholder="Your email"
                  autocomplete="off"
                  style="outline:none;box-shadow: none!important;"
                >
                <label
                  for="email"
                  class="
                    form-label
                    peer-placeholder-shown:opacity-100
                    peer-focus:opacity-75
                    peer-placeholder-shown:scale-100
                    peer-focus:scale-75
                    peer-placeholder-shown:translate-y-0
                    peer-focus:-translate-y-3.5
                    peer-placeholder-shown:translate-x-0
                    peer-focus:translate-x-1
                  "
                >
                  Your email
                </label>
              </div>
              <div class="block w-full mt-6">
                <textarea
                  id="message"
                  rows="6"
                  name="message"
                  type="text"
                  class="form-textarea"
                  placeholder="Your message"
                  autocomplete="off"
                  style="outline:none;box-shadow: none!important;"
                  aria-label="Your message"
                />
              </div>
              <button
                type="submit"
                class="w-full md:w-auto px-6 !py-2 mt-6 text-center transition-all duration-200 cursor-pointer rounded-full text-white bg-purple-500 hover:bg-purple-600 focus:bg-purple-600"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.form-input {
  @apply border-[1px] border-gray-200 w-full rounded-lg px-4 pb-2 pt-6 h-auto placeholder-transparent focus:outline-none focus:border-purple-500 shadow-none ring-0 transition-all;
}
.form-textarea {
  @apply resize-none border-[1px] border-gray-200 w-full rounded-lg p-4 h-auto placeholder-black focus:outline-none focus:border-purple-500 shadow-none ring-0 transition-all;
}
.form-label {
  @apply
    opacity-75
    scale-75
    absolute
    top-0
    left-0
    px-4
    pt-4
    h-full
    -translate-y-3.5
    pointer-events-none
    transform
    origin-left
    transition-all
    duration-200 ease-in-out
    translate-x-1;
}
</style>
