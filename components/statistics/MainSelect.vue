<template>
  <div class="w-full flex flex-col justify-start items-center gap-y-[50]">
    <div class="w-full flex flex-col justify-start items-start mt-8 gap-16">
      <button @click="shareApp(app)" class="bg-[#085EC2] text-white cursor-pointer border-[#133C3E] flex flex-row justify-center items-center rounded-[8px] h-[48px] w-full"
              v-for="(app, i) in appList"
              :key="i"
      >
        {{app.app_name}}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/store/Auth";

const app = useNuxtApp()
const auth = useAuthStore()
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

const shareApp = async (app: IApplication) => {
  await router.push(`/statistics/${app.app_id}`)
}

onMounted(() => nextTick(async () => await getApplications()))
</script>

<style scoped>

</style>