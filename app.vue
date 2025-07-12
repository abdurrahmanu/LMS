<template>
  <div class="no-scrollbar">
    <LibraryNavbar />
    <div class="min-h-screen max-w-[1440px] mx-auto"> 
      <div ref="animateEl" class="bg-[url('/home.jpg')] zoom scale-down"></div>

      <SVGForwardButton 
      v-if="isSignedIn"
      @click.prevent="setSection"
      class='w-8 fixed left-3 z-[10]' />
      
      <NuxtPage />
    </div>

    <LibraryFooter v-if="isSignedIn" />
  </div>

  <!-- <div class="slide slide-in-from-top left-0 top-0 bg-black"></div> -->
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSectionStore } from './store/sectionStore'

const show = ref(false)

const sectionStore = useSectionStore()
const {section, showPage} = storeToRefs(sectionStore)
const {setSection} = sectionStore

const animateEl = ref(null)
const route = useRoute()

const isSignedIn = computed(() => {
  return route.name !== 'account'
})

onMounted(() => {
  window.scrollTo(0, 0)

  animateEl.value.addEventListener('animationend', () => {
    showPage.value = true
  })

  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         section.value = entry.target.id
  //       }
  //     })
  //   },
  //   {
  //     threshold: 0.5,
  //   }
  // )

  // if (section.value) {
  //   const targetSection = document.getElementById(section.value)
  //   observer.observe(targetSection)
  // }

  // onUnmounted(() => {
  //   observer.disconnect()
  // })
})

</script>

<style scoped>
.slide {
  @apply fixed w-full h-full z-[-10]
}

.zoom {
  @apply z-[-10] bg-no-repeat fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-cover bg-center h-screen
}

.slide-in-from-top {
  transform: translateY(-100%);
  animation: slideDown 1s ease-out forwards;
  animation-delay: 5s;
}

@keyframes slideDown {
  to {
    transform: translateY(0%);
  }
}

.scale-down {
  animation: scaleDown 2s forwards;
  transform-origin: center;
}

@keyframes scaleDown {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.7);
  }
}


.page-enter-active {
    transition: width 0.5s ease-out 0.5s;
}

.page-drop-enter-active {
    transition: height 0.5s ease-out 0.5s;
}

.page-enter-from {
    width: 0;
}

.page-drop-enter-from {
    height: 0;
}

.page-drop-enter-to {
    height: fit-content;
}

.page-enter-to {
    width: 100%;
}

.page-drop-leave-from {
    height: fit-content;
}

.page-drop-leave-to {
    height: 0;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/path-to-fonts/Gilroy-Bold.woff2') format('woff2'),
       url('/path-to-fonts/Gilroy-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}
</style>
