<template>
  <div class="w-full flex flex-row justify-between flex-wrap items-center relative">
    <div class="cursor-pointer border border-[#A9A7A7] py-[8px] px-[8px] gap-[10px] rounded-[15px] flex flex-row justify-between items-center">
      <MinusCircleRedIcon />
      <div class="text-[22px] text-right leading-[30px] text-[#133C3E] w-full flex flex-row justify-start items-center gap-[4px] min-w-[150px]" >
        <span v-format-number>{{ user.coins }}</span>
        <span>TON</span>
      </div>
    </div>
    <div class="text-black text-center font-medium text-[40px] leading-[61px]">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">

import MinusCircleRedIcon from "~/components/icons/MinusCircleRedIcon.vue";
import {useAuthStore} from "~/store/Auth";
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
const auth = useAuthStore()
const user = ref(auth.user)

</script>

<style scoped>

</style>