<template>
  <NuxtLink :to="`/${details?.id}`" class="card-link">
  <div class="card">
    <img 
      v-if="details?.sprites?.front_default" 
      :src="details.sprites.front_default" 
      :alt="name" 
    />
    <h3>{{ name }}</h3>
  </div>
  </NuxtLink>
</template>


<script setup lang="ts">
// Receber os dados do index
const props = defineProps<{
  name: string;
  url: string;
}>();

// ligar para ter os detalhes
const { data: details } = await useFetch<any>(props.url);
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  background-color: #f9f9f9;
}
img {
  width: 96px;
  height: 96px;
}
h3 {
  text-transform: capitalize;
}
.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.2s;
}

.card-link:hover {
  transform: scale(1.05);
}
</style>