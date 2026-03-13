export default defineNuxtConfig({
  css: ['./assets/main.css'],

  modules: ['@pinia/nuxt', '@nuxt/eslint'],

  eslint: {
    config: {
      stylistic: false
    }
  },

  app: {
    head: {
      titleTemplate: 'Pokédex - %s',
      title: 'Home'
    }
  },

  devServer: {
    host: 'pokedex.local',
    port: 3000
  },

  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
