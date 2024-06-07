<template>
  <nuxt-link
      :to="to"
      class="sidebar-link rounded-[4px] gap-x-[5px] w-full flex flex-row justify-start items-center px-[11px] py-[8px]"
  >
    <div>
      <slot name="icon"></slot>
    </div>
    <div class="">
      {{ title }}
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

</style>