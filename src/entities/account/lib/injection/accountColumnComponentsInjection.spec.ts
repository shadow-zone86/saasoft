import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h, provide } from 'vue'
import {
  ACCOUNT_COLUMN_COMPONENTS_KEY,
  useAccountColumnComponents,
} from './accountColumnComponentsInjection'
import type { AccountTableColumnKey } from '../../model/types'

const mockComponent = defineComponent({
  name: 'MockCell',
  props: { id: String },
  setup(props) {
    return () => h('span', {}, props.id ?? '')
  },
})

function mockColumnComponents(): Record<AccountTableColumnKey, ReturnType<typeof defineComponent>> {
  return {
    labels: mockComponent,
    type: mockComponent,
    login: mockComponent,
    password: mockComponent,
    action: mockComponent,
  }
}

describe('accountColumnComponentsInjection', () => {
  describe('ACCOUNT_COLUMN_COMPONENTS_KEY', () => {
    it('is a symbol', () => {
      expect(typeof ACCOUNT_COLUMN_COMPONENTS_KEY).toBe('symbol')
    })

    it('is unique', () => {
      expect(ACCOUNT_COLUMN_COMPONENTS_KEY).toBe(ACCOUNT_COLUMN_COMPONENTS_KEY)
    })
  })

  describe('useAccountColumnComponents', () => {
    it('returns provided components map', () => {
      const components = mockColumnComponents()
      const Child = defineComponent({
        setup() {
          const map = useAccountColumnComponents()
          return () => h('span', { 'data-components': map === components ? 'ok' : 'fail' })
        },
      })
      const Parent = defineComponent({
        setup() {
          provide(ACCOUNT_COLUMN_COMPONENTS_KEY, components)
          return () => h(Child)
        },
      })
      const wrapper = mount(Parent)
      expect(wrapper.find('[data-components]').attributes('data-components')).toBe('ok')
    })

    it('throws when ACCOUNT_COLUMN_COMPONENTS_KEY is not provided', () => {
      const Child = defineComponent({
        setup() {
          useAccountColumnComponents()
          return () => h('span')
        },
      })
      expect(() => mount(Child)).toThrow(
        'ACCOUNT_COLUMN_COMPONENTS_KEY must be provided (e.g. by AccountsList)'
      )
    })
  })
})
