import { writable } from "svelte/store";
import { browser } from "$app/environment";

const defaultValue = "0";

const isLoggedSession = browser ? window.localStorage.getItem("isLogged") ?? defaultValue : defaultValue;

export const isLogged = writable(isLoggedSession);

export const login = async (userId) => {
    isLogged.set(userId.toString());
    
}

export const logout = () => {
    isLogged.set("0");
}


isLogged.subscribe(value => {
    if (browser) {
        window.localStorage.setItem("isLogged", value);
    }
})
