<template>
  <div class="w-full flex-grow mt-[50px] flex flex-col justify-start items-center gap-y-[50px]">
    <div class="w-full mt-[30px] h-full flex flex-col justify-start items-center border border-[#A9A7A7] rounded-[25px] py-[30px] px-[20px]">
      <div class="w-full flex flex-col justify-center items-center gap-y-4">
        <div class="w-full gap-y-[10px] flex flex-row flex-wrap justify-between items-center ">
          <div class="flex flex-row justify-start gap-x-[4px] items-center max-w-[47%]">
            <span>سال:</span>
            <select v-model="selectedYear" @change="changeYear" class="text-[12px] border border-[#A9A7A7] focus:outline-[#A9A7A7] rounded-[10px]  outline-[#A9A7A7] px-[12px] py-[8px] w-full">
              <option selected disabled :value="null" v-if="!selectedYear">از ابتدا</option>
              <option v-for="(y,i) in years" :key="i" :selected="selectedYear == y" :value="y">{{ y }}</option>
            </select>
          </div>
          <div class="flex flex-row justify-start gap-x-[4px] items-center max-w-[47%]">
            <span>ماه:</span>
            <select v-model="selectedMonth" @change="changeMonth" class="text-[12px] border border-[#A9A7A7] focus:outline-[#A9A7A7] rounded-[10px] outline-[#A9A7A7] px-[12px] py-[8px] w-full">
              <option selected disabled :value="null" v-if="!selectedMonth">از ابتدا</option>
              <option v-for="(m,i) in months" :key="i" :selected="selectedMonth == m" :value="m">{{ m.name }}</option>
            </select>
          </div>
        </div>
        <button @click="resetYearAndMonth" class="text-[12px] border border-[#A9A7A7] focus:outline-[#A9A7A7] rounded-[10px] outline-[#A9A7A7] px-[12px] py-[8px]">از ابتدا تا اکنون</button>
      </div>
    </div>
    <div class="w-full flex overflow-y-auto flex-col justify-start items-start gap-y-[20px] bg-white rounded-[30px] px-[20px] min-h-[400px] h-full">
      <StatisticDetailItem
          v-for="(s, i) in statistics"
          :key="i"
          :item="s"
      />
      <div v-if="loading" class="w-full justify-center items-center flex">
        <LoadingComponent />
      </div>
      <InfiniteLoading :firstload="true" v-if="showInfiniteScroll" class="mx-auto" @infinite="paginateDebounce"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/store/Auth";
import InfiniteLoading from "v3-infinite-loading";
import StatisticDetailItem from "~/components/statistics/StatisticDetailItem.vue";
import LoadingComponent from "~/components/global/Loading.vue";

const app = useNuxtApp()
const route = useRoute()
const id = route.params.id
const auth = useAuthStore()
const user = ref(auth.user)

const years = ref<number[]>([])
const months = ref<IMonth[]>([])
const selectedYear = ref<null|number>(1403)
const selectedMonth = ref<IMonth|null>()
const statistics = ref([])
const showInfiniteScroll = ref<Boolean>(true)
const lastPage = ref<number>(1)
const page = ref<number>(1)
const loading = ref<boolean>(false)

onMounted(() => {
  nextTick(() => {
    for (let i = 1400; i <= 1410; i++) {
      years.value.push(i)
    }
    const monthsList = [
      'همه ماه ها',
      'فروردین',
      'اردیبهشت',
      'خرداد',
      'تیر',
      'مرداد',
      'شهریور',
      'مهر',
      'آبان',
      'آذر',
      'دی',
      'بهمن',
      'اسفند',
    ]
    for (let i = 0; i <= 12; i++) {
      months.value.push({
        id: i,
        name: monthsList[i-1]
      })
    }
    selectedMonth.value = months.value[1]
  })
})

const changeYear = (e) => {
  page.value = 1
  paginate()
  getStatistics()
}

const changeMonth = (e) => {
  page.value = 1
  paginate()
  getStatistics()
}

const resetYearAndMonth = () => {
  selectedYear.value = null
  selectedMonth.value = null
  page.value = 1
  paginate()
}
const paginate = async () => {
  if (page <= lastPage) {
    getStatistics()
    page.value++
  }
}
const paginateDebounce = useDebounce(paginate, 500)
const getStatistics = () => {
  loading.value = true
  let url = `/own/statistics/details?`
  if (selectedYear.value && selectedMonth.value) {
    if (selectedMonth.value.id != 0) {
      url += `&month=${selectedMonth.value.id}`
    }
    url += `&year=${selectedYear.value}`
  }
  if (page.value) {
    url += `&page=${page.value}&limit=10`
  }
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest(url)
      .then(res => {
        let list = (res.data as [])
        if (list.length == 0) {
          showInfiniteScroll.value = false
          return
        }
        statistics.value = [
          ...statistics.value,
          ...list
        ]
        lastPage.value = (res.last_page as number)
        setTimeout(() => {
          showInfiniteScroll.value = true
        }, 300)
      })
      .finally(() => {
        setTimeout(() => {
          loading.value = false
        }, 300)
      })
}
</script>

<style scoped>

</style>