<template>
  <div>
    <SearchBar @search="irParaPokemon" class="search-bar"/>

    <div v-if="status === 'pending'">A carregar a lista...</div>
    <div v-else-if="error">Ocorreu um erro.</div>

    <div v-else>
      <div class="pokemon-grid">
        <PokemonCard 
          v-for="pokemon in data?.results" 
          :key="pokemon.name"
          :name="pokemon.name"
          :url="pokemon.url"
        />
      </div>

      <div class="pagination">
        <button 
          class="pixel-btn" 
          @click="prevPage" 
          :disabled="offset === 0"
        >
          Anterior
        </button>

        <span class="page-info">Página {{ currentPage }}</span>

        <button 
          class="pixel-btn" 
          @click="nextPage(data?.count || 0)" 
          :disabled="isLastPage(data?.count || 0)"
        >
          Próxima
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// puxar os composables
const { limit, offset, currentPage, nextPage, prevPage, isLastPage } = usePagination(24);
const { getPokemonList } = usePokemonApi();
const router = useRouter();

// puxar o composable da api
const { data, status, error } = await getPokemonList(limit, offset);

//para ir para a pág de perfil
const irParaPokemon = (nome: string) => {
  if (nome.trim()) {
    router.push(`/${nome.toLowerCase().trim()}`);
  }
};
</script>

<style scoped>

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  padding: 20px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
}

button {
  padding: 10px 20px;
  cursor: pointer;
  background-color: #ef5350;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.search-bar {
  display: flex;
  justify-content: left;
  margin-left: 20px;
}
</style>