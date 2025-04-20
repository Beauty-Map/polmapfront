<template>
  <div class="w-full flex flex-col justify-start items-start min-h-screen">
    <MainMini/>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import MainMini from "~/components/financial/history/MainMini.vue";

definePageMeta({
  layout: "financial",
  middleware: "auth"
})
</script>

<style scoped>

</style>