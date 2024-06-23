<template>
  <div class="w-full h-full flex flex-col justify-start items-start mb-[60px] md:mb-0">
    <Header :title="selectedApp.app_name"/>
    <DashboardMain />
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import Header from '~/components/dashboard/Header.vue';
import {useAppStore} from "~/store/App";

definePageMeta({
  layout: "dashboard",
  middleware: "auth"
})
const selectedApp = useAppStore().getSelectedApp

</script>

<style scoped>

</style>