<script setup lang="ts">
import { Icon } from '..';

const show = defineModel('show');
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="modal">
      <div class="modal__body">
        <div class="modal__main">
          <div class="close-btn" @click="show = false">
            <Icon icon="Cross" />
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
    <div v-if="show" class="backdrop"></div>
  </Teleport>
</template>

<style>
.modal {
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  z-index: 5000;
}

.backdrop {
  z-index: 4000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: .6;
}

.modal__body {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  /* background: black;
  opacity: .6; */
}

.modal__main {
  position: relative;
  background: white;
  width: 500px;
  box-sizing: border-box;
  padding: 24px 40px 40px 40px;
  border-radius: var(--border-radius-md);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  margin: 16px;
  padding: 6px;
  box-sizing: border-box;
  cursor: pointer;
}

.close-btn > * {
  width: 12px;
  height: 12px;
}
</style>
