<script setup>
defineProps({
  // 'button' (padrão, não envia o form) ou 'submit' (envia o form)
  tipo: { type: String, default: 'button' },
  // 'primario' (sólido) ou 'secundario' (contornado), para ações secundárias
  variante: { type: String, default: 'primario' },
})
const emit = defineEmits(['clicar'])
</script>

<template>
  <!-- :type recebe o tipo; :class monta "botao--primario" ou "botao--secundario" -->
  <button :type="tipo" class="botao" :class="`botao--${variante}`" @click="emit('clicar')">
    <slot />
  </button>
</template>

<style scoped>
.botao {
  padding: .55rem 1.1rem; border-radius: 10px;
  font: inherit; font-size: .95rem; font-weight: 500; cursor: pointer;
  transition: background var(--transicao), color var(--transicao);
}
.botao--primario { border: none; background: var(--cor-acento); color: #fff; }
.botao--primario:hover { background: var(--cor-acento-escuro); }
.botao--secundario { border: 1px solid var(--cor-borda); background: transparent; color: var(--cor-texto); }
.botao--secundario:hover { background: var(--cor-acento-suave); }
</style>
