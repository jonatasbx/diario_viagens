<script setup>
defineProps({ cor: { type: String, default: '#f4e9e2' } })
</script>

<template>
  <span class="tag" :style="{ backgroundColor: cor }"><slot /></span>
</template>

<style scoped>
.tag {
  display: inline-block; padding: .2rem .7rem;
  border-radius: 999px; border: 1px solid var(--cor-borda);
  font-size: .78rem; font-weight: 500; color: var(--cor-texto-suave);
}
</style>
