<script setup>
import { ref } from 'vue'
import vitelogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import vuelogo from "../assets/vue.svg";

const count = ref(0)
</script>
<template>
  <section class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="text-center bg-white p-10 rounded-3xl shadow-lg">
      <h1 class="text-4xl font-bold text-blue-600 mb-4">SOS Blog</h1>
      <p class="text-lg text-gray-700 mb-6">welcome, Zakaria</p>
      <p class="text-lg text-gray-700 mb-6">welcome, jean de dieu</p>
    </div>
  </section>
</template>