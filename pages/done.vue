<template>
  <TodoList :tasks="tasks"></TodoList>
</template>

<script setup lang="ts">
const tasks = state.tasks.filter((t) => t.completed);
</script>
