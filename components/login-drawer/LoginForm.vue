<template>
  <div class="w-full overflow-y-auto md:max-w-[500px]">
    <EmailInput title="ایمیل" v-model="form.email"/>
    <PasswordInput title="کلمه عبور" v-model="form.password" class="mt-[27px]"/>
    <ResetPasswordLink class="mt-[18]"/>
    <PolicyAndRulesButton class="mt-[18px]" v-model="form.accept_policy"/>
    <MainActionButton class="mt-[24px]" @click="doLogin">
      <div class="text-white text-center text-[20px] leading-[30px]">ورود</div>
    </MainActionButton>
    <BottomText class="mt-[18px]" @click="openRegisterModal" title="ثبت نام"/>
  </div>
</template>

<script setup lang="ts">

import PasswordInput from "~/components/input/PasswordInput.vue";
import ResetPasswordLink from "~/components/icons/AuthDrawer/ResetPasswordLink.vue";
import PolicyAndRulesButton from "~/components/icons/AuthDrawer/PolicyAndRulesButton.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import BottomText from "~/components/icons/AuthDrawer/BottomText.vue";
import EmailInput from "~/components/input/EmailInput.vue";

const app = useNuxtApp()
const router = useRouter()
const auth = useSanctumAuth()

const form = ref({
  email: '',
  password: '',
  accept_policy: false,
})

const doLogin = async () => {
  auth.login(form.value)
      .then(() => {
        app.$toast.success('شما با موفقیت وارد شدید', {rtl: true,})
        router.replace('/dashboard')
      })
      .catch(err => {
        app.$toast.error('متاسفانه خطایی رخ داده است. دوباره امتحان کنید', {rtl: true,})
        console.log(err, "err")
      })
}

const openRegisterModal = () => {
  router.push('/register')
}

</script>

<style scoped>

</style>