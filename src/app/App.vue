<script setup lang="ts">
import { useTaskStore } from '@/entities';
import { onMounted } from 'vue';

const taskStore = useTaskStore();

console.log('taskStore', taskStore);
onMounted(() => {
  window.taskStore = taskStore;
});
</script>

<template>
  <header>
  </header>

  <main>
  </main>
</template>

<style scoped>
</style>
