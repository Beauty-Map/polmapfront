<template>
  <div class="w-full h-full md:border md:border-[#A9A7A7] md:rounded-[50px] mt-[30px] py-[16px] md:px-[40px] flex flex-col justify-start items-start">
    <div class="w-full flex flex-row flex-wrap sm:gap-x-[10%] md:gap-x-[20px] gap-y-[20px]">
      <CourseItem
        v-for="(c,i) in courses"
        :key="i"
        :title="c.title"
        @click="openCourse(c)"
        class="md:w-[30%] sm:w-[45%] w-full"
        :selected="selectedCourse && selectedCourse.id == c.id"
      />
    </div>
    <div v-if="selectedCourse" class="w-full h-full border border-[#A9A7A7] rounded-[50px] mt-[30px] py-[16px] px-[40px] flex flex-col justify-start items-start">
      <h1 class="text-[#000000] text-[40px] leading-[60px]">{{ selectedCourse.title }}</h1>
      <div v-html="selectedCourse.body"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

import CourseItem from "~/components/learn/CourseItem.vue";

const courses = ref<ICourse[]>([
  {
    id: 1,
    title: 'مقدمه',
    body: `
      <ul>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      </ul>
    `
  },
  {
    id: 2,
    title: 'مقدمه',
    body: `
      <ul>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      </ul>
    `
  },
  {
    id: 3,
    title: 'مقدمه',
    body: `
      <ul>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      </ul>
    `
  },
  {
    id: 4,
    title: 'مقدمه',
    body: `
      <ul>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      </ul>
    `
  },
  {
    id: 5,
    title: 'مقدمه',
    body: `
      <ul>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      <li>تبلیغات و بازاریابی ( مانند: سئو، مدیریت کانال و شبکه‌های اجتماعی)</li>
      </ul>
    `
  }
])
const selectedCourse = ref<ICourse>()

const openCourse = (c: ICourse) => {
  selectedCourse.value = c
}
</script>

<style scoped>

</style>