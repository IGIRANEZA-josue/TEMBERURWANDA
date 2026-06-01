<template>
  <div class="min-h-screen flex flex-col bg-slate-950 text-white overflow-hidden">

    <!-- ================= FOOTER ================= -->
    <footer class="relative bg-slate-950 text-white px-8 py-14 overflow-hidden">

      <!-- glow effects -->
      <div class="absolute top-0 left-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>
      <div class="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/10 blur-3xl rounded-full"></div>

      <div class="relative z-10 max-w-7xl mx-auto">

        <div class="grid md:grid-cols-4 gap-10">

          <div>
            <h3 class="text-green-300 font-bold text-xl mb-4">
              TEMBERURWANDA
            </h3>
            <p class="text-gray-400 text-sm">
              Discover Rwanda tourism experience across all provinces.
            </p>
          </div>

          <div>
            <h3 class="text-green-300 font-bold text-xl mb-4">Quick Links</h3>
            <ul class="space-y-2 text-sm">
              <li><RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink></li>
              <li><RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink></li>
              <li><RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink></li>
              <li><RouterLink to="/contact" class="hover:text-yellow-300">Contact</RouterLink></li>
            </ul>
          </div>

          <div>
            <h3 class="text-green-300 font-bold text-xl mb-4">Destinations</h3>
            <ul class="space-y-2 text-sm">
              <li><RouterLink to="/kigali" class="hover:text-yellow-300">Kigali</RouterLink></li>
              <li><RouterLink to="/northp" class="hover:text-yellow-300">Northern</RouterLink></li>
              <li><RouterLink to="/southp" class="hover:text-yellow-300">Southern</RouterLink></li>
              <li><RouterLink to="/eastp" class="hover:text-yellow-300">Eastern</RouterLink></li>
              <li><RouterLink to="/westp" class="hover:text-yellow-300">Western</RouterLink></li>
            </ul>
          </div>

          <div>
            <h3 class="text-green-300 font-bold text-xl mb-4">Contact</h3>
            <ul class="text-sm text-gray-400 space-y-2">
              <li>📍 Kigali, Rwanda</li>
              <li>📞 +250 788 123 456</li>
              <li>✉ info@temberurwanda.com</li>
            </ul>
          </div>

        </div>

        <div class="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2026 Visit Rwanda. All rights reserved.
        </div>
        <div class="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
          Done By Igiraneza Kabundege Mugisha Josue.
        </div>

      </div>

    </footer>

  </div>
</template>