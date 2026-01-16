import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'



const app = createApp(App)

// 3. IMPORTANT: Tell the app to use the router
app.use(router) 

app.mount('#app')

