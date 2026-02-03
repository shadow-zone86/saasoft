import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAccountsStore } from './accountsStore'
import type { AccountFormRow } from '../types'

describe('accountsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('initial state', () => {
    it('has empty formRows', () => {
      const store = useAccountsStore()
      expect(store.formRows).toEqual([])
    })
  })

  describe('addEmpty', () => {
    it('adds one row to formRows', () => {
      const store = useAccountsStore()
      store.addEmpty()
      expect(store.formRows).toHaveLength(1)
    })

    it('adds row with expected shape (local, empty fields)', () => {
      const store = useAccountsStore()
      store.addEmpty()
      const [row] = store.formRows
      expect(row).toMatchObject({
        labels: '',
        type: 'local',
        login: '',
        password: '',
      })
      expect(row.id).toBeDefined()
      expect(typeof row.id).toBe('string')
      expect(row.id.length).toBeGreaterThan(0)
    })

    it('each addEmpty adds a new row with unique id', () => {
      const store = useAccountsStore()
      store.addEmpty()
      store.addEmpty()
      expect(store.formRows).toHaveLength(2)
      expect(store.formRows[0].id).not.toBe(store.formRows[1].id)
    })
  })

  describe('remove', () => {
    it('removes item by id', () => {
      const store = useAccountsStore()
      store.addEmpty()
      store.addEmpty()
      const idToRemove = store.formRows[1].id
      store.remove(idToRemove)
      expect(store.formRows).toHaveLength(1)
      expect(store.formRows[0].id).not.toBe(idToRemove)
    })

    it('does nothing when id not found', () => {
      const store = useAccountsStore()
      store.addEmpty()
      store.remove('non-existent-id')
      expect(store.formRows).toHaveLength(1)
    })
  })

  describe('save', () => {
    it('updates existing row by id', () => {
      const store = useAccountsStore()
      store.addEmpty()
      const [existing] = store.formRows
      const updated: AccountFormRow = {
        ...existing,
        labels: 'a; b',
        login: 'new-login',
        password: 'new-pass',
      }
      store.save(updated)
      expect(store.formRows).toHaveLength(1)
      expect(store.formRows[0]).toMatchObject({
        id: existing.id,
        labels: 'a; b',
        login: 'new-login',
        password: 'new-pass',
      })
    })

    it('adds new row when id does not exist', () => {
      const store = useAccountsStore()
      store.addEmpty()
      const newRow: AccountFormRow = {
        id: 'custom-id',
        labels: 'x',
        type: 'ldap',
        login: 'ldap-user',
        password: '',
      }
      store.save(newRow)
      expect(store.formRows).toHaveLength(2)
      const saved = store.formRows.find((r) => r.id === 'custom-id')
      expect(saved).toMatchObject({
        id: 'custom-id',
        labels: 'x',
        type: 'ldap',
        login: 'ldap-user',
      })
    })
  })

  describe('getFormRowById', () => {
    it('returns form row when id exists', () => {
      const store = useAccountsStore()
      store.addEmpty()
      const [row] = store.formRows
      const found = store.getFormRowById(row.id)
      expect(found).toBeDefined()
      expect(found?.id).toBe(row.id)
      expect(found?.login).toBe(row.login)
    })

    it('returns undefined when id does not exist', () => {
      const store = useAccountsStore()
      store.addEmpty()
      const found = store.getFormRowById('non-existent')
      expect(found).toBeUndefined()
    })

    it('returns updated data after save', () => {
      const store = useAccountsStore()
      store.addEmpty()
      const [row] = store.formRows
      store.save({ ...row, login: 'updated-login' })
      const found = store.getFormRowById(row.id)
      expect(found?.login).toBe('updated-login')
    })
  })
})
