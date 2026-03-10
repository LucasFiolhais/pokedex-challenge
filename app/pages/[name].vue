<template>
  <div class="profile-wrapper">
    <div v-if="pending" class="loader">A carregar o perfil do Ash...</div>

    <div v-else-if="error" class="error-box">
      <h2 class="pokemon-font">Pokémon não encontrado!</h2>
      <p>Não Conseguimos Encontrar <span class="erroTexto">"{{ route.params.name }}"</span>.</p>
    </div>
    
    <div v-else-if="pokemon" class="pokemon-card">
      <header class="card-header">
        <span class="pokemon-id pixel-font">#{{ pokemon.id }}</span>
        <h1 class="pokemon-name pokemon-font">{{ pokemon.name }}</h1>
      </header>

      <div class="image-wrapper">
        <img 
          :src="pokemon.sprites.other['official-artwork'].front_default" 
          :alt="pokemon.name"
          class="main-image"
        />
      </div>

      <div class="types-container">
        <span 
          v-for="t in pokemon.types" 
          :key="t.type.name" 
          :class="['type-badge', t.type.name]"
        >
          {{ t.type.name }}
        </span>
      </div>

      <div class="stats-mini-grid">
        <div class="stat-item">
          <span class="label">Peso: </span>
          <span class="value pixel-font">{{ pokemon.weight / 10 }} kg</span>
        </div>
        <div class="stat-item">
          <span class="label">Altura: </span>
          <span class="value pixel-font">{{ pokemon.height / 10 }} m</span>
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
// layout de detalhes
definePageMeta({
  layout: 'details'
});

const route = useRoute();
const pokemonName = route.params.name;

const { data: pokemon, pending, error } = await useFetch<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
</script>

<style scoped>


.profile-wrapper {
  max-width: 600px;
  margin: 0 auto;
}

/* meter as fonts */
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

.type-badge {
  padding: 6px 20px;
  border-radius: 20px;
  color: white;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
}

/* Cores dos Tipos */
.grass { background: #78C850; }
.fire { background: #F08030; }
.water { background: #6890F0; }
.bug { background: #A8B820; }
.poison { background: #A040A0; }
.electric { background: #F8D030; color: #333; }

.stats-mini-grid {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.error-box h2 { color: #ef5350; }
.erroTexto { color: red; font-weight: bold; }
</style>