<template>
 <div class="w-full flex flex-col justify-start items-center">
   <div class="w-full mt-[60px] gap-[20px] h-full flex flex-col justify-start items-center border border-[#A9A7A7] rounded-[50px] py-[60px] px-[40px]">
     <h3>تیکت به پشتیبانی</h3>
     <div class="w-full max-w-[80%] flex flex-col justify-start items-center">
       <div class="w-full flex flex-row gap-x-[20px]  justify-between items-center">
         <ChooseTicketSubjectInput class="mb-[40px]" v-model="form.subject"/>
         <TicketTitleInput class="mb-[40px]" v-model="form.title"/>
       </div>
       <TicketDescriptionInput class="mb-[40px]" v-model="form.description"/>
       <TicketChooseFile class="mb-[40px]" @choose="chooseFile"/>
       <div @click="doSendTicket" class="cursor-pointer max-w-[400px]  flex flex-row items-center justify-center px-[10px] py-[10px] bg-[#FF3CA0] text-white text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[62px] w-full">
         <AddTicketIcon />
         <span class="mr-[4px] whitespace-nowrap">ثبت تیکت</span>
       </div>
     </div>
   </div>
   <div class="w-full mt-[40px] flex flex-row justify-center items-center gap-x-[40px]">
     <div @click="goToTicketIndex" class="cursor-pointer max-w-[300px] border border-[#A9A7A7] flex flex-row items-center justify-center px-[10px] py-[10px] bg-white text-[#141414] text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[62px] w-full">
       <TicketListIcon />
       <span class="mr-[4px] whitespace-nowrap">تیکت های من</span>
     </div>
     <div @click="goToCreateTicker" class="cursor-pointer max-w-[300px]  flex flex-row items-center justify-center px-[10px] py-[10px] bg-[#FF3CA0] text-white text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[62px] w-full">
       <AddTicketIcon />
       <span class="mr-[4px] whitespace-nowrap">ثبت تیکت</span>
     </div>
   </div>
 </div>
</template>

<script setup lang="ts">

import ChooseTicketSubjectInput from "~/components/input/ChooseTicketSubjectInput.vue";
import TicketDescriptionInput from "~/components/input/TicketDescriptionInput.vue";
import TicketTitleInput from "~/components/input/TicketTitleInput.vue";
import TicketChooseFile from "~/components/input/TicketChooseFile.vue";
import AddTicketIcon from "~/components/icons/AddTicketIcon.vue";
import TicketListIcon from "~/components/icons/TicketListIcon.vue";
const app = useNuxtApp()
const router = useRouter()
const user = useSanctumUser()
const form = ref<ITicketForm>({
  subject: null,
  title: '',
  description: '',
  new_file: '',
})

const errors = ref({
  subject: '',
  title: '',
  description: '',
})

const goToTicketIndex = () => {
  router.push('/support')
}

const goToCreateTicker = () => {
  router.push('/support/create')
}

const doSendTicket = async () => {
  if (!validateForm()) {
    const res = await useCustomFetch('/own/tickets', {
      method: "POST",
      body: {
        title: form.value.title,
        subject_id: form.value.subject?.id,
        description: form.value.description,
        new_file: form.value.new_file,
      },
    })
    if (res.error.value) {
      app.$toast.error('متاسفانه خطایی رخ داده است. بعدا امتحان کنید', {rtl: true})
    }
    if (res.data.value) {
      app.$toast.success('درخواست شما با موفقیت ثبت شد', {rtl: true})
    }
  }
}

const validateForm = () => {
  let hasError = false
  if (!form.value.subject) {
    app.$toast.error('لطفا موضوع را وارد کنید', {rtl: true})
    hasError = true
  }
  if (!form.value.title) {
    app.$toast.error('لطفا عنوان را وارد کنید', {rtl: true})
    hasError = true
  }
  if (!form.value.title) {
    app.$toast.error('لطفا توضیحات را وارد کنید', {rtl: true})
    hasError = true
  }
  return hasError
}

const chooseFile = (file: string) => {
  form.value.new_file = file
}
</script>

<style scoped>

</style>