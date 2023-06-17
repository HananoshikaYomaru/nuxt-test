import { reactive } from "vue";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
};

export const state = reactive<{ tasks: Task[] }>({
  tasks: [
    { id: 1, title: "Buy milk", completed: false, createdAt: new Date() },
    { id: 2, title: "Walk the dog", completed: true, createdAt: new Date() },
    { id: 3, title: "Do laundry", completed: false, createdAt: new Date() },
  ],
});
