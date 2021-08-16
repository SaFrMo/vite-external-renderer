import { createApp } from 'mvp-renderer'
import App from './App.vue'

const app = createApp(App)
console.log(createApp, app)
app.mount('#app')
