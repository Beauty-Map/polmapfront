<template>
  <div class="card-item gap-y-[20px] text-white flex flex-col justify-start items-start w-full aspect-[7/4] rounded-[20px] px-[15px] py-[15px] md:px-[30px] md:py-[30px]">
    <div class="w-full flex flex-row justify-between items-center">
      <img src="/images/bank/bmi.png" alt="" class="md:w-[50px] w-[30px]">
      <span class="font-normal text-[16px] leading-[18px] md:text-[26px] md:leading-[24px]">{{ getBankName }}</span>
    </div>
    <div class="text-left w-full">
      <span class="w-full break-words font-normal text-[16px] leading-[16px] md:text-[22px] md:leading-[24px]" v-html="getSheba"></span>
    </div>
    <div class="text-right w-full">
      <span class="font-medium text-[16px] leading-[18px] md:text-[24px] md:leading-[24px]">{{ getUserFullName }}</span>
    </div>
    <div class="text-left w-full">
      <span class="font-normal text-[16px] leading-[18px] md:text-[24px] md:leading-[24px]">{{ getCardNumber }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  accountFullName: {
    type: String,
    default: ''
  },
  cardNumber: {
    type: String,
    default: ''
  },
  sheba: {
    type: String,
    default: ''
  },
  accountNumber: {
    type: String,
    default: ''
  },
  bankName: {
    type: String,
    default: ''
  },
})

const getBankName = computed(() => {
  return props.bankName
})

const getSheba = computed(() => {
  return props.sheba.length > 0 ? '<span class="mr-[4px]">IR</span>' + props.sheba : ''
})

const getUserFullName = computed(() => {
  return props.accountFullName
})

const getCardNumber = computed(() => {
  return insertHyphens(props.cardNumber)
})

const insertHyphens = (str) => {
  if (!str) {
    return ''
  }
  let result = '';
  for (let i = 0; i < str.length; i += 4) {
    if (i > 0) {
      result += ' - ';
    }
    result += str.substring(i, i + 4);
  }
  return result;
}
</script>

<style scoped>
.card-item {
  background: linear-gradient(106.15deg, #042843 1.98%, #726E9E 98%);
}
</style>