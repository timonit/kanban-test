<script setup lang="ts">
import type { TaskDTO } from '@/entities';
import { Dropdown, DropdownItem, MiniButton, Icon } from '@/shared';
import { TaskCard } from '@/entities';
import { EditTaskForm } from '@/features/task/edit';
import { ref } from 'vue';
import RemoveConfirmation from '@/features/task/remove/ui/remove-confirmation.vue';

const props = defineProps<{
  task: TaskDTO;
}>();

const isShowForm = ref(false);
const dropdownIsShow = ref(false);
const removeConfirmationIsShow = ref(false);

const dragstart = (event: DragEvent) => {
  event.dataTransfer?.setData('text/plain', props.task.id);
}
</script>

<template>
  <RemoveConfirmation
    v-model:show="removeConfirmationIsShow"
    :task="task"
  />

  <EditTaskForm
    v-if="isShowForm"
    :task="task"
    @edited="isShowForm = false"
    @cancel="isShowForm = false"
  />

  <TaskCard v-else :task="task" draggable="true" @dragstart="dragstart">
    <template v-slot:end>
      <Dropdown v-model:show="dropdownIsShow">
        <MiniButton class="dropdown-trigger">
          <Icon class="icon" icon="Dots" />
        </MiniButton>

        <template v-slot:items>
          <DropdownItem @click="isShowForm = true, dropdownIsShow = false">
            <MiniButton>
              <Icon icon="Edit" />
            </MiniButton>
            Редактировать
          </DropdownItem>

          <DropdownItem @click="removeConfirmationIsShow = true, dropdownIsShow = false">
            <MiniButton>
              <Icon icon="Delete" />
            </MiniButton>
            Удалить
          </DropdownItem>
        </template>
      </Dropdown>
    </template>
  </TaskCard>
</template>
