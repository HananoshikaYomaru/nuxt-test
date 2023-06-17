<template>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="toggleCompleted(task)"
      />
      <span :class="{ completed: task.completed }">{{ task.title }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import { Task } from "@/composables/store";

const props = defineProps({
  tasks: {
    type: Array as PropType<Task[]>,
    required: true,
  },
});

function toggleCompleted(task: Task) {
  task.completed = !task.completed;
  task.updatedAt = new Date();
}
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
