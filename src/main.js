import { createApp } from 'vue'
import App from './App.vue'
import { createMetaManager } from 'vue-meta'
import '@fortawesome/fontawesome-free/css/all.min.css'

createApp(App).use(createMetaManager()).mount('#app')
