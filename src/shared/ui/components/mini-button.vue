<script setup lang="ts">
</script>

<template>
  <button class="mini-button">
    <slot></slot>
  </button>
</template>

<style>
.mini-button {
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: none;
  background: transparent;
  color: var(--color-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.mini-button:hover {
  color: var(--color-blue);
}
</style>
