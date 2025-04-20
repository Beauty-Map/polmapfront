<template>
  <div class="w-full overflow-y-auto">
    <EmailInput title="ایمیل خود را وارد کنید" v-model="form.email" class="px-[2px]"/>
    <PasswordInput title="یک کلمه عبور برای خود انتخاب کنید" v-model="form.password" class="px-1 mt-[27px]"/>
    <TextInput title="کد معرف خود را وارد کنید" v-model="form.ref_code" v-if="!form.ref_code" class="px-1 mt-[27px]"/>
    <PolicyAndRulesButton class="mt-[24px]" v-model="form.accept_policy"/>
    <MainActionButton :disabled="loading" class="mt-[24px]" @click="doRegister">
      <div v-if="loading">
        <LoadingComponent />
      </div>
      <div v-else class="text-white text-center text-[20px] leading-[30px]">ارسال کد تایید</div>
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
import LoadingComponent from "~/components/global/Loading.vue";
import TextInput from "~/components/input/TextInput.vue";
import {useAuthStore} from "~/store/Auth";

const app = useNuxtApp()
const router = useRouter()
const auth = useAuthStore()
const { emitOtpResetSignal } = useOtpResetSignal();

const store = useDrawerStore()
const openDrawer = ref(false)
const loading = ref(false)

const form = ref({
  email: '',
  password: '',
  accept_policy: false,
  ref_code: ''
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

const validated = () => {
  let validated = true
  if (!form.value.email) {
    app.$toast.error('لطفا ایمیل خود را وارد کنید', {rtl: true})
    validated = false
  }
  if (!form.value.password) {
    app.$toast.error('لطفا پسورد خود را وارد کنید', {rtl: true})
    validated = false
  }
  if (!form.value.ref_code) {
    app.$toast.error('لطفا کد معرف خود را وارد کنید', {rtl: true})
    validated = false
  } else if(form.value.ref_code.length != 6) {
    app.$toast.error('کد معرف باید 6 رقم باشد', {rtl: true})
    validated = false
  }
  if (!form.value.accept_policy) {
    app.$toast.error('لطفا تیک گزینه تایید قوانین را بزنید', {rtl: true})
    validated = false
  }
  return validated
}

const doRegister = async () => {
  if (loading.value) return
  if (!validated()) {
    return
  }
  loading.value = true
  const data = {
    email: form.value.email,
    password: form.value.password,
    referrer_code: form.value.ref_code,
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
        emitOtpResetSignal();
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

const openLoginModal = () => {
  router.push('/')
}

onMounted(()=>{
  const refC = useCookie('referralId', {
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
    sameSite: 'lax',
  });
  if (refC.value) {
    form.value.ref_code = refC.value.toString()
  }
})
</script>

<style scoped>

</style>