<template>
  <div class="profile-container">
    <NuxtLink to="/">Voltar para a lista</NuxtLink>  

    <div v-if="pending">A carregar o perfil...</div>
    <div v-else-if="pokemon">
      <h1>{{ pokemon.name }}</h1>
      
      <img 
        :src="pokemon.sprites.other['official-artwork'].front_default" 
        :alt="pokemon.name" 
      />

      <div class="types">
        <h3>Tipo:</h3>
        <ul>
          <li v-for="t in pokemon.types" :key="t.type.name">
            {{ t.type.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 1. Acedemos aos parâmetros da rota para saber qual é o ID
const route = useRoute();
const pokemonId = route.params.id;

// 2. Fazemos o pedido à API usando o ID dinâmico
const { data: pokemon, pending, error } = await useFetch<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
</script>
