<template>
  <div class="password-input">
    <BaseInput
      :model-value="modelValue"
      :type="visible ? 'text' : 'password'"
      :placeholder="placeholder"
      :error="error"
      :disabled="disabled"
      :maxlength="maxlength"
      class="password-input__field"
      @update:model-value="$emit('update:modelValue', $event)"
      @blur="$emit('blur')"
    />
    <button
      type="button"
      class="password-input__toggle"
      :title="visible ? 'Скрыть пароль' : 'Показать пароль'"
      tabindex="-1"
      @click="visible = !visible"
    >
      <span v-if="visible" class="password-input__icon" aria-hidden="true">👁</span>
      <span v-else class="password-input__icon password-input__icon--hidden" aria-hidden="true">👁‍🗨</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '../../BaseInput/ui/BaseInput.vue'

interface PasswordInputProps {
  modelValue: string
  placeholder?: string
  error?: boolean
  disabled?: boolean
  maxlength?: number
}

interface PasswordInputEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'blur'): void
}

defineProps<PasswordInputProps>()
defineEmits<PasswordInputEmits>()

const visible = ref<boolean>(false)
</script>

<style lang="scss" scoped>
.password-input {
  position: relative;
  width: 100%;

  &__field {
    padding-right: 40px;
  }

  &__toggle {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba($color-bg, 0.75);
    border: none;
    border-radius: $radius-sm;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
    color: $color-text-secondary;
    transition: color 0.18s ease, background 0.18s ease, transform 0.18s ease;

    &:hover {
      color: $color-primary;
      background: $color-border-extra-light;
      transform: translateY(-50%) scale(1.04);
    }

    &:active {
      transform: translateY(-50%) scale(0.98);
    }
  }

  &__icon--hidden {
    opacity: 0.6;
  }
}
</style>
