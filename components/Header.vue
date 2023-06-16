import { AtomsTypographyH1 } from '~/.nuxt/components';

<template>
  <header class="flex justify-between py-4">
    <div>
      <!-- dummy -->
    </div>
    <div class="flex flex-col items-center">
      <AtomsTypographyH1>TodoList</AtomsTypographyH1>
      <div class="flex space-x-4">
        <NuxtLink
          to="/"
          class="text-gray-700 font-bold py-2 px-4 hover:text-gray-900"
          >Today</NuxtLink
        >
        <NuxtLink
          to="/all"
          class="text-gray-700 font-bold py-2 px-4 hover:text-gray-900"
          >All</NuxtLink
        >
        <NuxtLink
          to="/done"
          class="text-gray-700 font-bold py-2 px-4 hover:text-gray-900"
        >
          Done
        </NuxtLink>
      </div>
    </div>
    <!-- the theme button  -->
    <div></div>
  </header>
</template>
