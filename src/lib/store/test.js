import { writable } from "svelte/store";

export const test = writable({
    title : "",
    body : "",
})


export const setInit = () => {
    test.set({
        title : "",
        body : "",
    })
}
