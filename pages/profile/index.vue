<template>
  <div class="w-full h-full md:flex flex-col justify-start items-start hidden">
    <Header title="پروفایل"/>
    <Main />
  </div>
  <div class="w-full mb-[50px] md:hidden">
    <div class="flex flex-row items-center justify-between">
      <div></div>
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">پروفایل</div>
      <BackIcon @click="goBack" />
    </div>
    <MiniMain />
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import Header from "~/components/dashboard/Header.vue";
import Main from "~/components/profile/Main.vue";
import MiniMain from "~/components/profile/MiniMain.vue";
import BackIcon from "~/components/icons/BackIcon.vue";

definePageMeta({
  layout: "dashboard",
  middleware: "auth"
})
const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<style scoped>

</style>