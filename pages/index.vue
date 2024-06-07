<template>
  <div class="flex flex-col justify-start items-center">
    <PolMapIcon class="mt-12"/>
    <Header />
    <LoginForm class="mt-[17px]" />
  </div>
</template>

<script setup lang="ts">

import Header from "~/components/login-drawer/Header.vue";
import LoginForm from "~/components/login-drawer/LoginForm.vue";
import PolMapIcon from "~/components/icons/AuthDrawer/PolMapIcon.vue";
import {definePageMeta} from "#imports";
definePageMeta({
  middleware: "guest"
})
</script>

<style scoped>

</style>