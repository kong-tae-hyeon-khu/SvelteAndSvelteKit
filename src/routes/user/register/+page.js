import { goto } from "$app/navigation";
import { setInit } from "../../../lib/store/user/register";

export const _user =  {
    regist : async (user) => {
        console.log(user);
        const res = await fetch("https://www.konglog.shop/api/user/signup", {
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                name : user.name,
                email : user.email,
                password : user.password
            }),
            
        })

        if (res.ok) {
            const response = await res.json();
            console.log(response)
            setInit();
            goto("/");
        }
    }
}