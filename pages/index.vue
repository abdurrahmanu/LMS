<template>
    <div v-if="showPage">
        <section id="1" class="relative bg-[url('wave.png')] bg-center bg-no-repeat bg-cover section py-10">

            <div class="relative max-w-[90%] min-w-[500px] pt-20 mx-auto flex-col md:flex-row md:justify-evenly justfiy-center flex">
                <div class="md:w-[50%]">
                    <ul class="list-disc list-inside space-y-2">
                    <li>Smart tracking of all library items</li>
                    <li>Fast, student-focused search and recommendations</li>
                    <li>Automated issue management</li>
                    <li>Detailed records and reports</li>
                    <li>Modern, accessible interface</li>
                    </ul>

                    <p class="mt-4 font-semibold">
                    ABU-Lib+ — empowering your library to work smarter for students, not harder.
                    </p>
                </div>

                <div class="md:w-[50%] space-y-4 z-2">
                    <p class="font-bold text-xl flex items-center w-fit gap-3"><Logo /> Library Management System</p>
                    <p class="ring-[1px] rounded-md leading-6 text-sm text-black max-w-[80%] p-10 text-justify mix-blend-excluion bg-white">ABU-Lib+ is an intelligent Library Management System designed to make library services more accessible, efficient, and student-friendly. Unlike traditional library software, ABU-Lib+ goes beyond simple inventory tracking — it streamlines everyday tasks for students and librarians alike, saving time and reducing manual work.
                    The system is built to support colleges, universities, and institutions that want a smarter, more connected library experience. Powerful search and recommendation features help students find what they need faster.
                    </p>
                </div>
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
</script>

<style scope>
.section {
    @apply h-screen ring-[1px]
}
</style>