<template>
  <div class="flex flex-col items-start justify-start w-full px-1">
    <div v-if="title" class="text-[14px] leading-[16px] text-right mb-1 font-medium"
         :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']"
    >
      {{ title }}
    </div>
    <div class="h-[50px] w-full rounded-[8px] relative border-2"
         :class="[hasError ? 'border-[#F44336]' : 'border-[#2920D9]']"
    >
      <input type="text" class="bg-[#D9D9D9] absolute text-center ltr-dir left-0 right-0 top-0 bottom-0 rounded-[8px] outline-none focus:outline-none pr-[20px] pl-[20px] placeholder:text-[#A9A7A7]"
             @input="validateTextDebounce"
             v-model="value"
             :placeholder="placeholder"
      >
    </div>
    <span class="w-full mt-1 mr-1 text-[#F44336] text-[12px] text-center leading-[12px]">هشدار : در وارد کردن آدرس کیف پول دقت فرمایید.</span>
  </div>
</template>

<script setup lang="ts">
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

const validateTextNumber = ($event: Event) => {
  emits('update:modelValue', $event.target?.value)
}

const validateTextDebounce = useDebounce(validateTextNumber, 500)

watch(() => props.modelValue, () => {
  value.value = props.modelValue
})
</script>

<style scoped>

</style>