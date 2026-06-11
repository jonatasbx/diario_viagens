import { ref } from 'vue'
import { destinos as destinosIniciais } from '../data/destinos.js'

const destinos = ref([...destinosIniciais])

export function useDestinos() {
  // CREATE
  function adicionarDestino(dados) {
    const proximoId = destinos.value.length
      ? Math.max(...destinos.value.map((d) => d.id)) + 1
      : 1
    destinos.value.push({ id: proximoId, ...dados })
    // 🔌 backend: POST /destinos
  }

  // UPDATE — encontra pelo id e substitui mantendo o id (NOVO)
  function atualizarDestino(id, dados) {
    const i = destinos.value.findIndex((d) => d.id === id)
    if (i !== -1) {
      // spread cria um objeto novo: dados antigos + os campos editados
      destinos.value[i] = { ...destinos.value[i], ...dados }
    }
    // 🔌 backend: PUT /destinos/:id
  }

  // DELETE
  function removerDestino(id) {
    destinos.value = destinos.value.filter((d) => d.id !== id)
    // 🔌 backend: DELETE /destinos/:id
  }

  return { destinos, adicionarDestino, atualizarDestino, removerDestino }
}
