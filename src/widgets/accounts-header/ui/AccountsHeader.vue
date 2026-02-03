<template>
  <header class="accounts-header">
    <h1 class="accounts-header__title">{{ props.title }}</h1>
    <AddAccountButton />
  </header>
</template>

<script setup lang="ts">
import { AddAccountButton } from '@/features/add-account'

interface AccountsHeaderProps {
  title?: string
}

const props = withDefaults(defineProps<AccountsHeaderProps>(), {
  title: 'Учетные записи',
})
</script>

<style lang="scss" scoped>
.accounts-header {
  @include flex-row(center, flex-start, $spacing-sm);
  @include margin($bottom: $spacing-md);
  @include padding($spacing-sm, $spacing-sm, $spacing-sm, $spacing-sm);
  border-bottom: 1px solid rgba($color-border, 0.65);

  &__title {
    margin: 0;
    @include font-size($font-size-xl);
    @include font-weight(700);
    color: $color-text-primary;
    letter-spacing: -0.01em;
  }
}
</style>
