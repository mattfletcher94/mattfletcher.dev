<script setup lang="ts">
definePageMeta({
  layout: 'main',
})

useSiteHead({
  title: 'Contact',
  meta: [
    { name: 'description', content: 'Feel free to contact me, i\'m always happy to talk dev.' },
    { name: 'keywords', content: 'Matt Fletcher, Contact, Full Stack, Developer, Hampshire, UK' },
  ],
})
</script>

<template>
  <div class="container mt-12">
    <div class="max-w-4xl mx-auto">
      <div class="prosey-md text-left">
        <h1>Contact me</h1>
        <div class="flex items-center gap-4">
          <div>
            <a href="mailto:mattfletcher94@outlook.com" class="no-underline hover:text-primary-500 active:text-primary-500 transition-colors" aria-label="Email">
              <IconMail class="w-6 h-6" />
            </a>
          </div>
          <div class="">
            <a href="https://instagram.com/mattfletcher.dev" class="no-underline hover:text-primary-500 active:text-primary-500 transition-colors" target="_blank" aria-label="Instagram">
              <IconInstagram class="w-6 h-6" />
            </a>
          </div>
          <div class="">
            <a href="https://github.com/mattfletcher94" class="no-underline hover:text-primary-500 active:text-primary-500 transition-colors" target="_blank" aria-label="Github">
              <IconGithub class="w-6 h-6" />
            </a>
          </div>
        </div>
        <p>Would you like to hire me? Or do you have a development based question? Please feel free to contact me by filling in the form below 🙂</p>
      </div>
      <div class="mt-6">
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
          <div class="form-group form-group--required">
            <label for="name" class="form-label">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              class="form-input"
              placeholder="Name..."
              autocomplete="off"
              required
            >
          </div>
          <div class="form-group form-group--required mt-6">
            <label for="email" class="form-label">Your email</label>
            <input
              id="email"
              name="email"
              type="text"
              class="form-input"
              placeholder="Email..."
              autocomplete="off"
              required
            >
          </div>
          <div class="form-group form-group--required mt-6">
            <label for="message" class="form-label">Your message</label>
            <textarea
              id="message"
              rows="6"
              name="message"
              type="text"
              class="form-textarea"
              placeholder="Message..."
              autocomplete="off"
              required
              style="outline:none;box-shadow: none!important;"
              aria-label="Your message"
            />
          </div>
          <button
            type="submit"
            class="btn btn--primary mt-6"
          >
            Send message <IconSend class="w-5 h-5 ml-1" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
