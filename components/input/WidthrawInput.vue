<template>
  <div class="flex flex-col items-start justify-start w-full px-1">
    <div v-if="title" class="text-[14px] leading-[16px] text-right mb-1 font-medium"
         :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']"
    >
      {{ title }}
    </div>
    <div class="h-[50px] w-full rounded-[8px] relative border "
         :class="[hasError ? 'border-[#F44336]' : 'border-[#133C3E]']"
    >
      <input type="text" class="absolute text-right ltr-dir left-[1px] right-[1px] top-[1px] bottom-[1px]  rounded-[8px] outline-none focus:outline-none pr-[20px] pl-[20px] placeholder:text-[#A9A7A7]"
             @input="validateTextDebounce"
             v-model="value"
             :placeholder="placeholder"
      >
      <span class="font-medium text-[22px] leading-[30px] text-black absolute left-[10px] top-[6px]">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.4163 18.958C19.2011 18.958 18.1681 18.5327 17.3174 17.682C16.4667 16.8313 16.0413 15.7983 16.0413 14.583C16.0413 13.3677 16.4667 12.3347 17.3174 11.484C18.1681 10.6334 19.2011 10.208 20.4163 10.208C21.6316 10.208 22.6646 10.6334 23.5153 11.484C24.366 12.3347 24.7913 13.3677 24.7913 14.583C24.7913 15.7983 24.366 16.8313 23.5153 17.682C22.6646 18.5327 21.6316 18.958 20.4163 18.958ZM10.208 23.333C9.40592 23.333 8.71929 23.0474 8.14811 22.4762C7.57693 21.9051 7.29134 21.2184 7.29134 20.4163V8.74967C7.29134 7.94759 7.57693 7.26096 8.14811 6.68978C8.71929 6.1186 9.40592 5.83301 10.208 5.83301H30.6247C31.4268 5.83301 32.1134 6.1186 32.6846 6.68978C33.2558 7.26096 33.5413 7.94759 33.5413 8.74967V20.4163C33.5413 21.2184 33.2558 21.9051 32.6846 22.4762C32.1134 23.0474 31.4268 23.333 30.6247 23.333H10.208ZM13.1247 20.4163H27.708C27.708 19.6143 27.9936 18.9276 28.5648 18.3564C29.136 17.7853 29.8226 17.4997 30.6247 17.4997V11.6663C29.8226 11.6663 29.136 11.3808 28.5648 10.8096C27.9936 10.2384 27.708 9.55176 27.708 8.74967H13.1247C13.1247 9.55176 12.8391 10.2384 12.2679 10.8096C11.6967 11.3808 11.0101 11.6663 10.208 11.6663V17.4997C11.0101 17.4997 11.6967 17.7853 12.2679 18.3564C12.8391 18.9276 13.1247 19.6143 13.1247 20.4163ZM29.1663 29.1663H4.37467C3.57259 29.1663 2.88596 28.8808 2.31478 28.3096C1.7436 27.7384 1.45801 27.0518 1.45801 26.2497V10.208H4.37467V26.2497H29.1663V29.1663Z" fill="#828282"/>
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
const value = ref<String>(props.modelValue)
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)

const validateTextNumber = ($event: Event) => {
  emits('update:modelValue', $event.target?.value)
}

const validateTextDebounce = useDebounce(validateTextNumber, 500)

</script>

<style scoped>

</style>