<template>
  <div class="stat-line">
    <span class="stat-label">{{ formatStatName(label) }}</span>
    <span class="stat-value">{{ value }}</span>
    
    <div class="bar-container">
      <div 
        class="bar-fill" 
        :style="{ 
          width: calculatePercentage(value) + '%',
          backgroundColor: getStatColor(value) 
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

// puxar o composable
const { calculatePercentage, getStatColor, formatStatName } = usePokemonStats();
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