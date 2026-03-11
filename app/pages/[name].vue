<template>
  <div class="profile-wrapper">
    <div v-if="pending" class="loader">A carregar o perfil do Ash...</div>

    <div v-else-if="error" class="error-box">
      <h2 class="pokemon-font">Pokémon não encontrado!</h2>
      <p>Não Conseguimos Encontrar <span class="erroTexto">"{{ route.params.name }}"</span>.</p>
    </div>
    
    <div v-else-if="pokemon" class="pokemon-card">
      <header class="card-header">
        <span class="pokemon-id pixel-font">{{ formatId(pokemon.id) }}</span>
        <h1 class="pokemon-name pokemon-font">{{ formatName(pokemon.name) }}</h1>
      </header>

      <div class="image-wrapper">
        <img 
          :src="getOfficialArtwork(pokemon)" 
          :alt="pokemon.name"
          class="main-image"
        />
      </div>

      <div class="types-container">
        <TypeBadge 
          v-for="t in pokemon.types" 
          :key="t.type.name" 
          :type="t.type.name" 
        />
      </div>

      <div class="stats-mini-grid">
        <div class="stat-item">
          <span class="label">Peso: </span>
          <span class="value pixel-font">{{ formatWeight(pokemon.weight) }}</span>
        </div>
        <div class="stat-item">
          <span class="label">Altura: </span>
          <span class="value pixel-font">{{ formatHeight(pokemon.height) }}</span>
        </div>
      </div>

      <h2 class="pixel-font">Stats</h2>
      <StatsBar
        v-for="s in pokemon.stats" 
        :key="s.stat.name"
        :label="s.stat.name" 
        :value="s.base_stat"
        class="stat-bar"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'details'
});

const route = useRoute();

// puxar composables
const { fetchPokemonDetails } = usePokemonApi();
const { formatName, formatId, getOfficialArtwork } = usePokemonFormatter();
const { formatWeight, formatHeight } = usePokemonMetrics();

// api
const { data: pokemon, pending, error } = await fetchPokemonDetails(route.params.name as string);

// para mudar o titulo
useHead({
  title: pokemon.value ? formatName(pokemon.value.name) : 'Carregando...'
});
</script>

<style scoped>
.profile-wrapper {
  max-width: 600px;
  margin: 0 auto;
}

.pokemon-font {
  font-family: 'Luckiest Guy', cursive;
  letter-spacing: 2px;
}

.pixel-font {
  font-family: 'VT323', monospace;
  font-size: 24px;
}

.pokemon-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
  padding: 30px;
}

.pokemon-name {
  text-transform: capitalize;
  font-size: 40px;
  color: #333;
}

.image-wrapper {
  background: #f8f8f8;
  border-radius: 100%;
  width: 250px;
  height: 250px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-image {
  width: 90%;
  transition: transform 0.3s ease;
}

.main-image:hover {
  transform: scale(1.1);
}

.types-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

.stats-mini-grid {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.error-box h2 { color: #ef5350; }
.erroTexto { color: red; font-weight: bold; }
</style>