<template>
  <div>
    <navbar />
    <RouterView />
    <Footer/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import Footer from './components/Footer.vue'
</script>