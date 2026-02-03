import { describe, it, expect } from 'vitest'
import { validatePassword } from './validatePassword'

describe('validatePassword', () => {
  it('returns undefined for ldap type regardless of value', () => {
    expect(validatePassword('', 'ldap')).toBeUndefined()
  })
  it('returns error for local type when empty', () => {
    expect(validatePassword('', 'local')).toBe('Обязательное поле')
  })
  it('returns undefined for local type when non-empty within 100 chars', () => {
    expect(validatePassword('pass', 'local')).toBeUndefined()
  })
})
