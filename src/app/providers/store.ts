import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App } from 'vue'
import { ACCOUNTS_REPOSITORY_KEY, useAccountsStore } from '@/entities/account'

export function setupStore(app: App) {
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  app.use(pinia)
  app.provide(ACCOUNTS_REPOSITORY_KEY, useAccountsStore(pinia))
}
