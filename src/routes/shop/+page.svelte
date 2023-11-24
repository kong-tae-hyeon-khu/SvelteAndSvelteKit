<script>
    export let data;
    
    
    const {products} = data

</script>

<h1>Shop</h1>
{#each products as product }
    <h1>{product.title}</h1>
    <p>{product.description}</p>
{/each}