<template>
  <div class="w-full h-full flex flex-col justify-start items-start">
    <Header title="پروفایل"/>
    <Main />
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import Header from "~/components/profile/Header.vue";
import Main from "~/components/profile/Main.vue";

definePageMeta({
  layout: "dashboard",
  middleware: "auth"
})
</script>

<style scoped>

</style>