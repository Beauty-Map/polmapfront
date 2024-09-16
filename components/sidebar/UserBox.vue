<template>
  <div class="w-full flex flex-row justify-between items-center border border-[#5E695B] rounded-[17px] pr-[8px] pl-[18px] p-y-[8px] h-[73px] mb-[19px]">
    <div class="flex flex-row gap-x-[8px]">
      <img :src="user.avatar ? user.avatar : '/images/avatar.png'" class="rounded-full h-[55px] w-[55px] border border-[#B2550F]" alt="">
      <div class="flex flex-col justify-start items-start">
        <span class="font-medium text-[#133C3E] text-right text-[18px] leading-[28px]">{{ user.full_name }}</span>
        <span class="font-light text-[#5CB3FF] text-right text-[16px] leading-[24px]">بازاریاب</span>
      </div>
    </div>
    <NotificationIcon class="cursor-pointer" @click="goToNotificationPage"/>
  </div>
</template>

<script setup lang="ts">
import NotificationIcon from "~/components/icons/NotificationIcon.vue";
import {useAuthStore} from "~/store/Auth";

const auth = useAuthStore()
const user = ref(auth.user)

const goToNotificationPage = () => {

}
</script>

<style scoped>

</style>