<template>
  <div class="w-full h-full flex flex-col">
    <div class="w-full h-full flex flex-row flex-wrap">
      <div class="w-full lg:w-1/2 h-full mt-[30px] px-0 lg:px-[25px] flex flex-col justify-start items-start">
        <div class="w-full gap-[20px] py-[16px] px-[40px] h-full border border-[#A9A7A7] rounded-[50px] flex flex-col justify-start items-start">
          <TextInput title="نام و نام خانوادگی" v-model="form.full_name"/>
          <TelInput :disabled="true" title="شماره موبایل" v-model="form.phone_number"/>
          <TextInput title="کد ملی" v-model="form.national_code"/>
          <BirthDateInput title="تاریخ تولد" v-model="form.birth_date"/>
          <SelectInput :items="genderList" title="جنسیت" v-model="form.gender"/>
          <ChooseCityInput title="شهر محل سکونت" v-model="form.city_id"/>
          <TextInput title="آدرس محل سکونت" v-model="form.address"/>
          <TextInput title="کد پستی" v-model="form.postal_code"/>
          <TextInput title="تحصیلات" v-model="form.education"/>
        </div>
      </div>
      <div class="w-full lg:w-1/2 h-full mt-[30px] px-0 lg:px-[25px] flex flex-col justify-start items-start">
        <div class="gap-y-[20px] w-full py-[16px] px-[40px] h-full border border-[#A9A7A7] rounded-[50px] flex flex-col justify-start items-start">
          <UserAvatar @choose="onUserAvatarChanged" :avatar="user.avatar" class="mt-[35px] mb-[22px]"/>
          <AccountCard />
          <TextInput placeholder="نام و نام خانوادگی دارنده حساب را وارد کنید" v-model="form.account_full_name"/>
          <TextInput placeholder="شماره کارت خود را وارد کنید" v-model="form.card_number"/>
          <ShebaInput placeholder="شماره شبا خود را وارد کنید" v-model="form.sheba"/>
          <TextInput placeholder="شماره حساب خود را وارد کنید" v-model="form.account_number"/>
          <TextInput placeholder="نام بانک خود را وارد کنید" v-model="form.bank_name"/>
        </div>
      </div>
    </div>
    <button @click="doSave" class="mb-[80px] md:mb-0 mx-auto mt-[67px] max-w-[500px] cursor-pointer text-[#141414] flex flex-row justify-center items-center rounded-[20px] bg-[#1EFF81] h-[48px] w-full">
      ذخیره اطلاعات
    </button>
  </div>
</template>

<script setup lang="ts">

import TextInput from "~/components/input/TextInput.vue";
import TelInput from "~/components/input/TelInput.vue";
import BirthDateInput from "~/components/input/BirthDateInput.vue";
import ChooseCityInput from "~/components/input/ChooseCityInput.vue";
import UserAvatar from "~/components/profile/UserAvatar.vue";
import AccountCard from "~/components/profile/AccountCard.vue";
import ShebaInput from "~/components/input/ShebaInput.vue";
import SelectInput from "~/components/input/SelectInput.vue";

const user = useSanctumUser()

const form = ref({
  full_name: user.value?.full_name,
  phone_number: user.value?.phone_number,
  national_code: user.value?.national_code,
  birth_date: user.value?.birth_date,
  gender: user.value?.gender,
  address: user.value?.address,
  city_id: user.value?.city_id,
  postal_code: user.value?.postal_code,
  education: user.value?.education,
  avatar: user.value?.avatar,
  account_full_name: user.value?.account_full_name,
  card_number: user.value?.card_number,
  sheba: user.value?.sheba,
  account_number: user.value?.account_number,
  bank_name: user.value?.bank_name,
})

const genderList = ref([
  {
    id: 'male',
    title: 'مرد'
  },
  {
    id: 'female',
    title: 'زن'
  }
])

const onUserAvatarChanged = (newAvatar: string) => {
  form.value.avatar = newAvatar
}

const doSave = () => {
  console.log('doSave')
}
</script>

<style scoped>

</style>