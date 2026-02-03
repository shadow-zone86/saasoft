<template>
  <Teleport to="body">
    <Transition name="base-modal">
      <div
        v-if="modelValue"
        class="base-modal"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="title ? 'base-modal-title' : undefined"
      >
        <div class="base-modal__backdrop" aria-hidden="true" @click="close" />
        <div class="base-modal__box" @click.stop>
          <header v-if="title || $slots.title" class="base-modal__header">
            <slot name="title">
              <h2 id="base-modal-title" class="base-modal__title">{{ title }}</h2>
            </slot>
          </header>
          <div class="base-modal__body">
            <slot />
          </div>
          <footer v-if="$slots.footer" class="base-modal__footer">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { watch, onBeforeUnmount } from 'vue'

interface BaseModalProps {
  modelValue: boolean
  title?: string
}

interface BaseModalEmits {
  (e: 'update:modelValue', value: boolean): void
}

const props = defineProps<BaseModalProps>()
const emit = defineEmits<BaseModalEmits>()

function close(): void {
  emit('update:modelValue', false)
}

function onKeydown(e: KeyboardEvent): void {
  if (e.key === 'Escape') close()
}

watch(
  () => props.modelValue,
  (open) => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', onKeydown)
    } else {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeydown)
    }
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style lang="scss" scoped>
.base-modal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-md;
  box-sizing: border-box;
}

.base-modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(15, 20, 18, 0.52);
  backdrop-filter: blur(3px);
  cursor: pointer;
}

.base-modal__box {
  position: relative;
  width: 100%;
  max-width: 420px;
  max-height: calc(100vh - #{$spacing-md * 2});
  display: flex;
  flex-direction: column;
  background: $color-bg;
  border-radius: $radius-lg;
  border: 1px solid rgba($color-border, 0.85);
  box-shadow: $shadow-md;
  overflow: hidden;
}

.base-modal__header {
  padding: 16px 20px;
  border-bottom: 1px solid $color-border-lighter;
  flex-shrink: 0;
}

.base-modal__title {
  margin: 0;
  @include font-size($font-size-lg);
  @include font-weight(600);
  color: $color-text-primary;
}

.base-modal__body {
  padding: 20px;
  overflow-y: auto;
  color: $color-text-regular;
  @include font-size($font-size-base);
}

.base-modal__footer {
  padding: 12px 20px 16px;
  border-top: 1px solid $color-border-lighter;
  display: flex;
  justify-content: flex-end;
  gap: $spacing-sm;
  flex-shrink: 0;
}

.base-modal-enter-active,
.base-modal-leave-active {
  transition: opacity 0.2s ease;

  .base-modal__box {
    transition: transform 0.22s ease, filter 0.22s ease;
  }
}

.base-modal-enter-from,
.base-modal-leave-to {
  opacity: 0;

  .base-modal__box {
    transform: translateY(8px) scale(0.98);
    filter: saturate(0.9);
  }
}
</style>
