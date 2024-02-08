<script setup lang="ts">
import { TaskCard } from '@/entities/task';
</script>

<template>
  <main class="content">
    <TaskCard>Задача</TaskCard>
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
