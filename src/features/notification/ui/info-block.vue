<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
}>()
</script>

<template>
  <div class="notification-card__content">
    <span class="notification-card__title">
      {{ title }}
    </span>
    <p class="notification-card__text">
      {{ text }}
    </p>
  </div>
</template>

<style>
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
</style>
