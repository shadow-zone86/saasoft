import { defineStore } from 'pinia'
import type { StoredAccount } from '../types'
import { generateId } from '@/shared/lib/helpers/uuid'
import type { AccountFormRow } from '../types'
import { storedToForm } from '../../lib/mappers/storedToForm'
import { formToStored } from '../../lib/mappers/formToStored'

export const useAccountsStore = defineStore('accounts', {
  state: () => ({
    items: [] as StoredAccount[],
  }),
  getters: {
    formRows(state): AccountFormRow[] {
      return state.items.map(storedToForm)
    },
  },
  actions: {
    addEmpty() {
      const row: AccountFormRow = {
        id: generateId(),
        labels: '',
        type: 'local',
        login: '',
        password: '',
      }
      this.items.push(formToStored(row))
    },
    remove(id: string) {
      this.items = this.items.filter((a) => a.id !== id)
    },
    save(row: AccountFormRow) {
      const idx = this.items.findIndex((a) => a.id === row.id)
      const stored = formToStored(row)
      if (idx >= 0) {
        this.items[idx] = stored
      } else {
        this.items.push(stored)
      }
    },
    getFormRowById(id: string): AccountFormRow | undefined {
      const acc = this.items.find((a) => a.id === id)
      return acc ? storedToForm(acc) : undefined
    },
  },
  persist: true,
})
