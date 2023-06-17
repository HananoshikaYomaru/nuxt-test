<template>
  <TodoList :tasks="tasks"></TodoList>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
const tasks = state.tasks.filter((t) => t.completed);
</script>
