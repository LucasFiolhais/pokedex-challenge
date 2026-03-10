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
        <button @click="prevPage" :disabled="offset === 0">Anterior</button>
        <span>Página {{ (offset / limit) + 1 }}</span>
        <button @click="nextPage" :disabled="!data || offset + limit >= data.count">Próxima</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PokemonListItem { name: string; url: string; }
interface PokeAPIResponse { results: PokemonListItem[]; count: number; }

const limit = ref(24);
const offset = ref(0);

const apiUrl = computed(() => `https://pokeapi.co/api/v2/pokemon?limit=${limit.value}&offset=${offset.value}`);
const { data, status, error } = await useFetch<PokeAPIResponse>(apiUrl);

const nextPage = () => {
  if (data.value && offset.value + limit.value < data.value.count) {
    offset.value += limit.value;
  }
};

const prevPage = () => {
  if (offset.value >= limit.value) {
    offset.value -= limit.value;
  }
};

const router = useRouter();

const irParaPokemon = (nome: string) => {
  router.push(`/${nome.toLowerCase().trim()}`);
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