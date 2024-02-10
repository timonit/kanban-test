<script setup lang="ts">
import { ref } from 'vue';
import AddTaskForm from './add-task-form.vue';
import type { CollumnName } from '@/entities';
import { Icon } from '@/shared';

defineProps<{
  collumn: CollumnName
}>();

const isShowForm = ref(false);

const showForm = () => {
  isShowForm.value = true;
}

const hideForm = () => {
  isShowForm.value = false;
}

const toggle = () => {
  if (isShowForm.value) hideForm();
  else showForm();
}
</script>

<template>
  <div class="add-task" v-show="!isShowForm" @click="toggle">
    <div class="add-task__icon">
      <Icon class="" icon="Plus" />
    </div>
    <span>
      Добавить
    </span>
  </div>
  <AddTaskForm
    v-if="isShowForm"
    :collumn="collumn"
    @created="hideForm"
    @cancel="hideForm" />
</template>

<style>
.add-task {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--color-blue);
  cursor: pointer;
}

.add-task__icon {
  width: 20px;
  height: 20px;
  padding: 4.17px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.add-task__icon > * {
  width: 11.67px;
  height: 11.67px;
}
</style>
