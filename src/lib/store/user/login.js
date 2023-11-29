import { writable } from "svelte/store";

export const isLogged = writable(false);

export const login = () => {
    isLogged.set(true);
}

export const logout = () => {
    isLogged.set(false);
}