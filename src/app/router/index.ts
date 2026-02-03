import { createRouter, createWebHistory } from 'vue-router'
import { AccountsPage } from '@/pages/accounts'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accounts',
      component: AccountsPage,
    },
  ],
})
