<template>
<div
    class="flex flex-col fixed  top-0 bottom-0 pb-[45px] px-[17px] overflow-y-auto w-full duration-700 ease-in-out bg-white z-[99999999999999]"
    :class="[store.isOpenProfile ? 'left-0' : 'left-[-100%]']"
>
  <div class="flex flex-row items-center justify-between pt-[23px] pl-[3px]">
    <div></div>
    <div class="font-semibold text-[16px] text-[#141414] leading-[24px]">پروفایل</div>
    <BackIcon @click="goBack" />
  </div>
  <div class="flex flex-col justify-start items-start">
    <UserAvatar @choose="onUserAvatarChanged" :avatar="user.avatar" class="mt-[35px] mb-[22px]"/>
    <div class="w-full overflow-y-auto flex flex-col gap-y-[27px]">
      <TextInput title="نام و نام خانوادگی" v-model="form.full_name"/>
      <EmailInput title="ایمیل" v-model="form.email" :disabled="true"/>
      <TelInput title="شماره موبایل" v-model="form.phone_number"/>
<!--      <NationalCodeInput title="کد ملی" v-model="form.national_code"/>-->
      <BirthDateInput title="تاریخ تولد" v-model="form.birth_date"/>
      <SelectInput :items="genderList" title="جنسیت" v-model="form.gender"/>
      <ChooseCityInput title="شهر محل سکونت" v-model="form.city_id"/>
      <TextInput title="آدرس محل سکونت" v-model="form.address"/>
      <TextInput title="کد پستی" v-model="form.postal_code"/>
      <TextInput title="تحصیلات" v-model="form.education"/>
      <MainActionButton class="mt-[80px]" @click="doSaveProfile">
        <div class="text-white text-center text-[20px] leading-[30px]">ذخیره اطلاعات</div>
      </MainActionButton>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

import BackIcon from "~/components/icons/BackIcon.vue";
import {useDrawerStore} from "~/store/Drawer";
import UserAvatar from "~/components/profile-drawer/UserAvatar.vue";
import ChooseCityInput from "~/components/input/ChooseCityInput.vue";
import TextInput from "~/components/input/TextInput.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import BirthDateInput from "~/components/input/BirthDateInput.vue";
import TelInput from "~/components/input/TelInput.vue";
import NationalCodeInput from "~/components/input/NationalCodeInput.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";
import SelectInput from "~/components/input/SelectInput.vue";
import EmailInput from "~/components/input/EmailInput.vue";
import {useAuthStore} from "~/store/Auth";

const store = useDrawerStore()
const auth = useAuthStore()
const user = ref(auth.user)
const app = useNuxtApp()

const form = ref({
  email: user.value?.email,
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
const goBack = () => {
  store.closeAllDrawers()
}
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
    app.$toast.success('اطلاعات شما با موفقیت ثبت شد', {rtl: true})
    store.closeAllDrawers()
    // store.openA()
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