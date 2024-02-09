<script setup lang="ts">
import { computed, ref } from 'vue';

const triggerEl = ref<HTMLElement>();
const menuEl = ref<HTMLElement>();
const isShow = defineModel('show');

const dynamicStyle = computed(() => {
  if (!triggerEl.value || !menuEl.value) return;
  
  const position: { top?: string; bottom?: string; right?: string; left?: string; } = {};
  
  const rect = triggerEl.value.getBoundingClientRect();
  if (menuEl.value.clientHeight > (window.innerWidth - rect.right - 5)) {
    position.right = `${window.innerWidth - rect.right}px`;
  } else position.left = `${rect.left}px`;
  
  if (menuEl.value.clientHeight > (window.innerHeight - rect.bottom - 5)) {
    position.bottom = `${window.innerHeight - rect.top}px`;
  } else position.top = `${rect.bottom}px`;

  return position;
});
</script>

<template>
  <span style="height: fit-content; width: fit-content;" ref="triggerEl" @click="isShow = !isShow">
    <slot></slot>
  </span>
  <div class="dropdown-menu" ref="menuEl" v-if="isShow" :style="[dynamicStyle]">
    <slot name="items"></slot>
  </div>
</template>

<style>
.dropdown-menu {
  z-index: 500;
  position: fixed;
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: 4px;
  border: solid 1px var(--color-gray-light);
  padding: 8px 0px;
}
</style>
