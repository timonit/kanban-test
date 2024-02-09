<script setup lang="ts">
import { Icon } from '@/shared';
import type { NotificationDTO } from '..';

const props = defineProps<{
  notification: NotificationDTO
}>()
</script>

<template>
  <div class="notification-card">
    <div class="notification-card__status">
      <Icon icon="Ok" />
    </div>
    <div class="notification-card__content">
      <span class="notification-card__title">
        {{ notification.title }}
      </span>
      <p class="notification-card__text">
        {{ notification.text }}
      </p>
    </div>
    <div class="notification-card__close">
      <Icon icon="Cross" />
    </div>
  </div>
</template>

<style>
.notification-card {
  position: relative;
  width: 400px;
  border: solid 1px var(--color-gray-light);
  border-radius: var(--border-radius-sm);
  border-left: solid 8px var(--color-green);
  background-color: var(--color-white);
  display: flex;
  align-items: flex-start;
}

.notification-card__content {
  padding: 16px 16px 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;
}

.notification-card__title {
  font-weight: var(--font-weight-medium);
}

.notification-card__text {
  padding: 0;
  margin: 0;
}


.notification-card__status {
  width: 24px;
  height: 24px;
  background-color: var(--color-success);
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
}

.notification-card__close > * {
  width: 8px;
  height: 8px;
}
</style>
