<script setup lang="ts">
import { useTaskStore, type TaskDTO } from '@/entities';
import { useNotification } from '@/features/notification';
import { COLLUMNS, Icon, MiniButton } from '@/shared';
import { onMounted, ref } from 'vue';

const props = defineProps<{
  task: TaskDTO
}>();
const emit = defineEmits<{ (e: 'edited'): void; (e: 'cancel'): void; }>();

const taskStore = useTaskStore();
const notification = useNotification();
const text = ref<string>(props.task.text);
const textEl = ref<HTMLFormElement>();

const edit = () => {
  if (text.value.trim()) {
    taskStore.editTask(props.task.id, {text: text.value});
    notification.notify({
      title: `Задача в «${COLLUMNS[props.task.collumn]}» была изменена`,
      text: text.value,
      type: 'success'
    });
    emit('edited');
  } else emit('cancel');
};

const cancel = () => {
  emit('cancel');
  text.value = '';
}

const input = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;

  if (target.scrollHeight > target.clientHeight) {
    target.rows = target.rows + 1;
  }
}

onMounted(() => {
  textEl.value?.focus();
})
</script>

<template>
  <form class="edit-task-form" @submit.prevent="edit">
    <textarea ref="textEl" class="edit-task-form__text" @input="input" placeholder="Введите текст..." name="text" v-model="text">
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
.edit-task-form {
  width: 100%;
  display: flex;
  padding: 8px;
  border-radius: var(--border-radius-sm);
  background: var(--color-white);
  border: solid 1px var(--color-blue);
  box-sizing: border-box;
}

.edit-task-form__text {
  width: 100%;
  min-height: 36px;
  resize: none;
  border: none;
}

.edit-task-form__text::placeholder {
  color: var(--color-placeholder);
}

.edit-task-form__text:focus {
  border: none;
  outline: none;
}

.success>* {
  stroke: var(--color-success);
}

.cancel>* {
  stroke: var(--color-danger);
}
</style>
