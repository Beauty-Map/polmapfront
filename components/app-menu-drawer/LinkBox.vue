<template>
  <div class="flex flex-col justify-start items-start w-full pb-10">
    <MenuLink :to="'/dashboard'">
      <template #icon>
        <DashboardIcon />
      </template>
      <template #title>داشبورد</template>
    </MenuLink>
    <MenuLink class="relative" @click="openProfileDrawer" :is-link="false">
      <template #icon>
        <ProfileIcon />
      </template>
      <template #title>پروفایل</template>
      <template #sub-icon v-if="!user.is_artist_profile_completed">
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

const store = useDrawerStore()
const user = useSanctumUser()

const openProfileDrawer = () => {
  store.openProfileDrawer()
}
</script>

<style scoped>

</style>