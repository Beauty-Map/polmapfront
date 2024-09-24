<template>
  <div class="w-ful gap-[20px] h-full flex flex-col justify-start items-center pt-[20px] pb-[40px]">
    <img :src="user.avatar ? user.avatar : '/images/avatar.png'" class="rounded-full h-[110px] w-[110px] border border-[#B2550F]" alt="">
    <div class="w-full text-center font-medium text-[20px] leading-[30px] text-black">{{user.full_name}}</div>
    <div class="w-full text-center font-light text-[16px] leading-[24px] text-[#828282]">IR - 43 0560 6118 2800 5585 3086 01</div>
    <WidthrawInput placeholder="مبلغ برداشت" v-model="form.amount"/>
    <MainActionButton :disabled="loading" class="mt-[18px]" @click="doWithdraw">
      <div v-if="loading">
        <LoadingComponent />
      </div>
      <div v-else class="text-white text-center text-[20px] leading-[30px]">برداشت</div>
    </MainActionButton>

    <div class="w-full flex flex-row flex-wrap justify-evenly items-center">
      <div class="flex flex-col justify-start items-center">
        <CircleProgressBar :value="420" :max="1000" colorUnfilled="#FF6832" size="120" rounded>
            <span class="w-[75px] flex flex-col justify-center items-center text-[13px] text-center">
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.20096 1.25C8.77831 0.25 10.2217 0.25 10.799 1.25L18.1603 14C18.7376 15 18.0159 16.25 16.8612 16.25H2.13878C0.984084 16.25 0.262396 15 0.839746 14L8.20096 1.25Z" stroke="#141414"/>
              </svg>
              <span class="text-[13px] leading-[15px]">برداشت های قبل</span>
            </span>
        </CircleProgressBar>
        <div v-format-number>1000</div>
      </div>
      <div class="flex flex-col justify-start items-center">
        <CircleProgressBar :value="420" :max="1000" colorUnfilled="#FFEA2E" size="120" rounded>
            <span class="w-[75px] flex flex-col justify-center items-center text-[13px] text-center">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.57341 2.00861C10.0224 0.626645 11.9776 0.626646 12.4266 2.00861L13.4432 5.13729C13.7778 6.16734 14.7377 6.86475 15.8208 6.86475H19.1105C20.5636 6.86475 21.1677 8.72417 19.9922 9.57827L17.3307 11.5119C16.4545 12.1485 16.0879 13.2769 16.4226 14.307L17.4391 17.4357C17.8882 18.8176 16.3064 19.9668 15.1309 19.1127L12.4695 17.1791C11.5932 16.5425 10.4068 16.5425 9.53054 17.1791L6.86913 19.1127C5.69355 19.9668 4.11183 18.8176 4.56086 17.4357L5.57743 14.307C5.91212 13.2769 5.54547 12.1485 4.66925 11.5119L2.00784 9.57827C0.832272 8.72417 1.43644 6.86475 2.88952 6.86475H6.1792C7.26227 6.86475 8.22216 6.16735 8.55685 5.13729L9.57341 2.00861Z" stroke="#141414"/>
              </svg>
             <span class="text-[13px] leading-[15px]">موجودی</span>
            </span>
        </CircleProgressBar>
        <div v-format-number>1000</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import WidthrawInput from "~/components/input/WidthrawInput.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import { CircleProgressBar } from 'circle-progress.vue';
import {useCustomFetch} from "~/composables/useCustomFetch";
import {useAuthStore} from "~/store/Auth";
import LoadingComponent from "~/components/global/Loading.vue";

const auth = useAuthStore()
const user = ref(auth.user)
const loading = ref(false)

const app = useNuxtApp()

const form = ref({
  amount: 1000
})
const doWithdraw = async () => {
  if (loading.value) return
  loading.value = true
  if (!form.value.amount || form.value.amount < 1000) {
    app.$toast.error('حداقل مبلغ برداشت 1000 تومان می باشد', {rtl: true,})
    loading.value = false
    return
  }
  const data = {
    amount: form.value.amount
  }
  const res = await useCustomFetch('/own/payments/requests', {
    method: "POST",
    body: data,
  })
  if (res.error.value != null) {
    if (res.error.value.statusCode == 422) {
      const errors = res.error.value.data.errors
      const keys = Object.keys(res.error.value.data.errors)
      for (let i = 0; i < keys.length; i++) {
        app.$toast.error(errors[keys[i]][0], {rtl: true,})
      }
    } else {
      app.$toast.error('متاسفانه خطایی رخ داده است لطفا بعدا امتحان کنید', {rtl: true,})
    }
    loading.value = false
  }
  if (res.data.value != null) {
    form.value.amount = 1000
    app.$toast.success('درخواست برداشت شما با موفقیت ثبت شد', {rtl: true})
    loading.value = false
  }
}

</script>

<style scoped>

</style>