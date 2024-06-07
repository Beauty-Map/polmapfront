<template>
  <div class="page h-full w-full flex flex-col relative">
    <PageLoading v-if="loading"/>
    <MainHeader />
    <div class="w-full min-h-screen px-[34px] py-[20px] flex flex-row justify-start items-start">
      <SideBar />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

import PageLoading from "~/components/loading/PageLoading.vue";
import MainHeader from "~/components/header/MainHeader.vue";
import SideBar from "~/components/sidebar/SideBar.vue";
const nuxt = useNuxtApp()
const loading = ref<boolean>(true)
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