<script>
    import {isLogged} from "../lib/store/user/login"
    const onClickHandler = () => {

    }
</script>
    
<style>
    nav {
        display: flex;
        justify-content: space-between; /* 각 요소 사이에 공간 배분 */
        align-items: center; /* 수직 정렬 */
        background-color: white;
        padding: 1rem;
    }

    nav a {
        color: black;
        text-decoration: none;
        margin: 0 1rem;
        font-size: 18px;
    }

    nav a:hover {
        border-bottom: 2px solid blue;
    }

    .login-container {
        display: flex; /* 자식 요소를 가로로 배열하기 위해 */
        align-items: center; /* 수직 정렬 */
    }

    .login-btn {
        margin-left: 1rem; /* 버튼 간격 조절 */
    }
</style>

<nav>
    <div>
        <a href="/">Home</a>
        <a href="/post">Post</a>
        <a href="/post/write">Write</a>
    </div>

    {#if !$isLogged} 
        <div class="login-container">
            <a href="/user/register" class="login-btn">Register</a>    
            <a href="/user/login" class="login-btn">Login</a> 
        </div>

    {:else}
        <a href="/user/logout" on:click={onClickHandler} class="login-btn">Logout</a>    
    {/if}
</nav>

<slot/>