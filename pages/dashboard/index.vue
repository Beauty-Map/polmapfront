<template>
  <div
      class="flex flex-col overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999]"
  >
    <div class="flex flex-col justify-start items-center gap-y-[20px]">
      <AppMenuDrawerHeader />
      <AppMenuDrawerLinkBox />
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

const appList = ref<IApplication[]>([])

const getApplications = async () => {
  const res = await useCustomFetch('/applications', {
    method: "GET"
  })
  if (res.data.value) {
    appList.value = res.data.value?.data
  }
}

const openAppMenuDrawer = (app) => {
  appStore.setSelectedApp(app)
  router.push('/app')
}

onMounted(() => {
  nextTick(() => getApplications())
})
</script>

<style scoped>

</style>