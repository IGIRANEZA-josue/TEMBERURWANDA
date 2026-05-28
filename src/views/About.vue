<template>
  <section class="bg-white text-green-700 min-h-screen px-6 py-20">
    
    <!-- Heading -->
    <div class="text-center mb-16">
      <h1
        class="text-5xl font-bold mb-4 hover:text-green-500 transition duration-300"
      >
        About Rwanda
      </h1>

      <p class="max-w-3xl mx-auto text-lg text-gray-600">
        Rwanda is one of Africa’s fastest-growing countries,
        famous for its natural beauty, safety, tourism,
        and inspiring development.
      </p>
    </div>

    <!-- Cards -->
    <div class="grid md:grid-cols-3 gap-8">

      <!-- Card 1 -->
      <div
        class="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
      >
        <img
          src="/src/assets/porshe.jpg"
          alt="Nature"
          class="w-full h-56 object-cover"
        >

        <div class="p-6 text-center">
          <h2 class="text-2xl font-bold mb-3">
            Nature
          </h2>

          <p class="text-gray-700">
            Rwanda is filled with green hills, lakes,
            forests, and breathtaking scenery.
          </p>
        </div>
      </div>


      <div
        class="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
      >
        <img
          src="/src/assets/404.jpg"
          alt="Wildlife"
          class="w-full h-56 object-cover"
        >

        <div class="p-6 text-center">
          <h2 class="text-2xl font-bold mb-3">
            Wildlife
          </h2>

          <p class="text-gray-700">
            Visit Volcanoes National Park and experience
            the famous mountain gorillas.
          </p>
        </div>
      </div>

      <div
        class="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
      >
        <img
          src="/src/assets/arab.jpg"
          alt="Kigali"
          class="w-full h-56 object-cover"
        >

        <div class="p-6 text-center">
          <h2 class="text-2xl font-bold mb-3">
            Kigali City
          </h2>

          <p class="text-gray-700">
            Kigali is known for cleanliness, safety,
            innovation, and modern infrastructure.
          </p>
        </div>
      </div>

    </div>

    <div
      class="mt-20 bg-green-700 text-white rounded-3xl p-10 text-center shadow-xl"
    >
      <h2 class="text-4xl font-bold mb-4">
        Experience Rwanda
      </h2>

      <p class="max-w-2xl mx-auto mb-6 text-lg">
        From wildlife adventures to cultural experiences,
        Rwanda offers unforgettable memories for every visitor.
      </p>

      <button
        class="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:scale-110 transition duration-300"
      >
        Visit Rwanda
      </button>
    </div>

  </section>
</template>

<script setup>
</script>