<template>
  <footer class="py-6 bg-theme-surface-0 border-t border-t-theme-surface-1 mt-20 lg:mt-40 text-theme-foreground-0">
    <div class="container">
      <div class="grid grid-cols-12 gap-6 text-center sm:text-left">
        <div class="col-span-12 sm:col-span-6 order-2 sm:order-1">
          <p class="text-sm font-semibold mb-2 opacity-90">
            Built with <a href="https://v3.nuxtjs.org/" target="_blank">Nuxt 3</a> 💚 and <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a> 💙
          </p>
          <p class="text-sm font-semibold opacity-90">
            Copyright &copy; Matt Fletcher {{ new Date().getFullYear() }}
          </p>
        </div>
        <div class="col-span-12 sm:col-span-6 order-1 sm:order-2 text-center sm:text-right">
          <p class="text-sm font-semibold mb-2 opacity-90">
            Let's connect.
          </p>
          <div class="flex justify-center sm:justify-end items-center gap-4">
            <div>
              <a href="mailto:mattfletcher94@outlook.com" class="hover:text-primary-500 active:text-primary-500 transition-colors" aria-label="Email">
                <IconMail class="w-6 h-6" />
              </a>
            </div>
            <div class="">
              <a href="https://instagram.com/mattfletcher.dev" class="hover:text-primary-500 active:text-primary-500 transition-colors" target="_blank" aria-label="Instagram">
                <IconInstagram class="w-6 h-6" />
              </a>
            </div>
            <div class="">
              <a href="https://github.com/mattfletcher94" class="hover:text-primary-500 active:text-primary-500 transition-colors" target="_blank" aria-label="Github">
                <IconGithub class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
