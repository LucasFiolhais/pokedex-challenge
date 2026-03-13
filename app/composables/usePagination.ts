export const usePagination = (initialLimit = 24) => {
  const pokemonStore = usePokemonStore(); 

  const limit = ref(initialLimit);
  
  
  const offset = ref(pokemonStore.currentOffset);

  const currentPage = computed(() => Math.floor(offset.value / limit.value) + 1);

  const nextPage = (totalCount: number) => {
    if (offset.value + limit.value < totalCount) {
      offset.value += limit.value;
      
      pokemonStore.updateOffset(offset.value);
    }
  };

  const prevPage = () => {
    if (offset.value >= limit.value) {
      offset.value -= limit.value;
      
      pokemonStore.updateOffset(offset.value);
    }
  };

  const isLastPage = (totalCount: number) => {
    return offset.value + limit.value >= totalCount;
  };

  return {
    limit,
    offset,
    currentPage,
    nextPage,
    prevPage,
    isLastPage
  };
};