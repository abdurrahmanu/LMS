<template>
    <div>
        <button class="px-5 py-1 bg-black hover:bg-white hover:text-black rounded-full text-white hover:ring-[1px] hover:ring-black transition-all duration-100 ">
            {{ text }}
            <slot></slot>
        </button>
    </div>
</template>


<script setup>
defineProps({
    text: {
        type: String,
        default: 'Login'
    }
})
</script>