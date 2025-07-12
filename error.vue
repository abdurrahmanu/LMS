<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

watch(() => props.error, (newError) => {
  if (newError?.statusCode === 404) {
    document.title = 'Page Not Found - Intelligent Library'
  } else {
    document.title = 'Error - Intelligent Library'
  }
}, { immediate: true })
</script>

<template>
  <div v-if="error?.statusCode === 404" class="h-screen m-auto flex flex-col items-center justify-center text-center font-bold space-y-4">
    <p class="text py-5">404</p>
    <p>Page not found</p>
    <NuxtLink to="/">
      <LibraryButton text="Go back home"/>
    </NuxtLink>
  </div>
</template>

<style>
.text {
    font: 2rem;
    color: red;
    scale: 3.5;
}
</style>