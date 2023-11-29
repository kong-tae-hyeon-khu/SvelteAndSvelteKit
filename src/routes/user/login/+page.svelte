<script>
    import {user} from "../../../lib/store/user/register"

    const onClickHandler = () => {
        
    }
</script>

<style>
    @import "../../../app.css";
</style>


<h1>Login</h1>

<form>
    <div>
        <label for="email" class="label">Email</label>
        <input type="email" bind:value={user.email} class="input"/>
    </div>

    <div>
        <label for="password" class="label">Password</label>
        <input type="password" bind:value={user.password} class="input"/>
    </div>
    <button on:click={onClickHandler}>Login</button>
</form>