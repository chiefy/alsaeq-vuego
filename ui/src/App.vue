<script setup lang="ts">
import { RouterView } from 'vue-router'
import EqualizerApp from './components/EqualizerApp.vue'

</script>

<template>
    <div class="wrapper">
      <EqualizerApp />
    </div>
  <RouterView />
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
}
</style>
