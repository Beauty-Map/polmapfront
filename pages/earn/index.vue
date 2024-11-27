<template>
  <div class="w-full flex flex-col justify-start items-start min-h-screen">
    <p class="font-bold text-[24px] leading-[36px] text-center mt-16">
      با ارسال لینک و دعوت از دیگران میتونی کسب درآمد کنی
    </p>
    <div class="w-full flex flex-col justify-start items-start mt-8 gap-16">
      <button @click="shareApp(app)" class="bg-[#085EC2] text-white cursor-pointer border-[#133C3E] flex flex-row justify-center items-center rounded-[8px] h-[48px] w-full"
        v-for="(app, i) in appList"
        :key="i"
      >
        لینک {{app.app_name}}
      </button>
      <button @click="openRefModal" class="bg-[#085EC2] text-white cursor-pointer border-[#133C3E] flex flex-row justify-center items-center rounded-[8px] h-[48px] w-full"
      >
        کد اختصاصی شما
      </button>
    </div>
    <Modal :show-close="false" :open="showModal">
      <div class="w-full flex flex-col justify-start items-center max-w-[340px] min-w-[300px]">
        <div class="font-medium text-center text-[#133C3E] text-[22px] leading-[32px]">
          کد اختصاصی شما
        </div>
        <div class="w-full relative border border-[#A9A7A7] rounded-[10px] h-[50px] flex flex-col justify-center items-center mt-[20px]">
          {{auth.user?.referral_code}}
        </div>
        <div class="w-full flex flex-row justify-end items-center mt-[20px] gap-[8px] grow text-[14px] leading-[21px] font-medium text-[#2920D9]">
          <span @click="shareOwnCode">اشتراک گذاری</span>
          <span class="text-gray-500" @click="closeRefModal">بستن</span>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import Header from "~/components/financial/Header.vue";
import Main from "~/components/financial/Main.vue";
import MainMini from "~/components/financial/MainMini.vue";
import LoadingComponent from "~/components/global/Loading.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useAuthStore} from "~/store/Auth";
import AtSignIcon from "~/components/icons/AtSignIcon.vue";

definePageMeta({
  layout: "dashboard",
  middleware: "auth"
})

const auth = useAuthStore()
const showModal = ref<boolean>(false)
const appList = ref<IApplication[]>([])
const getApplications = async () => {
  const res = await useCustomFetch('/applications', {
    method: "GET"
  })
  if (res.data.value) {
    appList.value = res.data.value?.data
  }
}

const shareApp = async (app) => {
  try {
    const text = `${app.app_link}?ref=${auth.user?.referral_code}`
    await navigator.clipboard.writeText(text)
    await navigator.share({
      url: text
    });
  } catch (error) {
  }
}
const shareOwnCode = async () => {
  try {
    const text = auth.user?.referral_code
    await navigator.clipboard.writeText(text)
    await navigator.share({
      text: text
    });
    openRefModal()
  } catch (error) {
  }
}
const openRefModal = () => {
  showModal.value = true
}
const closeRefModal = () => {
  showModal.value = false
}
onMounted(() => {
  nextTick(() => getApplications())
})
</script>

<style scoped>

</style>