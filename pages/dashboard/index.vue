<template>
  <div class="w-full h-full flex flex-col justify-start items-start">
    <Header title="داشبورد"/>
    <DashboardMain />
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import Header from '~/components/dashboard/Header.vue';

definePageMeta({
  layout: "dashboard",
  middleware: "auth"
})
</script>

<style scoped>

</style>