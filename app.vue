<script setup lang="ts">
import '@fontsource/nunito-sans/400.css'
import '@fontsource/nunito-sans/600.css'
import '@fontsource/nunito-sans/700.css'
import '@fontsource/nunito-sans/800.css'
import '@fontsource/nunito-sans/900.css'
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      :throttle="0"
      :height="4"
      color="#6366f1"
    />
    <NuxtPage />
  </NuxtLayout>
</template>
