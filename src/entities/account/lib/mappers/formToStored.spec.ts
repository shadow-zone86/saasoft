import { describe, it, expect } from 'vitest'
import { formToStored } from './formToStored'
import { storedToForm } from './storedToForm'
import type { AccountFormRow, StoredAccount } from '../../model/types'

describe('formToStored', () => {
  it('converts AccountFormRow to StoredAccount (local)', () => {
    const row: AccountFormRow = {
      id: '1',
      labels: 'x; y',
      type: 'local',
      login: 'user',
      password: 'pass',
    }
    const stored = formToStored(row)
    expect(stored).toEqual({
      id: '1',
      labels: [{ text: 'x' }, { text: 'y' }],
      type: 'local',
      login: 'user',
      password: 'pass',
    })
  })

  it('converts AccountFormRow to StoredAccount (ldap) with null password', () => {
    const row: AccountFormRow = {
      id: '2',
      labels: '',
      type: 'ldap',
      login: 'ldap-user',
      password: 'ignored',
    }
    const stored = formToStored(row)
    expect(stored.password).toBeNull()
    expect(stored.labels).toEqual([])
  })

  it('parses labels string with semicolons', () => {
    const row: AccountFormRow = {
      id: '3',
      labels: ' a ; b ; c ',
      type: 'local',
      login: 'u',
      password: 'p',
    }
    const stored = formToStored(row)
    expect(stored.labels).toEqual([{ text: 'a' }, { text: 'b' }, { text: 'c' }])
  })

  describe('round-trip', () => {
    it('formToStored(storedToForm(stored)) preserves data for local', () => {
      const stored: StoredAccount = {
        id: '1',
        labels: [{ text: 'l1' }, { text: 'l2' }],
        type: 'local',
        login: 'u',
        password: 'p',
      }
      const form = storedToForm(stored)
      const back = formToStored(form)
      expect(back).toEqual(stored)
    })

    it('storedToForm(formToStored(row)) preserves data for ldap', () => {
      const row: AccountFormRow = {
        id: '2',
        labels: 'a; b',
        type: 'ldap',
        login: 'u',
        password: 'any',
      }
      const stored = formToStored(row)
      const back = storedToForm(stored)
      expect(back.id).toBe(row.id)
      expect(back.labels).toBe(row.labels)
      expect(back.type).toBe(row.type)
      expect(back.login).toBe(row.login)
      expect(back.password).toBe('')
    })
  })
})
