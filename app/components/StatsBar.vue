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
  margin-bottom: 12px; 
  font-family: 'VT323', monospace;
}

.stat-label {
  width: 100px;
  font-size: 1.1rem;
  color: #444;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-value {
  width: 45px;
  font-weight: bold;
  text-align: right;
  margin-right: 15px;
  font-size: 1.2rem;
  color: #333;
}

.bar-container {
  flex: auto;
  background-color: #222;
  height: 16px;
  border: 2px solid #333;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: inset 2px 2px 4px rgba(0,0,0,0.5);
  position: relative;
}


.bar-fill {
  height: 100%;
  border-radius: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  border-right: 3px solid rgba(0,0,0,0.3);
}

</style>