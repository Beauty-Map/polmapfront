<template>
  <div class="w-full h-full flex flex-col">
    <div class="w-full h-full flex flex-row flex-wrap">
      <div class="w-full h-full mt-[30px] px-0 flex flex-col justify-start items-start">
        <div class="gap-y-[20px] w-full py-[16px] h-full flex flex-col justify-start items-start">
          <AccountCard
              :account-full-name="form.account_full_name"
              :card-number="form.card_number"
              :sheba="form.sheba"
              :account-number="form.account_number"
              :bank-name="form.bank_name"
          />
          <TextInput placeholder="نام و نام خانوادگی دارنده حساب را وارد کنید" v-model="form.account_full_name"/>
          <TextInput placeholder="شماره کارت خود را وارد کنید" v-model="form.card_number"/>
          <ShebaInput placeholder="شماره شبا خود را وارد کنید" v-model="form.sheba"/>
          <TextInput placeholder="شماره حساب خود را وارد کنید" v-model="form.account_number"/>
          <TextInput placeholder="نام بانک خود را وارد کنید" v-model="form.bank_name"/>
        </div>
      </div>
    </div>
    <button @click="doSaveProfile" class="mb-[40px] mx-auto mt-[27px] max-w-[500px] cursor-pointer text-[#141414] flex flex-row justify-center items-center rounded-[20px] bg-[#1EFF81] h-[48px] w-full">
      ذخیره اطلاعات
    </button>
  </div>
</template>

<script setup lang="ts">

import AccountCard from "~/components/profile/AccountCard.vue";
import ShebaInput from "~/components/input/ShebaInput.vue";
import TextInput from "~/components/input/TextInput.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";
import {useDrawerStore} from "~/store/Drawer";
import {useAuthStore} from "~/store/Auth";

const auth = useAuthStore()
const user = ref(auth.user)

const app = useNuxtApp()
const store = useDrawerStore()

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
const doSaveProfile = async () => {
  const data = {
    full_name: form.value?.full_name,
    national_code: form.value?.national_code,
    birth_date: form.value?.birth_date,
    gender: form.value?.gender,
    address: form.value?.address,
    city_id: form.value?.city_id,
    postal_code: form.value?.postal_code,
    education: form.value?.education,
    avatar: form.value?.avatar,
    account_full_name: form.value?.account_full_name,
    card_number: form.value?.card_number ? form.value?.card_number.toString() : '',
    sheba: form.value?.sheba,
    account_number: form.value?.account_number,
    bank_name: form.value?.bank_name,
  }
  const res = await useCustomFetch('/own', {
    method: "PUT",
    body: data,
  })
  if (res.error.value != null) {

  }
  if (res.data.value != null) {
    app.$toast.success('اطلاعات شما با موفقیت ویرایش شد', {rtl: true})
    store.closeAllDrawers()
  }
}
</script>

<style scoped>

</style>