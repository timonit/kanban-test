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
  <main class="content">
    В процессе
  </main>
</template>

<style scoped>
.content {
  width: 920px;
  height: 100%;
  padding: 50px 0;
  background-color: rgb(50, 50, 50);
}
</style>
