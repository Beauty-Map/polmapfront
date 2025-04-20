<template>
  <div class="page h-full max-w-[425px] w-full mx-auto bg-[#2920D9] flex flex-col relative">
    <PageLoading v-if="loading"/>
    <AppMenuDrawer />
    <UserProfileDrawer />
    <div class="w-full min-h-screen flex bg-[#2920D9] flex-row justify-start items-start">
      <slot />
    </div>
    <BottomNavigationBox class=""/>
  </div>
</template>

<script setup lang="ts">

import PageLoading from "~/components/loading/PageLoading.vue";
import MainHeader from "~/components/header/MainHeader.vue";
import SideBar from "~/components/sidebar/SideBar.vue";
import Footer from "~/components/footer/Footer.vue";
import AppMenuDrawer from "~/components/drawer/AppMenuDrawer.vue";
import UserProfileDrawer from "~/components/drawer/UserProfileDrawer.vue";
import BottomNavigationBox from "~/components/footer/BottomNavigationBox.vue";
const nuxt = useNuxtApp()
const loading = ref<boolean>(true)
const device = useDevice()

const isMobile = computed(() => {
  return device.isMobileOrTablet
})
nuxt.hook('page:loading:start', () => {
  loading.value = true
})
nuxt.hook('page:loading:end', () => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<style scoped>

</style>