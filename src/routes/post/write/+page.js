import { goto } from "$app/navigation";


export const _visit = async (visit) => {
    
    const res = await fetch("https://www.konglog.shop/api/visit", {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({
            userId : visit.userId,
            title : visit.title,
            body : visit.body
        }),
    })
    
    if (res.ok) {
        const resJson = await res.json();
        console.log(resJson);
        goto("/post");
    }
}