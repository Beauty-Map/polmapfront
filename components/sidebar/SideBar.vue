<template>
  <div class="flex flex-col justify-start items-start w-full max-w-[310px]">
    <UserBox />
    <SideBarLinkBox />
  </div>
</template>

<script setup lang="ts">

import SideBarLinkBox from "~/components/sidebar/SideBarLinkBox.vue";
import UserBox from "~/components/sidebar/UserBox.vue";
</script>

<style scoped>

</style>