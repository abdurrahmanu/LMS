<template>
    <div class="z-100 flex items-center justify-between max-w-[1440px] h-20 hover:shadow-sm mx-auto px-5 md:px-20 py-5 bg-white sticky top-0">
        <Logo />
        <NavList class="hidden md:flex transition-all duration-100" />
        <SVGHamburgerButton class="w-12 block md:hidden"/>
    </div>
</template>

<script setup>
const route = useRoute()

const isSignedIn = computed(() => {
  return route.name !== 'account'
})
</script>