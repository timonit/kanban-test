<script setup lang="ts">
const props = defineProps<{
  title: string;
  color: string;
}>();
</script>

<template>
  <div class="collumn-head">
    {{ props.title }}
  </div>
</template>

<style>
.collumn-head {
  background-color: v-bind('props.color');
  padding: 7px;
  text-align: center;
  font-weight: var(--font-weight-medium);
}
</style>
