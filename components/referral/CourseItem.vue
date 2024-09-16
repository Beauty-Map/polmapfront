<template>
  <div class="border border-[#000000] w-full max-w-[320px] cursor-pointer flex flex-row justify-between items-center py-[15px] px-[25px] rounded-[20px]">
    <span>{{ title }}</span>
    <ArrowDownIcon v-if="selected"/>
    <ArrowRightIcon v-else/>
  </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from "~/components/icons/ArrowRightIcon.vue";
import ArrowDownIcon from "~/components/icons/ArrowDownIcon.vue";

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  selected: {
    type: Boolean,
    default: false
  },
})
</script>

<style scoped>

</style>