<script setup lang="ts">
import { useTaskStore } from '@/entities/task';
import { Board } from '@/pages';

const store = useTaskStore();

window.store = store;

store.addTask('asd', 'new');
store.addTask('in progress', 'in progress');
store.addTask('done', 'done');
store.addTask('fix', 'want fix');
</script>

<template>
  <main class="content">
    <Board />
  </main>
</template>

<style scoped>
.content {
  width: 920px;
  padding-top: 48px;
  padding-bottom: 24px;
  overflow: hidden;
}
</style>
