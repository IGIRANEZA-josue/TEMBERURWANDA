<template>
  <nav class="bg-green-800 text-white flex justify-between py-4 px-3 items-center shadow-lg">
    <span class="text-xl font-bold flex gap-2 items-center">
      <img src="../assets/lego.jpg"alt="TR"class="w-10 h-10 rounded-full">
    </span>
    <ul class="flex gap-8 text-sm font-medium">
      <li><a href="/" class="hover:text-yellow-300">Home</a></li>
      <li><a href="/about" class="hover:text-yellow-300">About Us</a></li>
      <li><a href="/Services" class="hover:text-yellow-300">Services</a></li>
      <li class="relative group">
        <a href="#" class="hover:text-yellow-300">Gallery <span>v</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 mt-2 z-50 transition-all duration-300">
          <li><a href="#" class="block px-4 py-2 hover:bg-green-800 hover:text-white">Photos</a></li>
          <li><a href="#" class="block px-4 py-2 hover:bg-green-800 hover:text-white">Videos</a></li>
        </ul>
      </li>
      <li class="relative group">
        <a href="#" class="hover:text-yellow-300">Destination <span>v</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-56 mt-2 z-50 transition-all duration-300">
          <li><a href="/NorthP" class="block px-4 py-2 hover:bg-green-800 hover:text-white">Northern Province</a></li>
          <li><a href="/EastP" class="block px-4 py-2 hover:bg-green-800 hover:text-white">Eastern Province</a></li>
          <li><a href="/Kigali" class="block px-4 py-2 hover:bg-green-800 hover:text-white">Kigali City</a></li>
          <li><a href="/WestP" class="block px-4 py-2 hover:bg-green-800 hover:text-white">Western Province</a></li>
          <li><a href="/SouthP" class="block px-4 py-2 hover:bg-green-800 hover:text-white">Southern Province</a></li>
        </ul>
      </li>
      <li><a href="/Contact" class="hover:text-yellow-300">Contact</a></li>
    </ul>
  </nav>
</template>