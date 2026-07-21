import {defineStore} from "pinia";

export const userStore = defineStore('userStore', {
    state: () => ({
        user: {
            id: 1,
            name: '김유저'
        }
    }),
    getters: {
        getUserName: (state) => state.user.name
    }
})

