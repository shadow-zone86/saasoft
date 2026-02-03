import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { defineComponent, h, provide } from 'vue'
import { useAccountsStore } from '../../model/store/accountsStore'
import { ACCOUNTS_REPOSITORY_KEY } from '../repository/accountsRepository'
import { VALIDATE_ACCOUNT_KEY } from '../injection/validateAccountInjection'
import type { ValidateAccountFn } from '../injection/validateAccountInjection'
import { useAccountCellField } from './useAccountCellField'

describe('useAccountCellField', () => {
  it('throws when VALIDATE_ACCOUNT_KEY is not provided', () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const store = useAccountsStore()
    store.addEmpty()
    const id = store.formRows[0].id
    const Child = defineComponent({
      props: { id: { type: String, required: true } },
      setup(props) {
        useAccountCellField(props.id, 'labels')
        return () => h('span')
      },
    })
    const Parent = defineComponent({
      setup() {
        provide(ACCOUNTS_REPOSITORY_KEY, store)
        return () => h(Child, { id })
      },
    })
    expect(() => mount(Parent, { global: { plugins: [pinia] } })).toThrow(
      'validateAccount must be provided'
    )
  })

  it('returns initial value from store and save updates store when valid', () => {
    const mockValidate: ValidateAccountFn = () => ({})
    const pinia = createPinia()
    setActivePinia(pinia)
    const store = useAccountsStore()
    store.addEmpty()
    const id = store.formRows[0].id

    const Child = defineComponent({
      props: { id: { type: String, required: true } },
      setup(props) {
        const { value, error, save } = useAccountCellField(props.id, 'labels')
        return () =>
          h('div', [
            h('span', { 'data-value': '' }, String(value.value)),
            h('span', { 'data-error': '' }, error.value ?? ''),
            h('button', { onClick: save }, 'Save'),
          ])
      },
    })
    const Parent = defineComponent({
      setup() {
        provide(ACCOUNTS_REPOSITORY_KEY, store)
        provide(VALIDATE_ACCOUNT_KEY, mockValidate)
        return () => h(Child, { id })
      },
    })
    const wrapper = mount(Parent, { global: { plugins: [pinia] } })
    expect(wrapper.find('[data-value]').text()).toBe('')
    wrapper.find('button').trigger('click')
    expect(store.getFormRowById(id)?.labels).toBe('')
  })

  it('sets error and does not save when validation fails', async () => {
    const mockValidate: ValidateAccountFn = (row) =>
      row.labels.length > 2 ? { labels: 'Too long' } : {}
    const pinia = createPinia()
    setActivePinia(pinia)
    const store = useAccountsStore()
    store.addEmpty()
    const id = store.formRows[0].id

    const Child = defineComponent({
      props: { id: { type: String, required: true } },
      setup(props) {
        const { value, error, save } = useAccountCellField(props.id, 'labels')
        return () =>
          h('div', [
            h('input', {
              'data-input': '',
              value: value.value,
              onInput: (e: Event) => {
                value.value = (e.target as HTMLInputElement).value
              },
            }),
            h('span', { 'data-error': '' }, error.value ?? ''),
            h('button', { onClick: save }, 'Save'),
          ])
      },
    })
    const Parent = defineComponent({
      setup() {
        provide(ACCOUNTS_REPOSITORY_KEY, store)
        provide(VALIDATE_ACCOUNT_KEY, mockValidate)
        return () => h(Child, { id })
      },
    })
    const wrapper = mount(Parent, { global: { plugins: [pinia] } })
    const input = wrapper.find('[data-input]')
    await input.setValue('abc')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('[data-error]').text()).toBe('Too long')
    expect(store.getFormRowById(id)?.labels).toBe('')
  })

  it('syncs value when store row changes', async () => {
    const mockValidate: ValidateAccountFn = () => ({})
    const pinia = createPinia()
    setActivePinia(pinia)
    const store = useAccountsStore()
    store.addEmpty()
    const id = store.formRows[0].id

    const Child = defineComponent({
      props: { id: { type: String, required: true } },
      setup(props) {
        const { value } = useAccountCellField(props.id, 'labels')
        return () => h('span', { 'data-value': '' }, String(value.value))
      },
    })
    const Parent = defineComponent({
      setup() {
        provide(ACCOUNTS_REPOSITORY_KEY, store)
        provide(VALIDATE_ACCOUNT_KEY, mockValidate)
        return () => h(Child, { id })
      },
    })
    const wrapper = mount(Parent, { global: { plugins: [pinia] } })
    expect(wrapper.find('[data-value]').text()).toBe('')
    store.save({ ...store.getFormRowById(id)!, labels: 'new-labels' })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-value]').text()).toBe('new-labels')
  })
})
