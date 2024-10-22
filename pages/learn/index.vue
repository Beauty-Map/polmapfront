<template>
  <div class="w-full h-full flex flex-col justify-start items-start mb-8">
    <Header title="آموزش"/>
    <Main />
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import Header from "~/components/dashboard/Header.vue";
import Main from "~/components/learn/Main.vue";

definePageMeta({
  layout: "dashboard",
  middleware: "auth"
})
</script>

<style scoped>

</style>