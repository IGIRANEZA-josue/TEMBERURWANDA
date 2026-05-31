<template>
  <div class="bg-slate-950 text-white min-h-screen">

    <!-- Hero -->
    <section class="relative h-[50vh] flex items-center justify-center">

      <img
        src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=1600"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-black/75"></div>

      <div class="relative z-10 text-center">
        <h1 class="text-5xl font-bold text-green-300" >{{ t.videoTitle }}</h1>
<p class="text-gray-300 mt-4 text-lg">{{ t.videoSubtitle }}</p>

      </div>

    </section>

    <!-- Videos -->
    <section class="max-w-7xl mx-auto px-6 py-16">

      <h2 class="text-3xl font-bold text-center mb-12">
        Explore Rwanda in Motion
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div
          v-for="(video,index) in videos"
          :key="index"
          class="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg hover:-translate-y-2 transition"
        >

          <iframe
            class="w-full h-64"
            :src="video.link"
            allowfullscreen
          ></iframe>

          <div class="p-5">
            <h3 class="text-xl font-bold text-green-300">
              {{ video.title }}
            </h3>

            <p class="text-gray-400 mt-2">
              {{ video.description }}
            </p>
          </div>

        </div>

      </div>

    </section>

  </div>
</template>

<script setup>
const videos = [
  {
    title: "Visit Rwanda",
    description: "Official Rwanda tourism experience.",
    link: "https://youtu.be/-kerFdxWG-w"
  },
  {
    title: "Mountain Gorillas",
    description: "Discover Rwanda's famous gorillas.",
    link: "https://youtu.be/b1V4pzfuncg"
  },
  {
    title: "Lake Kivu",
    description: "Relax along Rwanda's scenic lakeside.",
    link: "https://youtu.be/Tdfdjhg22J0"
  },
  {
    title: "Kigali City Tour",
    description: "Explore Rwanda's capital city.",
    link: "https://youtu.be/QQ7mscbSuLk"
  },
  {
    title: "Nyungwe Forest",
    description: "Canopy walks and wildlife adventures.",
    link: "https://youtu.be/_v7vj0Fzpvs"
  },
  {
    title: "Akagera Safari",
    description: "Experience Rwanda's wildlife.",
    link: "https://youtu.be/03fzlRWb1cQ"
  }
]

import { computed } from 'vue'
import { useLanguage } from '../composables/uselanguage'
import translations from '../translations'

const { currentLanguage } = useLanguage()

const t = computed(() => {
  return translations[currentLanguage.value]
})

</script>