import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language',{
    id: 'language',

    state: () => ({
        language: 'nl'
    }),

    getters: {
        getLanguage() {
            return this.language
        }
    },

    actions: {
        setLanguage(language) {
            this.language = language
        }
    },
})