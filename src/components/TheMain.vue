<template>
  <main id="main">
    <slot />
  </main>
</template>

<style scoped>
#main {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  padding-top: var(--header-height);
}
</style>
