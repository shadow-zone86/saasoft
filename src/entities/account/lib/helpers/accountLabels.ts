import type { LabelItem } from '../../model/types'

export function labelsStringToItems(str: string): LabelItem[] {
  if (!str.trim()) return []
  return str
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((text) => ({ text }))
}

export function labelsItemsToString(items: LabelItem[]): string {
  return items.map((item: LabelItem) => item.text).join('; ')
}
