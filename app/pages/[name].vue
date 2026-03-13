<template>
  <div class="profile-wrapper">
    <div v-if="pending" class="loader">A carregar o perfil do Ash...</div>

    <div v-else-if="error" class="error-box">
      <h2 class="pokemon-font">Pokémon não encontrado!</h2>
      <p>Não Conseguimos Encontrar <span class="erroTexto">"{{ route.params.name }}"</span>.</p>
      <button @click="$router.back()"></button>
    </div>
    
    <div v-else-if="pokemon" class="pokemon-card">
      <header class="card-header">
        <span class="pokemon-id pixel-font">{{ formatId(pokemon.id) }}</span>
        <h1 class="pokemon-name pokemon-font">{{ formatName(pokemon.name) }}</h1>
      </header>

      <FavoriteButton :pokemon-id="pokemon.id"/>

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
const { formatWeight, formatHeight } = usePokemonFormatter();

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
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border: 4px solid #333;
  outline: 4px solid #ef5350;
  border-radius: 40px;
  padding: 40px;
  text-align: center;
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.2);
  position: relative;
}

.pokemon-name {
  text-transform: capitalize;
  font-size: 40px;
  color: #333;
}

.image-wrapper {
  background: #2b2b2b;
  border: 6px solid #555;
  border-radius: 20px;
  width: 300px;
  height: 300px;
  margin: 0 auto 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 30px #000;
  position: relative;
}


.main-image {
  width: 85%;
  filter: drop-shadow(0 0 15px rgba(255,255,255,0.3));
  transition: transform 0.4s ease;
}

.main-image:hover {
  transform: scale(1.1) rotate(-3deg);
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
  background: #333;
  color: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 40px;
  border: 3px solid #000;
}

.error-box {
  background: #2b2b2b;
  border: 6px solid #ef5350;
  border-radius: 25px;
  padding: 50px 30px;
  text-align: center;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.3);
  color: white;
  position: relative;
  overflow: hidden;
}

.error-box h2 {
  font-size: 2.5rem;
  color: #ff5252;
  text-shadow: 3px 3px 0px #000;
  margin-bottom: 20px;
  animation: glitch 1s infinite;
}

.error-box p {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  color: #ccc;
}

.erroTexto {
  color: #ffeb3b;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: underline;
}
</style>