<template>
  <BaseButton
    variant="danger-icon"
    type="button"
    title="Удалить учётную запись"
    @click="showConfirm = true"
  >
    <span class="account-cell-delete__icon" aria-hidden="true">🗑</span>
  </BaseButton>
  <BaseModal v-model="showConfirm" title="Удалить учётную запись?">
    <p class="account-cell-delete__confirm-text">
      Учётная запись будет удалена. Это действие нельзя отменить.
    </p>
    <template #footer>
      <BaseButton variant="default" type="button" @click="showConfirm = false">
        Отмена
      </BaseButton>
      <BaseButton
        variant="primary"
        type="button"
        @click="confirmDelete"
      >
        Удалить
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BaseButton, BaseModal } from '@/shared/ui'
import { useAccountsRepository } from '@/entities/account'

interface AccountCellDeleteProps {
  id: string
}

const { id } = defineProps<AccountCellDeleteProps>()

const repo = useAccountsRepository()
const showConfirm = ref<boolean>(false)

function confirmDelete(): void {
  repo.remove(id)
  showConfirm.value = false
}
</script>

<style lang="scss" scoped>
.account-cell-delete {
  &__icon {
    font-size: 1rem;
  }

  &__confirm-text {
    margin: 0;
    @include font-size($font-size-base);
    color: $color-text-regular;
  }
}
</style>
