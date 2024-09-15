<template>
  <div class="flex flex-col justify-start items-start w-full pb-10">
    <MenuLink :to="'/dashboard'">
      <template #icon>
        <DashboardIcon />
      </template>
      <template #title>داشبورد</template>
    </MenuLink>
    <MenuLink v-if="selectedApp" to="/app">
      <template #icon>
        <ProfileIcon />
      </template>
      <template #title>{{ selectedApp.app_name }}</template>
    </MenuLink>
    <MenuLink class="relative" @click="openProfileDrawer" :is-link="false">
      <template #icon>
        <ProfileIcon />
      </template>
      <template #title>پروفایل</template>
      <template #sub-icon v-if="!user.is_profile_completed">
        <DangerIcon @click="openProfileDrawer"/>
      </template>
    </MenuLink>
    <MenuLink :to="'/learn'">
      <template #icon>
        <CourseIcon />
      </template>
      <template #title>آموزش</template>
    </MenuLink>
    <MenuLink :to="'/banner'">
      <template #icon>
        <BannerIcon />
      </template>
      <template #title>دریافت بنر تبلیغاتی</template>
    </MenuLink>
    <MenuLink :to="'/referral'">
      <template #icon>
        <BannerIcon />
      </template>
      <template #title>دریافت لینک معرفی</template>
    </MenuLink>
    <MenuLink :to="'/statistics'">
      <template #icon>
        <StatisticIcon />
      </template>
      <template #title>آمار و گزارشات</template>
    </MenuLink>
    <MenuLink :to="'/financial'">
      <template #icon>
        <FinancialIcon />
      </template>
      <template #title>مالی</template>
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
const auth = useAuthStore()
const user = ref(auth.user)
const selectedApp = computed(() => useAppStore().getSelectedApp)
const router = useRouter()

const openProfileDrawer = () => {
  router.push('/profile')
  store.closeAllDrawers()
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