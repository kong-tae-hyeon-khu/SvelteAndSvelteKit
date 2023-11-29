import { goto } from "$app/navigation";
import { redirect } from "@sveltejs/kit";

export const _user =  {
    regist : async (user) => {
        console.log(user);
        const res = await fetch("http://localhost:8080/api/user/signup", {
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
            goto("/");
        }
    }
}