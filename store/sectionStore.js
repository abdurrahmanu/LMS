import { defineStore } from "pinia";

export const useSectionStore = defineStore("section", () => {
    const section = ref('1');
    const showPage = ref(false);
    
    function setSection() {
        const el = document.getElementById(section.value)

        if (el instanceof HTMLElement) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        
        const section_ = ref(+section.value);
        section_.value++
        section.value = `${section_.value}`
    }
    
    return {
        section,
        showPage,
        setSection,
    };
})