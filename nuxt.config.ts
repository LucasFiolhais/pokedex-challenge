export default defineNuxtConfig({
  devServer: {
    host: 'pokedex.local', // nome para trocar pelo local host
    port: 3000
  },
  // Ativa a estrutura do Nuxt 4
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

})



