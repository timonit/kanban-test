<script setup lang="ts">
import { MiniButton } from '@/shared/ui/components'
import { Dropdown } from '@/shared/ui';
import { ref } from 'vue';
import type { DropdownItemDTO } from '@/shared/ui/components/dropdown';

const itemList = ref<DropdownItemDTO[]>([
  {
    handler(id: string) {
        console.log('aaa', id);
    },
    id: 'sad',
    icon: 'd',
    text: 'ttt a a a a'
  }
])
</script>

<template>
  <div class="task-card">
    <slot></slot>
    <Dropdown :list="itemList" >
      <MiniButton >A</MiniButton>
    </Dropdown>
</div>
</template>

<style>
.task-card {
  padding: 8px 24px 8px 8px;
  background: var(--color-white);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border: solid 1px var(--color-gray-light);
}
</style>
