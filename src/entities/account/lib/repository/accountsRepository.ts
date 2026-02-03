import type { InjectionKey } from 'vue'
import { inject } from 'vue'
import type { AccountFormRow } from '../../model/types'

export interface AccountsRepository {
  readonly formRows: AccountFormRow[]
  addEmpty(): void
  remove(id: string): void
  save(row: AccountFormRow): void
  getFormRowById(id: string): AccountFormRow | undefined
}

export const ACCOUNTS_REPOSITORY_KEY = Symbol(
  'accountsRepository'
) as InjectionKey<AccountsRepository>

export function useAccountsRepository(): AccountsRepository {
  const repo = inject(ACCOUNTS_REPOSITORY_KEY)
  if (!repo) throw new Error('ACCOUNTS_REPOSITORY_KEY must be provided (e.g. by app provider)')
  return repo
}
