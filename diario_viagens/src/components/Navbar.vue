<script setup>
const emit = defineEmits(['alternar'])
</script>

<template>
  <header class="navbar">
    <button class="navbar__menu" @click="emit('alternar')" aria-label="Abrir menu">
      <span></span><span></span><span></span>
    </button>
    <RouterLink to="/" class="navbar__marca">Diário de Viagens</RouterLink>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky; top: 0; z-index: 10;
  display: flex; align-items: center; gap: 1rem;
  padding: 0 1.5rem; height: 64px;
  background: var(--cor-superficie);
  border-bottom: 1px solid var(--cor-borda);
}
.navbar__marca {
  font-family: var(--fonte-titulo);
  font-size: 1.25rem; font-weight: 600;
  color: var(--cor-texto);
}
.navbar__menu {
  display: flex; flex-direction: column; justify-content: center; gap: 4px;
  width: 36px; height: 36px; padding: 0;
  border: none; border-radius: 8px; background: transparent; cursor: pointer;
}
.navbar__menu:hover { background: var(--cor-acento-suave); }
.navbar__menu span {
  display: block; width: 18px; height: 2px; margin: 0 auto;
  background: var(--cor-texto); border-radius: 2px;
}
</style>
