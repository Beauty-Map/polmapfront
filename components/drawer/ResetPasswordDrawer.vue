<template>
<div
    class="flex flex-col fixed md:hide top-0 bottom-0 px-[17px] overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[99999999]"
    :class="[store.isOpenResetPassword ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-row items-center justify-end pt-[23px] pl-[3px]">
    <BackIcon @click="goBack" />
  </div>
  <div class="flex flex-col justify-start items-center">
    <PolMapIcon class="mt-12"/>
    <Header />
    <ResetForm class="mt-[17px]" />
  </div>
</div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import {useDrawerStore} from "~/store/Drawer";
import Header from "~/components/reset-password-drawer/Header.vue";
import ResetForm from "~/components/reset-password-drawer/ResetForm.vue";
import PolMapIcon from "~/components/icons/AuthDrawer/PolMapIcon.vue";

const store = useDrawerStore()
const router = useRouter()

const goBack = () => {
  store.closeAllDrawers()
  router.push('/')
}
</script>

<style scoped>

</style>