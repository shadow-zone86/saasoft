import type { Meta, StoryObj } from '@storybook/vue3'
import BaseInput from './BaseInput.vue'

const meta: Meta<typeof BaseInput> = {
  title: 'Shared/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'password'] },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    maxlength: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof BaseInput>

export const Default: Story = {
  args: {
    modelValue: '',
    placeholder: 'Введите значение',
  },
}

export const WithValue: Story = {
  args: {
    modelValue: 'Значение',
    placeholder: 'Введите значение',
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
    modelValue: 'Недоступно',
    placeholder: 'Поле',
    disabled: true,
  },
}

export const MaxLength: Story = {
  args: {
    modelValue: '',
    placeholder: 'Макс. 50 символов',
    maxlength: 50,
  },
}
