<template>
  <div class="page h-full w-full flex flex-col relative" :class="isMobile ? 'px-[25px]' : ''">
    <ResetPasswordDrawer />
    <SetPasswordDrawer />
    <PageLoading v-if="loading"/>
    <slot />
  </div>
</template>

<script setup lang="ts">

import PageLoading from "~/components/loading/PageLoading.vue";
import MainHeader from "~/components/header/MainHeader.vue";
import ResetPasswordDrawer from "~/components/drawer/ResetPasswordDrawer.vue";
import SetPasswordDrawer from "~/components/drawer/SetPasswordDrawer.vue";
const nuxt = useNuxtApp()
const device = useDevice()
const loading = ref<boolean>(true)

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