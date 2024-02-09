<script setup lang="ts">
import { computed } from 'vue';
import type { NotificationDTO } from '..';
import { Icon } from '@/shared';

const props = defineProps<{
  type: NotificationDTO['type'],
}>();

const color = computed(() => {
  return props.type === 'success' ?
    'var(--color-success)' :
    'var(--color-danger)';
})
</script>

<template>
  <div class="notification-card__status">
    <Icon :icon="type === 'success' ? 'Ok' : 'Cross'" />
  </div>
</template>

<style>
.notification-card__status {
  width: 24px;
  height: 24px;
  background-color: v-bind('color');
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px;
  flex-grow: 0;
  flex-shrink: 0;
}

.notification-card__status > * {
  stroke: var(--color-white);
  width: 14px;
  height: 14px;
}
</style>
