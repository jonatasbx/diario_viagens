<script setup>
import Botao from './Botao.vue'
import Tag from './Tag.vue'

defineProps({
  titulo: { type: String, required: true },
  imagem: { type: String, default: '' },
  resumo: { type: String, default: '' },
  tags: { type: Array, default: () => [] },
})
// três eventos genéricos; o pai decide o significado de cada um
const emit = defineEmits(['abrir', 'editar', 'excluir'])
</script>

<template>
  <article class="card">
    <div class="card__acoes">
      <!-- cada botão só emite seu evento; o Card não faz nada sozinho -->
      <button class="card__acao" @click="emit('editar')" aria-label="Editar destino">✎</button>
      <button class="card__acao" @click="emit('excluir')" aria-label="Excluir destino">X</button>
    </div>

    <img v-if="imagem" :src="imagem" :alt="titulo" class="card__img" />
    <div class="card__corpo">
      <h2 class="card__titulo">{{ titulo }}</h2>
      <p class="card__resumo">{{ resumo }}</p>
      <div class="card__tags">
        <Tag v-for="t in tags" :key="t.texto" :cor="t.cor">{{ t.texto }}</Tag>
      </div>
      <Botao @clicar="emit('abrir')">Ler mais</Botao>
    </div>
  </article>
</template>

<style scoped>
.card {
  position: relative;
  background: var(--cor-superficie);
  border: 1px solid var(--cor-borda);
  border-radius: var(--raio);
  overflow: hidden;
  display: flex; flex-direction: column;
  transition: transform var(--transicao), box-shadow var(--transicao);
}
.card:hover { transform: translateY(-4px); box-shadow: var(--sombra); }
.card__acoes { position: absolute; top: .6rem; right: .6rem; z-index: 1; display: flex; gap: .4rem; }
.card__acao {
  width: 30px; height: 30px; border: none; border-radius: 50%;
  background: rgba(255,255,255,.9); color: var(--cor-acento-escuro);
  font-size: 1.1rem; line-height: 1; cursor: pointer;
  display: grid; place-items: center;
  transition: background var(--transicao), color var(--transicao);
}
.card__acao:hover { background: var(--cor-acento); color: #fff; }
.card__img { width: 100%; height: 180px; object-fit: cover; }
.card__corpo { padding: 1.25rem; display: flex; flex-direction: column; gap: .6rem; }
.card__titulo { margin: 0; font-size: 1.3rem; }
.card__resumo { margin: 0; color: var(--cor-texto-suave); flex: 1; }
.card__tags { display: flex; flex-wrap: wrap; gap: .4rem; }
</style>
