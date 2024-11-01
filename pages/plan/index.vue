<template>
  <div class="pt-[20px] w-full flex flex-col items-start justify-start">
    <div class="relative w-full flex flex-row items-center justify-center py-[23px]">
      <div></div>
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">اشتراک</div>
      <BackIcon @click="goBack" class="absolute left-[10px]"/>
    </div>
    <div class="w-full flex flex-col justify-start items-start px-[10px] py-[30px]">
      <div class="w-full flex flex-row justify-between items-center px-[14px]">
        <span class="text-[#141414] font-medium text-[18px] leading-[27px] text-right">خرید/تمدید اشتراک</span>
        <ArrowUpIcon />
      </div>
      <div class="w-full flex flex-col gap-y-[20px] justify-start items-start px-[15px] mt-[30px]">
        <UpgradeItem
            v-for="(p, i) in subscriptions"
            :title="p.title"
            :price="p.price"
            :key="i"
            @click="selectSubscription(p)"
        />
      </div>
    </div>
    <Modal :show-close="false" :open="showSelectSubscriptionModal">
      <div class="w-full h-full flex flex-col justify-start items-start">
        <div class="w-full gap-x-[40px] flex flex-row justify-between items-center">
          <span class="text-[#133C3E] font-medium text-[18px] leading-[27px] text-right">موجودی سکه</span>
          <div @click="goToWalletPage" class="w-[112px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white">
            <AddMoneyIcon />
            <span class="font-medium text-[18px] leading-[28px] mx-[8px]">{{ user.coins }}</span>
            <DollarIcon />
          </div>
        </div>
        <div class="w-full gap-x-[40px] flex flex-row justify-between items-center mt-[18px]">
          <span class="text-[#133C3E] font-medium text-[18px] leading-[27px] text-right">سکه مورد نیاز</span>
          <div class="w-[112px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white">
            <div></div>
            <span class="font-bold text-[18px] leading-[28px] mx-[8px]">{{ selectedSubscription?.price ?? 0 }}</span>
            <DollarIcon />
          </div>
        </div>
        <div class="w-full gap-x-[40px] flex flex-row justify-between items-center mt-[18px]">
          <span class="text-black font-medium text-[12px] leading-[17px] text-right">پنل مورد نظر شما خریداری میشود. آیا تایید میکنید ؟</span>
        </div>
        <div class="w-full gap-x-[20px] flex flex-row justify-end items-center mt-[18px]">
          <button @click="doSelectSubscription" class="text-[#133C3E] text-center font-normal text-[15px] leading-[18px]">تایید نهایی</button>
          <button @click="closeSelectSubscriptionModal" class="text-[#133C3E] text-center font-normal text-[15px] leading-[18px]">بستن</button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">

import DollarIcon from "~/components/icons/DollarIcon.vue";
import BackIcon from "~/components/icons/BackIcon.vue";
import AddMoneyIcon from "~/components/icons/AddMoneyIcon.vue";
import ArrowUpIcon from "~/components/icons/ArrowUpIcon.vue";
import {useAuthStore} from "~/store/Auth";
import UpgradeItem from "~/components/upgrade/UpgradeItem.vue";

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})
const router = useRouter()
const auth = useAuthStore()
const user = ref(auth.user)

const subscriptions = ref<ISubscription[]>([])
const selectedSubscription = ref<ISubscription|null>(null)
const showSelectSubscriptionModal = ref<Boolean>(false)

const goBack = () => {
  router.back()
}

const selectSubscription = (p: ISubscription) => {
  selectedSubscription.value = p
  setTimeout(() => {
    openSelectSubscriptionModal()
  }, 200)
}

const openSelectSubscriptionModal = () => {
  showSelectSubscriptionModal.value = true
}

const closeSelectSubscriptionModal = () => {
  showSelectSubscriptionModal.value = false
  selectedSubscription.value = null
}

const doSelectSubscription = () => {
  if (!selectedSubscription.value) {
    return
  }
  if (selectedSubscription.value?.price < user.value?.coins) {

  } else {
    closeSelectSubscriptionModal()
    // router.push('/panel/wallet')
  }
}

const getSubscriptions = async () => {
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest('/subscriptions')
      .then(res => {
        subscriptions.value = res.data as (ISubscription[])
        selectedSubscription.value = subscriptions.value[0]
      })
}

const goToWalletPage = () => {
  // router.push('/panel/wallet')
}

onMounted(() => {
  nextTick(() => {
    getSubscriptions()
  })
})
</script>

<style scoped>

</style>