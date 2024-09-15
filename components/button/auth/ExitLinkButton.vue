<template>
  <button @click="doExit" class="border border-red-400 text-center text-red-500 rounded-[5px] font-semibold text-[16px] leading-[24px] w-[91px] h-[52px]">
    خروج
  </button>
</template>

<script setup lang="ts">

import {useDrawerStore} from "~/store/Drawer";
import {useAuthStore} from "~/store/Auth";

const store = useDrawerStore()
const auth = useAuthStore()
const router = useRouter()
const doExit = () => {
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