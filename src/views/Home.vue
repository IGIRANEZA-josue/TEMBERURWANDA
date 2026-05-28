<template>
  <!-- Hero Section -->
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    style="background-image: url('/src/assets/f1.jpg');"
  >

    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative text-center px-6">
      <h1
        class="text-5xl md:text-7xl font-bold mb-4 hover:scale-105 transition duration-300"
      >
        Welcome to Rwanda
      </h1>

      <p class="text-xl md:text-2xl text-green-300 mb-6">
        The Land of a Thousand Hills
      </p>

      <p class="max-w-2xl mx-auto text-gray-200 mb-8 text-lg">
        Discover beautiful landscapes, rich culture, wildlife,
        and unforgettable adventures in the heart of Africa.
      </p>

      <div class="flex justify-center gap-4">
        <button
          class="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-110 transition duration-300"
        >
          Explore More
        </button>

        <button
          class="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold transition duration-300"
        >
          Learn More
        </button>
      </div>

      <div class="mt-12 grid grid-cols-3 gap-6 text-center">
        <div>
          <h2 class="text-3xl font-bold text-green-400">30+</h2>
          <p class="text-sm">Tourist Attractions</p>
        </div>

        <div>
          <h2 class="text-3xl font-bold text-green-400">1000</h2>
          <p class="text-sm">Beautiful Hills</p>
        </div>

        <div>
          <h2 class="text-3xl font-bold text-green-400">24/7</h2>
          <p class="text-sm">Hospitality</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>