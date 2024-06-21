<template>
  <div class="w-full h-full flex flex-col justify-start items-start">
    <div class="w-full flex flex-col justify-start items-center">
      <div class="w-full text-center flex flex-col justify-start items-center">
        <div class="text-center flex flex-row justify-center items-center gap-x-[4px] text-white font-semibold text-[28px] leading-[42px]">
          <span v-format-number>{{ user.coins }}</span>
          <span>تومان</span>
        </div>
        <div class="font-medium text-[16px] text-white w-full leading-[26px] text-center mt-[10px]">موجودی</div>
      </div>
      <div class="w-full flex flex-row gap-x-[10px] justify-evenly items-center mt-[26px]">
        <div class="flex flex-col justify-start items-center text-center" @click="openWithdrawDrawer">
          <div class="px-[18px] rounded-full py-[18px] bg-[rgba(19,60,62,0.35)]">
            <FinancialWhiteIcon />
          </div>
          <span class="whitespace-nowrap text-white mt-[10px] font-semibold text-[14px] leading-[20px]">برداشت موجودی</span>
        </div>
        <div class="flex flex-col justify-start items-center text-center" @click="openBankDetailDrawer">
          <div class="px-[18px] rounded-full py-[18px] bg-[rgba(19,60,62,0.35)]">
            <CardWhiteIcon />
          </div>
          <span class="whitespace-nowrap text-white mt-[10px] font-semibold text-[14px] leading-[20px]">اطلاعات بانکی</span>
        </div>
      </div>
    </div>
    <div class="w-full h-full pb-[60px] py-[18px] px-[12px] gap-y-[10px] overflow-y-auto bg-white mt-[10px] rounded-t-[25px] flex-grow">
      <WidthrawItem
          v-for="(w) in 10"
          :key="w"
          :title="'برداشت موجودی'"
          :amount="1000000"
          :created-at="'دوشنبه, 28 اسفند 1402 18:29'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import FinancialWhiteIcon from "~/components/icons/FinancialWhiteIcon.vue";
import CardWhiteIcon from "~/components/icons/CardWhiteIcon.vue";
import WidthrawItem from "~/components/financial/WidthrawItem.vue";

const user = useSanctumUser()

const form = ref({
  amount: ''
})
</script>

<style scoped>

</style>