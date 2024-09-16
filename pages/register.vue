<template>
  <div class="flex flex-col justify-start items-center">
    <PolMapIcon class="mt-12"/>
    <Header />
    <RegisterForm class="mt-[17px]" />
  </div>
</template>

<script setup lang="ts">

import Header from "~/components/register-drawer/Header.vue";
import PolMapIcon from "~/components/icons/AuthDrawer/PolMapIcon.vue";
import RegisterForm from "~/components/register-drawer/RegisterForm.vue";
</script>

<style scoped>

</style>