<script setup lang="ts">
import type { TaskDTO } from '@/entities';
import { Dropdown, DropdownItem, MiniButton, Icon } from '@/shared';
import { TaskCard } from '@/entities';
import { EditTaskForm } from '@/features/task/edit';
import { RemoveDropdownItem } from '@/features/task/remove';
import { ref } from 'vue';

defineProps<{
  task: TaskDTO;
}>();

const isShowForm = ref(false);
</script>

<template>
  <EditTaskForm v-if="isShowForm" :task="task" @edited="isShowForm = false" @cancel="isShowForm = false" />

  <TaskCard v-else :task="task">
    <template v-slot:end>
      <Dropdown>
        <MiniButton class="dropdown-trigger">
          <Icon class="icon" icon="Dots" />
        </MiniButton>
        
        <template v-slot:items>
          <DropdownItem ref="el" class="edit-task-dropdown-item" @click="isShowForm = true">
            <MiniButton>
              <Icon icon="Edit" />
            </MiniButton>
            Редактировать
          </DropdownItem>

          <RemoveDropdownItem :task="task" />
        </template>
      </Dropdown>
    </template>
  </TaskCard>
</template>
