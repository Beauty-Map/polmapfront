<template>
  <div class="w-full h-full flex flex-col justify-start items-start">
    <div class="w-full flex flex-col justify-start items-center">
      <div class="w-full text-center flex flex-col justify-start items-center">
        <div class="text-center flex flex-row justify-center items-center gap-x-[4px] text-white font-semibold text-[28px] leading-[42px]">
          <span v-format-number>{{ user.coins }}</span>
          <span>تومان</span>
        </div>
        <div class="font-medium text-[16px] text-white w-full leading-[26px] text-center mt-[10px]">موجودی</div>
      </div>
      <div class="w-full flex flex-row gap-x-[10px] justify-evenly items-center mt-[26px]">
        <nuxt-link to="/financial/withdraw" class="flex flex-col justify-start items-center text-center" >
          <div class="px-[18px] rounded-full py-[18px] bg-[rgba(19,60,62,0.35)]">
            <FinancialWhiteIcon />
          </div>
          <span class="whitespace-nowrap text-white mt-[10px] font-semibold text-[14px] leading-[20px]">برداشت موجودی</span>
        </nuxt-link>
        <nuxt-link to="/financial/account" class="flex flex-col justify-start items-center text-center" >
          <div class="px-[18px] rounded-full py-[18px] bg-[rgba(19,60,62,0.35)]">
            <CardWhiteIcon />
          </div>
          <span class="whitespace-nowrap text-white mt-[10px] font-semibold text-[14px] leading-[20px]">اطلاعات بانکی</span>
        </nuxt-link>
      </div>
    </div>
    <div class="w-full h-full pb-[60px] py-[18px] px-[12px] gap-y-[10px] overflow-y-auto bg-white mt-[10px] rounded-t-[25px] flex-grow">
      <WidthrawItem
          v-for="(w, i) in requests"
          :key="i"
          :title="getTypeName(w.type)"
          :amount="w.amount"
          :created-at="w.created_at"
      />
      <InfiniteLoading :firstload="true" v-if="showInfiniteScroll" class="mx-auto" @infinite="paginateDebounce"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import FinancialWhiteIcon from "~/components/icons/FinancialWhiteIcon.vue";
import CardWhiteIcon from "~/components/icons/CardWhiteIcon.vue";
import WidthrawItem from "~/components/financial/WidthrawItem.vue";
import InfiniteLoading from "v3-infinite-loading";

const user = useSanctumUser()
const showInfiniteScroll = ref<Boolean>(false)
const lastPage = ref<number>(1)
const page = ref<number>(1)
const requests = ref<IPaymentRequest[]>([])

const getTypeName = (type) => {
  return type == 'withdraw' ? 'برداشت موجودی' : 'واریز موجودی'
}

const getOwnPaymentsRequests = async () => {
  let url = `/own/payments/requests?page=${page.value}`
  const res = await useCustomFetch(url, {
    method: "get"
  })
  if (res.data.value) {
    let list = (res.data.value.data as IPaymentRequest[])
    if (list.length == 0) {
      showInfiniteScroll.value = false
      return
    }
    requests.value = [
      ...requests.value,
      ...list
    ]
    lastPage.value = (res.data.value.last_page as number)
    setTimeout(() => {
      showInfiniteScroll.value = true
    }, 300)
  }
}

const paginate = async () => {
  if (page <= lastPage) {
    page.value++
    await getOwnPaymentsRequests()
  }
}
const paginateDebounce = useDebounce(paginate, 500)

const form = ref({
  amount: ''
})
onMounted(() => {
  nextTick(() => getOwnPaymentsRequests())
})
</script>

<style scoped>

</style>