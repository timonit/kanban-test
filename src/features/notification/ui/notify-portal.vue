<script setup lang="ts">
import type { NotificationDTO } from '..';
import NotificationCard from './notification-card.vue';

const n: NotificationDTO = {
  id: 'asd',
  text: 'laram tararam now not ypu a',
  title: 'Title',
  type: 'error'
}
</script>

<template>
  <div class="notify-portal">
    <NotificationCard :notification="n" />
  </div>
</template>

<style>
.notify-portal {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 24px;
}
</style>
