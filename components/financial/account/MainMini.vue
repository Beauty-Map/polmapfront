<template>
  <div class="w-full h-full flex flex-col">
    <div class="w-full h-full flex flex-row flex-wrap">
      <div class="w-full h-full mt-[30px] px-0 flex flex-col justify-start items-start">
        <div class="gap-y-[20px] w-full py-[16px] h-full flex flex-col justify-start items-start">
<!--          <TextInput placeholder="نام و نام خانوادگی را وارد کنید" v-model="form.account_full_name"/>-->
          <MainActionButton :disabled="loading" class="mt-[30px]" @click="doAddWallet">
            <div v-if="loading">
              <LoadingComponent />
            </div>
            <div v-else class="text-white text-center text-[20px] leading-[30px]">اتصال کیف پول</div>
          </MainActionButton>
        </div>
      </div>
    </div>
    <button :disabled="loadingUpdate" @click="doSaveProfile" class="mb-[40px]  mx-auto mt-[60px] max-w-[500px] cursor-pointer text-[#141414] flex flex-row justify-center items-center rounded-[20px] bg-[#1EFF81] h-[48px] w-full">
      <span v-if="loadingUpdate">
        <LoadingComponent />
      </span>
      <span v-else>ذخیره اطلاعات</span>
    </button>
  </div>
</template>

<script setup lang="ts">

import TextInput from "~/components/input/TextInput.vue";
import {useCustomFetch} from "~/composables/useCustomFetch";
import {useDrawerStore} from "~/store/Drawer";
import {useAuthStore} from "~/store/Auth";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import LoadingComponent from "~/components/global/Loading.vue";

const auth = useAuthStore()
const user = ref(auth.user)

const app = useNuxtApp()
const store = useDrawerStore()
const loading = ref(false)
const loadingUpdate = ref(false)

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
  wallet_address: user.value?.wallet_address,
})
const doSaveProfile = async () => {
  if (loadingUpdate.value) return
  loadingUpdate.value = true
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
  loadingUpdate.value = false
}

const doAddWallet = () => {
  if (loading.value) return
  loading.value = true

}
</script>

<style scoped>

</style>