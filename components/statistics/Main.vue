<template>
  <div class="w-full flex flex-col justify-start items-center gap-y-[50]">
    <div class="w-full mt-[30px] md:mt-[60px] h-full flex flex-col justify-start items-center border border-[#A9A7A7] rounded-[25px] md:rounded-[50px] py-[30px] md:py-[60px] px-[20px] md:px-[40px]">
      <div class="w-full md:max-w-[820px] gap-y-[10px] flex flex-row flex-wrap justify-between items-center border border-[#A9A7A7] rounded-[15px] md:rounded-[30px] py-[15px] px-[15px] md:py-[20px] md:px-[30px]">
        <div class="flex flex-row justify-start gap-x-[4px] items-center w-full md:max-w-[45%]">
          <span>سال:</span>
          <select v-model="selectedYear" @change="changeYear" class="border border-[#A9A7A7] focus:outline-[#A9A7A7] rounded-[10px] md:rounded-[20px] outline-[#A9A7A7] px-[12px] md:px-[24px] py-[8px] md:py-[18px] md:min-w-[150px] md:max-w-[240px] w-full">
            <option v-for="(y,i) in years" :key="i" :selected="selectedYear == y" :value="y">{{ y }}</option>
          </select>
        </div>
        <div class="flex flex-row justify-start gap-x-[4px] items-center w-full md:max-w-[45%]">
          <span>ماه:</span>
          <select v-model="selectedMonth" @change="changeMonth" class="border border-[#A9A7A7] focus:outline-[#A9A7A7] rounded-[10px] md:rounded-[20px] outline-[#A9A7A7] px-[12px] md:px-[24px] py-[8px] md:py-[18px] md:min-w-[150px] md:max-w-[240px] w-full">
            <option v-for="(m,i) in months" :key="i" :selected="selectedMonth == m" :value="m">{{ m.name }}</option>
          </select>
        </div>
      </div>
      <div class="w-full max-w-[820px] flex flex-col justify-center items-center mt-[30px]">
        <div class="w-full md:font-normal font-semibold text-center md:text-right text-[16px] leading-[24px] md:text-[32px] md:leading-[37px] text-black">
          تعداد کاربران دعوت شده:
        </div>
        <div class="w-full flex flex-row gap-[10px] flex-wrap justify-center items-center mt-[30px]">
<!--          <div class="flex flex-col justify-start gap-y-[10px] items-center">-->
<!--            <CircleProgressBar :value="420" :max="2000" colorUnfilled="#09F9BF" size="160" rounded>-->
<!--            <span class="w-[75px] flex flex-col justify-center items-center text-[13px] text-center">-->
<!--              <svg width="47" height="58" viewBox="0 0 47 58" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M22.2534 55.9219C22.8308 56.9219 24.2741 56.9219 24.8515 55.9219L45.6232 19.9443C46.2005 18.9443 45.4788 17.6943 44.3241 17.6943H2.78077C1.62607 17.6943 0.904384 18.9443 1.48173 19.9443L22.2534 55.9219Z" stroke="#141414"/>-->
<!--                <circle cx="23.5526" cy="8.79871" r="7.33582" stroke="#141414"/>-->
<!--              </svg>-->
<!--              <span>2000</span>-->
<!--            </span>-->
<!--            </CircleProgressBar>-->
<!--            <span class="text-[#141414] font-medium text-[16px] leading-[24px] md:text-[32px] md:leading-[37px] mt-[10px]">کاربران عادی</span>-->
<!--          </div>-->
<!--          <div class="flex flex-col justify-start gap-y-[10px] items-center">-->
<!--            <CircleProgressBar :value="300" :max="500" colorUnfilled="#03A9F1" size="160" rounded>-->
<!--              <span class="w-[75px] flex flex-col justify-center items-center text-[13px] text-center">-->
<!--                <svg width="46" height="41" viewBox="0 0 46 41" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                  <path d="M21.5073 1.45118C22.0847 0.451174 23.528 0.451174 24.1054 1.45117L44.8771 37.4288C45.4544 38.4288 44.7327 39.6788 43.578 39.6788H2.03468C0.879977 39.6788 0.15829 38.4288 0.735641 37.4288L21.5073 1.45118Z" stroke="#141414"/>-->
<!--                </svg>-->
<!--                <span>300</span>-->
<!--              </span>-->
<!--            </CircleProgressBar>-->
<!--            <span class="text-[#141414] font-medium text-[16px] leading-[24px] md:text-[32px] md:leading-[37px]">هنرمند</span>-->
<!--          </div>-->
          <div class="flex flex-col justify-start gap-y-[10px] items-center">
            <CircleProgressBar :value="50" :max="100" colorUnfilled="#E42C64" size="160" rounded>
            <span class="w-[75px] flex flex-col justify-center items-center text-[13px] text-center">
              <svg width="57" height="54" viewBox="0 0 57 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.2746 1.73322C27.7237 0.351254 29.6788 0.351253 30.1278 1.73322L35.3163 17.7018C35.651 18.7319 36.6109 19.4293 37.694 19.4293L54.4843 19.4293C55.9374 19.4293 56.5416 21.2887 55.366 22.1428L41.7823 32.0119C40.9061 32.6485 40.5395 33.7769 40.8741 34.807L46.0626 50.7756C46.5117 52.1576 44.93 53.3067 43.7544 52.4526L30.1707 42.5835C29.2945 41.9469 28.108 41.9469 27.2318 42.5835L13.6481 52.4526C12.4725 53.3067 10.8908 52.1576 11.3398 50.7756L16.5283 34.807C16.863 33.7769 16.4964 32.6485 15.6201 32.0119L2.03646 22.1428C0.860884 21.2887 1.46505 19.4293 2.91813 19.4293L19.7085 19.4293C20.7916 19.4293 21.7514 18.7319 22.0861 17.7018L27.2746 1.73322Z" stroke="#141414"/>
              </svg>
                <span>{{ count }}</span>
              </span>
            </CircleProgressBar>
            <span class="text-[#141414] font-medium text-[16px] leading-[24px] md:text-[32px] md:leading-[37px]">کاربر</span>
          </div>
        </div>
      </div>
      <div class="w-full max-w-[820px] flex flex-col justify-center items-center mt-[50px]">
        <div class="w-full text-center md:text-right font-semibold md:font-normal text-[16px] leading-[24px] md:text-[32px] md:leading-[37px] text-black">
          وضعیت کلی درآمد:
        </div>
        <div class="text-center">
          {{user.income}}
        </div>
      </div>
    </div>
    <div class="w-full mb-[60px] md:mb-0 mt-[30px] md:mt-[60px] h-full flex flex-col justify-start items-center border border-[#A9A7A7] rounded-[20px] md:rounded-[50px] py-[20px] px-[20px] md:py-[40px] md:px-[40px]">
      <div class="w-full flex flex-col justify-center items-center">
        <div class="w-full text-center md:text-right font-semibold md:font-normal text-[16px] leading-[24px] md:text-[32px] md:leading-[37px] text-black">
          زیر مجموعه های برتر شما:
        </div>
        <div class="w-full max-h-[450px] overflow-y-auto flex flex-col justify-start items-start mt-[20px] md:mt-[40px] gap-y-[10px] gap-x-[5px] md:gap-y-[20px] md:gap-x-[10px]">
          <MarketerItem
            @click="showUserActivities(m.id)"
            v-for="(m,i) in marketers"
            :key="i"
            :id="m.id"
            :avatar="m.avatar"
            :email="m.email"
            :earn-amount="m.own_earn_amount"
            :full-name="m.full_name"
          />
          <div v-if="marketers.length == 0">
            کاربری یافت نشد!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CircleProgressBar } from 'circle-progress.vue';
import MarketerItem from "~/components/statistics/MarketerItem.vue";
import {useAuthStore} from "~/store/Auth";

const app = useNuxtApp()
const auth = useAuthStore()
const user = ref(auth.user)

const years = ref<number[]>([])
const months = ref<IMonth[]>([])
const selectedYear = ref(1403)
const selectedMonth = ref<IMonth>()
const marketers = ref([])
const count = ref(0)

onMounted(() => {
  nextTick(() => {
    for (let i = 1400; i <= 1410; i++) {
      years.value.push(i)
    }
    const monthsList = [
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
    selectedMonth.value = months.value[0]
  })
})

const showUserActivities = (id) => {

}

const getReferrals = () => {
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest('/own/referrals?page=1&limit=10')
      .then(res => {
        marketers.value = res.data
      })
}

const getCount = () => {
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest('/own/refers')
      .then(res => {
        count.value = res
      })
}

const changeYear = (e) => {
}

const changeMonth = (e) => {
}

onMounted(() => {
  nextTick(() => getReferrals())
  nextTick(() => getCount())
})
</script>

<style scoped>

</style>