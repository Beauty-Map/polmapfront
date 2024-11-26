<template>
  <div class="pt-[20px] w-full flex flex-col items-start justify-start">
    <div class="relative w-full flex flex-row items-center justify-center py-[23px]">
      <div></div>
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">اشتراک</div>
      <BackIcon @click="goBack" class="absolute left-[10px]"/>
    </div>
    <div class="w-full flex flex-col justify-start items-start px-[10px] py-[30px]">
      <div v-if="subscription" class="text-[#141414] font-medium text-[14px] leading-[27px] text-right mb-4">
        <p>شما در حال حاضر اشتراک فعال {{subscription.period}} ماهه تا تاریخ {{subscriptionEndAtFa}} دارید ({{getEndPeriod}} روز تا پایان اشتراک).</p>
      </div>
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
        <div class="w-full gap-x-[40px] flex flex-row justify-between items-center mt-[18px]">
          <span class="text-[#133C3E] font-medium text-[18px] leading-[27px] text-right">مبلغ پرداختی</span>
          <div class="w-[112px] cursor-pointer px-[8px] h-[37px] flex flex-row justify-between items-center border border-[#A9A7A7] rounded-[20px] bg-white">
            <div></div>
            <span class="font-bold text-[18px] leading-[28px] mx-[8px]">{{ parseFloat(selectedSubscription?.price.toString()).toString() ?? 0 }}</span>
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
import ArrowUpIcon from "~/components/icons/ArrowUpIcon.vue";
import {useAuthStore} from "~/store/Auth";
import UpgradeItem from "~/components/upgrade/UpgradeItem.vue";
import 'dayjs/locale/fa'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import jalaliday from 'jalaliday'

const dayjs = useDayjs()
dayjs.locale('fa')
dayjs.extend(localizedFormat)
dayjs.extend(jalaliday)

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})
const router = useRouter()
const auth = useAuthStore()
const user = ref(auth.user)
const subscription = ref(null)
const app = useNuxtApp()
const route = useRoute()
const loading = ref(false)

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
  doPay()
}

const getSubscriptions = async () => {
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest('/subscriptions')
      .then(res => {
        subscriptions.value = res.data as (ISubscription[])
        selectedSubscription.value = subscriptions.value[0]
      })
}

const doPay = () => {
  loading.value = true
  const {$postRequest: postRequest}=app
  postRequest(`/payments`, {
    subscription_id: selectedSubscription.value?.id,
    app: 'polmap'
  })
      .then(res => {
        app.$toast.success('در حال انتقال به درگاه پرداخت می باشید. لطفا صبر کنید.', {rtl: true})
        window.open(res.payment_url)
        router.push(route.path + `/transactions?id=${res.payment_id}`)
      })
      .catch(err => {

      })
      .finally(() => {
        setTimeout(() => loading.value = false, 500)
        closeSelectSubscriptionModal()
      })
}

const subscriptionEndAtFa = computed(() => {
  if (subscription.value) {
    return dayjs(subscription.value.end_at).calendar('jalali').locale('fa').format('dddd D MMMM YYYY')
  }
  return ''
})

const getEndPeriod = computed(() => {
  if (subscription.value) {
    const endDate = new Date(subscription.value.end_at);
    const currentDate = new Date();
    const differenceInTime = endDate.getTime() - currentDate.getTime();
    return Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
  }
  return 0
})

onMounted(() => {
  nextTick(() => {
    getSubscriptions()
    subscription.value = auth.user?.subscription
  })
})
</script>

<style scoped>

</style>