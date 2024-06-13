<template>
<div
    class="flex flex-col fixed md:hide top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]"
    :class="[store.isOpenMenu ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-col justify-start items-center gap-y-[20px]">
    <Header />
    <LinkBox />
  </div>
</div>
</template>

<script setup lang="ts">

import {useDrawerStore} from "~/store/Drawer";
import Header from "~/components/app-menu-drawer/Header.vue";
import LinkBox from "~/components/app-menu-drawer/LinkBox.vue";

const store = useDrawerStore()

const goBack = () => {
  store.closeAllDrawers()
}
</script>

<style scoped>

</style>