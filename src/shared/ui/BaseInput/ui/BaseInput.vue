<template>
  <input
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :maxlength="maxlength"
    :class="{ 'base-input--error': error }"
    class="base-input"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    @blur="$emit('blur')"
  />
</template>

<script setup lang="ts">
interface BaseInputProps {
  modelValue: string
  type?: 'text' | 'password'
  placeholder?: string
  error?: boolean
  disabled?: boolean
  maxlength?: number
}

interface BaseInputEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'blur'): void
}

withDefaults(defineProps<BaseInputProps>(), {
  type: 'text',
  placeholder: undefined,
  error: false,
  disabled: false,
  maxlength: undefined,
})

defineEmits<BaseInputEmits>()
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  height: $input-height;
  padding: 7px 12px;
  box-sizing: border-box;
  @include font-size($font-size-base);
  color: $color-text-primary;
  background: rgba($color-bg, 0.92);
  border: 1px solid $color-border-light;
  border-radius: $radius-md;
  outline: none;
  box-shadow: 0 1px 0 rgba(16, 24, 40, 0.02);
  transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;

  &::placeholder {
    color: $color-text-placeholder;
  }

  &:hover:not(:disabled):not(.base-input--error) {
    border-color: $color-border;
    background: $color-bg;
  }

  &:focus {
    border-color: $color-focus;
    box-shadow: $focus-shadow;
    background: $color-bg;
  }

  &:disabled {
    background: $color-border-extra-light;
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
