<template>
  <div class="w-full flex-row justify-between items-center hidden md:flex">
    <div class="w-full flex flex-row justify-start items-center gap-[25px] h-[114px] max-w-[450px] bg-[#F5F5F5] border border-[#A9A7A7] px-[20px] py-[20px] rounded-[20px]">
      <img :src="avatar" alt="" class="w-[75px] h-[75px]">
      <div class="text-black text-right font-normal leading-[37px] text-[32px]">{{ fullName }}</div>
    </div>
    <div class="text-black font-normal text-[22px] leading-[27px] w-full flex flex-row justify-between items-center h-[114px] max-w-[350px] bg-white border border-black px-[25px] py-[25px] rounded-[50px]">
      <div>درآمد شما:</div>
     <div class="flex flex-row gap-x-2">
       <div v-format-number>{{ earnAmount }}</div>
       <span>تومان</span>
     </div>
    </div>
  </div>
  <div class="w-full flex-row justify-start items-center border border-[#e1e1e1] rounded-[10px] md:hidden flex px-[10px] py-[10px]">
    <img :src="avatar" alt="" class="w-[45px] h-[45px]">
    <div class="text-black text-right mr-[5px] font-medium leading-[26px] text-[20px]">{{ fullName }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  avatar: {
    type: String,
    default: '/images/avatar.png'
  },
  fullName: {
    type: String,
    default: ''
  },
  earnAmount: {
    type: String,
    default: ''
  },
})
</script>

<style scoped>

</style>