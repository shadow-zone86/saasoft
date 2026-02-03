import type { Ref } from 'vue'
import { ref, watch } from 'vue'
import { ACCOUNT_CELL_FIELD_DEFAULTS } from '../../config/constants'
import { useAccountsRepository } from '../repository/accountsRepository'
import type { AccountCellField, AccountFormRow } from '../../model/types'
import { useValidateAccount } from '../injection/validateAccountInjection'

export function useAccountCellField(
  id: string,
  field: AccountCellField
): {
  value: Ref<AccountFormRow[AccountCellField]>
  error: Ref<string | undefined>
  save: () => void
} {
  const repo = useAccountsRepository()
  const validateAccountFn = useValidateAccount()
  const row = repo.getFormRowById(id)
  const initial = row?.[field] ?? ACCOUNT_CELL_FIELD_DEFAULTS[field]
  const value = ref<AccountFormRow[AccountCellField]>(initial) as Ref<AccountFormRow[AccountCellField]>
  const error = ref<string | undefined>(undefined)

  function save(): void {
    const currentRow = repo.getFormRowById(id)
    if (!currentRow) return
    const updated: AccountFormRow = { ...currentRow, [field]: value.value }
    const errors = validateAccountFn(updated)
    error.value = errors[field]
    const hasErrors = Object.keys(errors).length > 0
    if (!hasErrors || field === 'type') repo.save(updated)
  }

  watch(
    () => repo.getFormRowById(id),
    (currentRow) => {
      if (currentRow) value.value = currentRow[field]
    },
    { immediate: true }
  )

  return { value, error, save }
}
