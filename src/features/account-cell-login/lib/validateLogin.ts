import { ACCOUNT_LOGIN_MAX_LENGTH } from '@/entities/account'
import { validateRequiredMaxLength } from '@/shared/lib/helpers/validateRequiredMaxLength'

export function validateLogin(value: string): string | undefined {
  return validateRequiredMaxLength(value, ACCOUNT_LOGIN_MAX_LENGTH, { required: true })
}
