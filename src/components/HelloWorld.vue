<template>
  <div class="bg-white text-gray-800 dark:bg-gray-800 duration-300">
    <!-- Hero -->

     <header class="bg-white dark:bg-gray-800 shadow-md">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-blue-600 dark:text-blue-400">RifasYa</h1>
      <nav class="space-x-6">
        <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400">Inicio</a>
        <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400">Rifas</a>
        <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400">Contacto</a>
        <button @click="theme.toggleTheme()" class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          {{ theme.darkMode ? '☀️' : '🌙' }}
        </button>
      </nav>
    </div>
  </header>

    <section class="text-center py-20 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <h1 class="text-5xl font-bold mb-4">¡Gana premios increíbles con nuestras rifas!</h1>
      <p class="text-xl mb-8">Participa hoy y cambia tu suerte</p>
      <button class="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
        Ver Rifas Activas
      </button>
    </section>

    <!-- Cómo funciona -->
    <section class="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8">¿Cómo funciona?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div class="text-5xl mb-4">🛒</div>
          <h3 class="text-xl font-semibold">Compra boletos</h3>
          <p class="text-gray-600">Elige tu rifa favorita y compra boletos fácilmente.</p>
        </div>
        <div>
          <div class="text-5xl mb-4">⏳</div>
          <h3 class="text-xl font-semibold">Espera el sorteo</h3>
          <p class="text-gray-600">Cada rifa tiene una fecha de sorteo específica.</p>
        </div>
        <div>
          <div class="text-5xl mb-4">🎉</div>
          <h3 class="text-xl font-semibold">¡Gana!</h3>
          <p class="text-gray-600">Si tu boleto es el ganador, te contactamos al instante.</p>
        </div>
      </div>
    </section>

    <!-- Rifas destacadas (placeholder) -->
    <section class="bg-gray-100 py-16 px-6">
      <h2 class="text-3xl font-bold text-center mb-10">Rifas destacadas</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div class="bg-white shadow-md rounded-lg p-4">
          <img src="#" alt="Rifa 1" class="rounded-md mb-4">
          <h3 class="font-bold text-lg mb-2">PlayStation 5</h3>
          <p class="text-gray-600">Solo $5 por boleto</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4">
          <img src="#" alt="Rifa 2" class="rounded-md mb-4">
          <h3 class="font-bold text-lg mb-2">iPhone 15 Pro</h3>
          <p class="text-gray-600">Solo $10 por boleto</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4">
          <img src="#" alt="Rifa 3" class="rounded-md mb-4">
          <h3 class="font-bold text-lg mb-2">Moto eléctrica</h3>
          <p class="text-gray-600">Solo $8 por boleto</p>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="text-center py-20 bg-blue-600 text-white dark:bg-gray-800">
      <h2 class="text-3xl font-bold mb-4">¿Listo para probar tu suerte?</h2>
      <p class="mb-8">Únete hoy y participa en las mejores rifas del país</p>
      <button class="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
        Crear cuenta
      </button>
    </section>
  </div>
</template>

<script setup>
import { useThemeStore } from '../stores/themeStores'
const theme = useThemeStore()
theme.loadTheme()

</script>

<style scoped>

</style>
