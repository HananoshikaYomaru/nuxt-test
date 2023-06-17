<template>
  <div>
    <AtomsTypographyH4 class="my-4">Todo items</AtomsTypographyH4>
    <ul>
      <li
        v-for="task in tasks.sort((a, b) => {
          return b.createdAt.getTime() - a.createdAt.getTime();
        })"
        :key="task.id"
      >
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ completed: task.completed }">{{ task.title }}</span>
      </li>
    </ul>
  </div>
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
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
