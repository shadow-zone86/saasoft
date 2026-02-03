import { describe, it, expect } from 'vitest'
import { labelsStringToItems, labelsItemsToString } from './accountLabels'

describe('accountLabels', () => {
  describe('labelsStringToItems', () => {
    it('returns empty array for empty string', () => {
      expect(labelsStringToItems('')).toEqual([])
    })

    it('returns empty array for whitespace-only string', () => {
      expect(labelsStringToItems('   ')).toEqual([])
    })

    it('splits by semicolon and trims', () => {
      expect(labelsStringToItems('a; b; c')).toEqual([{ text: 'a' }, { text: 'b' }, { text: 'c' }])
    })

    it('filters empty segments', () => {
      expect(labelsStringToItems(' a ; ; b ; ')).toEqual([{ text: 'a' }, { text: 'b' }])
    })

    it('returns single item for string without semicolon', () => {
      expect(labelsStringToItems('single')).toEqual([{ text: 'single' }])
    })
  })

  describe('labelsItemsToString', () => {
    it('joins items with "; "', () => {
      expect(labelsItemsToString([{ text: 'a' }, { text: 'b' }])).toBe('a; b')
    })

    it('returns empty string for empty array', () => {
      expect(labelsItemsToString([])).toBe('')
    })

    it('returns single text for one item', () => {
      expect(labelsItemsToString([{ text: 'one' }])).toBe('one')
    })
  })
})
