<template>
  <div class="w-full h-full border border-[#A9A7A7] rounded-[50px] mt-[30px] py-[6px] px-[10px] flex flex-col justify-start items-start">
    <div class="w-full flex flex-row justify-start items-start flex-wrap">
      <div class="w-full flex flex-col justify-start items-start gap-y-[45px]">
        <h1 class="text-center w-full text-black font-normal text-[20px] leading-[25px] ">تعداد کاربران دعوت شده</h1>
        <div class="w-full flex flex-col justify-center items-center">
          <CircleProgressBar :value="user.withdraws" :max="user.all_income" colorUnfilled="blue" size="160" rounded>
            <span class="w-[75px] flex flex-col justify-center items-center text-[13px] text-center">
              <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2385 2.05566C14.8159 1.05566 16.2593 1.05566 16.8366 2.05566L29.5297 24.0407C30.1071 25.0407 29.3854 26.2907 28.2307 26.2907H2.84449C1.68979 26.2907 0.968099 25.0407 1.54545 24.0407L14.2385 2.05566Z" stroke="#141414"/>
              </svg>
              <span>برداشت های قبل</span>
            </span>
          </CircleProgressBar>
          <div class="ltr-dir"><span v-format-number>{{user.withdraws}}</span> / <span v-format-number>{{user.all_income}}</span></div>
        </div>
      </div>
      <div class="w-full flex flex-col justify-start items-start gap-y-[45px] mt-[20px]">
        <h1 class="text-center w-full text-black font-normal text-[20px] leading-[25px] ">موجودی کیف پول شما</h1>
        <div class="bg-[#2920D9] rounded-[30px] text-center flex flex-col justify-start items-center py-[10px] px-[20px] min-w-full min-h-[150px]">
          <div class="flex flex-row justify-start items-center gap-x-[4px] text-white font-semibold text-[26px] leading-[35px] ">
            <span v-format-number>{{ user.income }}</span>
            <span>TON</span>
          </div>
          <span class="font-medium text-[14px] leading-[24px] text-white text-center mt-[10px]">موجودی</span>
          <div class="w-full gap-x-[10px] flex flex-row justify-center items-center mt-[10px]">
            <nuxt-link to="/financial" class="text-center flex flex-col justify-start items-center">
              <WidthrawIcon />
              <span class="font-medium text-center text-[12px] leading-[18px]  text-white">برداشت موجودی</span>
            </nuxt-link>
            <nuxt-link to="/financial/account" class="text-center flex flex-col justify-start items-center">
              <AccountDetailIcon />
              <span class="font-medium text-center text-[12px] leading-[18px]  text-white">اطلاعات بانکی</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[76px] flex-wrap mb-[30px] h-full border border-[#A9A7A7] rounded-[50px] py-[16px] px-[40px] flex flex-row justify-start items-start">
      <div class="w-full flex flex-col justify-start items-start">
        <h1 class="text-right text-black font-medium text-[20px] ">آموزش درآمد بیشتر</h1>
        <div class="font-medium text-[14px] leading-[28px] mt-[18px]  text-justify ">
          <p>
            همین الان که این مطلب را می‌نویسم، بیش از 10 شخص را سراغ دارم، که توانسته‌اند در خانه خودشان، به درآمدهای میلیونی، در یک هفته یا حتی یک روز برسند. یک نمونه آن، طراح لباسی است که با کار در منزل، الان ماهانه بیش از 50 سفارش دارد. یا صاحب فروشگاه آنلاینی است، که در خواب، روزانه چندین میلیون به حسابش می‌آید. چند سال پیش، اگر در مورد راه‌های کسب درآمد در خانه می‌شنیدیم، عمدتا کارهایی مثل قالی بافی، آشپزی و ساخت صنایع دستی، آن هم بیشتر توسط خانم‌های خانه دار، در ذهنمان می‌آمد. اما الان وضع بسیار فرق کرده. الان دیگر کسب درآمد در منزل، زن و مرد نمی‌شناسد. بیزنسمن‌هایی را می‌شناسم، که در همان اتاق شخصی منزل خود توانسته‌اند، به درآمد بسیار بالایی برسند. منظورم از درآمد بالا، چیزی بیش از ماهانه 50 یا 60 میلیون TON است. آن هم با کمترین سرمایه...
          </p>
        </div>
      </div>
      <div class="w-full  flex flex-col justify-start items-end text-[#2920D9]">
        <img src="/images/learn_bg.png" alt="" class="w-full">
        <nuxt-link to="/learn" class="block w-full text-[24px]">بیشتر...</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WidthrawIcon from "~/components/icons/WidthrawIcon.vue";
import AccountDetailIcon from "~/components/icons/AccountDetailIcon.vue";
import { CircleProgressBar } from 'circle-progress.vue';
import {useAuthStore} from "~/store/Auth";

const auth = useAuthStore()
const user = ref(auth.user)

</script>

<style scoped>

</style>