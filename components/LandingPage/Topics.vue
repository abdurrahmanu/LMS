<template>
    <div class="py-20">
        <p class="text-2xl text-center py-4">ALL TOPICS</p>
        <div class="flex flex-wrap max-w-[1000px] gap-4 space-y-4 justify-center">
        <div  v-for="(topic, index) in topics" :key="index" class="topic hover:shadow-sm hover:ring-blue-500 shadow-lg text-xs round-md">
            <!-- <SVGAppstore /> -->
            <p class="text-center">{{ topic }}</p>
        </div>
        </div>
    </div>
</template>

<script setup>
const topics = [
    'Literature',
    'Social Sciences',
    'Applied Sciences',
    'Engineering',
    'Art and Recreating',
]
</script>

<style scoped>
.topic {
    @apply ring-[1px] min-w-[100px] h-[100px] flex items-center justify-center
}
</style>
