<script setup lang="ts">
import { useTaskStore, type CollumnName } from '@/entities';
import { Icon, MiniButton } from '@/shared';
import { ref } from 'vue';

const props = defineProps<{
  collumn: CollumnName;
}>();
const emit = defineEmits<{ (e: 'created'): void; (e: 'cancel'): void; }>();

const taskStore = useTaskStore();
const text = ref<string>('');

const create = () => {
  if (text.value.trim()) {
    taskStore.addTask(text.value, props.collumn);
    emit('created');
  } else emit('cancel');

  text.value = '';
};

const cancel = () => {
  emit('cancel');
  text.value = '';
}
</script>

<template>
  <form class="add-task-form" @submit.prevent="create">
    <textarea class="add-task-form__text" placeholder="Введите текст..." name="text" v-model="text">
    </textarea>

    <div>
      <MiniButton type="submit" class="success">
        <Icon icon="Ok" />
      </MiniButton>

      <MiniButton @click.prevent="cancel" class="cancel">
        <Icon icon="Cross" />
      </MiniButton>
    </div>
  </form>
</template>

<style>
.add-task-form {
  width: 100%;
  display: flex;
  padding: 8px;
  border-radius: var(--border-radius-sm);
  background: var(--color-white);
  border: solid 1px var(--color-blue);
  box-sizing: border-box;
}

.add-task-form__text {
  width: 100%;
  border: none;
}

.add-task-form__text::placeholder {
  color: var(--color-placeholder);
}

.success>* {
  stroke: var(--color-success);
}

.cancel>* {
  stroke: var(--color-danger);
}
</style>
