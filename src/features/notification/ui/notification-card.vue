<script setup lang="ts">
import type { NotificationDTO } from '../model';
import CloseBtn from './close-btn.vue';
import StatusIcon from './status-icon.vue';
import InfoBlock from './info-block.vue';

const props = defineProps<{
  notification: NotificationDTO
}>();
</script>

<template>
  <div class="notification-card" :class="{error: props.notification.type === 'error' }">
    <StatusIcon :type="notification.type" />
    <InfoBlock :title="notification.title" :text="notification.text" />
    <CloseBtn :id="notification.id" />
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
  box-shadow: var(--box-shadow-sm);
}

.notification-card.error {
  border-left: solid 8px var(--color-danger);
}
</style>
