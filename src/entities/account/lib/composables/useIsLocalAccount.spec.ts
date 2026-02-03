import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { defineComponent, h, provide } from 'vue'
import { useAccountsStore } from '../../model/store/accountsStore'
import { ACCOUNTS_REPOSITORY_KEY } from '../repository/accountsRepository'
import { useIsLocalAccount } from './useIsLocalAccount'

const TestComponent = defineComponent({
  props: { id: { type: String, required: true } },
  setup(props) {
    const isLocal = useIsLocalAccount(props.id)
    return () => h('span', {}, isLocal.value ? 'local' : 'not-local')
  },
})

function mountWithRepo(store: ReturnType<typeof useAccountsStore>, props: { id: string }) {
  const Wrapper = defineComponent({
    setup() {
      provide(ACCOUNTS_REPOSITORY_KEY, store)
      return () => h(TestComponent, props)
    },
  })
  return (pinia: ReturnType<typeof createPinia>) =>
    mount(Wrapper, { global: { plugins: [pinia] } })
}

describe('useIsLocalAccount', () => {
  it('returns true when row type is local', () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const store = useAccountsStore()
    store.addEmpty()
    const id = store.formRows[0].id
    const wrapper = mountWithRepo(store, { id })(pinia)
    expect(wrapper.text()).toBe('local')
  })

  it('returns false when row type is ldap', () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const store = useAccountsStore()
    store.addEmpty()
    const [row] = store.formRows
    store.save({ ...row, type: 'ldap' })
    const wrapper = mountWithRepo(store, { id: row.id })(pinia)
    expect(wrapper.text()).toBe('not-local')
  })

  it('returns false when id does not exist', () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const store = useAccountsStore()
    const wrapper = mountWithRepo(store, { id: 'non-existent-id' })(pinia)
    expect(wrapper.text()).toBe('not-local')
  })
})
