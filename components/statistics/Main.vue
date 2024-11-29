<template>
  <div class="w-full flex-grow mt-[50px] flex flex-col justify-start items-center gap-y-[50px]">
    <div class="w-full mt-[30px] md:mt-[60px] h-full flex flex-col justify-start items-center border border-[#A9A7A7] rounded-[25px] md:rounded-[25px] py-[30px] md:py-[60px] px-[20px] md:px-[40px]">
      <div class="w-full flex flex-col justify-center items-center gap-y-4">
        <div class="w-full md:max-w-[820px] gap-y-[10px] flex flex-row flex-wrap justify-between items-center ">
          <div class="flex flex-row justify-start gap-x-[4px] items-center max-w-[47%]">
            <span>سال:</span>
            <select v-model="selectedYear" @change="changeYear" class="text-[12px] border border-[#A9A7A7] focus:outline-[#A9A7A7] rounded-[10px] md:rounded-[20px] outline-[#A9A7A7] px-[12px] md:px-[24px] py-[8px] md:py-[18px] md:min-w-[150px] md:max-w-[240px] w-full">
              <option selected disabled :value="null" v-if="!selectedYear">از ابتدا</option>
              <option v-for="(y,i) in years" :key="i" :selected="selectedYear == y" :value="y">{{ y }}</option>
            </select>
          </div>
          <div class="flex flex-row justify-start gap-x-[4px] items-center max-w-[47%]">
            <span>ماه:</span>
            <select v-model="selectedMonth" @change="changeMonth" class="text-[12px] border border-[#A9A7A7] focus:outline-[#A9A7A7] rounded-[10px] md:rounded-[20px] outline-[#A9A7A7] px-[12px] md:px-[24px] py-[8px] md:py-[18px] md:min-w-[150px] md:max-w-[240px] w-full">
              <option selected disabled :value="null" v-if="!selectedMonth">از ابتدا</option>
              <option v-for="(m,i) in months" :key="i" :selected="selectedMonth == m" :value="m">{{ m.name }}</option>
            </select>
          </div>
        </div>
        <button @click="resetYearAndMonth" class="text-[12px] border border-[#A9A7A7] focus:outline-[#A9A7A7] rounded-[10px] md:rounded-[20px] outline-[#A9A7A7] px-[12px] md:px-[24px] py-[8px] md:py-[18px] md:min-w-[150px] md:max-w-[240px]">از ابتدا تا اکنون</button>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-8">
      <div class="text-[14px] py-1 h-[34px]" v-if="id == 'pol_map'">
        درآمد از حق عضویت بازاریابان
      </div>
      <div class="text-[14px] py-1 h-[34px]" v-if="id == 'beauty_map'">
        کل درآمد شما از فروش محصول
      </div>
      <div class="text-center border border-gray-500 rounded-md py-1">
        {{ parseFloat(statistics.bonus.toString()) }}
      </div>
      <div class="text-[14px] py-1 h-[34px]" v-if="id == 'pol_map'">
        تعداد بازاریابان
      </div>
      <div class="text-[14px] py-1 h-[34px]" v-if="id == 'beauty_map'">
        تعداد هنرمندان دعوت شده
      </div>
      <div class="text-center border border-gray-500 rounded-md py-1">
        {{ statistics.all }}
      </div>
      <div class="text-[14px] py-1 h-[34px]" v-if="id == 'pol_map'">
        تعداد بازاریاب سطح یک
      </div>
      <div class="text-[14px] py-1 h-[34px]" v-if="id == 'beauty_map'">
        درآمد شما از فروش سطح یک
      </div>
      <div class="text-center border border-gray-500 rounded-md py-1">
        {{ statistics.first }}
      </div>
      <div class="text-[14px] py-1 h-[34px]" v-if="id == 'pol_map'">
        تعداد بازاریاب سطح دو
      </div>
      <div class="text-[14px] py-1 h-[34px]" v-if="id == 'beauty_map'">
        درآمد شما از فروش سطح دو
      </div>
      <div class="text-center border border-gray-500 rounded-md py-1">
        {{ statistics.second }}
      </div>
      <div class="text-[14px] py-1 h-[34px]" v-if="id == 'pol_map'">
        تعداد بازاریاب سطح سه
      </div>
      <div class="text-[14px] py-1 h-[34px]" v-if="id == 'beauty_map'">
        درآمد شما از فروش سطح سه
      </div>
      <div class="text-center border border-gray-500 rounded-md py-1">
        {{ statistics.third }}
      </div>
      <div class="text-[14px] py-1 h-[34px]" v-if="id == 'pol_map'">
        تعداد بازاریاب سطح چهار
      </div>
      <div class="text-[14px] py-1 h-[34px]" v-if="id == 'beauty_map'">
        درآمد شما از فروش سطح چهار
      </div>
      <div class="text-center border border-gray-500 rounded-md py-1">
        {{ statistics.forth }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/store/Auth";

const app = useNuxtApp()
const route = useRoute()
const id = route.params.id
const auth = useAuthStore()
const user = ref(auth.user)

const years = ref<number[]>([])
const months = ref<IMonth[]>([])
const selectedYear = ref<null|number>(1403)
const selectedMonth = ref<IMonth|null>()
const statistics = ref({
  all: 0,
  bonus: 0,
  first: 0,
  forth: 0,
  second: 0,
  third: 0,
})

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
    for (let i = 1; i <= 12; i++) {
      months.value.push({
        id: i,
        name: monthsList[i-1]
      })
    }
    selectedMonth.value = months.value[1]
  })
})

const changeYear = (e) => {
  getStatistics()
}

const changeMonth = (e) => {
  getStatistics()
}

const resetYearAndMonth = () => {
  selectedYear.value = null
  selectedMonth.value = null
  getStatistics()
}

const getStatistics = () => {
  let url = `/own/statistics?app=${route.params.id}`
  if (selectedYear.value && selectedMonth.value) {
    if (selectedMonth.value.id != 0) {
      url += `&month=${selectedMonth.value.id}`
    }
    url += `&year=${selectedYear.value}`
  }
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest(url)
      .then(res => {
        statistics.value = res
      })
}

onMounted(() => nextTick(() => getStatistics()))
</script>

<style scoped>

</style>