<script setup lang="ts">
import { TaskCard, useTaskStore, type CollumnName, type TaskDTO } from '@/entities';
import { AddTask } from '@/features/task';
import { storeToRefs } from 'pinia';

const props = defineProps<{
  collumn: CollumnName;
}>();

const taskStore = useTaskStore();
const { getTasksByCollumnName } = storeToRefs(taskStore);
</script>

<template>
  <div class="task-list">
    <TaskCard v-for="task of getTasksByCollumnName(props.collumn)" :key="task.id" :task="task" />
    <AddTask :collumn="collumn" />
  </div>
</template>

<style>
.task-list {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 8px;
  padding: 8px;
  background: var(--color-white-dark)
}
</style>
