<template>
  <Transition name="page-loader-fade">
    <div
      v-if="isLoading"
      class="page-loader"
      role="status"
      aria-live="polite"
      :aria-label="config.logoAlt"
    >
      <div class="page-loader__logo-wrap">
        <img
          :src="config.logoPath"
          :alt="config.logoAlt"
          class="page-loader__logo-bg"
          :style="logoStyle"
        >
        <div
          ref="progressRef"
          class="page-loader__progress"
          :style="{ width: progressWidth }"
        >
          <img
            :src="config.logoPath"
            :alt="config.logoAlt"
            class="page-loader__logo-fg"
            :style="logoFgStyle"
          >
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePageLoader, type PageLoaderConfig } from '@/shared/lib/composables/usePageLoader'

interface PageLoaderProps {
  config?: Partial<PageLoaderConfig>
}

const props = withDefaults(defineProps<PageLoaderProps>(), { config: () => ({}) })

const { isLoading, progressWidth, config, progressRef } = usePageLoader({ config: props.config })

const logoStyle = computed(() => ({
  maxWidth: `${config.logoMaxWidthPx}px`,
  maxHeight: `${config.logoMaxHeightPx}px`,
}))

const logoFgStyle = computed(() => ({
  maxHeight: `${config.logoMaxHeightPx}px`,
}))
</script>

<style lang="scss" scoped>
.page-loader {
  position: fixed;
  inset: 0;
  z-index: 100000;
  @include flex-col(center, center);
  background:
    radial-gradient(900px 460px at 20% 0%, rgba($color-primary, 0.10), transparent 60%),
    radial-gradient(900px 460px at 100% 10%, rgba($color-info, 0.10), transparent 55%),
    $color-bg;
}

.page-loader__logo-wrap {
  position: relative;
  filter: drop-shadow(0 18px 40px rgba(16, 24, 40, 0.16));
}

.page-loader__logo-bg {
  opacity: 0.18;
  filter: grayscale(100%);
  width: auto;
  height: auto;
  display: block;
}

.page-loader__progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
  transition: width 600ms ease-in-out;
}

.page-loader__logo-fg {
  max-width: none;
  vertical-align: middle;
  width: auto;
  height: auto;
}

.page-loader-fade-enter-active,
.page-loader-fade-leave-active {
  transition: opacity 800ms ease-in-out;
}

.page-loader-fade-leave-to {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
</style>

