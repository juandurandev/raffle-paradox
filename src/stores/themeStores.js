import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        darkMode: false
    }),

    actions: {
        toggleTheme(){
            this.darkMode = !this.darkMode;
            this.applyTheme()
        },
        loadTheme(){
            this.applyTheme()
        },
        applyTheme() {
            const html = document.documentElement
            if (this.darkMode) {
                html.classList.add('dark')
            } else {
                html.classList.remove('dark')
            }
        }
    }
})