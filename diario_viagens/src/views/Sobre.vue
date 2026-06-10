<script setup>
import { sobre } from '../data/sobre.js' // mesmo padrão de "fonte única" dos destinos
</script>

<template>
  <section class="sobre">
    <header class="sobre__cabecalho">
      <img :src="sobre.foto" :alt="sobre.nome" class="sobre__foto" />
      <div>
        <h1 class="sobre__nome">{{ sobre.nome }}</h1>
        <p class="sobre__papel">{{ sobre.papel }}</p>
      </div>
    </header>

    <p class="sobre__intro">{{ sobre.intro }}</p>

    <h2 class="sobre__subtitulo">Como eu gosto de viajar</h2>
    <div class="sobre__estilos">
      <!-- um cartão para cada estilo de viagem -->
      <article v-for="estilo in sobre.estilos" :key="estilo.titulo" class="estilo">
        <h3 class="estilo__titulo">{{ estilo.titulo }}</h3>
        <p class="estilo__texto">{{ estilo.texto }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.sobre { max-width: 820px; }
.sobre__cabecalho { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem; }
.sobre__foto { width: 110px; height: 110px; border-radius: 50%; object-fit: cover; }
.sobre__nome { font-size: 2.25rem; margin: 0; }
.sobre__papel { margin: .25rem 0 0; color: var(--cor-texto-suave); }
.sobre__intro { font-size: 1.15rem; line-height: 1.7; }
.sobre__subtitulo { font-size: 1.5rem; margin: 2.5rem 0 1.25rem; }
.sobre__estilos { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; }
.estilo {
  background: var(--cor-superficie);
  border: 1px solid var(--cor-borda);
  border-radius: var(--raio);
  padding: 1.25rem;
}
.estilo__titulo { margin: 0 0 .5rem; font-size: 1.15rem; color: var(--cor-acento-escuro); }
.estilo__texto { margin: 0; color: var(--cor-texto-suave); }
</style>
