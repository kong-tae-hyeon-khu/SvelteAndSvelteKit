export const load = ( {fetch}) => {

    // Dummy Data : https://dummyjson.com/docs/products

    // 방법1 => 하나의 데이터 요청.
    // const productRes = await fetch('https://dummyjson.com/products?limit=10');
    // const productData = await productRes.json();
    // const products = productData.products;


    // 방법2 (여러 데이터를 동시에 요청할 때, 병렬로 처리 가능하도록)
    const fetchProducts = async () => {
        const productsRes = await fetch('https://dummyjson.com/products?limit=10');
        const productsData = await productsRes.json();
        return productsData.products;
    }

    const fetchUsers = async () => {
        const usersRes = await fetch('https://dummyjson.com/users?limit=10');
        const usersData = await usersRes.json();
        return usersData.users;
    }
    

    return {
        products : fetchProducts(),
        users : fetchUsers()
    }
}