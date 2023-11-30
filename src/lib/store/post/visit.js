import { writable } from "svelte/store";

export const visit = writable({
    title : "",
    body : "",
});

export const setInit = () => {
    visit.set({
        title : "",
        body : ""
        }   
    )
}