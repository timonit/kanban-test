<script setup lang="ts">
import { Collumn } from '@/widgets/collumn';

</script>

<template>
  <div class="board">
    <Collumn color="var(--color-pink)" collumn="on approval" title="На согласование" />
    <Collumn color="var(--color-blue)" collumn="new" title="Новые" />
    <Collumn color="var(--color-yellow)" collumn="in progress" title="В процессе" />
    <Collumn color="var(--color-green)" collumn="done" title="Готово" />
    <Collumn color="var(--color-red)" collumn="want fix" title="Доработать" />
  </div>
</template>

<style>
.board {
  display: flex;
  gap: 8px;
  justify-content: stretch;
  width: 100%;
  height: 100%;
}
</style>
