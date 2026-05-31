<template>
  <nav
    class="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl px-6 py-4 flex justify-between items-center"
  >
    <!-- Logo -->
    <div class="flex items-center gap-3">
      <img
        src="../assets/lego.jpg"
        alt="TR"
        class="w-11 h-11 rounded-full border-2 border-green-400"
      />
      <span class="font-bold text-xl text-green-300">
        Temberu Rwanda
      </span>
    </div>

    <!-- Navigation -->
    <ul class="flex gap-8 text-sm font-medium items-center">

      <!-- Home -->
      <li>
        <RouterLink
          to="/"
          class="hover:text-yellow-300 transition duration-300"
        >
          {{ t.home }}
        </RouterLink>
      </li>

      <!-- About -->
      <li>
        <RouterLink
          to="/about"
          class="hover:text-yellow-300 transition duration-300"
        >
          {{ t.about }}
        </RouterLink>
      </li>

      <!-- Services -->
      <li>
        <RouterLink
          to="/Services"
          class="hover:text-yellow-300 transition duration-300"
        >
          {{ t.services }}
        </RouterLink>
      </li>

      <!-- Gallery Dropdown -->
      <li class="relative group">
        <a href="#" class="hover:text-yellow-300 transition duration-300">
          {{ t.gallery }} ▼
        </a>

        <ul
          class="absolute left-0 mt-2 w-48 bg-white text-slate-950 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden"
        >
          <li>
            <RouterLink
              to="/Photo"
              class="block px-4 py-3 hover:bg-slate-950 hover:text-white"
            >
              {{ t.photos }}
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/Video"
              class="block px-4 py-3 hover:bg-slate-950 hover:text-white"
            >
              {{ t.videos }}
            </RouterLink>
          </li>
        </ul>
      </li>

      <!-- Destination Dropdown -->
      <li class="relative group">
        <a href="#" class="hover:text-yellow-300 transition duration-300">
          {{ t.destinations }} ▼
        </a>

        <ul
          class="absolute left-0 mt-2 w-56 bg-white text-slate-950 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden"
        >
          <li>
            <RouterLink
              to="/NorthP"
              class="block px-4 py-3 hover:bg-slate-950 hover:text-white"
            >
              Northern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/EastP"
              class="block px-4 py-3 hover:bg-slate-950 hover:text-white"
            >
              Eastern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/Kigali"
              class="block px-4 py-3 hover:bg-slate-950 hover:text-white"
            >
              Kigali City
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/WestP"
              class="block px-4 py-3 hover:bg-slate-950 hover:text-white"
            >
              Western Province
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/SouthP"
              class="block px-4 py-3 hover:bg-slate-950 hover:text-white"
            >
              Southern Province
            </RouterLink>
          </li>
        </ul>
      </li>

      <!-- Contact -->
      <li>
        <RouterLink
          to="/Contact"
          class="hover:text-yellow-300 transition duration-300"
        >
          {{ t.contact }}
        </RouterLink>
      </li>

      <!-- Language Selector -->
      <li>
        <select
          v-model="currentLanguage"
          @change="setLanguage(currentLanguage)"
          class="bg-slate-950 text-white px-3 py-2 rounded-lg border border-green-400 focus:outline-none cursor-pointer"
        >
          <option value="en">🇬🇧 English</option>
          <option value="rw">🇷🇼 Kinyarwanda</option>
          <option value="fr">🇫🇷 Français</option>
        </select>
      </li>

    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLanguage } from '../composables/uselanguage'
import translations from '../translations'

const { currentLanguage, setLanguage } = useLanguage()

const t = computed(() => {
  return translations[currentLanguage.value]
})
</script>