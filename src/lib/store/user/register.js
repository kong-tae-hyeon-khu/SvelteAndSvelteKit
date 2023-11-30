import { writable } from "svelte/store";

export const user = writable({
    name : "",
    email : "",
    password : "",
});

export const setInit = () => {
    user.set({
        name : "",
        email : "",
        password : "",
    })
}
