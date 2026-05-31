<template>

  <!-- MAIN WRAPPER -->
  <div class="bg-slate-950 text-white min-h-screen overflow-hidden">

    <!-- HERO SECTION -->
    <section class="relative h-[80vh] flex items-center justify-center">

      <!-- Background -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1600&auto=format&fit=crop"
          alt="Rwanda"
          class="w-full h-full object-cover"
        />

        <div class="absolute inset-0 bg-black/65"></div>
      </div>

      <!-- Glow -->
      <div
        class="absolute top-10 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"
      ></div>

      <!-- Content -->
      <div class="relative z-10 text-center px-6 max-w-4xl">

        <p class="uppercase tracking-[6px] text-green-300 mb-5">
          Learn More About Rwanda
        </p>
 
        <h1  class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">{{ t.aboutTitle }}</h1>
<p class="text-lg md:text-2xl text-gray-200 leading-relaxed">{{ t.aboutSubtitle }}</p>


      </div>

    </section>

    <!-- ABOUT SECTION -->
    <section class="py-24 px-6">

      <div
        class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
      >

        <!-- Image -->
        <div class="relative">

          <img
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200&auto=format&fit=crop"
            alt="Mountain Gorilla"
            class="rounded-3xl shadow-2xl h-full object-cover"
          />

          <div
            class="absolute -bottom-6 -right-6 bg-green-600 px-8 py-6 rounded-2xl shadow-2xl"
          >
            <h2 class="text-3xl font-extrabold">
              1000+
            </h2>

            <p class="text-sm text-green-100">
              Hills Across Rwanda
            </p>
          </div>

        </div>

        <!-- Text -->
        <div>

          <p class="uppercase tracking-[5px] text-green-400 mb-4">
            The Land Of A Thousand Hills
          </p>

          <h2 class="text-4xl md:text-5xl font-extrabold mb-8">
            A Country Full Of Wonder
          </h2>

          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            Rwanda is known for its breathtaking landscapes,
            incredible wildlife, and warm hospitality.
            From mountain gorillas to beautiful lakes and vibrant cities,
            every corner of Rwanda offers unforgettable experiences.
          </p>

          <p class="text-gray-400 text-lg leading-relaxed mb-8">
            Visit Rwanda celebrates the country’s culture,
            tourism, innovation, and natural beauty while
            welcoming travelers from around the world.
          </p>

          <!-- Features -->
          <div class="grid sm:grid-cols-2 gap-6">

            <!-- Wildlife -->
            <div
              class="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg hover:-translate-y-2 transition-all duration-500"
            >

              <img
                src="data:image/jpeg;base64,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"
                class="h-44 w-full object-cover rounded-2xl mb-5"
              />


              <h3 class="text-xl font-bold mb-2">
                Wildlife
              </h3>

              <p class="text-gray-400">
                Home to rare mountain gorillas and amazing safaris.
              </p>

            </div>

            <!-- Nature -->
            <div
              class="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg hover:-translate-y-2 transition-all duration-500"
            >

              <img
                src="data:image/jpeg;base64,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"
                class="h-44 w-full object-cover rounded-2xl mb-5"
              />


              <h3 class="text-xl font-bold mb-2">
                Nature
              </h3>

              <p class="text-gray-400">
                Beautiful hills, forests, lakes, and volcanoes.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

    <!-- STATS SECTION -->
    <section class="py-24 px-6 bg-black/40">

      <div class="max-w-6xl mx-auto">

        <!-- Heading -->
        <div class="text-center mb-16">

          <h2 class="text-4xl md:text-6xl font-extrabold mb-5">
            Rwanda By Numbers
          </h2>

          <p class="text-gray-400 text-lg">
            A fast-growing tourism destination in Africa.
          </p>

        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div
            class="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500"
          >
            <h3 class="text-5xl font-extrabold text-green-400 mb-3">
              4
            </h3>

            <p class="text-gray-300">
              National Parks
            </p>
          </div>

          <div
            class="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500"
          >
            <h3 class="text-5xl font-extrabold text-green-400 mb-3">
              1M+
            </h3>

            <p class="text-gray-300">
              Visitors Per Year
            </p>
          </div>

          <div
            class="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500"
          >
            <h3 class="text-5xl font-extrabold text-green-400 mb-3">
              1000
            </h3>

            <p class="text-gray-300">
              Beautiful Hills
            </p>
          </div>

          <div
            class="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500"
          >
            <h3 class="text-5xl font-extrabold text-green-400 mb-3">
              24/7
            </h3>

            <p class="text-gray-300">
              Adventure
            </p>
          </div>

        </div>

      </div>

    </section>

    <!-- CULTURE SECTION -->
    <section class="py-24 px-6">

      <div class="max-w-7xl mx-auto">

        <!-- Heading -->
        <div class="text-center mb-16">

          <p class="uppercase tracking-[5px] text-green-400 mb-4">
            Experience Rwanda
          </p>

          <h2 class="text-4xl md:text-6xl font-extrabold">
            Culture & Lifestyle
          </h2>

        </div>

        <!-- Cards -->
        <div class="grid md:grid-cols-3 gap-8">

          <!-- Card 1 -->
          <div
            class="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition-all duration-500"
          >

            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
              class="h-64 w-full object-cover"
            />

            <div class="p-6">

              <h3 class="text-2xl font-bold mb-3">
                Traditional Dance
              </h3>

              <p class="text-gray-400">
                Experience energetic performances and Rwanda’s cultural heritage.
              </p>

            </div>

          </div>

          <!-- Card 2 -->
          <div
            class="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition-all duration-500"
          >

            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop"
              class="h-64 w-full object-cover"
            />

            <div class="p-6">

              <h3 class="text-2xl font-bold mb-3">
                Local Cuisine
              </h3>

              <p class="text-gray-400">
                Taste delicious traditional dishes and fresh local flavors.
              </p>

            </div>

          </div>

          <!-- Card 3 -->
          <div
            class="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition-all duration-500"
          >

            <img
              src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1200&auto=format&fit=crop"
              class="h-64 w-full object-cover"
            />

            <div class="p-6">

              <h3 class="text-2xl font-bold mb-3">
                Modern Kigali
              </h3>

              <p class="text-gray-400">
                Explore innovation, clean streets, and modern African living.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  </div>

</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/uselanguage'
import translations from '../translations'

const { currentLanguage } = useLanguage()

const t = computed(() => {
  return translations[currentLanguage.value]
})
</script>

<style scoped>

html {
  scroll-behavior: smooth;
}

</style>