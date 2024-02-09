<script setup lang="ts">
import * as icons from './icons';

type IconType = 'Cross' | 'Delete' | 'Dots' | 'Edit' | 'Ok' | 'Plus';

const props = defineProps<{
  icon: IconType,
  color: string;
}>();
</script>

<template>
  <component class="icon" :is="icons[props.icon]"></component>
</template>

<style>
.icon {
  stroke: v-bind('props.color');
}
</style>
