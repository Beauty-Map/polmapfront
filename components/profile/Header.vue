<template>
  <div class="w-full flex flex-row justify-center items-center relative">
    <div class="absolute right-[20px] top-[10px] cursor-pointer border border-[#A9A7A7] py-[8px] px-[8px] gap-[10px] rounded-[15px] flex flex-row justify-between items-center">
      <MinusCircleRedIcon />
      <div class="text-[22px] text-right leading-[30px] text-[#133C3E] w-full flex flex-row justify-start items-center gap-[4px] min-w-[150px]" >
        <span v-format-number>{{ user.coins }}</span>
        <span>تومان</span>
      </div>
    </div>
    <div class="text-black text-center font-medium text-[40px] leading-[61px]">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">

import MinusCircleRedIcon from "~/components/icons/MinusCircleRedIcon.vue";
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
const user = useSanctumUser()
</script>

<style scoped>

</style>