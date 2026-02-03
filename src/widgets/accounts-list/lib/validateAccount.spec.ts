import { describe, it, expect } from 'vitest'
import { validateAccount } from './validateAccount'

function row(overrides: Partial<Parameters<typeof validateAccount>[0]> = {}) {
  return {
    id: '1',
    labels: '',
    type: 'local' as const,
    login: '',
    password: '',
    ...overrides,
  }
}

describe('validateAccount', () => {
  it('returns empty errors for valid local account', () => {
    const errors = validateAccount(row({ labels: 'labels', login: 'login', password: 'pass' }))
    expect(errors).toEqual({})
  })
  it('returns login error when login empty', () => {
    const errors = validateAccount(row({ password: 'pass' }))
    expect(errors.login).toBe('Обязательное поле')
  })
  it('returns password error when local and password empty', () => {
    const errors = validateAccount(row({ login: 'user' }))
    expect(errors.password).toBe('Обязательное поле')
  })
  it('does not require password for ldap', () => {
    const errors = validateAccount(row({ type: 'ldap', login: 'user' }))
    expect(errors.password).toBeUndefined()
  })
})
