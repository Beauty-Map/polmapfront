<template>
  <div class="w-full overflow-y-auto">
    <EmailInput title="ایمیل" v-model="form.email"/>
    <PasswordInput title="کلمه عبور" v-model="form.password" class="mt-[27px]"/>
    <ResetPasswordLink class="mt-[18]"/>
    <MainActionButton :disabled="loading" class="mt-[24px]" @click="doLogin">
      <div v-if="loading">
        <LoadingComponent />
      </div>
      <div v-else class="text-white text-center text-[20px] leading-[30px]">ورود</div>
    </MainActionButton>
    <BottomText class="mt-[18px]" @click="openRegisterModal" title="ثبت نام"/>
  </div>
</template>

<script setup lang="ts">

import PasswordInput from "~/components/input/PasswordInput.vue";
import ResetPasswordLink from "~/components/icons/AuthDrawer/ResetPasswordLink.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import BottomText from "~/components/icons/AuthDrawer/BottomText.vue";
import EmailInput from "~/components/input/EmailInput.vue";
import LoadingComponent from "~/components/global/Loading.vue";
import {useAuthStore} from "~/store/Auth";

const app = useNuxtApp()
const router = useRouter()
const auth = useAuthStore()
const loading = ref(false)

const form = ref({
  email: '',
  password: '',
})

const doLogin = async () => {
  if (loading.value) {
    return
  }
  loading.value = true
  const {$postRequest: postRequest}=app
  postRequest('/auth/login', form.value)
      .then((res) => {
        auth.user = res.data
        auth.token = res.data.token
        const token = useCookie("token", {
          maxAge: 60 * 60 * 24 * 31
        })
        token.value = res.data.token
        app.$toast.success('شما با موفقیت وارد شدید', {rtl: true,})
        router.push('/dashboard')
      })
      .catch((err) => {
        const errors = Object.values(err.data.errors)
        for (const k in errors) {
          for (const e in errors[k]) {
            app.$toast.error(errors[k][e], {rtl: true,})
          }
        }

      })
      .finally(() => {
        loading.value = false
      })
}

const openRegisterModal = () => {
  router.push('/register')
}

</script>

<style scoped>

</style>