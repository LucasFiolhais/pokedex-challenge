<template>
  <NuxtLink :to="`/${details?.name}`" class="card-link">
    <div class="card">
      <img 
        v-if="details" 
        :src="getFrontSprite(details)" 
        :alt="name" 
      />
      <h3>{{ name }}</h3>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  url: string;
}>();

// Chamamos apenas o que precisamos para o card
const { getFrontSprite } = usePokemonFormatter();

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