<template>
  <div class=" select-none">
    <main class="main max-w-[1440px] mx-auto relative"> 
      <LibraryNavbar />
      <div ref="animateEl" class="bg-[url('/home.jpg')] zoom scale-down"></div>
      <NuxtPage />
      <LibraryFooter v-if="isSignedIn" />
    </main>
  </div>

  <!-- <div class="slide slide-in-from-top left-0 top-0 bg-black"></div> -->
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSectionStore } from './store/sectionStore'
import { authStore } from './store/authStore'

const show = ref(false)

const authstore = authStore()
const {loadingApp, user, data} = storeToRefs(authstore)

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

onMounted( async () => {   
  loadingApp.value = true

  onAuthStateChanged(auth, async (user_) => {
    user.value = user_

    if (user.value?.emailVerified && navigator.onLine) {
      if (!data.value) {
        data.value = await getSingleDoc(user.value.uid)
      }
      if (!data.value) {
        data.value = await addSingleDoc(user.value.uid)
      }
      if (data.value) {
        login.value = true
      }
    }
    
    else {
      login.value = false
      data.value = null
    }

    loadingApp.value = false
  })

  watch(login, newVal => {
    if (newVal) {
      if (data.value) {
        updateDataFromDB(data.value)
      } 
    }
  })
});

onUnmounted(() => {
  data.value = null
})
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

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: black;
}

::-webkit-scrollbar-thumb {
    background: white;
}
</style>
