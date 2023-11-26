import {fail} from "@sveltejs/kit"

let contacts = [{
    id : 'de393e6a-lc08-4e6e-9aad-0994fcf0d981',
    name : 'Saul Goodman',
    email : 'saul@example.com',
    company : 'Saul Goodman & Associates',
    job : 'Attorney'
    },
]

export const load = () => {
    return {
        contacts
    }
}

export const actions = {
    create : async ({request}) => {
        const formData = await request.formData()

        const name = formData.get('name')
        const email = formData.get('email')
        const company = formData.get('company')
        const job = formData.get('job')

        if (name.length < 2) {
            return fail(400, {
                message : "Input Name Length 2 Upper",
                name,
                email,
                company,
                job
            })
        }        

        const id = crypto.randomUUID()

        const contact = {
            id,
            name,
            email,
            company,
            job
        }
        contacts.push(contact);

        return ({
            success : true,
        })
    }
}