<script setup lang="ts">
import { MiniButton } from '@/shared/ui';
import type { DropdownItemDTO } from './types';

const props = defineProps<{
  item: DropdownItemDTO,
}>();
</script>

<template>
  <div class="dropdown-item">
    <MiniButton v-if="props.item.icon">{{ props.item.icon }}</MiniButton>
    {{ props.item.text }}
  </div>
</template>

<style>
.dropdown-item {
  background: transparent;
  padding: 5px 10px 5px 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.dropdown-item:hover {
  background: #E1F1FF;
}
</style>
