

export const GET = async ({request, url}) => {
    const authHeader = request.headers.get('Authorization')
    console.log(authHeader)

    // if (authHeader !== 'Myauthheader') {
    //     return new Response(JSON.stringify({message : 'Invalid credentials'}),{
    //         status: 401
    //     })
    // }
    // ?dog=100 => 100
    // console.log(url.searchParams.get('dog'))

    const res = await fetch('https://dummyjson.com/posts');
    const data = await res.json()

    return new Response(JSON.stringify(data), {status: 200})
}

export const POST = async ({request}) => {
    const body = await request.json()

    const authHeader = request.headers.get('Authorization')

    if (authHeader !== 'Myauthheader') {
        return new Response(JSON.stringify({message : 'Invalid credentials'}), {
            status : 401
        })
    }

    console.log(body)

    return new Response(JSON.stringify({message : "Success"}), {
        status : 200
    })
}