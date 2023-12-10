<script>
    import {user} from "$lib/user/user"
    let userInfo;

    const unsubscribe = user.subscribe((value) => {
        userInfo = value;
        // console.log(value)
    })

</script>

<style>
    @import "./+layout.css";

</style>
<nav>
    <div class="nav-left">
        <a href="/">Main</a>
        <a href="/post/write">Write</a>
        <a href="/visit">Visit</a>
    </div>

    {#if userInfo.isLogin === false}
        <div class="nav-right">
            <a href="/user/signin">Sign In</a>
            <a href="/user/signup">Sign Up</a>
        </div>
    
    {:else}
        <div></div>
    {/if}

    
</nav>

<slot />