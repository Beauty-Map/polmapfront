<template>
  <div class="w-full h-full flex flex-col justify-start items-start">
    <div v-if="isMobile" class="w-full h-full flex flex-col justify-start items-start">
      <div class="w-full h-full flex flex-col justify-start items-center gap-y-[40px]">
        <h2 class="font-medium text-[20px] leading-[30px] text-center mt-[40px]">محصول خود را انتخاب کنید</h2>
        <MainActionButton bg-color="#FF3CA0" @click="openAppMenuDrawer">
          <div class="text-white text-center text-[20px] leading-[30px]">بیوتی مپ</div>
        </MainActionButton>
      </div>
    </div>
    <div v-else>
      <Header title="داشبورد"/>
      <DashboardMain />
    </div>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import Header from '~/components/dashboard/Header.vue';
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useDrawerStore} from "~/store/Drawer";

definePageMeta({
  layout: "dashboard",
  middleware: "auth"
})
const device = useDevice()

const isMobile = computed(() => {
  return device.isMobile
})

const store = useDrawerStore()
const openAppMenuDrawer = () => {
  store.openMenuDrawer()
}
</script>

<style scoped>

</style>