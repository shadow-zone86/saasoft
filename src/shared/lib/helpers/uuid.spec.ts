import { describe, it, expect, vi } from 'vitest'
import { generateId } from './uuid'

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

describe('uuid', () => {
  describe('generateId', () => {
    it('returns a string', () => {
      expect(typeof generateId()).toBe('string')
    })

    it('returns a valid UUID v4 format', () => {
      expect(generateId()).toMatch(UUID_REGEX)
    })

    it('returns unique values on each call', () => {
      const a = generateId()
      const b = generateId()
      expect(a).not.toBe(b)
    })

    it('uses crypto.randomUUID when available', () => {
      const fixed = 'aaaaaaaa-bbbb-4ccc-dddd-eeeeeeeeeeee'
      const randomUUID = vi.spyOn(crypto, 'randomUUID').mockReturnValue(fixed)
      expect(generateId()).toBe(fixed)
      randomUUID.mockRestore()
    })
  })
})
