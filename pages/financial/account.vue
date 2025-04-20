<template>
  <div class="w-full mb-[50px]">
    <div class="flex flex-row items-center justify-between">
      <div></div>
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">اطلاعات بانکی</div>
      <BackIcon @click="goBack" />
    </div>
    <MainMini />
  </div>
</template>

<script setup lang="ts">

import Header from "~/components/dashboard/Header.vue";
import Main from "~/components/financial/account/Main.vue";
import MainMini from "~/components/financial/account/MainMini.vue";
import {definePageMeta} from "#imports";
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