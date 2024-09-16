<template>
  <div class="w-full overflow-y-auto md:max-w-[500px]">
    <EmailInput title="ایمیل" v-model="form.email"/>
    <PasswordInput title="کلمه عبور" v-model="form.password" class="mt-[27px]"/>
    <PolicyAndRulesButton class="mt-[24px]" v-model="form.accept_policy"/>
    <MainActionButton class="mt-[24px]" @click="doRegister">
      <div class="text-white text-center text-[20px] leading-[30px]">ارسال کد تایید</div>
    </MainActionButton>
    <BottomText class="mt-[18px]" @click="openLoginModal" title="ورود"/>
    <OtpDrawer :is-open="openDrawer"
               @close="closeDrawerClicked"
               @change-email="changeEmail"
               @validate="validate"
               @resend="resend"
    />
  </div>
</template>

<script setup lang="ts">

import PolicyAndRulesButton from "~/components/icons/AuthDrawer/PolicyAndRulesButton.vue";
import MainActionButton from "~/components/button/form/MainActionButton.vue";
import BottomText from "~/components/icons/AuthDrawer/BottomText.vue";
import {useDrawerStore} from "~/store/Drawer";
import EmailInput from "~/components/input/EmailInput.vue";
import PasswordInput from "~/components/input/PasswordInput.vue";
import OtpDrawer from "~/components/drawer/OtpDrawer.vue";

const store = useDrawerStore()
const router = useRouter()
const app = useNuxtApp()
const openDrawer = ref(false)

const form = ref({
  email: '',
  password: '',
  accept_policy: false
})


const openDrawerClicked = () => {
  openDrawer.value = true
}

const closeDrawerClicked = () => {
  openDrawer.value = false
}

const changeEmail = () => {
  closeDrawerClicked()
}

const validate = async (code: string) => {
  const data = {
    email: form.value.email,
    code: code,
  }
  const res = await useCustomFetch('/auth/register/otp', {
    method: "POST",
    body: data
  })
  if (res.error.value != null) {
    app.$toast.error('کد تایید صحیح نیست', {rtl: true})
  }
  if (res.data.value != null) {
    app.$toast.success('ایمیل شما تایید شد', {rtl: true})
    store.closeAllDrawers()
    closeDrawerClicked()
    await router.push('/')
  }
}

const resend = async (code: string) => {
  const data = {
    email: form.value.email,
    password: form.value.password,
  }
  const res = await useCustomFetch('/auth/register', {
    method: "POST",
    body: data
  })
  if (res.error.value != null) {
    app.$toast.error('این ایمیل پیشتر ثبت نام کرده است', {rtl: true})
  }
  if (res.data.value != null) {
    const email = useCookie('email')
    email.value = form.value.email
    app.$toast.success('کد ورود با موفقیت ارسال شد', {rtl: true})
    openDrawerClicked()
  }
}

const doRegister = async () => {
  const ref = useCookie('referralId', {
    maxAge: 60 * 60 * 24 * 30, // 7 days
    path: '/',
    sameSite: 'lax',
  });
  const data = {
    email: form.value.email,
    password: form.value.password,
    referral_code: ref.value?.toString(),
  }

  const {$postRequest: postRequest}=app
  postRequest('/auth/register', data)
      .then(res => {
        app.$toast.success('کد ورود با موفقیت ارسال شد', {rtl: true})
        const email = useCookie('email')
        email.value = form.value.email
        openDrawerClicked()
      })
      .catch(err => {
        const errors = Object.values(err.data.errors)
        for (const k in errors) {
          for (const e in errors[k]) {
            app.$toast.error(errors[k][e], {rtl: true,})
          }
        }
      })
}

const openLoginModal = () => {
  router.push('/')
}

</script>

<style scoped>

</style>