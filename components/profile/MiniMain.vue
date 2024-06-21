<template>
  <div class="flex flex-col justify-start items-start">
    <UserAvatar @choose="onUserAvatarChanged" :avatar="user.avatar" class="mt-[35px] mb-[22px]"/>
    <div class="w-full overflow-y-auto flex flex-col gap-y-[27px]">
      <TextInput title="نام و نام خانوادگی" v-model="form.full_name"/>
      <TelInput title="شماره موبایل" v-model="form.phone_number" :disabled="true"/>
      <NationalCodeInput title="کد ملی" v-model="form.national_code"/>
      <BirthDateInput title="تاریخ تولد" v-model="form.birth_date"/>
      <SelectInput :items="genderList" title="جنسیت" v-model="form.gender"/>
      <ChooseCityInput title="شهر محل سکونت" v-model="form.city_id"/>
      <TextInput title="آدرس محل سکونت" v-model="form.address"/>
      <TextInput title="کد پستی" v-model="form.postal_code"/>
      <TextInput title="تحصیلات" v-model="form.education"/>
      <AccountCard />
      <TextInput placeholder="نام و نام خانوادگی دارنده حساب را وارد کنید" v-model="form.account_full_name"/>
      <TextInput placeholder="شماره کارت خود را وارد کنید" v-model="form.card_number"/>
      <ShebaInput placeholder="شماره شبا خود را وارد کنید" v-model="form.sheba"/>
      <TextInput placeholder="شماره حساب خود را وارد کنید" v-model="form.account_number"/>
      <TextInput placeholder="نام بانک خود را وارد کنید" v-model="form.bank_name"/>
      <MainActionButton class="mt-[30px]" @click="doSaveProfile">
        <div class="text-white text-center text-[20px] leading-[30px]">ذخیره اطلاعات</div>
      </MainActionButton>
    </div>
  </div>
</template>

<script setup lang="ts">

import TelInput from "~/components/input/TelInput.vue";
import SelectInput from "~/components/input/SelectInput.vue";
import BirthDateInput from "~/components/input/BirthDateInput.vue";
import NationalCodeInput from "~/components/input/NationalCodeInput.vue";
import UserAvatar from "~/components/profile-drawer/UserAvatar.vue";
import TextInput from "~/components/input/TextInput.vue";
import ChooseCityInput from "~/components/input/ChooseCityInput.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useDrawerStore} from "~/store/Drawer";
import {useCustomFetch} from "~/composables/useCustomFetch";
import ShebaInput from "~/components/input/ShebaInput.vue";
import AccountCard from "~/components/profile/AccountCard.vue";

const store = useDrawerStore()
const user = useSanctumUser()
const auth = useSanctumAuth()
const app = useNuxtApp()

auth.refreshIdentity()
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
const onUserAvatarChanged = (newAvatar: string) => {
  form.value.avatar = newAvatar
}
const doSaveProfile = async () => {
  const data = {
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
  }
  const res = await useCustomFetch('/own/artist', {
    method: "PUT",
    body: data,
  })
  if (res.error.value != null) {

  }
  if (res.data.value != null) {
    await auth.refreshIdentity()
    app.$toast.success('اطلاعات شما با موفقیت ثبت شد', {rtl: true})
    store.closeAllDrawers()
    store.openArtistAgreementDrawer()
  }
}
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
</script>

<style scoped>

</style>