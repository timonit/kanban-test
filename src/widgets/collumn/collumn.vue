<script setup lang="ts">
import { useTaskStore, type CollumnName } from '@/entities/task';
import TaskList from './task-list.vue';
import CollumnHead from './collumn-head.vue';
import { storeToRefs } from 'pinia';

const props = defineProps<{
  collumn: CollumnName;
  title: string;
}>()

const taskStore = useTaskStore();
const { getTasksByCollumnName } = storeToRefs(taskStore);
</script>

<template>
  <div class="collumn">
    <CollumnHead :title="props.title" color="red" />
    <TaskList :list="getTasksByCollumnName(props.collumn)" />
  </div>
</template>

<style>
.collumn {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
}
</style>
