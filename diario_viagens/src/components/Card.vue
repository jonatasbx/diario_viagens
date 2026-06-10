<script setup>
import Botao from './Botao.vue'
import Tag from './Tag.vue'

defineProps({
  titulo: { type: String, required: true },
  imagem: { type: String, default: '' },
  resumo: { type: String, default: '' },
  tags: { type: Array, default: () => [] },
})
const emit = defineEmits(['abrir'])
</script>

<template>
  <article class="card">
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
  background: var(--cor-superficie);
  border: 1px solid var(--cor-borda);
  border-radius: var(--raio);
  overflow: hidden;
  display: flex; flex-direction: column;
  transition: transform var(--transicao), box-shadow var(--transicao);
}
.card:hover { transform: translateY(-4px); box-shadow: var(--sombra); }
.card__img { width: 100%; height: 180px; object-fit: cover; }
.card__corpo { padding: 1.25rem; display: flex; flex-direction: column; gap: .6rem; }
.card__titulo { margin: 0; font-size: 1.3rem; }
.card__resumo { margin: 0; color: var(--cor-texto-suave); flex: 1; }
.card__tags { display: flex; flex-wrap: wrap; gap: .4rem; }
</style>
