<script setup lang="ts">
import { useTaskStore, type TaskDTO } from '@/entities';
import { useNotification } from '@/features/notification';
import { Modal } from '@/shared';

const props = defineProps<{
  task: TaskDTO;
}>();
const show = defineModel('show');

const taskStore = useTaskStore();
const notification = useNotification();

const removeHandler = () => {
  taskStore.removeTaskByID(props.task.id);
  notification.notify({
    title: 'Задача удалена',
    text: props.task.text,
    type: 'success'
  });
  show.value = false;
}
</script>

<template>
  <Modal v-model:show="show">
    <div class="remove-confirmation">
      <span class="remove-confirmation__title">Удалить задачу ?</span>
      <p class="remove-confirmation__text">{{ task.text }}</p>
      <div class="remove-confirmation__toolbar">
        <button class="remove-confirmation__btn" @click="removeHandler">Удалить</button>
        <button class="remove-confirmation__btn" @click="show = false">Отменить</button>
      </div>
    </div>
  </Modal>
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
