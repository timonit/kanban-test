<script setup lang="ts">
import { useTaskStore, type TaskDTO } from '@/entities';
import { defineEmits } from 'vue';

const props = defineProps<{
  task: TaskDTO;
}>();

const emit = defineEmits<{(e: 'removed', id: string): void; (e: 'cancel'): void}>();
const taskStore = useTaskStore();

const removeHandler = () => {
  taskStore.removeTaskByID(props.task.id);
  emit('removed', props.task.id);
}

const cancel = () => {
  emit('cancel');
}
</script>

<template>
  <div class="remove-confirmation">
    <span class="remove-confirmation__title">Удалить задачу ?</span>
    <p class="remove-confirmation__text">{{ task.text }}</p>
    <div class="remove-confirmation__toolbar">
      <button class="remove-confirmation__btn" @click="removeHandler">Удалить</button>
      <button class="remove-confirmation__btn" @click="cancel">Отменить</button>
    </div>
  </div>
</template>

<style>
.remove-confirmation {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
}

.remove-confirmation__title {
  font-size: 24px;
  font-weight: var(--font-weight-md);
}

.remove-confirmation__text {
  padding: 0;
  margin: 0;
}

.remove-confirmation__toolbar {
  display: flex;
  gap: 16px;
  width: 100%;
}

.remove-confirmation__btn {
  border: solid 1px var(--color-border);
  border-radius: var(--border-radius-sm);
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background: transparent;
  cursor: pointer;
}
</style>
