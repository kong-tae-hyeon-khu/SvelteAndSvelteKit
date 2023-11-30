import { goto } from "$app/navigation";
import { login } from "../../../lib/store/user/login";

export const _login = async (user) => {
    
    const res = await fetch("https://www.konglog.shop/api/user/signin", {
        method : 'POST',
        headers : {
                'Content-type' : 'application/json'
            },
        body : JSON.stringify({
                email : user.email,
                password : user.password
            }),
    })
    if (res.ok) {
        const resJson = await res.json();
        const userId = resJson.id; 
        console.log(resJson);
        await login(userId); // login Set True.
        goto("/");
    } else {
        alert("회원가입 또는 확인이 필요합니다.")
    }
}