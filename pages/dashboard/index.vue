<template>
  <div class="w-full h-full flex flex-col justify-start items-start">
    <div class="w-full h-full flex flex-col justify-start items-center gap-y-[40px]">
      <h2 class="font-medium text-[20px] leading-[30px] text-center mt-[40px]">محصول خود را انتخاب کنید</h2>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <MainActionButton
            v-for="(app, i) in appList"
            :key="i"
            bg-color="#FF3CA0" @click="openAppMenuDrawer(app)">
          <div class="text-white text-center text-[20px] leading-[30px]">{{ app.title }}</div>
        </MainActionButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import {useAppStore} from "~/store/App";

definePageMeta({
  layout: "dashboard",
  middleware: "auth"
})
const appStore = useAppStore()
const router = useRouter()

const appList = ref([
  {
    id: 1,
    title: 'بیوتی مپ'
  }
])

const openAppMenuDrawer = (app) => {
  appStore.setSelectedApp(app)
  router.push('/app')
}
</script>

<style scoped>

</style>