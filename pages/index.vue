<script setup lang="ts">
const route = useRoute();
const {
  public: { publicKey },
} = useRuntimeConfig();
</script>

<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <p>This is the public key : {{ publicKey }}</p>
    <AppAlert />
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
  </div>
</template>
