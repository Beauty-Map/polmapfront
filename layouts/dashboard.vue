<template>
  <div class="page h-full max-w-[425px] w-full mx-auto flex flex-col relative">
    <PageLoading v-if="loading"/>
    <AppMenuDrawer />
    <UserProfileDrawer />
    <div class="w-full min-h-screen px-[34px] mb-[40px] py-[20px] flex flex-row justify-start items-start">
      <slot />
    </div>
    <BottomNavigationBox/>
  </div>
</template>

<script setup lang="ts">

import PageLoading from "~/components/loading/PageLoading.vue";
import AppMenuDrawer from "~/components/drawer/AppMenuDrawer.vue";
import UserProfileDrawer from "~/components/drawer/UserProfileDrawer.vue";
import BottomNavigationBox from "~/components/footer/BottomNavigationBox.vue";

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