<script setup>
import { useRouter } from 'vue-router'
import Card from '../components/Card.vue'
import { destinos } from '../data/destinos.js'

const router = useRouter()
function abrirDestino(id) { router.push(`/destino/${id}`) }
</script>

<template>
  <h1 class="titulo-pagina">Meus destinos</h1>
  <div class="grade">
    <Card
      v-for="destino in destinos"
      :key="destino.id"
      :titulo="destino.titulo"
      :resumo="destino.resumo"
      :imagem="destino.imagem"
      :tags="destino.tags"
      @abrir="abrirDestino(destino.id)"
    />
  </div>
</template>

<style scoped>
.grade {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}
</style>
