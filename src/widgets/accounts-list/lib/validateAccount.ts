import type { AccountFormRow, AccountValidationErrors } from '@/entities/account'
import { ACCOUNT_TABLE_COLUMNS } from '@/entities/account'
import { ACCOUNT_FIELD_VALIDATORS } from './accountTableConfig'

export function validateAccount(row: AccountFormRow): AccountValidationErrors {
  const errors: AccountValidationErrors = {}
  for (const col of ACCOUNT_TABLE_COLUMNS) {
    const validator = ACCOUNT_FIELD_VALIDATORS[col.key]
    if (validator) {
      const err = validator(row)
      if (err) errors[col.key] = err
    }
  }
  return errors
}
