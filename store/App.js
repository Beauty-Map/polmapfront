import { defineStore } from 'pinia'

export const useAppStore = defineStore('selectedApp', {
    state: () => ({
        selectedApp: {
            id: 1,
            title: 'بیوتی مپ'
        },
    }),
    getters: {
        getSelectedApp: (state) => state.selectedApp,
    },
    actions: {
        setSelectedApp(selectedApp) {
            this.selectedApp = selectedApp
        },
    },
})