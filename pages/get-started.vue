<template>
    <div v-if="showPage">

        <section id="1" class="section px-10">
            <img src="/footer.jpg" class="opacity-25 absolute left-0 right-0 h-full" alt="">
            <div class="relative space-y-5 max-w-[1200px] pt-20 mx-auto flex-col md:flex-row md:justify-evenly justfiy-center flex">
                <div class="md:w-[50%] text-lg font-medium">
                    <ul class="list-disc list-inside space-y-2">
                        <li class="uppercase font-bold text-lg list-none">Key Features</li>
                        <li>Smart tracking of all library items</li>
                        <li>Fast, student-focused search and recommendations</li>
                        <li>Automated issue management</li>
                        <li>Detailed records and reports</li>
                        <li>Modern, accessible interface</li>
                    </ul>

                    <p class="mt-4 font-semibold animate-pulse text-2xl">
                    Empowering your library to work smarter for students.
                    </p>
                </div>

                <div class="md:w-[50%] space-y-3 z-2 relative">
                    <!-- <img src="/book-pile.jpg" class="w-120 top-[-220px] absolute -z-1 ml-15" alt=""> -->

                    <div class="space-y-5 flex flex-col items-center">
                        <div class="w-120 h-full text-lg p-4 rounded-md ring-[2px] ring-slate-800 backdrop-blur-lg text-justify">
                            {{ text }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center py-40 relative z-10">
                <button class="px-40 py-5 rounded-full hover:text-white backdrop-blur-md text-slate-500 ring-[2px] ring-slate-400 hover:ring-neutral-800">Get Started</button>
            </div>

        </section>


        <!-- <section class="relative bg-[url('wave.png')] bg-center bg-no-repeat bg-cover section"></section>
        <section class="relative bg-[url('wave.png')] bg-center bg-no-repeat bg-cover section"></section>
        <section class="relative bg-[url('wave.png')] bg-center bg-no-repeat bg-cover section"></section>
        <section class="relative bg-[url('wave.png')] bg-center bg-no-repeat bg-cover section"></section> -->
    </div>
</template>

<script setup>
import { useSectionStore } from '~/store/sectionStore';

const sectionStore = useSectionStore()
const {showPage} = storeToRefs(sectionStore)   

const text = `ABU-Lib+ is an intelligent Library Management System designed to make library services more accessible, efficient, and student-friendly. Unlike traditional library software, ABU-Lib+ goes beyond simple inventory tracking — it streamlines everyday tasks for students and librarians alike, saving time and reducing manual work.
The system is built to support colleges, universities, and institutions that want a smarter, more connected library experience. Powerful search and recommendation features help students find what they need faster.`

</script>

<style scope>
.section {
    @apply relative h-[calc(100dvh_-_80px)] bg-[url('wave.png')] bg-no-repeat bg-cover 
}
</style>