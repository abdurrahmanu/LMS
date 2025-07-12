<template>
    <div class="min-h-screen flex uppercase items-center justify-center ring-[1px] backdrop-blur-xs">
    <div class="w-full max-w-md md:max-w-lg py-10 backdrop-blur-xs ring-[1px] ring-black p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>

    <img src="book-sketch.jpg" class="w-full absolute top-0 left-0 bottom-0 right-0 z-[-1] opacity-25" alt="">

      <form class="space-y-8">
        <div>
          <label class="block mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            class="w-full px-4 py-3 ring hover:ring-[1px] hover:ring-neutral-600 ring-white rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label class="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            class="w-full px-4 py-3 ring hover:ring-[1px] hover:ring-neutral-600 ring-white rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
        @click.prevent="authenticate"
          type="submit"
          class="w-full bg-black text-white py-3 uppercase font-bold rounded-md hover:bg-white hover:ring-[1px] hover:ring-black hover:text-black transition-colors"
        >
          Sign Up
        </button>

        <div class="text-right mt-2">
          <a href="#" class="text-sm text-blue-700 hover:underline text-center font-bold">Forgot Password</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()

const authenticate = () => {
  // Simulate authentication
  setTimeout(() => {
    router.push('/')
  }, 1000)
}
</script>