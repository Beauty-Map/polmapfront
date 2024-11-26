<template>
  <div class="w-full h-full flex flex-col justify-start items-start">
    <Header title="آمار و گزارشات"/>
    <MainSelect />
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import Header from "~/components/dashboard/Header.vue";
import MainSelect from "~/components/statistics/MainSelect.vue";

definePageMeta({
  layout: "dashboard",
  middleware: "auth"
})
</script>

<style scoped>

</style>