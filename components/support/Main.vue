<template>
  <div class="w-full flex flex-col justify-start items-center">
    <div class="w-full mt-[60px] h-full flex flex-col justify-start items-center border border-[#A9A7A7] rounded-[50px] py-[60px] px-[40px]">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 " v-if="tickets.length > 0">
        <TicketItem
           v-for="(t,i) in tickets"
           :key="i"
           :ticket="t"
        />
      </div>
      <div class="w-full flex justify-center items-center" v-else>
        <span>موردی یافت نشد!</span>
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

import TicketItem from "~/components/support/TicketItem.vue";
import AddTicketIcon from "~/components/icons/AddTicketIcon.vue";
import TicketListIcon from "~/components/icons/TicketListIcon.vue";

const app = useNuxtApp()
const router = useRouter()
const user = useSanctumUser()

const tickets = ref<ITicket[]>([])
const page = ref(1)

const goToTicketIndex = () => {
  router.push('/support')
}

const goToCreateTicker = () => {
  router.push('/support/create')
}

const getTickets = async () => {
  const res = await useCustomFetch(`/own/tickets?page=${page.value}&limit=10`, {
    method: "GET",
  })
  if (res.data.value) {
    const list = res.data.value?.data as []
    tickets.value.push(...list)
  }
}
onMounted(() => {
  nextTick(() => {
    getTickets()
  })
})
</script>

<style scoped>

</style>