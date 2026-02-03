import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import { useAccountsRepository } from '../repository/accountsRepository'

export function useIsLocalAccount(id: string): ComputedRef<boolean> {
  const repo = useAccountsRepository()
  return computed(() => repo.getFormRowById(id)?.type === 'local')
}
