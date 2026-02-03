<template>
  <div class="accounts-list">
    <div v-if="formRows.length > 0" class="accounts-list__table-wrap">
      <table class="accounts-list__table">
        <thead>
          <AccountsTableHeader />
        </thead>
        <TransitionGroup
          name="account-row"
          tag="tbody"
          class="accounts-list__tbody"
        >
          <AccountTableRow
            v-for="row in formRows"
            :key="row.id"
            :id="row.id"
          />
        </TransitionGroup>
      </table>
    </div>
    <AccountsEmpty v-else />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import {
  AccountTableRow,
  AccountsEmpty,
  AccountsTableHeader,
  ACCOUNT_COLUMN_COMPONENTS_KEY,
  useAccountsRepository,
  VALIDATE_ACCOUNT_KEY,
} from '@/entities/account'
import { ACCOUNT_COLUMN_COMPONENTS } from '../lib/accountTableConfig'
import { validateAccount } from '../lib/validateAccount'

const repo = useAccountsRepository()
provide(VALIDATE_ACCOUNT_KEY, validateAccount)
provide(ACCOUNT_COLUMN_COMPONENTS_KEY, ACCOUNT_COLUMN_COMPONENTS)

const formRows = computed(() => repo.formRows)
</script>

<style lang="scss" scoped>
.accounts-list {
  &__table-wrap {
    overflow-x: auto;
    border: 1px solid rgba($color-border, 0.8);
    border-radius: 12px;
    background: rgba($color-bg, 0.95);
    box-shadow: $shadow-sm;
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  &__tbody {
    position: relative;
  }
}

.account-row-leave-active {
  pointer-events: none;
}

.account-row-move {
  transition: transform 0.3s ease;
}

.account-row-enter-active > td,
.account-row-leave-active > td {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.account-row-enter-from > td {
  opacity: 0;
  transform: translateY(-12px);
}

.account-row-leave-to > td {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
