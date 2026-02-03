<template>
  <BaseButton
    type="button"
    variant="primary-icon"
    title="Добавить учётную запись"
    @click="addAccount"
  >
    <span aria-hidden="true">+</span>
  </BaseButton>
</template>

<script setup lang="ts">
import { BaseButton } from '@/shared/ui'
import { useAccountsRepository } from '@/entities/account'

const repo = useAccountsRepository()

function addAccount(): void {
  repo.addEmpty()
}
</script>

<style lang="scss" scoped></style>
