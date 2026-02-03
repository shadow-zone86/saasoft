<template>
  <div class="accounts-empty">
    <div class="accounts-empty__icon" aria-hidden="true">🗂</div>
    <p class="accounts-empty__text">
      {{ props.text }}
    </p>
    <p class="accounts-empty__subtext">
      Совет: метки можно вводить через <span class="accounts-empty__kbd">;</span>
    </p>
  </div>
</template>

<script setup lang="ts">
interface AccountsEmptyProps {
  text?: string
}

const props = withDefaults(defineProps<AccountsEmptyProps>(), {
  text: 'Нет учётных записей. Нажмите «+», чтобы добавить.',
})
</script>

<style lang="scss" scoped>
.accounts-empty {
  @include margin($top: $spacing-md);
  @include padding($spacing-lg, $spacing-lg, $spacing-lg, $spacing-lg);
  text-align: center;
  background: rgba($color-bg, 0.9);
  border: 1px dashed rgba($color-border, 0.95);
  border-radius: 12px;
  box-shadow: $shadow-xs;

  &__icon {
    width: 44px;
    height: 44px;
    @include margin-x(auto);
    @include margin($bottom: $spacing-sm);
    @include flex-center;
    border-radius: 14px;
    background: rgba($color-primary, 0.10);
    color: $color-primary-dark;
    font-size: 1.2rem;
  }

  &__text {
    margin: 0;
    @include font-size($font-size-base);
    color: $color-text-regular;
  }

  &__subtext {
    margin: $spacing-xs 0 0;
    @include font-size($font-size-sm);
    color: $color-text-placeholder;
  }

  &__kbd {
    display: inline-block;
    padding: 0 6px;
    border: 1px solid rgba($color-border, 0.85);
    border-radius: 6px;
    background: rgba($color-border-extra-light, 0.9);
    color: $color-text-secondary;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    line-height: 1.4;
  }
}
</style>
