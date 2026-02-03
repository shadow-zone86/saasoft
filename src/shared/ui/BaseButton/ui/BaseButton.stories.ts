import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from './BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
  title: 'Shared/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'primary-icon', 'default', 'icon', 'danger-icon'] },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof BaseButton>

export const Primary: Story = {
  args: {
    variant: 'primary',
    type: 'button',
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: '<BaseButton v-bind="args" @click="() => {}">Добавить</BaseButton>',
  }),
}

export const Default: Story = {
  args: {
    variant: 'default',
    type: 'button',
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: '<BaseButton v-bind="args" @click="() => {}">Отмена</BaseButton>',
  }),
}

export const PrimaryIcon: Story = {
  args: {
    variant: 'primary-icon',
    type: 'button',
    title: 'Добавить учётную запись',
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: '<BaseButton v-bind="args" @click="() => {}">+</BaseButton>',
  }),
}

export const Icon: Story = {
  args: {
    variant: 'icon',
    type: 'button',
    title: 'Действие',
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: '<BaseButton v-bind="args" @click="() => {}">+</BaseButton>',
  }),
}

export const DangerIcon: Story = {
  args: {
    variant: 'danger-icon',
    type: 'button',
    title: 'Удалить',
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: '<BaseButton v-bind="args" @click="() => {}">🗑</BaseButton>',
  }),
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
  },
  render: (args) => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: '<BaseButton v-bind="args">Недоступно</BaseButton>',
  }),
}
