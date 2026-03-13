<template>
  <button 
    class="fav-button"
    :class="{ 'is-active': pokemonStore.isFavorite(pokemonId) }"
    @click="pokemonStore.toggleFavorite(pokemonId)"
  >
    <div class="icon-container">
      <img 
        v-if="!pokemonStore.isFavorite(pokemonId)"
        src="/pokeball_open.png" 
        alt="Capturar" 
        class="pokeball-icon open-ball" 
      />
      
      <img 
        v-else
        src="/pokeball.png" 
        alt="Na Equipa" 
        class="pokeball-icon closed-ball" 
      />
    </div>

    <span class="pixel-font">
      {{ pokemonStore.isFavorite(pokemonId) ? activeText : idleText }}
    </span>
  </button>
</template>

<script setup>
defineProps({
  pokemonId: {
    type: [Number, String],
    required: true
  },
  idleText: {
    type: String,
    default: 'CAPTURAR'
  },
  activeText: {
    type: String,
    default: 'NA EQUIPA'
  }
})

// Chamar a store
const pokemonStore = usePokemonStore()
</script>


<style scoped>

.fav-button {
  display: flex;
  margin: 0 auto 25px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background: linear-gradient(145deg, #444, #2b2b2b);
  color: white;
  border: 3px solid #000; 
  padding: 10px 25px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 
    inset 0 3px 0 rgba(255, 255, 255, 0.1),
    inset 0 -3px 0 rgba(0, 0, 0, 0.3),    
    6px 6px 0px rgba(0,0,0,0.2);          
  transition: all 0.1s ease-in-out;
}

.fav-button.is-active {
  background: linear-gradient(145deg, #ff1744, #d50000);
  border-color: #333;
}


.fav-button:hover {
  transform: translateY(-3px); 
  background: linear-gradient(145deg, #555, #3a3a3a);
}

.fav-button.is-active:hover {
  background: linear-gradient(145deg, #ff5252, #e53935); /* Vermelho mais brilhante no hover */
}


.fav-button:active {
  transform: translate(3px, 3px); 
  box-shadow: 
    inset 0 2px 0 rgba(0, 0, 0, 0.2),
    3px 3px 0px rgba(0,0,0,0.1);      
}


.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
}

.pokeball-icon {
  width: 100%;
  height:100%;
  object-fit: contain;
}

.pixel-font {
  font-family: 'VT323', monospace;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 
    2px 2px 0px #000,
    0 0 8px rgba(255, 255, 255, 0.3); 
  display: inline-block;
  line-height: 1;
  user-select: none;
  transition: all 0.2s ease;
}

.is-active .pixel-font {
  color: #ffebee;
  text-shadow: 2px 2px 0px #850000;
}

</style>