<template>
  <div class="cursor-pointer w-full flex flex-row justify-between items-center px-[12px] py-[12px] rounded-[12px] border border-[#A9A7A7]">
    <div class="font-medium text-[16px] leading-[19px] text-[#133C3E]">
      <span>{{ `پنل ${title}` }}</span>
    </div>
    <button class="rounded-[10px] px-2 h-[38px] flex justify-center items-center text-white font-normal text-[12px] leading-[14px] bg-[#085EC2] shadow-[0px_4px_4px_0px_#00000040] min-w-[80px] text-center">
      <span>{{ price }}</span>
      <span class="mr-[5px]">TON</span>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    default: 0
  }
})

</script>

<style scoped>

</style>