<script setup lang="ts">
import { useNotification } from '@/features/notification';
import { NotifyPortal } from '@/features/notification/ui';
import { Board } from '@/pages';

const n = useNotification();
window.n = n;
</script>

<template>
  <main class="content">
    <Board />
    <NotifyPortal />
  </main>
</template>

<style scoped>
.content {
  width: 920px;
  padding-top: 48px;
  padding-bottom: 24px;
  overflow: hidden;
  position: relative;
}
</style>
