<template>
  <PasswordInput
    v-if="showPassword"
    v-model="value"
    placeholder="Пароль"
    :error="!!error"
    :maxlength="ACCOUNT_PASSWORD_MAX_LENGTH"
    @blur="save"
  />
  <BaseInput
    v-else
    model-value=""
    placeholder="—"
    disabled
    class="account-cell-password__placeholder"
  />
</template>

<script setup lang="ts">
import { BaseInput, PasswordInput } from '@/shared/ui'
import {
  ACCOUNT_PASSWORD_MAX_LENGTH,
  useAccountCellField,
  useIsLocalAccount,
} from '@/entities/account'

interface AccountCellPasswordProps {
  id: string
}

const { id } = defineProps<AccountCellPasswordProps>()
const { value, error, save } = useAccountCellField(id, 'password')
const showPassword = useIsLocalAccount(id)
</script>

<style lang="scss" scoped>
.account-cell-password__placeholder {
  background: $color-bg-page;
  color: $color-text-placeholder;
}
</style>
