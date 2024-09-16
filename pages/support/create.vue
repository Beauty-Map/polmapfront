<template>
  <div class="w-full h-full flex flex-col justify-start items-start">
    <Header title="تماس با پشتیبانی"/>
    <Create />
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import Header from "~/components/support/Header.vue";
import Create from "~/components/support/Create.vue";

definePageMeta({
  layout: "dashboard",
  middleware: "auth"
})
</script>

<style scoped>

</style>