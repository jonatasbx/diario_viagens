// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router' // funções principais do vue-router 4

// importamos cada view — cada uma é uma "tela" que o <RouterView> vai trocar
import Home from '../views/Home.vue'
import Destino from '../views/Destino.vue'
import Sobre from '../views/Sobre.vue'

// a lista de rotas: cada objeto liga uma URL a um componente
const routes = [
  { path: '/', name: 'home', component: Home },                 // lista de destinos
  { path: '/destino/:id', name: 'destino', component: Destino }, // detalhe (:id é dinâmico, ex: /destino/3)
  { path: '/sobre', name: 'sobre', component: Sobre },          // página sobre
]

const router = createRouter({
  history: createWebHistory(), // URLs limpas, sem o "#"
  routes,                       // entrega a lista acima
})

export default router // exportamos para "ligar" no main.js
