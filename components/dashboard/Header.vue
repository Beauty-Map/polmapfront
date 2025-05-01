<template>
  <div class="relative w-full h-[45px] flex flex-row justify-center items-center">
    <div class="text-[#141414] text-center font-semibold text-[16px] leading-[24px]">{{ title }}</div>
    <div class="absolute top-0 left-[10px] flex flex-row justify-between items-center">
      <BackIcon class="cursor-pointer" @click="goBack"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import MinusCircleRedIcon from "~/components/icons/MinusCircleRedIcon.vue";
import BackIcon from "~/components/icons/BackIcon.vue";
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