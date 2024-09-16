<template>
  <div class="w-full hidden md:flex flex-row justify-between px-2 flex-wrap lg:justify-center items-center relative">
    <div class=" lg:absolute lg:right-[20px] lg:top-[10px] cursor-pointer border border-[#A9A7A7] py-[8px] px-[8px] gap-[10px] rounded-[15px] flex flex-row justify-between items-center">
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
  <div class="relative md:hidden w-full py-[25px] min-h-[45px] flex flex-row justify-center items-center">
    <div class="text-white text-center font-semibold text-[16px] leading-[24x]">{{ title }}</div>
    <div class="absolute top-[20px] left-[20px] flex flex-row justify-between items-center">
      <BackWhiteIcon class="cursor-pointer" @click="goBack"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import MinusCircleRedIcon from "~/components/icons/MinusCircleRedIcon.vue";
import BackWhiteIcon from "~/components/icons/BackWhiteIcon.vue";
import {useAuthStore} from "~/store/Auth";
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
const router = useRouter()
const auth = useAuthStore()
const user = ref(auth.user)

const goBack = () => {
  router.back()
}
</script>

<style scoped>

</style>