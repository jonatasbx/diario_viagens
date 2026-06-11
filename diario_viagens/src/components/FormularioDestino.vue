<script setup>
import { reactive, computed } from 'vue'
import Botao from './Botao.vue'

const props = defineProps({
  // se vier um destino, o formulário entra em modo EDIÇÃO
  destino: { type: Object, default: null },
})
const emit = defineEmits(['salvar', 'cancelar'])

const editando = computed(() => props.destino !== null)

// inicia vazio (novo) ou com os dados recebidos (edição)
const form = reactive({
  titulo: props.destino?.titulo ?? '',
  resumo: props.destino?.resumo ?? '',
  descricao: props.destino?.descricao ?? '',
  imagem: props.destino?.imagem ?? '',
  // tags viram texto "praia, cidade" para caber no input
  categorias: (props.destino?.tags ?? []).map((t) => t.texto).join(', '),
})

function enviar() {
  if (!form.titulo.trim()) {
    alert('Dê pelo menos um título ao destino.')
    return
  }

  const tags = form.categorias
    .split(',').map((c) => c.trim()).filter((c) => c)
    .map((texto) => ({ texto, cor: '#f4e9e2' }))

  const dados = {
    titulo: form.titulo,
    resumo: form.resumo,
    descricao: form.descricao,
    imagem: form.imagem || 'https://picsum.photos/seed/novo/800/400',
    tags,
  }

  // na edição mandamos o id junto (para o pai saber QUEM atualizar)
  if (editando.value) emit('salvar', { id: props.destino.id, ...dados })
  else emit('salvar', dados)
}
</script>

<template>
  <form class="form" @submit.prevent="enviar">
    <h2 class="form__titulo">{{ editando ? 'Editar destino' : 'Novo destino' }}</h2>

    <label class="form__campo">
      <span>Título *</span>
      <input v-model="form.titulo" type="text" placeholder="Ex: Barcelona" />
    </label>
    <label class="form__campo">
      <span>Resumo</span>
      <input v-model="form.resumo" type="text" placeholder="Uma frase curta" />
    </label>
    <label class="form__campo">
      <span>Descrição</span>
      <textarea v-model="form.descricao" rows="3" placeholder="Texto completo do destino"></textarea>
    </label>
    <label class="form__campo">
      <span>URL da imagem</span>
      <input v-model="form.imagem" type="text" placeholder="https://..." />
    </label>
    <label class="form__campo">
      <span>Categorias (separadas por vírgula)</span>
      <input v-model="form.categorias" type="text" placeholder="praia, cidade" />
    </label>

    <div class="form__acoes">
        <!-- tipo="submit": dispara o @submit do form (também ativa o Enter) -->
        <Botao tipo="submit">{{ editando ? 'Salvar alterações' : 'Salvar' }}</Botao>
        <!-- secundário e type=button: só avisa o cancelamento, sem enviar o form -->
        <Botao variante="secundario" @clicar="emit('cancelar')">Cancelar</Botao>
    </div>
  </form>
</template>

<style scoped>
.form {
  background: var(--cor-superficie);
  border: 1px solid var(--cor-borda);
  border-radius: var(--raio);
  padding: 1.5rem; margin-bottom: 2rem; max-width: 560px;
  display: flex; flex-direction: column; gap: 1rem;
}
.form__titulo { margin: 0; font-size: 1.4rem; }
.form__campo { display: flex; flex-direction: column; gap: .35rem; font-size: .9rem; }
.form__campo span { font-weight: 500; color: var(--cor-texto-suave); }
.form__campo input, .form__campo textarea {
  padding: .6rem .75rem; border: 1px solid var(--cor-borda); border-radius: 10px;
  font: inherit; background: var(--cor-fundo); color: var(--cor-texto); resize: vertical;
}
.form__campo input:focus, .form__campo textarea:focus { outline: none; border-color: var(--cor-acento); }
.form__acoes { display: flex; gap: .75rem; }
.form__salvar {
  padding: .55rem 1.4rem; border: none; border-radius: 10px;
  background: var(--cor-acento); color: #fff; font: inherit; font-weight: 500; cursor: pointer;
}
.form__salvar:hover { background: var(--cor-acento-escuro); }
.form__cancelar {
  padding: .55rem 1.1rem; border: 1px solid var(--cor-borda); border-radius: 10px;
  background: transparent; color: var(--cor-texto); font: inherit; cursor: pointer;
}
</style>
