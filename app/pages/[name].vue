<template>
  <div class="profile-container">
    <nav class="navigation">
      <NuxtLink to="/" class="back-button">
        ← Voltar para a Pokédex
      </NuxtLink>
    </nav>

    <div v-if="pending" class="loader">A carregar o perfil do Ash...</div>

    <div v-else-if="error" class="error-box">
      <h2>Pokémon não encontrado!</h2>
      <p>Não Conseguimos Encontrar <span class="erroTexto">"{{ route.params.name }}"</span>. </p>
    </div>
    
    <div v-else-if="pokemon" class="pokemon-card">
      <header class="card-header">
        <span class="pokemon-id">#{{ pokemon.id }}</span>
        <h1 class="pokemon-name">{{ pokemon.name }}</h1>
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
          <span class="label">Peso</span>
          <span class="value">{{ pokemon.weight / 10 }} kg</span>
        </div>
        <div class="stat-item">
          <span class="label">Altura</span>
          <span class="value">{{ pokemon.height / 10 }} m</span>
        </div>
      </div>

      <h2>Stats</h2>
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
// 1. Acedemos aos parâmetros da rota para saber qual é o ID
const route = useRoute();
const pokemonName = route.params.name;

// pedido à api para um especifico
const { data: pokemon, pending, error } = await useFetch<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.navigation {
  margin-bottom: 20px;
}

.back-button {
  text-decoration: none;
  color: #666;
  font-weight: bold;
}

.back-button:hover {
  color: #ef5350;
}

.pokemon-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
  padding: 30px;
}

.card-header {
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.pokemon-name {
  text-transform: capitalize;
  font-size: 2rem;
  margin: 0;
  color: #333;
}

.pokemon-id {
  font-weight: bold;
  color: #bbb;
  font-size: 1.2rem;
}

/* para a imagem */
.image-wrapper {
  background: #f8f8f8;
  border-radius: 100%;
  width: 250px;
  height: 250px;
  margin: auto;
  display: flex;
  align-items: center;
}

.main-image {
  width: 90%;
}

.main-image:hover {
  transform: scale(1.1);
}

/* para os tipos */
.types-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
}

.type-badge {
  padding: 6px 20px;
  border-radius: 20px;
  color: white;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1px;
}

/* para as detalhes */
.stats-mini-grid {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #eee;
  padding-top: 20px;
  margin-bottom: 20px;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.label {
  color: #999;
  font-size: 14px;
  margin-bottom: 5px;
}

.value {
  font-weight: bold;
  color: #333;
  font-size: 18px;
}

/* Cor para cada tipo */
.grass { background: #78C850; }
.fire { background: #F08030; }
.water { background: #6890F0; }
.bug { background: #A8B820; }
.poison { background: #A040A0; }
.electric { background: #F8D030; color: #333; }


.error-box {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
  padding: 30px;
  font-size: large;
}
.error-box h2{
  font-weight: bold;
  font-size:xx-large;
}
.erroTexto {
  color: red;
  font-weight: bold;
  font-size: large;
}

</style>