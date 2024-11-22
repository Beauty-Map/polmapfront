<template>
  <div class="relative w-full h-[200px]">
    <img :src="getBanner" alt="" class="w-full h-full"/>
    <div class="absolute top-[20px] left-0 right-0 flex flex-row justify-between items-center">
<!--      <div @click="goToWalletPage" class="cursor-pointer px-[8px] h-[37px] ml-[17px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white">-->
<!--        <AddMoneyIcon />-->
<!--        <span class="font-medium text-[18px] leading-[28px] mx-[8px]" v-format-number>{{ user.coins }}</span>-->
<!--        <span class="font-medium text-[18px] leading-[28px]">TON</span>-->
<!--      </div>-->
      <div></div>
      <BackIcon class="cursor-pointer" @click="goBack"/>
    </div>
    <div class="absolute bottom-[12px] left-[35px] right-[35px] px-[9px] py-[9px]
     flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[17px]
     bg-white">
      <div class="w-full flex flex-row justify-between
       flex-wrap items-center">
        <div class="flex flex-row justify-start items-center">
          <img :alt="user.full_name" :src="getAvatar"
               class="w-[55px] h-[55px] rounded-[100%] border border-[#B2550F]">
          <div class="py-[5px] flex flex-col items-start justify-start mr-[6px] h-[55px]">
            <div class="w-full flex flex-row gap-[2px] text-[#133C3E] font-medium text-[14px] leading-[21px]">
              <span class="whitespace-nowrap text-ellipsis overflow-hidden max-w-[80px]">{{ user.full_name }}</span>
            </div>
            <div class="mt-[5px] text-[#133C3E] font-light text-[14px] leading-[21px]">
              {{ getUserRole }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import AddMoneyIcon from "~/components/icons/AddMoneyIcon.vue";
import {useDrawerStore} from "~/store/Drawer";
import BackIcon from "~/components/icons/BackIcon.vue";
import {useAuthStore} from "~/store/Auth";

const auth = useAuthStore()
const user = ref(auth.user)

const getBanner = computed(() => '/images/panel/header.png')
const getAvatar = computed(() => user.value?.avatar ? user.value?.avatar : '/images/avatar.png')
const getUserRole = computed(() => user.value?.role ? user.value?.role : 'بازاریاب')

const router = useRouter()
const store = useDrawerStore()

const goBack = () => {
  // store.closeMenuDrawer()
  router.back()
}
const openProfileDrawer = () => {
  router.push('/profile')
  // store.openProfileDrawer()
}

const goToWalletPage = () => {
  router.push('/financial')
}
</script>

<style scoped>

</style>