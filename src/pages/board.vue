<script setup lang="ts">
import { Collumn } from '@/widgets/collumn';

</script>

<template>
  <div class="board">
    <Collumn color="var(--color-pink)" collumn="on approval" />
    <Collumn color="var(--color-blue)" collumn="new" />
    <Collumn color="var(--color-yellow)" collumn="in progress" />
    <Collumn color="var(--color-green)" collumn="done" />
    <Collumn color="var(--color-red)" collumn="want fix" />
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
