<template>
  <tr class="accounts-table-header">
    <th
      v-for="col in TABLE_COLUMNS_WITH_ACTION"
      :key="col.key"
      class="accounts-table-header__th"
      :class="{ 'accounts-table-header__th--action': col.key === 'action' }"
    >
      {{ col.label }}
    </th>
  </tr>
</template>

<script setup lang="ts">
import { TABLE_COLUMNS_WITH_ACTION } from '../config/constants'
</script>

<style lang="scss" scoped>
.accounts-table-header {
  &__th {
    padding: 12px 16px;
    @include font-size($font-size-sm);
    @include font-weight(600);
    color: $color-text-regular;
    text-align: left;
    background: $color-border-extra-light;
    border-bottom: 1px solid $color-border-light;
    white-space: nowrap;

    &:not(:last-child) {
      border-right: 1px solid $color-border-lighter;
    }

    &--action {
      width: 48px;
      text-align: center;
      border-right: none;
    }
  }
}
</style>
