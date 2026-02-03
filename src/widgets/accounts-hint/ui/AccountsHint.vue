<template>
  <p class="accounts-hint">
    <span class="accounts-hint__icon" aria-hidden="true">?</span>
    {{ props.text }}
  </p>
</template>

<script setup lang="ts">
interface AccountsHintProps {
  text?: string
}

const props = withDefaults(defineProps<AccountsHintProps>(), {
  text: 'Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;',
})
</script>

<style lang="scss" scoped>
.accounts-hint {
  @include flex-row(stretch, flex-start, $spacing-xs);
  align-items: flex-start;
  @include margin($bottom: $spacing-md);
  @include padding($spacing-sm, $spacing-md, $spacing-sm, $spacing-md);
  @include font-size($font-size-base);
  color: $color-text-secondary;
  background: rgba($color-bg, 0.85);
  border-radius: 12px;
  border: 1px solid rgba($color-border, 0.75);
  box-shadow: $shadow-xs;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    bottom: 10px;
    width: 3px;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba($color-primary, 0.95), rgba($color-primary, 0.35));
  }

  &__icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    @include flex-center;
    @include font-size($font-size-xs);
    @include font-weight(600);
    color: $color-primary-dark;
    background: rgba($color-primary, 0.12);
    border-radius: 50%;
  }
}
</style>
