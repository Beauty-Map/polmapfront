<template>
  <div class="border border-[#000000] w-full cursor-pointer flex flex-row justify-between items-center py-[15px] px-[15px] rounded-[12px]">
    <div class="flex flex-row justify-start items-center">
      <CourseItemIcon />
      <span>{{ title }}</span>
    </div>
    <ArrowDownIcon v-if="selected"/>
    <ArrowRightIcon v-else/>
  </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from "~/components/icons/ArrowRightIcon.vue";
import ArrowDownIcon from "~/components/icons/ArrowDownIcon.vue";
import CourseItemIcon from "~/components/icons/CourseItemIcon.vue";

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