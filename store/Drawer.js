import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', {
    state: () => ({
        openProfile: false,
        openMenu: false,
    }),
    getters: {
        isOpenProfile: (state) => state.openProfile,
        isOpenMenu: (state) => state.openMenu,
    },
    actions: {
        closeProfileDrawer() {
            this.openProfile = false
        },
        openProfileDrawer() {
            this.openProfile = true
        },
        closeMenuDrawer() {
            this.openMenu = false
        },
        openMenuDrawer() {
            this.openMenu = true
        },
        closeAllDrawers() {
            this.closeProfileDrawer()
            this.closeMenuDrawer()
        },
    },
})