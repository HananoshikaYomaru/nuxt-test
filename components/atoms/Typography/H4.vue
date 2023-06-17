<template>
  <h4
    :class="
      cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        String($attrs.class)
      )
    "
  >
    <slot />
  </h4>
</template>

<script setup lang="ts"></script>
