<template>
  <footer class="relative bg-[url('wave.png')] pt-32 space-y-10 bg-cover bg-center min-h-screen text-slate-300 bg-no-repeat px-4">
    
    <div class="font-bold space-4 md:flex-row flex-col flex max-w-[80%] mx-auto">
      <div>
        <div class="relative">
          <!-- <img src="/collect-and-read.jpg" class="w-32 absolute top-1/5 left-3/10"> -->
          <img src="/phone.jpg" class="w-120" alt="">
        </div>
      </div>
      <div class="pt-8 space-y-6">
        <p class="text-7xl">Our mobile Apps are coming soon</p>
        <p class="text-2xl">Search and manage your library from anywhere.</p>
      </div>
    </div>

    <!-- 
    <div class="flex items-center gap-5 h-fit">
      <SVGAppstore class="w-14" />
      <SVGPlayStore class="w-14" />
    </div> 
    -->

    <div class="pt-36 container text-md mx-auto flex flex-col md:flex-row gap-32 justify-center md:items-start space-y-6 md:space-y-0">
      <!-- Logo & Name -->
      <div class="flex flex-col items-center md:items-start">
        <NuxtLink to="/" class="text-2xl font-bold mb-2">
            <Logo />
        </NuxtLink>
        <p class=" text-gray-400">Empowering knowledge...</p>
      </div>

      <!-- Quick Links -->
      <div class="flex flex-col items-center md:items-start">
        <h3 class="text-lg font-semibold mb-2">Quick Links</h3>
        <ul class="space-y-1">
          <li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
          <li><NuxtLink to="/catalog" class="hover:underline">Catalog</NuxtLink></li>
          <li><NuxtLink to="/account" class="hover:underline">My Account</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:underline">Contact Us</NuxtLink></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="flex flex-col items-center md:items-start">
        <h3 class="text-lg font-semibold mb-2">Contact</h3>
        <p class="">ABU Zaria</p>
        <p class="">Phone: +123 456 7890</p>
        <p class="">Email: abu-libplus@gmail.com</p>
        <div class="flex space-x-4 mt-2">
          <a href="#" aria-label="Facebook" class="hover:text-blue-500">
          </a>
          <a href="#" aria-label="Twitter" class="hover:text-blue-400">
          </a>
          <a href="#" aria-label="Instagram" class="hover:text-pink-400">
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="mt-8 text-center text-xs text-gray-500">
      © {{ new Date().getFullYear() }} MyLibrary. All rights reserved.
    </div>

  </footer>
</template>
