import {ofetch} from "ofetch";
import {useAuthStore} from "~/store/Auth.js";

export default defineNuxtPlugin(async (nuxtApp) => {
    if (process.server) {
        const token = useCookie('token')

        if (token.value) {
            const auth = useAuthStore()
            try {
                const res = await ofetch('/own', {
                    // baseURL: 'https://api.polmap.ir/api',
                    baseURL: 'http://127.0.0.1:8000/api',
                    method: "GET",
                    parseResponse: JSON.parse,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token.value ?? ''}`
                    }
                })
                auth.user = res.data
                auth.token = token.value?.toString()

                // به جای ایجاد مجدد کوکی، همان کوکی token را تغییر ده
                token.value = token.value?.toString()
            } catch (err) {
                console.log("auth error", err)
                auth.user = null
                auth.token = null
                token.value = ''
            }
        }
    }
    return {}
})
