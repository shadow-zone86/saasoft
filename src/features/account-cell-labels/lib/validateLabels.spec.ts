import { describe, it, expect } from 'vitest'
import { validateLabels } from './validateLabels'

describe('validateLabels', () => {
  it('returns undefined for empty string', () => {
    expect(validateLabels('')).toBeUndefined()
  })
  it('returns undefined for string within 50 chars', () => {
    expect(validateLabels('a'.repeat(50))).toBeUndefined()
  })
  it('returns error for string over 50 chars', () => {
    expect(validateLabels('a'.repeat(51))).toBe('Максимум 50 символов')
  })
})
