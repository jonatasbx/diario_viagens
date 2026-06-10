<script setup>
defineProps({ aberto: { type: Boolean, default: false } })
</script>

<template>
  <aside class="menu" :class="{ aberto: aberto }">
    <nav class="menu__nav">
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/sobre">Sobre</RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.menu {
  width: 0; overflow: hidden;
  background: var(--cor-superficie);
  border-right: 1px solid var(--cor-borda);
  white-space: nowrap;
  transition: width var(--transicao);
}
.menu.aberto { width: 220px; }
.menu__nav { display: flex; flex-direction: column; gap: .25rem; padding: 1.25rem; }
.menu__nav a {
  padding: .6rem .8rem; border-radius: 10px;
  color: var(--cor-texto); font-weight: 500;
  transition: background var(--transicao);
}
.menu__nav a:hover { background: var(--cor-acento-suave); }
.menu__nav a.router-link-active {
  background: var(--cor-acento-suave);
  color: var(--cor-acento-escuro);
}
</style>
