<template>
  <div class="accounts-page">
    <div class="accounts-page__content">
      <AccountsHeader />
      <AccountsHint />
      <AccountsList />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AccountsHeader } from '@/widgets/accounts-header'
import { AccountsHint } from '@/widgets/accounts-hint'
import { AccountsList } from '@/widgets/accounts-list'
</script>

<style lang="scss" scoped>
.accounts-page {
  min-height: 100vh;
  background: transparent;

  &__content {
    max-width: 960px;
    @include margin-x(auto);
    @include margin($top: $spacing-xl);
    @include padding-all($spacing-lg);
    background: rgba($color-bg, 0.78);
    border: 1px solid rgba($color-border, 0.75);
    border-radius: 14px;
    box-shadow: $shadow-sm;
    backdrop-filter: blur(6px);
  }
}
</style>
