import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', {
    state: () => ({
        openProfile: false,
        openMenu: false,
        openResetPassword: false,
        openSetPassword: false,
    }),
    getters: {
        isOpenProfile: (state) => state.openProfile,
        isOpenMenu: (state) => state.openMenu,
        isOpenResetPassword: (state) => state.openResetPassword,
        isOpenSetPassword: (state) => state.openSetPassword,
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
        openResetPasswordDrawer() {
            this.openResetPassword = true
        },
        closeResetPasswordDrawer() {
            this.openResetPassword = false
        },
        openSetPasswordDrawer() {
            this.openSetPassword = true
        },
        closeSetPasswordDrawer() {
            this.openSetPassword = false
        },
        closeAllDrawers() {
            this.closeProfileDrawer()
            this.closeMenuDrawer()
            this.closeResetPasswordDrawer()
            this.closeSetPasswordDrawer()
        },
    },
})