import type { Meta, StoryObj } from '@storybook/vue3'
import BaseSelect from './BaseSelect.vue'

const meta: Meta<typeof BaseSelect> = {
  title: 'Shared/BaseSelect',
  component: BaseSelect,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof BaseSelect>

const typeOptions = [
  { value: 'ldap', label: 'LDAP' },
  { value: 'local', label: 'Локальная' },
]

export const Default: Story = {
  args: {
    modelValue: '',
    options: typeOptions,
    placeholder: 'Выберите тип',
  },
}

export const WithValue: Story = {
  args: {
    modelValue: 'local',
    options: typeOptions,
    placeholder: 'Выберите тип',
  },
}

export const Error: Story = {
  args: {
    modelValue: '',
    options: typeOptions,
    placeholder: 'Выберите тип',
    error: true,
  },
}

export const Disabled: Story = {
  args: {
    modelValue: 'local',
    options: typeOptions,
    disabled: true,
  },
}
