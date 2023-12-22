export const actions = {
    default : async ({request}) => {
        const data = await request.formData();
        console.log(data)
        
        console.log(data.get("email"))
        console.log(data.get("password"))
    }    
}