export default defineNuxtConfig({
  css: ['./assets/main.css'],
  
  modules: ['@pinia/nuxt'],
  
app: {
    head: {
      titleTemplate: 'Pokédex - %s',
      title: 'Home',
    }
  },

  devServer: {
    host: 'pokedex.local', // nome para trocar pelo local host
    port: 3000
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

})



