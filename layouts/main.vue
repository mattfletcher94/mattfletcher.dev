<script lang="ts" setup>
</script>

<template>
  <div class="relative block w-full h-auto text-slate-700 font-sans antialiased">
    <TheHeader />
    <TheMain>
      <slot />
    </TheMain>
    <TheFooter />
  </div>
</template>
