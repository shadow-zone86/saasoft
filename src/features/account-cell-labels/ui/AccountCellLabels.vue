<template>
  <BaseInput
    v-model="value"
    placeholder="Метки"
    :error="!!error"
    :maxlength="ACCOUNT_LABELS_MAX_LENGTH"
    @blur="save"
  />
</template>

<script setup lang="ts">
import { BaseInput } from '@/shared/ui'
import { ACCOUNT_LABELS_MAX_LENGTH, useAccountCellField } from '@/entities/account'

interface AccountCellLabelsProps {
  id: string
}

const { id } = defineProps<AccountCellLabelsProps>()
const { value, error, save } = useAccountCellField(id, 'labels')
</script>

<style lang="scss" scoped></style>
