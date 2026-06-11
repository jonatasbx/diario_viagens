<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Card from '../components/Card.vue'
import FormularioDestino from '../components/FormularioDestino.vue'
import { useDestinos } from '../composables/useDestinos.js'

const router = useRouter()
const { destinos, adicionarDestino, atualizarDestino, removerDestino } = useDestinos()

const mostrarForm = ref(false)
const destinoEditando = ref(null) // null = criando; objeto = editando

function novoDestino() {
  destinoEditando.value = null
  mostrarForm.value = true
}
function editar(id) {
  destinoEditando.value = destinos.value.find((d) => d.id === id)
  mostrarForm.value = true
}
function fecharForm() {
  mostrarForm.value = false
  destinoEditando.value = null
}

// um só handler para salvar: tem id → UPDATE; não tem → CREATE
function salvarDestino(dados) {
  if (dados.id) atualizarDestino(dados.id, dados) // 🔌 PUT
  else adicionarDestino(dados)                    // 🔌 POST
  fecharForm()
}

function excluirDestino(id) {
  const destino = destinos.value.find((d) => d.id === id)
  if (confirm(`Excluir "${destino.titulo}"? Esta ação não pode ser desfeita.`)) {
    removerDestino(id) // 🔌 DELETE
  }
}

function abrirDestino(id) { router.push(`/destino/${id}`) }
</script>

<template>
  <div class="topo">
    <h1 class="titulo-pagina">Meus destinos</h1>
    <button class="btn-novo" @click="mostrarForm ? fecharForm() : novoDestino()">
      {{ mostrarForm ? 'Cancelar' : '+ Novo destino' }}
    </button>
  </div>

  <!-- :key muda entre 'novo' e o id → recria o form com os dados certos -->
  <FormularioDestino
    v-if="mostrarForm"
    :key="destinoEditando ? destinoEditando.id : 'novo'"
    :destino="destinoEditando"
    @salvar="salvarDestino"
    @cancelar="fecharForm"
  />

  <div class="grade">
    <Card
      v-for="destino in destinos"
      :key="destino.id"
      :titulo="destino.titulo"
      :resumo="destino.resumo"
      :imagem="destino.imagem"
      :tags="destino.tags"
      @abrir="abrirDestino(destino.id)"
      @editar="editar(destino.id)"
      @excluir="excluirDestino(destino.id)"
    />
  </div>
</template>

<style scoped>
.topo { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
.btn-novo {
  padding: .55rem 1.1rem; border: 1px solid var(--cor-borda); border-radius: 10px;
  background: var(--cor-superficie); color: var(--cor-texto); font: inherit; font-weight: 500;
  cursor: pointer; transition: background var(--transicao);
}
.btn-novo:hover { background: var(--cor-acento-suave); }
.grade { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem; }
</style>
