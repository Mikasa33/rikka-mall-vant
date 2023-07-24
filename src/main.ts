import { createApp } from 'vue'

import 'amfe-flexible'

import App from './App.vue'
import router from './router'
import { setupPinia } from '@/plugins'

import '@unocss/reset/tailwind.css'
import './styles/index.less'
import 'uno.css'
import 'vant/es/dialog/style'
import 'vant/es/image-preview/style'
import 'vant/es/notify/style'
import 'vant/es/toast/style'

const app = createApp(App)

setupPinia(app)
app.use(router)

app.mount('#app')
