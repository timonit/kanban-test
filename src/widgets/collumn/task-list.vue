<script setup lang="ts">
import { useTaskStore, type CollumnName } from '@/entities';
import { AddTask, } from '@/features/task';
import { storeToRefs } from 'pinia';
import TaskListItem from './task-list.item.vue';
import { ref } from 'vue';
import { useNotification } from '@/features/notification';
import { COLLUMNS } from '@/shared';

const props = defineProps<{ collumn: CollumnName; }>();

const dropactive = ref(false);
const containerEl = ref<HTMLElement>();
const taskStore = useTaskStore();
const notification = useNotification();
const { getTasksByCollumnName } = storeToRefs(taskStore);

const drop = (event: DragEvent) => {
  const taskID = event.dataTransfer?.getData('text/plain') as string;
  const task = taskStore.getTask(taskID);
  if (task && task.collumn !== props.collumn) {
    taskStore.editTask(taskID, {collumn: props.collumn});
    notification.notify({
      title: `Задача перемещена в «${COLLUMNS[props.collumn]}»`,
      text: taskStore.getTask(taskID)?.text || '',
      type: 'success'
    });
  }
  dropactive.value = false;
}

const dragenter = () => {
  dropactive.value = true;
}

const dragleave = (event: DragEvent) => {
  const relatedTarget = event.relatedTarget as HTMLElement;
  if (containerEl.value?.contains(relatedTarget)) return;

  dropactive.value = false;
}
</script>

<template>
  <div
    ref="containerEl"
    class="task-list"
    :class="{ dropactive }"
    :data-colname="collumn"
    dropzone
    @drop.prevent="drop"
    @dragover.prevent
    @dragenter.self="dragenter"
    @dragleave.self="dragleave"
  >
    <TaskListItem
      v-for="task of getTasksByCollumnName(props.collumn)"
      :key="task.id"
      :task="task">

    </TaskListItem>

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

.task-list.dropactive {
  background: var(--color-gray-light);
}
</style>
