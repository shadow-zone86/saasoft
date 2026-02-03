<template>
  <BaseInput
    v-model="value"
    placeholder="Логин"
    :error="!!error"
    :maxlength="ACCOUNT_LOGIN_MAX_LENGTH"
    @blur="save"
  />
</template>

<script setup lang="ts">
import { BaseInput } from '@/shared/ui'
import { ACCOUNT_LOGIN_MAX_LENGTH, useAccountCellField } from '@/entities/account'

interface AccountCellLoginProps {
  id: string
}

const { id } = defineProps<AccountCellLoginProps>()
const { value, error, save } = useAccountCellField(id, 'login')
</script>

<style lang="scss" scoped></style>
