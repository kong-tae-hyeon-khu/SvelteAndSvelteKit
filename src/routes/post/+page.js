export const load = ({fetch}) => {
    const fetchVisits = async () => {
        const res = await fetch('https://www.konglog.shop/api/visit', {
            method : 'GET',
            headers : {
                'Content-type' : 'application/json'
            },
        });
        const data = await res.json();
        console.log(data)
        return data;
    }
    // 게시글들에 대한 목록을 불러오는 리스트.
    return ({
        visits : fetchVisits(),
    })
}