<template>
  <select
    :value="modelValue"
    :disabled="disabled"
    :class="{ 'base-select--error': error }"
    class="base-select"
    @change="
      $emit('update:modelValue', ($event.target as HTMLSelectElement).value);
      $emit('change')
    "
  >
    <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
    <option
      v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
    >
      {{ opt.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import type { BaseSelectOption } from '../model/types'

interface BaseSelectProps {
  modelValue: string
  options: BaseSelectOption[]
  placeholder?: string
  error?: boolean
  disabled?: boolean
}

interface BaseSelectEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'change'): void
}

defineProps<BaseSelectProps>()
defineEmits<BaseSelectEmits>()
</script>

<style lang="scss" scoped>
.base-select {
  width: 100%;
  height: $input-height;
  padding: 0 32px 0 12px;
  box-sizing: border-box;
  @include font-size($font-size-base);
  color: $color-text-primary;
  border: 1px solid $color-border-light;
  border-radius: $radius-md;
  outline: none;
  background: rgba($color-bg, 0.92);
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%235c6e61' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  box-shadow: 0 1px 0 rgba(16, 24, 40, 0.02);
  transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;

  &:hover:not(:disabled):not(.base-select--error) {
    border-color: $color-border;
    background: $color-bg;
  }

  &:focus {
    border-color: $color-focus;
    box-shadow: $focus-shadow;
    background: $color-bg;
  }

  &:disabled {
    background-color: $color-border-extra-light;
    color: $color-text-disabled;
    cursor: not-allowed;
  }

  &--error {
    border-color: $color-error;
    background: $color-error-bg;

    &:focus {
      border-color: $color-error;
      box-shadow: 0 0 0 3px rgba(196, 92, 92, 0.18);
    }
  }
}
</style>
