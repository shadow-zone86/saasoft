import type { AccountType } from '@/entities/account'
import { ACCOUNT_PASSWORD_MAX_LENGTH } from '@/entities/account'
import { validateRequiredMaxLength } from '@/shared/lib/helpers/validateRequiredMaxLength'

export function validatePassword(value: string, type: AccountType): string | undefined {
  if (type === 'ldap') return undefined
  return validateRequiredMaxLength(value, ACCOUNT_PASSWORD_MAX_LENGTH, { required: true })
}
