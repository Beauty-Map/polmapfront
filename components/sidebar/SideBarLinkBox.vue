<template>
  <div class="w-full flex flex-col gap-y-[8px] justify-start items-start  px-[16px] py-[24px]">
    <SideBarLink to="/dashboard" title="داشبورد">
      <template #icon>
        <DashboardIcon />
      </template>
    </SideBarLink>
    <SideBarLink to="/profile" title="پروفایل">
      <template #icon>
        <ProfileIcon />
      </template>
    </SideBarLink>
    <SideBarLink to="/learn" title="آموزش">
      <template #icon>
        <CourseIcon />
      </template>
    </SideBarLink>
    <SideBarLink to="/statistics" title="آمار و گزارشات">
      <template #icon>
        <StatisticIcon />
      </template>
    </SideBarLink>
    <SideBarLink to="/financial" title="مالی">
      <template #icon>
        <FinancialIcon />
      </template>
    </SideBarLink>
    <SideBarLink to="/support" title="تماس با پشتیبانی">
      <template #icon>
        <ContactusIcon />
      </template>
    </SideBarLink>
  </div>
</template>

<script setup lang="ts">

import SideBarLink from "~/components/sidebar/SideBarLink.vue";
import DashboardIcon from "~/components/icons/SideBar/DashboardIcon.vue";
import ProfileIcon from "~/components/icons/SideBar/ProfileIcon.vue";
import CourseIcon from "~/components/icons/SideBar/CourseIcon.vue";
import BannerIcon from "~/components/icons/SideBar/BannerIcon.vue";
import StatisticIcon from "~/components/icons/SideBar/StatisticIcon.vue";
import FinancialIcon from "~/components/icons/SideBar/FinancialIcon.vue";
import ContactusIcon from "~/components/icons/SideBar/ContactusIcon.vue";
</script>

<style scoped>

</style>