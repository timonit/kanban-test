<script setup lang="ts">
import { useNotification } from '..';
import { Icon } from '@/shared';

defineProps<{id: string;}>()
const service = useNotification();

</script>

<template>
  <div class="notification-card__close" @click="service.removeNotification(id)">
    <Icon icon="Cross" />
  </div>
</template>

<style>
.notification-card__close {
  padding: 4px;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  justify-self: flex-end;
  position: absolute;
  margin: 8px;
  top: 0;
  right: 0;
  cursor: pointer;
}

.notification-card__close > * {
  width: 8px;
  height: 8px;
}

.notification-card__close:hover > * {
  stroke: var(--color-blue);
}
</style>
