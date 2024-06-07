<template>
  <button @click="openLoginDrawer" class="border border-[#141414] text-center text-[#141414] rounded-[5px] font-semibold text-[16px] leading-[24px] w-[91px] h-[52px]">
    ورود
  </button>
</template>

<script setup lang="ts">
import {useDrawerStore} from "~/store/Drawer";

const store = useDrawerStore()
const router = useRouter()
const openLoginDrawer = () => {
  router.push('/')
}
</script>

<style scoped>

</style>