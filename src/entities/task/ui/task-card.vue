<script setup lang="ts">
import type { TaskDTO } from '..';

const props = defineProps<{
  task: TaskDTO
}>();
</script>

<template>
  <div class="task-card">
    <div class="task-card__text">
      {{ props.task.text }}
    </div>
    <slot></slot>
    <slot name="end"></slot>
</div>
</template>

<style>
.task-card {
  position: relative;
  background: var(--color-white);
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border: solid 1px var(--color-gray-light);
}

.task-card__text {
  padding: 8px 0 8px 8px;
}

.dropdown-trigger {
  margin: 4px;
}

.dropdown-trigger:hover .icon {
  stroke: var(--color-blue);
}
</style>
