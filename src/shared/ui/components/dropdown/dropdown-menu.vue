<script setup lang="ts">
import type { DropdownItemDTO } from './types';
import DropdownItem from './dropdown-item.vue';
import { computed, ref } from 'vue';

const props = defineProps<{
  list: DropdownItemDTO[],
}>();

const triggerEl = ref<HTMLElement>();
const menuEl = ref<HTMLElement>();
const isShow = ref(false);

const dynamicStyle = computed(() => {
  if (!triggerEl.value || !menuEl.value) return;

  const position: { top?: string; bottom?: string; right?: string; left?: string; } = {};

  if (triggerEl.value.offsetLeft > (window.innerWidth - menuEl.value.clientWidth - 5)) {
    position.right = `${window.innerWidth - (triggerEl.value.offsetLeft + triggerEl.value.clientWidth)}px`;
  }
  else position.left = `${triggerEl.value.offsetLeft}px`;

  if (triggerEl.value.offsetTop > (window.innerHeight - menuEl.value.clientHeight - 5)) {
    position.bottom = `${window.innerHeight - triggerEl.value.offsetTop}px`;
  }
  else position.top = `${triggerEl.value.offsetTop + triggerEl.value.clientHeight}px`;

  return position;
});
</script>

<template>
  <span ref="triggerEl" @click="isShow = !isShow">
    <slot></slot>
  </span>
  <div class="dropdown-menu" ref="menuEl" v-if="isShow" :style="[dynamicStyle]">
    <DropdownItem v-for="item of props.list" :key="item.id" :item="item" />
  </div>
</template>

<style>
.dropdown-menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: 4px;
  border: solid 1px var(--color-gray-light);
  padding: 8px 0px;
}
</style>
