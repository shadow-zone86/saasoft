<template>
  <button
    :type="type"
    :class="['base-button', `base-button--${variant ?? 'primary'}`]"
    :disabled="disabled"
    :title="title"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface BaseButtonProps {
  type?: 'button' | 'submit'
  variant?: 'primary' | 'primary-icon' | 'default' | 'icon' | 'danger-icon'
  disabled?: boolean
  title?: string
}

interface BaseButtonEmits {
  (e: 'click'): void
}

withDefaults(defineProps<BaseButtonProps>(), {
  type: 'button',
  variant: 'primary',
  disabled: false,
  title: undefined,
})

defineEmits<BaseButtonEmits>()
</script>

<style lang="scss" scoped>
.base-button {
  border: none;
  cursor: pointer;
  @include font-size($font-size-base);
  @include font-weight(500);
  border-radius: $radius-md;
  transition:
    background 0.18s ease,
    color 0.18s ease,
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    opacity 0.18s ease,
    transform 0.18s ease;
  outline: none;
  user-select: none;

  &:focus-visible {
    box-shadow: $focus-shadow;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &--primary {
    height: $input-height;
    padding: 0 15px;
    background: linear-gradient(180deg, $color-primary-light, $color-primary);
    color: $color-bg;
    box-shadow: 0 1px 0 rgba(16, 24, 40, 0.03), 0 6px 14px rgba(74, 124, 89, 0.18);

    &:hover:not(:disabled) {
      background: linear-gradient(180deg, $color-primary, $color-primary-dark);
      transform: translateY(-1px);
      box-shadow: 0 1px 0 rgba(16, 24, 40, 0.03), 0 10px 20px rgba(74, 124, 89, 0.22);
    }

    &:active:not(:disabled) {
      background: color.adjust($color-primary-dark, $lightness: -4%);
      transform: translateY(0);
      box-shadow: 0 1px 0 rgba(16, 24, 40, 0.03), 0 6px 14px rgba(74, 124, 89, 0.16);
    }
  }

  &--default {
    height: $input-height;
    padding: 0 15px;
    background: rgba($color-bg, 0.92);
    color: $color-text-regular;
    border: 1px solid $color-border-light;
    box-shadow: 0 1px 0 rgba(16, 24, 40, 0.02);

    &:hover:not(:disabled) {
      background: $color-bg;
      border-color: $color-border;
      color: $color-text-primary;
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      background: $color-border-extra-light;
      transform: translateY(0);
    }
  }

  &--primary-icon {
    width: $input-height;
    height: $input-height;
    @include flex-center;
    padding: 0;
    background: linear-gradient(180deg, $color-primary-light, $color-primary);
    color: $color-bg;
    box-shadow: 0 1px 0 rgba(16, 24, 40, 0.03), 0 10px 20px rgba(74, 124, 89, 0.18);

    &:hover:not(:disabled) {
      background: linear-gradient(180deg, $color-primary, $color-primary-dark);
      transform: translateY(-1px);
      box-shadow: 0 1px 0 rgba(16, 24, 40, 0.03), 0 14px 28px rgba(74, 124, 89, 0.22);
    }

    &:active:not(:disabled) {
      background: color.adjust($color-primary-dark, $lightness: -4%);
      transform: translateY(0);
    }
  }

  &--icon {
    width: $input-height;
    height: $input-height;
    @include flex-center;
    padding: 0;
    background: rgba($color-bg, 0.92);
    color: $color-text-regular;
    border: 1px solid $color-border-light;
    box-shadow: 0 1px 0 rgba(16, 24, 40, 0.02);

    &:hover:not(:disabled) {
      background: $color-bg;
      border-color: $color-border;
      color: $color-primary;
    }

    &:active:not(:disabled) {
      background: $color-border-extra-light;
    }
  }

  &--danger-icon {
    width: $input-height;
    height: $input-height;
    @include flex-center;
    padding: 0;
    background: rgba($color-bg, 0.65);
    color: $color-text-secondary;
    border: 1px solid transparent;

    &:hover:not(:disabled) {
      background: $color-error-bg;
      color: $color-danger;
      border-color: rgba($color-danger, 0.22);
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      background: rgba($color-danger, 0.15);
      transform: translateY(0);
    }
  }
}
</style>
