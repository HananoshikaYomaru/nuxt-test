<template>
  <NuxtLoadingIndicator />
  <!-- the page content -->
  <Header />
  <NuxtPage />
</template>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark body {
  background-color: #03101c;
  color: #ebf4f1;
}
</style>
