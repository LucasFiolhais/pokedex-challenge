import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    favoriteIds: [] as number[],
    currentOffset: 0
  }),
  actions: {
    toggleFavorite(id: number) {
      const index = this.favoriteIds.indexOf(id)
      if (index > -1) {
        this.favoriteIds.splice(index, 1)
      } else {
        this.favoriteIds.push(id)
      }
    },

    updateOffset(newOffset: number) {
      this.currentOffset = newOffset
    }
  },

  getters: {
    isFavorite: (state) => {
      return (id: number) => state.favoriteIds.includes(id)
    }
  }
})
