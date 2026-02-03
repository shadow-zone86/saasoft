import { describe, it, expect } from 'vitest'
import { validateLogin } from './validateLogin'

describe('validateLogin', () => {
  it('returns error for empty string', () => {
    expect(validateLogin('')).toBe('Обязательное поле')
  })
  it('returns error for whitespace only', () => {
    expect(validateLogin('   ')).toBe('Обязательное поле')
  })
  it('returns undefined for non-empty string within 100 chars', () => {
    expect(validateLogin('user')).toBeUndefined()
  })
  it('returns error for string over 100 chars', () => {
    expect(validateLogin('a'.repeat(101))).toBe('Максимум 100 символов')
  })
})
