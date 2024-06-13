<template>
  <div class="w-full h-full flex flex-col justify-start items-start">
    <Header title="تماس با پشتیبانی"/>
    <Main />
  </div>
</template>

<script setup lang="ts">

import Header from "~/components/support/Header.vue";
import Main from "~/components/support/Main.vue";

definePageMeta({
  layout: "dashboard",
  middleware: "auth"
})
</script>

<style scoped>

</style>