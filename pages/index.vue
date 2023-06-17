<script setup lang="ts">
import { ref } from "vue";
import { state } from "@/composables/store";

const value = ref("");
// only show the tasks today
const tasks = ref(
  state.tasks.filter((task) => {
    const today = new Date();
    return (
      task.createdAt.getDate() === today.getDate() &&
      task.createdAt.getMonth() === today.getMonth() &&
      task.createdAt.getFullYear() === today.getFullYear()
    );
  })
);

function addTask() {
  tasks.value.push({
    id: tasks.value.length + 1,
    title: value.value,
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  value.value = "";
}
</script>

<template>
  <div class="flex flex-row gap-3">
    <AtomsInput v-model:value="value" />
    <AtomsButton
      class="whitespace-nowrap"
      @click="addTask"
      :disabled="value === ''"
      >Create Task</AtomsButton
    >
  </div>
  <AtomsTypographyH4 class="my-4">🏗️ Todo items</AtomsTypographyH4>

  <!-- the list of tasks  -->
  <TodoList
    :tasks="
      tasks
        .filter((t) => !t.completed)
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    "
  />

  <!-- Done tasks -->
  <AtomsTypographyH4 class="my-4">✅ Done tasks</AtomsTypographyH4>
  <TodoList
    :tasks="
      tasks
        .filter((t) => t.completed)
        .sort((a, b) => {
          return b.updatedAt.getTime() - a.updatedAt.getTime();
        })
    "
  />
</template>
