<script setup lang="ts">
import { MiniButton } from '@/shared/ui/components'
import { Dropdown } from '@/shared/ui';
import { h, ref } from 'vue';
import type { DropdownItemDTO } from '@/shared/ui/components/dropdown';
import type { TaskDTO } from '..';
import { Icon } from '@/shared/ui';

const props = defineProps<{
  task: TaskDTO
}>();

const itemList = ref<DropdownItemDTO[]>([
  {
    handler(item: DropdownItemDTO) {
      console.log('aaa', item);
    },
    id: 'sad',
    icon: h(Icon, {icon: 'Edit'}),
    text: 'Редактировать'
  },
  {
    handler(item: DropdownItemDTO) {
      console.log('aaa', item);
    },
    id: 'sd',
    icon: h(Icon, {icon: 'Delete'}),
    text: 'Удалить'
  },
])
</script>

<template>
  <div class="task-card">
    <div class="task-card__text">
      {{ props.task.text }}
    </div>
    <slot></slot>
    <slot name="end"></slot>
    <!-- <Dropdown :list="itemList" >
      <MiniButton class="dropdown-trigger">
        <Icon class="icon" icon="Dots" />
      </MiniButton>
    </Dropdown> -->
</div>
</template>

<style>
.task-card {
  position: relative;
  background: var(--color-white);
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border: solid 1px var(--color-gray-light);
}

.task-card__text {
  padding: 8px 0 8px 8px;
}

.dropdown-trigger {
  margin: 4px;
}

.dropdown-trigger:hover .icon {
  stroke: var(--color-blue);
}
</style>
