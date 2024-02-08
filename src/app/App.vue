<script setup lang="ts">
import { TaskCard, useTaskStore } from '@/entities/task';
import { Collumn } from '@/widgets/collumn';

const store = useTaskStore();

window.store = store;

store.addTask('asd', 'new');
</script>

<template>
  <main class="content">
    <div class="c">
      <Collumn collumn="in progress" title="На согласование" />
      <Collumn collumn="new" title="Новые" />
      <Collumn collumn="new" title="В процессе" />
      <Collumn collumn="new" title="Готово" />
      <Collumn collumn="new" title="Доработать" />
    </div>
  </main>
</template>

<style scoped>
.c {
  display: flex;
  gap: 8px;
  justify-content: stretch;
  width: 100%;
  height: 100%;
}

.content {
  width: 920px;
  height: 100%;
  padding: 50px 0;
}
</style>
