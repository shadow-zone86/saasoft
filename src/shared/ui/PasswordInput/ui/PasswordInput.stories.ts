import type { Meta, StoryObj } from '@storybook/vue3'
import PasswordInput from './PasswordInput.vue'

const meta: Meta<typeof PasswordInput> = {
  title: 'Shared/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    maxlength: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof PasswordInput>

export const Default: Story = {
  args: {
    modelValue: '',
    placeholder: 'Пароль',
  },
}

export const WithValue: Story = {
  args: {
    modelValue: '••••••••',
    placeholder: 'Пароль',
  },
}

export const Error: Story = {
  args: {
    modelValue: '',
    placeholder: 'Обязательное поле',
    error: true,
  },
}

export const Disabled: Story = {
  args: {
    modelValue: 'пароль',
    placeholder: 'Пароль',
    disabled: true,
  },
}
