export function validateRequiredMaxLength(
  value: string,
  maxLength: number,
  options: { required?: boolean } = {}
): string | undefined {
  const { required = false } = options
  if (required && !value.trim()) {
    return 'Обязательное поле'
  }
  if (value.length > maxLength) {
    return `Максимум ${maxLength} символов`
  }
  return undefined
}
