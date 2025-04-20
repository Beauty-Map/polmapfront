<template>
  <div class="w-full h-full mt-[30px] py-[16px] flex flex-col justify-start items-start">
    <div class="w-full flex flex-row flex-wrap sm:gap-x-[10%] gap-y-[20px]">
      <div class="w-full h-[200px] flex flex-row justify-center items-center" v-if="loading">
        <LoadingComponent />
      </div>
      <CourseItem
        v-else
        v-for="(c,i) in courses"
        :key="i"
        :title="c.title"
        @click="openCourse(c)"
        class=" sm:w-[45%] w-full"
        :selected="selectedCourse && selectedCourse.id == c.id"
      />
      <LazyPagination
          :current-page="page"
          :items-per-page="limit"
          :total-items="total"
          @page-change="paginate"
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
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import LoadingComponent from "~/components/global/Loading.vue";

const courses = ref<ICourse[]>([])
const selectedCourse = ref<ICourse>()
const page = ref(1)
const total = ref(1)
const limit = ref(9)
const loading = ref(false)

const paginate = (p = 1) => {
  page.value = p
  getCourses()
}
const openCourse = (c: ICourse) => {
  selectedCourse.value = c
}
const getCourses = () => {
  loading.value = true
  const {$getRequest: getRequest}=useNuxtApp()
  getRequest(`/courses?page=${page.value}&limit=9`)
      .then(res => {
        courses.value = res.data as ICourse[]
        total.value = res.meta.total
      })
      .finally(() => {
        loading.value = false
      })
}
onMounted(() => {
  getCourses()
})
</script>

<style scoped>

</style>