<template>
  <div class="search-box">
    <input 
      v-model="query" 
      type="text" 
      placeholder="Escreve o nome..." 
      @keyup.enter="confirmarPesquisa"
    />
    <button @click="confirmarPesquisa">Pesquisar</button>
  </div>
</template>

<script setup>
const query = ref(''); //recebe o texto
const emit = defineEmits(['search']);

const confirmarPesquisa = () => {
  if (query.value.trim()) {
    emit('search', query.value.toLowerCase().trim());
    query.value = ''; // Limpar depois
  }
};
</script>