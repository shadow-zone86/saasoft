import { describe, it, expect } from 'vitest'
import { storedToForm } from './storedToForm'
import type { StoredAccount } from '../../model/types'

describe('storedToForm', () => {
  it('converts StoredAccount to AccountFormRow', () => {
    const stored: StoredAccount = {
      id: '1',
      labels: [{ text: 'a' }, { text: 'b' }],
      type: 'local',
      login: 'user',
      password: 'secret',
    }
    const form = storedToForm(stored)
    expect(form).toEqual({
      id: '1',
      labels: 'a; b',
      type: 'local',
      login: 'user',
      password: 'secret',
    })
  })

  it('converts empty labels to empty string', () => {
    const stored: StoredAccount = {
      id: '2',
      labels: [],
      type: 'ldap',
      login: 'ldap-user',
      password: null,
    }
    const form = storedToForm(stored)
    expect(form.labels).toBe('')
    expect(form.password).toBe('')
  })

  it('converts null password to empty string', () => {
    const stored: StoredAccount = {
      id: '3',
      labels: [],
      type: 'ldap',
      login: 'u',
      password: null,
    }
    const form = storedToForm(stored)
    expect(form.password).toBe('')
  })
})
