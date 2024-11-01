<template>
  <div class="w-full cursor-pointer flex flex-col justify-start items-start">
    <div class="w-full gap-x-[10px] flex flex-row justify-start items-start">
      <WidthrawIcon />
      <div class="w-full gap-y-[10px] flex flex-col justify-start items-start">
        <div class="w-full flex flex-row justify-between items-center text-[#133C3E] font-medium text-[14px] leading-[22px] md:text-[18px] md:leading-[27px]">
          <span>{{ title }}</span>
          <div class="flex flex-row justify-start items-center gap-[4px]" >
            <span v-format-number>{{ amount }}</span>
            <span>TON</span>
          </div>
        </div>
        <div class="w-full flex flex-row justify-start items-center text-[10px] leading-[18px]">
          <span>{{ getDate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WidthrawIcon from "~/components/icons/WidthrawIcon.vue";
const dayjs = useDayjs()
import 'dayjs/locale/fa'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import jalaliday from 'jalaliday'
dayjs.locale('fa')
dayjs.extend(localizedFormat)
dayjs.extend(jalaliday)

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  amount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: String,
    default: ''
  },
})

const getDate = computed(() => {
  return dayjs(props.createdAt).calendar('jalali').locale('fa').format('dddd D MMMM YYYY HH:mm')
})
</script>

<style scoped>

</style>