<script>
    import {user} from "../../../lib/store/user/register"
    import {_user} from "./+page"
    
    const onClickHandler = () => {
        _user.regist(user)
    }
</script>

<style>
    @import '../../../app.css';
</style>

<h1>Register</h1>
<form>
    <div>
        <label for="name" class="label">Name</label>
        <input type="text" bind:value={user.name} class="input"/>
    </div>

    <div>
        <label for="email" class="label">Email</label>
        <input type="email" bind:value={user.email} class="input"/>
    </div>

    <div>
        <label for="password" class="label">Password</label>
        <input type="password" bind:value={user.password} class="input"/>
    </div>

    <button on:click={onClickHandler}>Register</button>
</form>