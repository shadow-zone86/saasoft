<template>
  <BaseSelect
    v-model="value"
    :options="ACCOUNT_TYPE_OPTIONS"
    :error="!!error"
    @change="save"
  />
</template>

<script setup lang="ts">
import { BaseSelect } from '@/shared/ui'
import { useAccountCellField, ACCOUNT_TYPE_OPTIONS } from '@/entities/account'

interface AccountCellTypeProps {
  id: string
}

const { id } = defineProps<AccountCellTypeProps>()
const { value, error, save } = useAccountCellField(id, 'type')
</script>

<style lang="scss" scoped></style>
