import { createApp } from 'vue'
import '/src/style.scss'
import App from './app/App.vue'
import router from "./router/router.js";

createApp(App)
    .use(router)
    .mount('#app')
