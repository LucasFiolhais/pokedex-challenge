<script setup lang="ts">

defineProps<{
  currentPage: number;
  offset: number;
  isLastPage: boolean;
}>();


const emit = defineEmits(['prev', 'next']);
</script>

<template>
  <div class="pagination">
    <button 
      class="pixel-btn" 
      :disabled="offset === 0"
      @click="emit('prev')"
    >
      Anterior
    </button>

    <span class="page-info">Página {{ currentPage }}</span>

    <button 
      class="pixel-btn" 
      :disabled="isLastPage"
      @click="emit('next')"
    >
      Próxima
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
}

.page-info {
  color: white;
}

button {
  padding: 10px 20px;
  cursor: pointer;
  background-color: #ef5350;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>