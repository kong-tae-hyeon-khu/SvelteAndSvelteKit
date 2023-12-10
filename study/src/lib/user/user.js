import {writable} from "svelte/store"

export const user = writable({
    userId : 0,
    userName : "",
    userNickName : "",
    isLogin : false,
})



