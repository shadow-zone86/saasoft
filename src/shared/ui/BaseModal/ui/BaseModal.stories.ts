import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import BaseModal from './BaseModal.vue'
import BaseButton from '../../BaseButton/ui/BaseButton.vue'

const meta: Meta<typeof BaseModal> = {
  title: 'Shared/BaseModal',
  component: BaseModal,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof BaseModal>

export const Default: Story = {
  args: {
    title: 'Заголовок модального окна',
  },
  render: (args) => ({
    components: { BaseModal, BaseButton },
    setup: () => {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div>
        <BaseButton variant="primary" type="button" @click="open = true">Открыть</BaseButton>
        <BaseModal v-bind="args" v-model="open">
          <p style="margin: 0;">
            Контент модального окна. Закройте по клику на оверлей или по Escape.
          </p>
        </BaseModal>
      </div>
    `,
  }),
}

export const WithFooter: Story = {
  args: {
    title: 'Удалить учётную запись?',
  },
  render: (args) => ({
    components: { BaseModal, BaseButton },
    setup: () => {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div>
        <BaseButton variant="default" type="button" @click="open = true">Открыть</BaseButton>
        <BaseModal v-bind="args" v-model="open">
          <p style="margin: 0;">
            Учётная запись будет удалена. Это действие нельзя отменить.
          </p>
          <template #footer>
            <BaseButton variant="default" type="button" @click="open = false">Отмена</BaseButton>
            <BaseButton variant="primary" type="button" @click="open = false">Удалить</BaseButton>
          </template>
        </BaseModal>
      </div>
    `,
  }),
}

export const CustomTitleSlot: Story = {
  render: () => ({
    components: { BaseModal, BaseButton },
    setup: () => {
      const open = ref(false)
      return { open }
    },
    template: `
      <div>
        <BaseButton variant="primary" type="button" @click="open = true">Открыть</BaseButton>
        <BaseModal v-model="open">
          <template #title>
            <div style="display:flex; align-items:center; gap:8px;">
              <span aria-hidden="true">🔒</span>
              <span style="font-weight: 600;">Кастомный заголовок</span>
            </div>
          </template>
          <p style="margin: 0;">
            Пример кастомного заголовка через слот.
          </p>
        </BaseModal>
      </div>
    `,
  }),
}

