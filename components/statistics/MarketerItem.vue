<template>
  <div class="w-full flex-row justify-start items-center border border-[#e1e1e1] rounded-[10px] flex px-[10px] py-[10px]">
    <img :src="avatar" alt="" class="w-[45px] h-[45px]">
    <div class="text-black text-right mr-[5px] font-medium leading-[22px] text-[16px]">{{ getName }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  avatar: {
    type: String,
    default: '/images/avatar.png'
  },
  fullName: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  earnAmount: {
    type: String,
    default: ''
  },
})

const getName = computed(() => {
  if (props.fullName)
    return props.fullName
  if (props.email)
    return props.email
})
</script>

<style scoped>

</style>