<template>
  <div class="details-layout">
    <header class="details-header">

      <NuxtLink to="/" class="pixel-back-button">
        ← Voltar à Pokédex
      </NuxtLink>

    </header>

    <main class="details-content">
      <slot /> </main>
  </div>
</template>

<style>
/* Importar as fontes */
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=VT323&display=swap');

.details-layout {
  min-height: 100%;
  background-color: #f0f0f0;
  font-family: 'Poppins', sans-serif;
}

.details-header {
  padding: 15px 20px;
  background-color: #333; 
  border-bottom: 4px solid #ef5350;
}


.pixel-back-button {
  font-family: 'VT323', monospace;
  font-size: 24px;
  color: #ef5350;
  text-decoration: none;
  border: 2px solid #ef5350;
  padding: 5px 15px;
  border-radius: 4px;
}

.pixel-back-button:hover {
  background: #ef5350;
  color: white;
}

.details-content {
  padding: 40px 20px;
}
</style>