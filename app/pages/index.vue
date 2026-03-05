<template>
    <main>
    <h1>Pokédex do Ash</h1>

    <div v-if="status === 'pending'">A carregar a lista...</div>
    <div v-else-if="error">Ocorreu um erro.</div>

    <div v-else class="pokemon-grid">
      <PokemonCard 
        v-for="pokemon in data?.results" 
        :key="pokemon.name"
        :name="pokemon.name"
        :url="pokemon.url"
      />
    </div>
  </main>
</template>


<script setup lang="ts">
// definir as interfaces para os dados que quero receber da API
interface PokemonListItem {
  name: string;
  url: string;
}

interface PokeAPIResponse {
  results: PokemonListItem[];
}

// ligar à API para ter a lista
const { data, status, error } = await useFetch<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon?limit=1025');
</script>

<style scoped>
.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>