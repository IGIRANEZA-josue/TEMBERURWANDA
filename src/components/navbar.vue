<template>
  <nav class="bg-green-800 text-white flex justify-between py-4 px-3 items-center shadow-lg">
    
    <span class="text-xl font-bold flex gap-2 items-center">
      <img src="../assets/lego.jpg" alt="TR" class="w-10 h-10 rounded-full">
    </span>

    <ul class="flex gap-8 text-sm font-medium">

      <li>
        <RouterLink to="/" class="hover:text-yellow-300">
          Home
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/about" class="hover:text-yellow-300">
          About Us
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/Services" class="hover:text-yellow-300">
          Services
        </RouterLink>
      </li>

      <li class="relative group">
        <a href="#" class="hover:text-yellow-300">
          Gallery <span>v</span>
        </a>

        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 mt-2 z-50 transition-all duration-300">

          <li>
            <a href="#" class="block px-4 py-2 hover:bg-green-800 hover:text-white">
              Photos
            </a>
          </li>

          <li>
            <a href="#" class="block px-4 py-2 hover:bg-green-800 hover:text-white">
              Videos
            </a>
          </li>

        </ul>
      </li>

      <li class="relative group">
        <a href="#" class="hover:text-yellow-300">
          Destination <span>v</span>
        </a>

        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-56 mt-2 z-50 transition-all duration-300">

          <li>
            <RouterLink to="/NorthP" class="block px-4 py-2 hover:bg-green-800 hover:text-white">
              Northern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/EastP" class="block px-4 py-2 hover:bg-green-800 hover:text-white">
              Eastern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/Kigali" class="block px-4 py-2 hover:bg-green-800 hover:text-white">
              Kigali City
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/WestP" class="block px-4 py-2 hover:bg-green-800 hover:text-white">
              Western Province
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/SouthP" class="block px-4 py-2 hover:bg-green-800 hover:text-white">
              Southern Province
            </RouterLink>
          </li>

        </ul>
      </li>

      <li>
        <RouterLink to="/Contact" class="hover:text-yellow-300">
          Contact
        </RouterLink>
      </li>

    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>