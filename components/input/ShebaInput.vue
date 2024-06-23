<template>
  <div class="flex flex-col items-start justify-start w-full px-1">
    <div v-if="title" class="text-[14px] leading-[16px] text-right mb-1 font-medium"
         :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']"
    >
      {{ title }}
    </div>
    <div class="h-[40px] w-full rounded-[8px] relative border "
         :class="[hasError ? 'border-[#F44336]' : 'border-[#133C3E]']"
    >
      <input type="text" class="absolute text-right ltr-dir left-[1px] right-[1px] top-[1px] bottom-[1px]  rounded-[8px] outline-none focus:outline-none pr-[20px] pl-[20px] placeholder:text-[#A9A7A7]"
             @input="validateTextDebounce"
             v-model="value"
             :placeholder="placeholder"
      >
      <span class="font-medium text-[16px] leading-[24px] md:text-[22px] md:leading-[30px] text-black absolute left-[10px] top-[8px] md:top-[6px]">IR</span>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";

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
  let v = $event.target?.value
  if (v) {
    value.value = v.replace(/[^0-9]/g, '')
  }
  emits('update:modelValue', value.value)
}

const validateTextDebounce = useDebounce(validateTextNumber, 500)

</script>

<style scoped>

</style>