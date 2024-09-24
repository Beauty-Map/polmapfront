<template>
  <div class="cursor-pointer flex flex-row justify-center items-center rounded-[20px] h-[48px] w-full"
    :class="[disabled ? ' bg-[rgb(177,177,177)]' : `bg-[${bgColor}]`]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  bgColor: {
    type: String,
    default: '#133C3E'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>

</style>