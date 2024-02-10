<script setup lang="ts">
import { useNotification } from '..';
import NotificationCard from './notification-card.vue';

const service = useNotification();
</script>

<template>
  <TransitionGroup name="notify-portal" tag="div" class="notify-portal">
      <NotificationCard
        v-for="item of service.notifications"
        :key="item.id"
        :notification="item"
      />
  </TransitionGroup>
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


.notify-portal-enter-active,
.notify-portal-leave-active {
  transition: opacity .5s ease;
}

.notify-portal-enter-to
.notify-portal-leave-from {
  opacity: 1;
}

.notify-portal-enter-from,
.notify-portal-leave-to {
  opacity: 0;
}

</style>
