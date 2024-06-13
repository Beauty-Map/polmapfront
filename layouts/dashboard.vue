<template>
  <div class="page h-full w-full flex flex-col relative">
    <PageLoading v-if="loading"/>
    <MainHeader v-if="!isMobile"/>
    <AppMenuDrawer />
    <div class="w-full min-h-screen px-[34px] py-[20px] flex flex-row justify-start items-start">
      <SideBar v-if="!isMobile"/>
      <slot />
    </div>
    <Footer v-if="!isMobile" />
  </div>
</template>

<script setup lang="ts">

import PageLoading from "~/components/loading/PageLoading.vue";
import MainHeader from "~/components/header/MainHeader.vue";
import SideBar from "~/components/sidebar/SideBar.vue";
import Footer from "~/components/footer/Footer.vue";
import AppMenuDrawer from "~/components/drawer/AppMenuDrawer.vue";
const nuxt = useNuxtApp()
const loading = ref<boolean>(true)
const device = useDevice()

const isMobile = computed(() => {
  return device.isMobile
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