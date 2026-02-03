import { ACCOUNT_LABELS_MAX_LENGTH } from '@/entities/account'
import { validateRequiredMaxLength } from '@/shared/lib/helpers/validateRequiredMaxLength'

export function validateLabels(value: string): string | undefined {
  return validateRequiredMaxLength(value, ACCOUNT_LABELS_MAX_LENGTH, { required: false })
}
