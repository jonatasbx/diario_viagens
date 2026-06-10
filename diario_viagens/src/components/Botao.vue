<script setup>
const emit = defineEmits(['clicar'])
</script>

<template>
  <button class="botao" @click="emit('clicar')"><slot /></button>
</template>

<style scoped>
.botao {
  padding: .55rem 1.1rem; border: none; border-radius: 10px;
  background: var(--cor-acento); color: #fff;
  font-family: inherit; font-size: .95rem; font-weight: 500;
  cursor: pointer; transition: background var(--transicao);
}
.botao:hover { background: var(--cor-acento-escuro); }
</style>
