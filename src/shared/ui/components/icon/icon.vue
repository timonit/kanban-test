<script setup lang="ts">
import * as icons from './icons';

type IconType = 'Cross' | 'Delete' | 'Dots' | 'Edit' | 'Ok' | 'Plus';

const props = defineProps<{
  icon: IconType,
}>();
</script>

<template>
  <component class="icon" :is="icons[props.icon]"></component>
</template>

<style>
</style>
