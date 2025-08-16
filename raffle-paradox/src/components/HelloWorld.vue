<template>
  <div class="bg-white text-gray-800 dark:bg-gray-800 duration-300">
    <header class="bg-white dark:bg-gray-800 shadow-md">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600 dark:text-blue-400">RifasYa</h1>
        <nav class="space-x-6">
          <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">Inicio</a>
          <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">Rifas</a>
          <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">Contacto</a>
          <button @click="theme.toggleTheme()"
            class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            {{ theme.darkMode ? '☀️' : '🌙' }}
          </button>
        </nav>
      </div>
    </header>

    <section class="text-center py-20 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 flex items-center justify-center px-15">
        <img src="../../public/images/seiko.png" class="w-xl" alt="" />
        <h1 class="text-5xl font-bold mb-4">¡Gana premios increíbles con nuestras rifas!</h1>
        <p class="text-xl mb-8">Participa hoy y cambia tu suerte</p>
      </div>
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
        <div v-if="rifas" v-for="raffle in rifas" :key="raffle.id" class="bg-white shadow-md rounded-lg p-4">
          <img src="../../public/images/seiko.png" alt="Rifa 1" class="rounded-md mb-4 ">
          <h3 class="font-bold text-lg mb-2">{{ raffle.name }}</h3>
          <p class="text-gray-600">Solo $5 por boleto</p>
          

          <div>
            {{ raffle.startDate }}
          </div>

          <div>{{ raffle.endDate }}</div>

          <div class="inline-block text-xs font-semibold px-3 py-1 rounded-full" :class="{
            'bg-gray-200 text-gray-800': raffle.status === 'finalizada',
            'bg-green-100 text-green-800': raffle.status === 'activa',
            'bg-yellow-100 text-yellow-800': raffle.status === 'proxima'
          }">
            {{ raffle.status }}
          </div>
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
import { ref } from 'vue';
import { useThemeStore } from '../stores/themeStores'
const theme = useThemeStore();
theme.loadTheme();




const rifaActiva = ref({
    id: 1,
    name: "Rifa iPhone 14 Pro",
    startDate: "2025-05-01",
    endDate: "2025-05-15",
    winnerNumber: 42,
    totalNumbers: 100,
    soldNumbers: 100,
    image: "https://example.com/images/iphone14pro.jpg",
    status: "activa",
    soldOut: true
  })


const rifas = ref([
  {
    id: 1,
    name: "Rifa iPhone 14 Pro",
    startDate: "2025-05-01",
    endDate: "2025-05-15",
    winnerNumber: 42,
    totalNumbers: 100,
    soldNumbers: 100,
    image: "https://example.com/images/iphone14pro.jpg",
    status: "activa",
    soldOut: true
  },
  {
    id: 2,
    name: "Rifa PlayStation 5",
    startDate: "2025-04-10",
    endDate: "2025-04-25",
    winnerNumber: 87,
    totalNumbers: 150,
    soldNumbers: 140,
    image: "https://example.com/images/ps5.jpg",
    status: "finalizada",
    soldOut: false
  },
  {
    id: 3,
    name: "Rifa Bicicleta Eléctrica",
    startDate: "2025-06-01",
    endDate: "2025-06-20",
    winnerNumber: 12,
    totalNumbers: 80,
    soldNumbers: 80,
    image: "https://example.com/images/bicicleta.jpg",
    status: "finalizada",
    soldOut: true
  },
  {
    id: 4,
    name: "Rifa Nintendo Switch OLED",
    startDate: "2025-03-05",
    endDate: "2025-03-15",
    winnerNumber: 59,
    totalNumbers: 120,
    soldNumbers: 118,
    image: "https://example.com/images/switch.jpg",
    status: "activa",
    soldOut: false
  },
  {
    id: 5,
    name: "Rifa Laptop Gamer",
    startDate: "2025-02-01",
    endDate: "2025-02-20",
    winnerNumber: 33,
    totalNumbers: 200,
    soldNumbers: 200,
    image: "https://example.com/images/laptop.jpg",
    status: "finalizada",
    soldOut: true
  },
  {
    id: 6,
    name: "Rifa Smartwatch Galaxy Watch 6",
    startDate: "2025-06-10",
    endDate: "2025-06-25",
    winnerNumber: 7,
    totalNumbers: 60,
    soldNumbers: 60,
    image: "https://example.com/images/galaxywatch.jpg",
    status: "finalizada",
    soldOut: true
  },
  {
    id: 7,
    name: "Rifa Cámara Canon EOS M50",
    startDate: "2025-01-15",
    endDate: "2025-01-30",
    winnerNumber: 21,
    totalNumbers: 90,
    soldNumbers: 80,
    image: "https://example.com/images/canon.jpg",
    status: "finalizada",
    soldOut: false
  },
  {
    id: 8,
    name: "Rifa Tarjeta de regalo Amazon $500",
    startDate: "2025-03-10",
    endDate: "2025-03-25",
    winnerNumber: 66,
    totalNumbers: 50,
    soldNumbers: 50,
    image: "https://example.com/images/amazon-gift.jpg",
    status: "finalizada",
    soldOut: true
  },
  {
    id: 9,
    name: "Rifa Parlante JBL",
    startDate: "2025-04-05",
    endDate: "2025-04-18",
    winnerNumber: 29,
    totalNumbers: 75,
    soldNumbers: 70,
    image: "https://example.com/images/jbl.jpg",
    status: "activa",
    soldOut: false
  },
  {
    id: 10,
    name: "Rifa Monitor UltraWide LG",
    startDate: "2025-02-15",
    endDate: "2025-02-28",
    winnerNumber: 105,
    totalNumbers: 110,
    soldNumbers: 110,
    image: "https://example.com/images/lgmonitor.jpg",
    status: "finalizada",
    soldOut: true
  }
]);



</script>

<style scoped></style>
