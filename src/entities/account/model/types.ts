export type AccountType = 'ldap' | 'local'

export interface LabelItem {
  text: string
}

export interface AccountFormData {
  id: string
  labels: string
  type: AccountType
  login: string
  password: string
}

export type AccountFormRow = AccountFormData

export interface StoredAccount {
  id: string
  labels: LabelItem[]
  type: AccountType
  login: string
  password: string | null
}

export interface AccountTypeOption {
  value: AccountType
  label: string
}

export type AccountTableColumnKey = AccountCellField | 'action'

export interface AccountTableColumn {
  key: AccountTableColumnKey
  label: string
}

export type AccountCellField = 'labels' | 'type' | 'login' | 'password'

export interface AccountValidationErrors {
  labels?: string
  type?: string
  login?: string
  password?: string
}
