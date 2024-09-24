<template>
  <div class="w-full mt-[60px] gap-[20px] h-full flex flex-row flex-wrap border border-[#A9A7A7] rounded-[50px] py-[60px] px-[40px]">
    <div class="max-h-[1000px] w-[calc(50%-10px)] border border-[#A9A7A7] bg-[#2920D9] rounded-[30px] h-full flex flex-col justify-start items-start">
      <div class="w-full rounded-t-[30px] py-[38px] px-[28px]">
        <div class="text-center flex flex-row justify-center items-center gap-x-[4px] text-white font-semibold text-[36px] leading-[55px]">
          <span v-format-number>{{ user.coins }}</span>
          <span>تومان</span>
        </div>
        <div class="font-medium text-[22px] text-white w-full leading-[34px] text-center mt-[10px]">موجودی</div>
      </div>
      <div class="w-full flex overflow-y-auto flex-col justify-start items-start gap-y-[20px] bg-white rounded-[30px] py-[28px] px-[20px] min-h-[400px] h-full">
        <WidthrawItem
            v-for="(w, i) in requests"
            :key="i"
            :title="w.type_fa"
            :amount="w.amount"
            :created-at="w.created_at"
        />
        <InfiniteLoading :firstload="true" v-if="showInfiniteScroll" class="mx-auto" @infinite="paginateDebounce"/>
      </div>
    </div>
    <div class="gap-y-[30px] w-[calc(50%-10px)] border border-[#A9A7A7] rounded-[30px] py-[60px] px-[40px] h-full flex flex-col justify-start items-center">
      <img :src="user.avatar ? user.avatar : '/images/avatar.png'" class="rounded-full h-[110px] w-[110px] border border-[#B2550F]" alt="">
      <div class="w-full text-center font-medium text-[26px] leading-[50px] text-black">{{user.full_name}}</div>
      <div class="w-full text-center font-light text-[22px] leading-[44px] text-[#828282]">IR - 43 0560 6118 2800 5585 3086 01</div>
      <WidthrawInput placeholder="مبلغ برداشت" v-model="form.amount"/>
      <MainActionButton :disabled="loading" class="mt-[18px]" @click="doWithdraw">
        <div v-if="loading">
          <LoadingComponent />
        </div>
        <div v-else class="text-white text-center text-[20px] leading-[30px]">برداشت</div>
      </MainActionButton>

      <div class="w-full flex flex-row flex-wrap justify-evenly items-center">
        <div class="flex flex-col justify-start items-center">
          <CircleProgressBar :value="420" :max="1000" colorUnfilled="#FF6832" size="160" rounded>
            <span class="w-[75px] flex flex-col justify-center items-center text-[13px] text-center">
              <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2385 2.05566C14.8159 1.05566 16.2593 1.05566 16.8366 2.05566L29.5297 24.0407C30.1071 25.0407 29.3854 26.2907 28.2307 26.2907H2.84449C1.68979 26.2907 0.968099 25.0407 1.54545 24.0407L14.2385 2.05566Z" stroke="#141414"/>
              </svg>
              <span>برداشت های قبل</span>
            </span>
          </CircleProgressBar>
          <div v-format-number>1000</div>
        </div>
        <div class="flex flex-col justify-start items-center">
          <CircleProgressBar :value="420" :max="1000" colorUnfilled="#FFEA2E" size="160" rounded>
            <span class="w-[75px] flex flex-col justify-center items-center text-[13px] text-center">
              <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M15.7076 1.8299C16.1566 0.447934 18.1117 0.447937 18.5607 1.8299L21.236 10.0636C21.5707 11.0937 22.5306 11.7911 23.6137 11.7911H32.2711C33.7242 11.7911 34.3283 13.6505 33.1528 14.5046L26.1488 19.5933C25.2726 20.2299 24.9059 21.3583 25.2406 22.3884L27.9159 30.6221C28.3649 32.004 26.7832 33.1532 25.6076 32.2991L18.6036 27.2104C17.7274 26.5738 16.5409 26.5738 15.6647 27.2104L8.66069 32.2991C7.48512 33.1532 5.9034 32.004 6.35242 30.6221L9.02771 22.3884C9.3624 21.3583 8.99575 20.2299 8.11954 19.5933L1.11553 14.5046C-0.0600381 13.6505 0.544127 11.7911 1.99721 11.7911H10.6546C11.7377 11.7911 12.6976 11.0937 13.0323 10.0636L15.7076 1.8299Z" stroke="#141414"/>
              </svg>
             <span>موجودی</span>
            </span>
          </CircleProgressBar>
          <div v-format-number>1000</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import WidthrawItem from "~/components/financial/WidthrawItem.vue";
import WidthrawInput from "~/components/input/WidthrawInput.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import { CircleProgressBar } from 'circle-progress.vue';
import {useCustomFetch} from "~/composables/useCustomFetch";
import InfiniteLoading from "v3-infinite-loading";
import {useAuthStore} from "~/store/Auth";
import LoadingComponent from "~/components/global/Loading.vue";

const auth = useAuthStore()
const user = ref(auth.user)
const loading = ref(false)

const app = useNuxtApp()
const form = ref({
  amount: ''
})
const showInfiniteScroll = ref<Boolean>(false)
const lastPage = ref<number>(1)
const page = ref<number>(1)
const requests = ref<IPaymentRequest[]>([])

const getTypeName = (type) => {
  return type == 'withdraw' ? 'برداشت موجودی' : 'واریز موجودی'
}
const getOwnPaymentsRequests = async () => {
  let url = `/own/payments/requests?page=${page.value}`
  const res = await useCustomFetch(url, {
    method: "get"
  })
  if (res.data.value) {
    let list = (res.data.value.data as IPaymentRequest[])
    if (list.length == 0) {
      showInfiniteScroll.value = false
      return
    }
    requests.value = [
      ...requests.value,
      ...list
    ]
    lastPage.value = (res.data.value.last_page as number)
    setTimeout(() => {
      showInfiniteScroll.value = true
    }, 300)
  }
}
const paginate = async () => {
  if (page <= lastPage) {
    page.value++
    await getOwnPaymentsRequests()
  }
}
const paginateDebounce = useDebounce(paginate, 500)

const doWithdraw = async () => {
  if (loading.value) return
  loading.value = true
  if (!form.value.amount || parseInt(form.value.amount) < 1000) {
    app.$toast.error('حداقل مبلغ برداشت 1000 تومان می باشد', {rtl: true,})
    loading.value = false
    return
  }
  const data = {
    amount: parseInt(form.value.amount)
  }
  const res = await useCustomFetch('/own/payments/requests', {
    method: "POST",
    body: data,
  })
  if (res.error.value != null) {
    app.$toast.error('متاسفانه خطایی رخ داده است لطفا بعدا امتحان کنید', {rtl: true,})
    loading.value = false
  }
  if (res.data.value != null) {
    app.$toast.success('درخواست برداشت شما با موفقیت ثبت شد', {rtl: true})
    form.value.amount = ''
    loading.value = false
  }
}
onMounted(() => {
  nextTick(() => getOwnPaymentsRequests())
})
</script>

<style scoped>

</style>