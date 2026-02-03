import { describe, it, expect } from 'vitest'
import { validateRequiredMaxLength } from './validateRequiredMaxLength'

describe('validateRequiredMaxLength', () => {
  describe('required: false (default)', () => {
    it('returns undefined for empty string', () => {
      expect(validateRequiredMaxLength('', 50)).toBeUndefined()
    })
    it('returns undefined for string within maxLength', () => {
      expect(validateRequiredMaxLength('a'.repeat(50), 50)).toBeUndefined()
    })
    it('returns error for string over maxLength', () => {
      expect(validateRequiredMaxLength('a'.repeat(51), 50)).toBe('Максимум 50 символов')
    })
  })

  describe('required: true', () => {
    it('returns error for empty string', () => {
      expect(validateRequiredMaxLength('', 100, { required: true })).toBe('Обязательное поле')
    })
    it('returns error for whitespace only', () => {
      expect(validateRequiredMaxLength('   ', 100, { required: true })).toBe('Обязательное поле')
    })
    it('returns undefined for non-empty string within maxLength', () => {
      expect(validateRequiredMaxLength('user', 100, { required: true })).toBeUndefined()
    })
    it('returns error for string over maxLength', () => {
      expect(validateRequiredMaxLength('a'.repeat(101), 100, { required: true })).toBe(
        'Максимум 100 символов'
      )
    })
  })
})
