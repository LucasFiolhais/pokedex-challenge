<template>
  <NuxtLink :to="`/${name}`" class="card-link">
    <div class="pokemon-card">
      <div v-if="details && pokemonStore.isFavorite(details.id)" class="captured-badge">
        <img src="/pokeball.png" alt="Capturado!" class="pokeball-badge-image" />
      </div>

      <span v-if="details" class="pokemon-id">{{ formatId(details.id) }}</span>
      
      <div class="image-container">
        <img 
          v-if="details" 
          :src="getFrontSprite(details)" 
          :alt="name" 
          class="pokemon-image"
        />
      </div>

      <div class="card-info">
        <h3 class="pokemon-name">{{ name }}</h3>
        <div class="divider"></div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  url: string;
}>();
interface PokemonDetails {
  id: number;
  sprites: {
    front_default: string;
  };
}

const pokemonStore = usePokemonStore();
const { getFrontSprite, formatId } = usePokemonFormatter();

// Alteramos o Record para a nossa Interface PokemonDetails
const { data: details } = await useFetch<PokemonDetails>(props.url);
</script>

<style scoped>
.card-link {
  text-decoration: none;
}

.pokemon-card {
  position: relative;
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  border: 4px solid #333;
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.pokemon-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0px #ef5350;
  background: #ffffff;
}


.pokemon-id {
  position: absolute;
  top: 10px;
  right: 12px;
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  color: #888;
}

.image-container {
  background: #e0e0e0; 
  border: 3px solid #333;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
}

.pokemon-image {
  width: 80px;
  height: 80px;
  image-rendering: pixelated;
}

.pokemon-name {
  font-family: 'Luckiest Guy', cursive;
  font-size: 1.4rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 5px 0;
}

.divider {
  width: 40px;
  height: 4px;
  background: #ef5350;
  margin: 0 auto;
  border-radius: 2px;
}

.captured-badge {
  position: absolute;
  top: -15px;
  left: -15px;
  width: 45px;
  height: 45px;
  z-index: 10;
}

.pokeball-badge-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}


</style>