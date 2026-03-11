export const usePagination = (initialLimit = 24) => {
  const limit = ref(initialLimit);
  const offset = ref(0);

  // Calcula a página atual (ex: 0/24 + 1 = Página 1)
  const currentPage = computed(() => Math.floor(offset.value / limit.value) + 1);

  const nextPage = (totalCount: number) => {
    if (offset.value + limit.value < totalCount) {
      offset.value += limit.value;
    }
  };

  const prevPage = () => {
    if (offset.value >= limit.value) {
      offset.value -= limit.value;
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