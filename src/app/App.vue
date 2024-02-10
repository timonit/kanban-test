<script setup lang="ts">
import { useTaskStore } from '@/entities';
import { NotifyPortal } from '@/features/notification/ui';
import { Board } from '@/pages';

const store = useTaskStore();
window.store = store;

store.addTask('asd', 'new');
store.addTask('devd', 'new');
store.addTask('xxx', 'new');
store.addTask('ttt', 'new');
store.addTask('in', 'in progress');
store.addTask('on', 'in progress');
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
