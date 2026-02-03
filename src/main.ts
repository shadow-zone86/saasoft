import { createApp } from 'vue'
import '@/shared/styles/global.scss'
import { setupStore } from '@/app/providers/store'
import { router } from '@/app/router'
import App from '@/app/App.vue'

const app = createApp(App)
setupStore(app)
app.use(router)
app.mount('#app')

requestAnimationFrame(() => {
  document.getElementById('preloader')?.classList.add('loaded')
})
