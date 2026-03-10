<template>
  <div class="app-layout">
    <header class="main-header">
      <img src="/logo.png" alt="Pokémon Logo" class="pokemon-logo" />
      <h1 class="logo-text">Pokédex do Ash</h1>
    </header>

    <main class="page-content">
      <slot />
    </main>
  </div>
</template>

<style>
/* fontes */
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=VT323&family=Poppins:wght@400;700&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif; 
  background-color: #f5f5f5;
}

.main-header {
  background-color: #ef5350;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-bottom: 5px solid #333;
}

.pokemon-logo {
  width: 200px;
  height: auto;
  filter: drop-shadow(3px 3px 0px #3b4cca); /* sombra azul para combinar com o texto */
}

.pokemon-logo:hover{
  transform: scale(1.05);
}

.logo-text {
  margin: 0;
  font-family: 'Luckiest Guy', cursive;
  letter-spacing: 3px;
  -webkit-text-stroke: 1px #3b4cca; /* Contorno azul */
  font-size: 30px;
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>