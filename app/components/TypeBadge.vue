<template>
  <span 
    class="type-badge" 
    :style="{ backgroundColor: getTypeColor(type) }"
  >
    {{ type }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  type: string;
}>();

// puxar o composable
const { getTypeColor } = usePokemonTypes();
</script>

<style scoped>
.type-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  border-radius: 8px;
  font-family: 'VT323', monospace;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 3px solid #333;
  box-shadow: 
    inset 0 3px 0 rgba(255, 255, 255, 0.4),
    inset 0 -3px 0 rgba(0, 0, 0, 0.3),
    4px 4px 0px rgba(0, 0, 0, 0.15);
  transition: all 0.1s ease-in-out;
  text-shadow: 2px 2px 0px rgba(0,0,0,0.3);
}

.type-badge:hover {
  transform: translateY(-2px);
  box-shadow: 
    inset 0 3px 0 rgba(255, 255, 255, 0.4),
    inset 0 -3px 0 rgba(0, 0, 0, 0.3),
    6px 6px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

</style>