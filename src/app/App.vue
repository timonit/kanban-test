<script setup lang="ts">
import { useTaskStore } from '@/entities';
import { NotifyPortal } from '@/features/notification/ui';
import { Board } from '@/pages';

const store = useTaskStore();

store.addTask('Сделать меню', 'new');
store.addTask('Создать конструктор', 'new');
store.addTask('Реализовать шину', 'new');
store.addTask('Собрать информацию', 'new');
store.addTask('Зарегистрировать приложение', 'in progress');
</script>

<template>
  <main class="content">
    <Board />
    <NotifyPortal />
  </main>
</template>

<style scoped>
.content {
  width: 920px;
  padding-top: 48px;
  padding-bottom: 24px;
  overflow: hidden;
  position: relative;
}
</style>
