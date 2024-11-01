<template>
  <div class="w-full flex flex-col justify-start items-start min-h-screen">
    <Header class="hidden md:flex" title="امور مالی"/>
<!--    <Main class="hidden md:flex"/>-->
    <MainMini/>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import Header from "~/components/financial/Header.vue";
import Main from "~/components/financial/Main.vue";
import MainMini from "~/components/financial/MainMini.vue";

definePageMeta({
  layout: "financial",
  middleware: "auth"
})
</script>

<style scoped>

</style>