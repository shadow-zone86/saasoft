import { describe, it, expect } from 'vitest'
import { ACCOUNT_LABELS_MAX_LENGTH } from '../../config/constants'
import { VALIDATE_ACCOUNT_KEY } from './validateAccountInjection'
import type { ValidateAccountFn } from './validateAccountInjection'

describe('validateAccountInjection', () => {
  describe('VALIDATE_ACCOUNT_KEY', () => {
    it('is a symbol', () => {
      expect(typeof VALIDATE_ACCOUNT_KEY).toBe('symbol')
    })

    it('is unique', () => {
      expect(VALIDATE_ACCOUNT_KEY).toBe(VALIDATE_ACCOUNT_KEY)
    })
  })

  describe('ValidateAccountFn', () => {
    it('accepts a function that returns AccountValidationErrors shape', () => {
      const fn: ValidateAccountFn = (row) => ({
        ...(row.labels.length > ACCOUNT_LABELS_MAX_LENGTH
          ? { labels: `Максимум ${ACCOUNT_LABELS_MAX_LENGTH} символов` }
          : {}),
      })
      expect(fn({ id: '1', labels: 'ok', type: 'local', login: 'user', password: 'pass' })).toEqual(
        {}
      )
      expect(
        fn({
          id: '1',
          labels: 'a'.repeat(ACCOUNT_LABELS_MAX_LENGTH + 1),
          type: 'local',
          login: 'user',
          password: 'pass',
        })
      ).toEqual({
        labels: `Максимум ${ACCOUNT_LABELS_MAX_LENGTH} символов`,
      })
    })
  })
})
