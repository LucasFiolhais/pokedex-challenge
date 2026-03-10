<template>
  <div class="stat-line">
    <span class="stat-label">{{ translatedName }}</span>
    <span class="stat-value">{{ value }}</span>
    
    <div class="bar-container">
      <div 
        class="bar-fill" 
        :style="{ 
          width: percentagem + '%',
          backgroundColor: barColor 
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  value: number;
}>();

// tradução e cálculo
const translatedName = computed(() => {
  const names: Record<string, string> = {
    hp: 'HP',
    attack: 'Ataque',
    defense: 'Defesa',
    'special-attack': 'Sp. Atq',
    'special-defense': 'Sp. Def',
    speed: 'Velocidade'
  };
  return names[props.label] || props.label;
});

// dar resultado em percentagem, para funcionar a logica da barra
const percentagem = computed(() => ((props.value / 255) * 100));

// Lógica das cores
const barColor = computed(() => {
  if (props.value < 50) return '#f34444'; 
  if (props.value < 90) return '#ffdd57'; 
  return '#a0e515'; 
});
</script>

<style scoped>
.stat-line {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-family: sans-serif;
}

.stat-label {
  width: 100px;
  font-size: 0.85rem;
  color: #666;
  text-transform: uppercase;
}

.stat-value {
  width: 40px;
  font-weight: bold;
  text-align: right;
  margin-right: 15px;
}

.bar-container {
  flex:auto;
  background-color: #eee;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 5px;
}
</style>