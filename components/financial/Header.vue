<template>
  <div class="relative w-full py-[25px] min-h-[45px] flex flex-row justify-center items-center">
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