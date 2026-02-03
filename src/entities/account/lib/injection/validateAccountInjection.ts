import type { InjectionKey } from 'vue'
import { inject } from 'vue'
import type { AccountFormRow, AccountValidationErrors } from '../../model/types'

export const VALIDATE_ACCOUNT_KEY = Symbol('validateAccount') as InjectionKey<ValidateAccountFn>

export type ValidateAccountFn = (row: AccountFormRow) => AccountValidationErrors

export function useValidateAccount(): ValidateAccountFn {
  const fn = inject(VALIDATE_ACCOUNT_KEY)
  if (!fn) throw new Error('validateAccount must be provided (e.g. by AccountsList)')
  return fn
}
