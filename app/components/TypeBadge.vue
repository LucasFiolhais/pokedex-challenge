<template>
  <span 
    class="type-badge" 
    :style="{ backgroundColor: getTypeColor(type) }"
  >
    {{ type }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string;
}>();

// pWuxar o composable
const { getTypeColor } = usePokemonTypes();
</script>

<style scoped>
.type-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 14px;
  border-radius: 9999px;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.type-badge:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>