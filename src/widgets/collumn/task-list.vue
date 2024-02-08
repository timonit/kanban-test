<script setup lang="ts">
import { TaskCard, type TaskDTO } from '@/entities';

const props = defineProps<{
  list: TaskDTO[];
}>();
</script>

<template>
  <div class="task-list">
    <TaskCard v-for="task of props.list" :key="task.id" :task="task" />
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
