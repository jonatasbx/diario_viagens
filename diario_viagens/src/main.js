// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // o Vue acha o index.js sozinho dentro da pasta router
import './assets/estilo.css'

createApp(App)
  .use(router) // "liga" o roteador no aplicativo
  .mount('#app')
