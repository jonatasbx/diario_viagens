<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import MenuLateral from './components/MenuLateral.vue'
import Rodape from './components/Rodape.vue'

const menuAberto = ref(false)
function alternarMenu() { menuAberto.value = !menuAberto.value }
</script>

<template>
  <div class="layout">
    <Navbar @alternar="alternarMenu" />
    <div class="layout__corpo">
      <MenuLateral :aberto="menuAberto" />
      <main class="layout__conteudo">
        <div class="container">
          <RouterView />
        </div>
      </main>
    </div>
    <Rodape />
  </div>
</template>

<style scoped>
.layout { display: flex; flex-direction: column; min-height: 100vh; }
.layout__corpo { display: flex; flex: 1; }
.layout__conteudo { flex: 1; padding: 2.5rem 1.5rem; }
</style>
