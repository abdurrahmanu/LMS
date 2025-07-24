<template>
    <div class="max-w-[1000px] w-[80%] m-auto space-y-1">
        <div class="relative h-fit">
            <input @focus="isFocused = true" @blur="isFocused = false" placeholder="Search collection" type="text" class="appearance-none outline-none ring-[1px] rounded-md w-full px-3 py-2">
            <SVGSearch class="w-5 absolute right-4 top-1/2 -translate-y-1/2" />
        </div>
        <div v-if="showSelections" class="flex flex-wrap gap-2 py-2 backdrop-blur-md">
            <div @mouseover="onSelections = true" @mouseleave="onSelections = false" @click.passive='editSelection(search)' v-for="(search, index) in searchBy" :key="index" :class="[selected.includes(search) && 'ring-[1px]']" class="flex px-2 items-center gap-2 hover:ring-[1px] rounded-sm">
                <p>{{ search }}</p>
                <SVGGood @click="submit" v-if="selected.includes(search)" class="w-2" />
            </div>
        </div>
    </div>
</template>

<script setup>
const searchBy = ['All', 'Author', 'Subject', 'ISBN/ISSN', 'Book']
const selected = ref([])
const isFocused = ref(false)
const onSelections = ref(false)

const showSelections = computed(() => {
    return isFocused.value || onSelections.value
})

const editSelection = (val) => {
    let index = selected.value.indexOf(val)
    if (index > -1) selected.value.splice(index, 1)
    else selected.value.push(val)
}

const submit = () => {

}
</script>