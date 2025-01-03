<template>
  <div class="flex flex-col justify-start items-start w-full pb-10">
    <MenuLink class="relative" @click="openProfileDrawer" :is-link="false">
      <template #icon>
        <ProfileIcon />
      </template>
      <template #title>پروفایل</template>
      <template #sub-icon v-if="!user.is_profile_completed">
        <DangerIcon @click="openProfileDrawer"/>
      </template>
    </MenuLink>
    <MenuLink :is-link="false" @click="openPlanPage">
      <template #icon>
        <IconsDollarGrayIcon />
      </template>
      <template #title>پرداخت حق عضویت</template>
    </MenuLink>
    <MenuLink :to="'/medias'">
      <template #icon>
        <BannerIcon />
      </template>
      <template #title>شبکه های اجتماعی</template>
    </MenuLink>
    <MenuLink :to="'/learn'">
      <template #icon>
        <CourseIcon />
      </template>
      <template #title>آموزش</template>
    </MenuLink>
    <MenuLink to="/support">
      <template #icon>
        <ContactusIcon />
      </template>
      <template #title>تماس با پشتیبانی</template>
    </MenuLink>
    <MenuLink :isLink="false" @click="exit">
      <template #icon>
        <DashboardIcon />
      </template>
      <template #title>خروج</template>
    </MenuLink>
    <Modal @close="onModalClose" :show-close="true" :open="showModal">
      <div class="w-full flex flex-col justify-start items-center mt-4 max-w-[340px]">
        تا پایان بهار سال 1404 استفاده از پول مپ رایگان است از این فرصت محدود استفاده کنید و تیم بازاریابی خود را گسترش دهید!
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">

import DangerIcon from "~/components/icons/DangerIcon.vue";
import BannerIcon from "~/components/icons/SideBar/BannerIcon.vue";
import MenuLink from "~/components/app-menu-drawer/MenuLink.vue"
import DashboardIcon from "~/components/icons/SideBar/DashboardIcon.vue";
import CourseIcon from "~/components/icons/SideBar/CourseIcon.vue";
import StatisticIcon from "~/components/icons/SideBar/StatisticIcon.vue";
import FinancialIcon from "~/components/icons/SideBar/FinancialIcon.vue";
import ContactusIcon from "~/components/icons/SideBar/ContactusIcon.vue";
import ProfileIcon from "~/components/icons/SideBar/ProfileIcon.vue";
import {useDrawerStore} from "~/store/Drawer";
import {useAppStore} from "~/store/App";
import {useAuthStore} from "~/store/Auth";
import SideBarLink from "~/components/sidebar/SideBarLink.vue";

const store = useDrawerStore()
const app = useNuxtApp()
const auth = useAuthStore()
const user = ref(auth.user)
const selectedApp = computed(() => useAppStore().getSelectedApp)
const router = useRouter()
const showModal = ref(false)

const onModalClose = () => {
  showModal.value = false
}

const openProfileDrawer = () => {
  router.push('/profile')
  store.closeAllDrawers()
}

const openPlanPage = () => {
  // showModal.value = true
  // return;
  router.push('/plan')
}

const exit = () => {
  const cookie = useCookie('token')
  cookie.value = ''
  auth.setUser(null)
  auth.setToken('')
  store.closeAllDrawers()
  router.replace('/')
}
</script>

<style scoped>

</style>