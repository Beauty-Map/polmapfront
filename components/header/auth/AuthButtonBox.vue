<template>
  <div class="flex flex-row gap-x-[20px] justify-end items-center" v-if="!auth.isAuthenticated">
    <LoginLinkButton />
    <RegisterLinkButton />
  </div>
  <div class="" v-else>
    <ExitLinkButton />
  </div>
</template>

<script setup lang="ts">
import LoginLinkButton from "~/components/button/auth/LoginLinkButton.vue";
import RegisterLinkButton from "~/components/button/auth/RegisterLinkButton.vue";
import ExitLinkButton from "~/components/button/auth/ExitLinkButton.vue";

const auth = useSanctumAuth()

</script>

<style scoped>

</style>