import type { Component } from 'vue'
import type { InjectionKey } from 'vue'
import { inject } from 'vue'
import type { AccountTableColumnKey } from '../../model/types'

export const ACCOUNT_COLUMN_COMPONENTS_KEY = Symbol(
  'accountColumnComponents'
) as InjectionKey<Record<AccountTableColumnKey, Component>>

export function useAccountColumnComponents(): Record<AccountTableColumnKey, Component> {
  const components = inject(ACCOUNT_COLUMN_COMPONENTS_KEY)
  if (!components) throw new Error('ACCOUNT_COLUMN_COMPONENTS_KEY must be provided (e.g. by AccountsList)')
  return components
}
