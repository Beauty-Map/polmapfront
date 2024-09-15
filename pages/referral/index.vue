<template>
  <div class="w-full h-full flex flex-col justify-start items-start">
    <Header title="دریافت بنر تبلیغاتی"/>
    <Main />
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import Header from "~/components/dashboard/Header.vue";
import Main from "~/components/banner/Main.vue";

definePageMeta({
  layout: "dashboard",
  middleware: "auth"
})
</script>

<style scoped>

</style>