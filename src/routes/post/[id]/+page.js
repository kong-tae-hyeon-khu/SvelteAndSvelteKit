export const load = ({fetch, params}) => {
    const fetchPost = async (id) => {
        const res = await fetch(`https://www.konglog.shop/api/visit/${id}`, {
            header : {
                'Content-type' : 'application/json'}
        });
        const data = res.json();
        return data;
    }

    return {
        visit : fetchPost(params.id),
    }
}