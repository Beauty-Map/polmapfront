<template>
  <div class="text-xs font-medium w-[425px] mx-auto text-center fixed bottom-0 right-0 left-0 z-[9999999]">
    <div class="flex flex-row items-center justify-evenly bg-[#133C3E] rounded-tl-3xl rounded-tr-3xl h-[58px]">
      <BottomNavigationButton
          @click="selectItem(1)"
          :selected="index == 1"
      >
        <HomeIcon />
        <template #text>
          پول مپ
        </template>
      </BottomNavigationButton>
      <BottomNavigationButton
          @click="selectItem(2)"
          :selected="index == 2"
      >
        <CategoryIcon />
        <template #text>
          آموزش
        </template>
      </BottomNavigationButton>
      <BottomNavigationButton
          @click="selectItem(3)"
          :selected="index == 3"
      >
        <FinancialWhiteIcon />
        <template #text>
          کسب درآمد
        </template>
      </BottomNavigationButton>
      <BottomNavigationButton
          @click="selectItem(4)"
          :selected="index == 4"
      >
        <WithdrawIcon />
        <template #text>
          برداشت
        </template>
      </BottomNavigationButton>
      <BottomNavigationButton
          @click="selectItem(5)"
          :selected="index == 5"
      >
        <StatisticWhiteIcon />
        <template #text>
          گزارشات
        </template>
      </BottomNavigationButton>
    </div>
  </div>
</template>

<script setup lang="ts">

import HomeIcon from "~/components/icons/BottomNavigation/HomeIcon.vue";
import CategoryIcon from "~/components/icons/BottomNavigation/CategoryIcon.vue";
import ProfileIcon from "~/components/icons/BottomNavigation/ProfileIcon.vue";
import BottomNavigationButton from "~/components/button/BottomNavigationButton.vue";
import {useDrawerStore} from "~/store/Drawer";
import StatisticWhiteIcon from "~/components/icons/SideBar/StatisticWhiteIcon.vue";
import FinancialWhiteIcon from "~/components/icons/SideBar/FinancialWhiteIcon.vue";
import {useAuthStore} from "~/store/Auth";
import WithdrawIcon from "~/components/icons/SideBar/WithdrawIcon.vue";

const router = useRouter()
const route = useRoute()
const store = useDrawerStore()
const auth = useAuthStore()
const user = ref(auth.user)

const index = ref<Number>(1)

const selectItem = (i: Number) => {
  store.closeAllDrawers()
  index.value = i
  switch (i) {
    case 1:
      openMenuPage()
      break

    case 2:
      openCoursePage()
      break

    case 3:
      openFinancialPage()
      break

    case 4:
      openWithdrawPage()
      break

    case 5:
      openStatisticsPage()
      break

  }
}

const openCoursePage = () => {
  router.push('/learn')
}

const openMenuPage = () => {
  router.push('/dashboard')
  // store.openMenuDrawer()
}

const openStatisticsPage = () => {
  router.push('/statistics')
}

const openFinancialPage = () => {
  router.push('/earn')
  if (!auth.user?.subscription) {
    useNuxtApp().$toast.error('برای دسترسی به این بخش ابتدا حق عضویت خود را پرداخت کنید!', {rtl: true})
    return
  }
  router.push('/earn')
}

const openWithdrawPage = () => {
  router.push('/financial')
}

const onRouteChanged = (route: string) => {
  if (route == '/dashboard') {
    index.value = 1
  } else if (route == '/learn') {
    index.value = 2
  } else if (route=='/earn') {
    index.value = 3
  } else if (route=='/financial') {
    index.value = 4
  } else if (route.startsWith('/financial')) {
    index.value = 4
  } else if (route.startsWith('/statistics')) {
    index.value = 5
  }
}

watch(() => route.path, onRouteChanged)
onMounted(() => {
  onRouteChanged(route.path)
})
</script>

<style scoped>

</style>