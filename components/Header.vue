<template>
  <header class="flex justify-between py-4 w-full">
    <div>
      <!-- dummy -->
    </div>
    <div class="flex flex-col items-center">
      <AtomsTypographyH1>TodoList</AtomsTypographyH1>
      <div class="flex space-x-4">
        <NuxtLink
          to="/"
          class="text-gray-700 font-bold py-2 px-4 hover:text-gray-900 dark:text-white dark:hover:text-gray-200"
          >Today</NuxtLink
        >
        <NuxtLink
          to="/all"
          class="text-gray-700 font-bold py-2 px-4 hover:text-gray-900 dark:text-white dark:hover:text-gray-200"
          >All</NuxtLink
        >
        <NuxtLink
          to="/done"
          class="text-gray-700 font-bold py-2 px-4 hover:text-gray-900 dark:text-white dark:hover:text-gray-200"
        >
          Done
        </NuxtLink>
      </div>
    </div>
    <!-- the theme button  -->
    <div>
      <button @click="good()">theme</button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    good(temp) {
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
    },
  },
};
</script>
