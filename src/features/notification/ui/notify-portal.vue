<script setup lang="ts">
import { useNotification } from '..';
import NotificationCard from './notification-card.vue';

const service = useNotification();
</script>

<template>
  <div class="notify-portal">
    <NotificationCard
      v-for="item of service.notifications"
      :key="item.id"
      :notification="item"
    />
  </div>
</template>

<style>
.notify-portal {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
