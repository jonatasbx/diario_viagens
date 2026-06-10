<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { destinos } from '../data/destinos.js'
import Tag from '../components/Tag.vue'

const route = useRoute()
const destino = computed(() => destinos.find((d) => d.id === Number(route.params.id)))
</script>

<template>
  <p v-if="!destino">Destino não encontrado.</p>

  <article v-else class="destino">
    <RouterLink to="/" class="destino__voltar">← Voltar</RouterLink>
    <img :src="destino.imagem" :alt="destino.titulo" class="destino__img" />
    <h1 class="destino__titulo">{{ destino.titulo }}</h1>
    <div class="destino__tags">
      <Tag v-for="t in destino.tags" :key="t.texto" :cor="t.cor">{{ t.texto }}</Tag>
    </div>
    <p class="destino__texto">{{ destino.descricao }}</p>
  </article>
</template>

<style scoped>
.destino { max-width: 760px; }
.destino__voltar { display: inline-block; margin-bottom: 1.5rem; font-weight: 500; }
.destino__img { width: 100%; max-height: 380px; object-fit: cover; border-radius: var(--raio); }
.destino__titulo { font-size: 2.25rem; margin: 1.25rem 0 .5rem; }
.destino__tags { display: flex; gap: .4rem; margin-bottom: 1.25rem; }
.destino__texto { font-size: 1.05rem; }
</style>
