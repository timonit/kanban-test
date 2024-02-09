<script setup lang="ts">
import type { TaskDTO } from '@/entities';
import { DropdownItem, MiniButton, Icon, Modal } from '@/shared';
import { ref } from 'vue';
import RemoveConfirmation from './remove-confirmation.vue';

const props = defineProps<{
  task: TaskDTO;
}>();

const showCofirmation = ref(false);
</script>

<template>
  <DropdownItem @click="showCofirmation = true">
    <MiniButton>
      <Icon icon="Delete" />
    </MiniButton>
    Удалить
  </DropdownItem>

  <Modal :show="showCofirmation">
    <RemoveConfirmation :task="task" @removed="showCofirmation = false" @cancel="showCofirmation = false" />
  </Modal>
</template>

<style>
</style>
