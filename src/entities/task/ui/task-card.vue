<script setup lang="ts">
import { MiniButton } from '@/shared/ui/components'
</script>

<template>
  <div class="task-card">
    <slot></slot>
    <MiniButton>A</MiniButton>
</div>
</template>

<style>
.task-card {
  padding: 8px 24px 8px 8px;
  background: var(--color-white);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border: solid 1px var(--color-gray-light);
}
</style>
