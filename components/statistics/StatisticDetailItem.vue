<template>
  <div v-if="item" class="w-full gap-1 py-2 px-2 flex flex-row border border-[#1E0F3E63] rounded-lg shadow-[0px_1px_3px_1px__#1E0F3E63] text-[12px]">
    <div class="flex-grow flex flex-col justify-start items-start gap-2" v-if="item.app == 'polmap'">
      <div>در آمد از حق عضویت بازاریاب</div>
      <div>نام بازاریاب: {{item.referrer.full_name}}</div>
      <div class="font-bold">{{getDate}}</div>
    </div>
    <div class="flex-grow flex flex-col justify-start items-start gap-2" v-if="item.app == 'beauty'">
      <div>درآمد از فروش محصولات بیوتی مپ</div>
      <div>نام هنرمند: {{item.referrer.full_name}}</div>
      <div class="font-bold">{{getDate}}</div>
    </div>
    <div class="ltr-dir font-bold flex flex-1 flex-col justify-center items-center gap-2 border border-[#1E0F3E63] rounded-lg shadow-[0px_1px_2px_0px__#1E0F3E63]">
      {{parseFloat(item.amount)}} TON
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
  }
})

const dayjs = useDayjs()
import 'dayjs/locale/fa'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import jalaliday from 'jalaliday'
dayjs.locale('fa')
dayjs.extend(localizedFormat)
dayjs.extend(jalaliday)


const getDate = computed(() => {
  return dayjs(props.item.created_at).calendar('jalali').locale('fa').format('YYYY/MM/DD')
})
</script>

<style scoped>

</style>