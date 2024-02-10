<script setup lang="ts">
import { useTaskStore, type CollumnName } from '@/entities';
import { useNotification } from '@/features/notification';
import { COLLUMNS, Icon, MiniButton } from '@/shared';
import { onMounted, ref } from 'vue';

const props = defineProps<{
  collumn: CollumnName;
}>();
const emit = defineEmits<{ (e: 'created'): void; (e: 'cancel'): void; }>();

const taskStore = useTaskStore();
const notification = useNotification();
const text = ref<string>('');
const textEl = ref<HTMLFormElement>();

const create = () => {
  if (text.value.trim()) {
    taskStore.addTask(text.value, props.collumn);
    notification.notify({
      title: `Задача создана в «${COLLUMNS[props.collumn]}»`,
      text: text.value,
      type: 'success'
    });
    emit('created');
  } else emit('cancel');

  text.value = '';
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
  <form class="add-task-form" @submit.prevent="create">
    <textarea ref="textEl" class="add-task-form__text" @input="input" placeholder="Введите текст..." name="text" v-model="text">
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
  min-height: 36px;
  resize: none;
  border: none;
  padding: 0;
}

.add-task-form__text::placeholder {
  color: var(--color-placeholder);
}

.add-task-form__text:focus {
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
