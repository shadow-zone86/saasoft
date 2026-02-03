<template>
  <div class="app">
    <PageLoader />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { PageLoader } from '@/shared/ui'
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  font-family: $font-family-base;
  color: $color-text-primary;
}
</style>
