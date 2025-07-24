// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@pinia/nuxt',
    // [
      // '@nuxtjs/firebase',
      // {
      //   config: {
      //       apiKey: "AIzaSyCJhfAHUl49KxcJuTJadigqB99wcI0wguk",
      //       authDomain: "abu-library-01.firebaseapp.com",
      //       projectId: "abu-library-01",
      //       storageBucket: "abu-library-01.firebasestorage.app",
      //       messagingSenderId: "339639009902",
      //       appId: "1:339639009902:web:07dd1554dbd14abc715c7f",
      //       measurementId: "G-4PFFS3ZJST",
      //   },
      //   services: {
      //     auth: true 
      //   }
      // }
    // ]
  ],
});