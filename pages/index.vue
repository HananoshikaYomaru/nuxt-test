<script setup lang="ts">
import { ref } from "vue";
import { state } from "@/composables/store";

const value = ref("");
const tasks = ref(state.tasks);

function addTask() {
  tasks.value.push({
    id: tasks.value.length + 1,
    title: value.value,
    completed: false,
    createdAt: new Date(),
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
  <!-- the list of tasks  -->
  <TodoList :tasks="tasks" />
</template>
