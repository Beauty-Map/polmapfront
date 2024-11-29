import {defineStore} from 'pinia'
import {ofetch} from "ofetch";
export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
    }),
    getters: {
        getUser: (state) => state.user,
    },
    actions: {
        setUser(user) {
            this.user = user
        },
        setToken(token) {
            this.token = token
        },
        async own() {
            const token = useCookie('token')
            const runtimeConfig = useRuntimeConfig()

            if (token.value) {
                await ofetch('/own',
                    {
                        baseURL: runtimeConfig.public.baseURL,
                        method: "GET",
                        parseResponse: JSON.parse,
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                            "Authorization": `Bearer ${token.value ?? ''}`
                        }
                    })
                    .then(res => {
                        console.log(res, "dssdsd")
                        this.user = res?.data
                        this.token = token.value?.toString() ?? ''
                    })
            }
        }
    },
})