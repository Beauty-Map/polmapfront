<template>
  <div class="w-full h-full border border-[#A9A7A7] rounded-[50px] mt-[30px] py-[16px] px-[40px] flex flex-col justify-start items-start">
    <div class="w-full flex flex-row justify-start items-start flex-wrap">
      <div class="w-full lg:w-1/2 flex flex-col justify-start items-start gap-y-[45px]">
        <h1 class="text-right text-black font-normal text-[30px] leading-[35px]">تعداد کاربران دعوت شده</h1>
        <div class="w-full flex flex-row justify-center items-center flex-wrap">
          <CircleProgressBar :value="420" :max="1000" colorUnfilled="blue" size="160" rounded>
            <span class="w-[75px] flex flex-col justify-center items-center text-[13px] text-center">
              <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2385 2.05566C14.8159 1.05566 16.2593 1.05566 16.8366 2.05566L29.5297 24.0407C30.1071 25.0407 29.3854 26.2907 28.2307 26.2907H2.84449C1.68979 26.2907 0.968099 25.0407 1.54545 24.0407L14.2385 2.05566Z" stroke="#141414"/>
              </svg>
              <span>برداشت های قبل</span>
            </span>
          </CircleProgressBar>
        </div>
      </div>
      <div class="w-full lg:w-1/2 flex flex-col justify-start items-start gap-y-[45px]">
        <h1 class="text-right text-black font-normal text-[30px] leading-[35px]">موجودی کیف پول شما</h1>
        <div class="bg-[#2920D9] rounded-[30px] text-center flex flex-col justify-start items-center py-[20px] px-[100px] min-w-[300px] min-h-[150px]">
          <div class="flex flex-row justify-start items-center gap-x-[4px] text-white font-semibold text-[36px] leading-[55px]">
            <span v-format-number>{{ user.coins }}</span>
            <span>تومان</span>
          </div>
          <span class="font-medium text-[22px] text-white leading-[34px] text-center mt-[10px]">موجودی</span>
          <div class="w-full gap-x-[30px] flex flex-row justify-start items-center mt-[10px]">
            <nuxt-link to="/financial" class="text-center flex flex-col justify-start items-center">
              <WidthrawIcon />
              <span class="font-medium text-center text-[18px] text-white leading-[28px]">برداشت موجودی</span>
            </nuxt-link>
            <nuxt-link to="/wallet" class="text-center flex flex-col justify-start items-center">
              <AccountDetailIcon />
              <span class="font-medium text-center text-[18px] text-white leading-[28px]">اطلاعات بانکی</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[76px] flex-wrap mb-[30px] h-full border border-[#A9A7A7] rounded-[50px] py-[16px] px-[40px] flex flex-row justify-start items-start">
      <div class="w-2/3 flex flex-col justify-start items-start">
        <h1 class="text-right text-black font-normal text-[30px] leading-[35px]">آموزش درآمد بیشتر</h1>
        <div class="font-medium text-[16px] leading-[25px] text-right mt-[38px]">
          <p>
            همین الان که این مطلب را می‌نویسم، بیش از 10 شخص را سراغ دارم، که توانسته‌اند در خانه خودشان، به درآمدهای میلیونی، در یک هفته یا حتی یک روز برسند. یک نمونه آن، طراح لباسی است که با کار در منزل، الان ماهانه بیش از 50 سفارش دارد. یا صاحب فروشگاه آنلاینی است، که در خواب، روزانه چندین میلیون به حسابش می‌آید. چند سال پیش، اگر در مورد راه‌های کسب درآمد در خانه می‌شنیدیم، عمدتا کارهایی مثل قالی بافی، آشپزی و ساخت صنایع دستی، آن هم بیشتر توسط خانم‌های خانه دار، در ذهنمان می‌آمد. اما الان وضع بسیار فرق کرده. الان دیگر کسب درآمد در منزل، زن و مرد نمی‌شناسد. بیزنسمن‌هایی را می‌شناسم، که در همان اتاق شخصی منزل خود توانسته‌اند، به درآمد بسیار بالایی برسند. منظورم از درآمد بالا، چیزی بیش از ماهانه 50 یا 60 میلیون تومان است. آن هم با کمترین سرمایه...
          </p>
        </div>
      </div>
      <div class="w-1/3 flex flex-col justify-start items-end text-[#2920D9]">
        <nuxt-link to="/learn">بیشنر...</nuxt-link>
        <img src="/images/learn_bg.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WidthrawIcon from "~/components/icons/WidthrawIcon.vue";
import AccountDetailIcon from "~/components/icons/AccountDetailIcon.vue";
import { CircleProgressBar } from 'circle-progress.vue';

const user = useSanctumUser()
</script>

<style scoped>

</style>