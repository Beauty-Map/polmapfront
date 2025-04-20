<template>
  <div class="w-full h-full flex-col justify-start items-start">
    <Header title="پروفایل"/>
    <Main />
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