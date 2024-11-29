<template>
  <div class="flex flex-col items-start justify-start w-full px-1">
    <div v-if="title" class="text-[14px] leading-[16px] text-right mb-1 font-medium"
         :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']"
    >
      {{ title }}
    </div>
    <div class="h-[50px] w-full rounded-[8px] relative border-2 "
         :class="[hasError ? 'border-[#F44336]' : 'border-[#2920D9]']"
    >
      <input type="text" class="bg-[#D9D9D9] absolute text-center left-0 right-0 top-0 bottom-0 rounded-[8px] outline-none focus:outline-none pr-[20px] pl-[20px] placeholder:text-[#A9A7A7]"
             @input="validateTextDebounce"
             v-model="value"
             :placeholder="placeholder"
             disabled
      >
      <span class="font-medium text-[22px] leading-[30px] text-black absolute left-[10px] top-[14px]">
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.27667 1.52075C7.81514 0.457969 9.31805 0.416906 9.91376 1.4487L17.1603 14C17.7376 15 17.0159 16.25 15.8612 16.25H2.2554C1.13683 16.25 0.411792 15.0698 0.917342 14.0721L7.27667 1.52075Z" stroke="#141414"/>
        </svg>
      </span>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";
import WidthrawIcon from "~/components/icons/WidthrawIcon.vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})
const value = ref<String>(`موجودی قابل برداشت    ${props.modelValue ?? 0} TON`)
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)

const validateTextNumber = ($event: Event) => {
  value.value = `موجودی قابل برداشت    ${props.modelValue ?? 0} TON`
}

const validateTextDebounce = useDebounce(validateTextNumber, 500)

watch(() => props.modelValue, () => {
  value.value = props.modelValue
})
</script>

<style scoped>

</style>