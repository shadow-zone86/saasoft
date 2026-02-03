import type { AccountFormRow, StoredAccount } from '../../model/types'
import { labelsItemsToString } from '../helpers/accountLabels'

export function storedToForm(acc: StoredAccount): AccountFormRow {
  const labelsStr = labelsItemsToString(acc.labels)
  return {
    id: acc.id,
    labels: labelsStr,
    type: acc.type,
    login: acc.login,
    password: acc.password ?? '',
  }
}
