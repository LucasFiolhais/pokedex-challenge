<template>
  <div class="search-container">
    <div class="search-box">
      <input 
        v-model="query" 
        type="text" 
        placeholder="NOME DO POKÉMON..." 
        class="pixel-font"
        @keyup.enter="confirmarPesquisa"
      />
      <button class="search-button pokemon-font"  @click="confirmarPesquisa">
        GO!
      </button>
    </div>
  </div>
</template>

<script setup>
const query = ref('');
const emit = defineEmits(['search']);

const confirmarPesquisa = () => {
  if (query.value.trim()) {
    emit('search', query.value.toLowerCase().trim());
    query.value = '';
  }
};
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

.search-box {
  display: flex;
  background: #333;
  padding: 8px;
  border-radius: 12px;
  border: 4px solid #000;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  gap: 8px;
  max-width: 500px;
  width: 100%;
}

input {
  flex: 1;
  background: #f0f0f0;
  border: 3px solid #333;
  padding: 12px 15px;
  border-radius: 6px;
  font-size: 1.1rem;
  outline: none;
  color: #222;
  text-transform: uppercase;
}

.search-button {
  background-color: #ef5350; 
  color: white;
  border: 3px solid #333;
  padding: 10px 25px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2rem;
  text-shadow: 2px 2px 0px #333;
  box-shadow: inset -4px -4px 0px rgba(0,0,0,0.2);
  transition: all 0.1s;
}

.search-button:hover {
  background-color: #ff1744;
  transform: scale(1.05);
}

.search-button:active {
  transform: translateY(2px);
  box-shadow: inset 2px 2px 0px rgba(0,0,0,0.2);
}
.pixel-font {
  font-family: 'VT323', monospace;
}

.pokemon-font {
  font-family: 'Luckiest Guy', cursive;
}
</style>