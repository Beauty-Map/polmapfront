<template>
  <div class="card-item gap-y-[20px] text-white flex flex-col justify-start items-start w-full aspect-[7/4] rounded-[20px] px-[30px] py-[30px]">
    <div class="w-full flex flex-row justify-between items-center">
      <img src="/images/bank/bmi.png" alt="" class="w-[50px]">
      <span class="font-normal text-[26px] leading-[24px]">{{ getBankName }}</span>
    </div>
    <div class="text-left w-full">
      <span class="font-normal text-[22px] leading-[24px]">{{ getSheba }}</span>
    </div>
    <div class="text-right w-full">
      <span class="font-medium text-[24px] leading-[24px]">{{ getUserFullName }}</span>
    </div>
    <div class="text-left w-full">
      <span class="font-normal text-[24px] leading-[24px]">{{ getCardNumber }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

const getBankName = computed(() => {
  return 'بانک ملی'
})

const getSheba = computed(() => {
  return 'IR75 132 2223222322234835267'
})

const getUserFullName = computed(() => {
  return 'زهرا زارعی'
})

const getCardNumber = computed(() => {
  return '5142 - 8164 - 6526 - 2563'
})
</script>

<style scoped>
.card-item {
  background: linear-gradient(106.15deg, #042843 1.98%, #726E9E 98%);
}
</style>