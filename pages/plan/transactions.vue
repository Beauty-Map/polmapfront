<template>
  <div class="pt-[20px] w-full flex flex-col items-start justify-start">
    <div class="relative w-full flex flex-row items-center justify-center py-[23px]">
      <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">خرید اشتراک</div>
      <BackIcon @click="goBack" class="absolute left-[10px]"/>
    </div>
    <div v-if="subscription" class="w-full px-[17px] mt-[40px] pb-[40px] gap-y-[30px] flex flex-col justify-start items-start">
      <div class="w-full px-[23px]">
        <div class=" w-full gap-x-[13px] flex flex-row border border-[#A9A7A7] px-[21px] py-[15px] rounded-[12px] min-h-[285px]">
          <PaymentOptionDescIcon />
          <div class="w-full h-full flex gap-y-[20px] flex-col justify-start items-start text-[#133C3E] text-[15px] font-medium leading-[23px]">
            <span>هنرمند عزیز</span>
            <span class="leading-8">تراکنش شما برای خرید اشتراک {{ subscription.period }} ماهه در وضعیت <span class="font-bold">{{getStatus}}</span> می باشد.</span>
          </div>
        </div>
      </div>
      <button :disabled="loading" @click="checkStatus" :class="[loading ? ' bg-[rgb(177,177,177)]' : ' bg-[#FFEA2E]']" class="rounded-[20px] w-full text-center flex justify-center items-center py-[11px] px-[18px] text-black font-semibold text-[14px] leading-[21px]">
        <span v-if="loading">
          <LoadingComponent />
        </span>
        <span v-else class="flex flex-row gap-2">
          <span>بررسی مجدد وضعیت</span>
          <LoadingComponent v-if="status == 'created'"/>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import PaymentOptionDescIcon from "~/components/icons/PaymentOptionDescIcon.vue";
import {useAuthStore} from "~/store/Auth";
import LoadingComponent from "~/components/global/Loading.vue";

definePageMeta({
  layout: 'artist-panel',
  middleware: 'auth'
})
const router = useRouter()
const route = useRoute()
const auth = useAuthStore()
const user = ref(auth.user)
const subscription = ref<any|null>(null)
const payment = ref<IPayment|null>(null)
const status = ref<string>('created')
const loading = ref<boolean>(false)
const dataReceived = ref<boolean>(false)
const app = useNuxtApp()

const intervalId = ref()
const goBack = () => {
  router.back()
}

const getPaymentOption = async () => {
  const id = route.query.id
  const res = await useCustomFetch(`/payments/${id}`, {
    method: "GET"
  })
  if (res.data.value) {
    payment.value = res.data.value as IPayment
    status.value = res.data.value.status as string
    subscription.value = res.data.value?.subscription
    if (payment.value.status == 'created') {
      setInterval(() => {
        if (!dataReceived.value) {
          checkStatus();
        } else {
          clearInterval(intervalId.value);
        }
      }, 20000);
    }
  }
}

const checkStatus = async () => {
  if (dataReceived.value == true) {
    clearInterval(intervalId.value)
    return
  }
  loading.value = true
  const id = route.query.id
  const {$postRequest: postRequest}=app
  postRequest(`/payments/status`, {
    code: id
  })
      .then(res => {
        status.value = res
      })
      .catch(err => {

      })
      .finally(() => {
        setTimeout(() => loading.value = false, 500)
      })
}

const getStatus = computed(() => {
  const statues = {
    'created': 'در انتظار پرداخت',
    'payed': 'پرداخت شده',
    'failed': 'خطا در فرایند پردازش',
  }
  return statues[status.value as string]
})

onMounted(() => {
  nextTick(() => {
    getPaymentOption()
  })
})
</script>

<style scoped>

</style>