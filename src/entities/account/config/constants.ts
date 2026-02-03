import type { AccountCellField, AccountTableColumn, AccountType, AccountTypeOption } from '../model/types'

export const ACCOUNT_LABELS_MAX_LENGTH = 50
export const ACCOUNT_LOGIN_MAX_LENGTH = 100
export const ACCOUNT_PASSWORD_MAX_LENGTH = 100

export const ACCOUNT_CELL_FIELD_DEFAULTS: Record<AccountCellField, string | AccountType> = {
  labels: '',
  type: 'local',
  login: '',
  password: '',
}

export const ACCOUNT_TYPE_OPTIONS: AccountTypeOption[] = [
  { value: 'ldap', label: 'LDAP' },
  { value: 'local', label: 'Локальная' },
]

type AccountDataColumn = Omit<AccountTableColumn, 'key'> & { key: AccountCellField }

export const ACCOUNT_TABLE_COLUMNS: AccountDataColumn[] = [
  { key: 'labels', label: 'Метки' },
  { key: 'type', label: 'Тип записи' },
  { key: 'login', label: 'Логин' },
  { key: 'password', label: 'Пароль' },
]

export const TABLE_COLUMNS_WITH_ACTION: AccountTableColumn[] = [
  ...ACCOUNT_TABLE_COLUMNS,
  { key: 'action', label: '' },
]
