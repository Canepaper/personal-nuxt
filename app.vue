<template>
  <NuxtLayout>

  </NuxtLayout>
</template>

<script setup>
useHead({
  script: [
    {
      src: 'https://unpkg.com/thpace',
      defer: true
    }
  ]
})
</script>


<style lang="scss">
p {
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
}
</style>