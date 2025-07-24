import {defineStore} from 'pinia'
import {ref} from 'vue'

export const authStore = defineStore('authStore', () => {
    const login = ref(false)
    const user = ref(null)
    const data = ref(null)
    const loadingApp = ref(false)
    
    return {
        loadingApp,
        login,
        user,
        data,
    }
})