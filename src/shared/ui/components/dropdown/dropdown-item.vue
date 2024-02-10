<script setup lang="ts">
</script>

<template>
  <div class="dropdown-item">
    <slot></slot>
  </div>
</template>

<style>
.dropdown-item {
  background: transparent;
  padding: 5px 10px 5px 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  text-wrap: nowrap;
}

.dropdown-item:hover {
  background: #E1F1FF;
}
</style>
