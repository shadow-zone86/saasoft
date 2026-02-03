import type { AccountFormRow, StoredAccount } from '../../model/types'
import { labelsStringToItems } from '../helpers/accountLabels'

export function formToStored(row: AccountFormRow): StoredAccount {
  return {
    id: row.id,
    labels: labelsStringToItems(row.labels),
    type: row.type,
    login: row.login,
    password: row.type === 'local' ? row.password : null,
  }
}
