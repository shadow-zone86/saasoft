import type { Component } from 'vue'
import type { AccountCellField, AccountFormRow, AccountTableColumnKey } from '@/entities/account'
import { AccountCellLabels } from '@/features/account-cell-labels'
import { AccountCellType } from '@/features/account-cell-type'
import { AccountCellLogin } from '@/features/account-cell-login'
import { AccountCellPassword } from '@/features/account-cell-password'
import { AccountCellDelete } from '@/features/account-cell-delete'
import { validateLabels } from '@/features/account-cell-labels'
import { validateLogin } from '@/features/account-cell-login'
import { validatePassword } from '@/features/account-cell-password'

export const ACCOUNT_FIELD_VALIDATORS: Record<
  AccountCellField,
  (row: AccountFormRow) => string | undefined
> = {
  labels: (row) => validateLabels(row.labels),
  type: () => undefined,
  login: (row) => validateLogin(row.login),
  password: (row) => validatePassword(row.password, row.type),
}

export const ACCOUNT_COLUMN_COMPONENTS: Record<AccountTableColumnKey, Component> = {
  labels: AccountCellLabels,
  type: AccountCellType,
  login: AccountCellLogin,
  password: AccountCellPassword,
  action: AccountCellDelete,
}
