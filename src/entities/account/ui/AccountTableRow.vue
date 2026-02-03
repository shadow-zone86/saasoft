<template>
  <TransitionGroup
    name="account-cell"
    tag="tr"
    class="account-table-row"
  >
    <template v-for="col in TABLE_COLUMNS_WITH_ACTION" :key="col.key">
      <td
        v-if="shouldShowColumn(col.key)"
        :key="col.key"
        class="account-table-row__cell"
        :class="{
          'account-table-row__cell--action': col.key === 'action',
          'account-table-row__cell--login-stretch': col.key === 'login' && !isLocal,
        }"
        :colspan="getColspan(col.key)"
      >
        <component :is="columnComponents[col.key]" :id="id" />
      </td>
    </template>
  </TransitionGroup>
</template>

<script setup lang="ts">
import type { AccountTableColumnKey } from '../model/types'
import { TABLE_COLUMNS_WITH_ACTION } from '../config/constants'
import { useAccountColumnComponents } from '../lib/injection/accountColumnComponentsInjection'
import { useIsLocalAccount } from '../lib/composables/useIsLocalAccount'

interface AccountTableRowProps {
  id: string
}

const { id } = defineProps<AccountTableRowProps>()
const columnComponents = useAccountColumnComponents()
const isLocal = useIsLocalAccount(id)

function shouldShowColumn(key: AccountTableColumnKey): boolean {
  return key !== 'password' || isLocal.value
}

function getColspan(key: AccountTableColumnKey): number {
  return key === 'login' && !isLocal.value ? 2 : 1
}
</script>

<style lang="scss" scoped>
.account-table-row {
  transition: background 0.2s;

  &:hover {
    background: $color-bg-page;
  }

  &__cell {
    padding: 10px 16px;
    vertical-align: middle;
    border-bottom: 1px solid $color-border-lighter;
    color: $color-text-primary;

    &:not(.account-table-row__cell--action) {
      border-right: 1px solid $color-border-lighter;
    }

    &--action {
      width: 48px;
      text-align: center;
      border-right: none;
    }

    &--login-stretch {
      width: auto;
    }
  }
}

.account-cell-move {
  transition: transform 0.22s ease;
}

.account-cell-enter-active,
.account-cell-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.account-cell-enter-from,
.account-cell-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
