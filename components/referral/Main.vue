<template>
  <div class="w-full h-full flex flex-col justify-start items-start mb-[60px]">
    <div class="w-full h-full flex flex-row flex-wrap">
      <div class="w-full h-full mt-[30px] px-0 flex flex-col justify-start items-start">
        <div class="w-full gap-[20px] py-[16px] px-[40px] h-full border border-[#A9A7A7] rounded-[20px] flex flex-col justify-start items-start">
          <h3 class="font-medium text-[20px]">لینک مخصوص شما</h3>
          <MainActionButton
              v-for="(app, i) in appList"
              :key="i"
              bg-color="#FF3CA0"
              @click="copyLink(app)">
            <div class="text-white text-center text-[20px] leading-[30px]">{{ app.app_name }}</div>
          </MainActionButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/store/Auth";
import MainActionButton from "~/components/button/form/MainActionButton.vue";

const auth = useAuthStore()
const user = ref(auth.user)

const appList = ref<IApplication[]>([])

const getApplications = async () => {
  const res = await useCustomFetch('/applications', {
    method: "GET"
  })
  if (res.data.value) {
    appList.value = res.data.value?.data
  }
}

const copyLink = async (app) => {
  try {
    const text = `${app.app_link}?ref=${user?.value?.referral_code}`
    await navigator.clipboard.writeText(text)
    await navigator.share({
      url: text
    });
  } catch (error) {
  }
}
const shareText = async (text: string) => {

}
onMounted(() => {
  nextTick(() => getApplications())
})
</script>

<style scoped>

</style>