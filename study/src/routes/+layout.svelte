<script>
    import {user} from "$lib/user/user"
    let userInfo;

    const unsubscribe = user.subscribe((value) => {
        userInfo = value;
        // console.log(value)
    })

</script>

<style>
    @import "../app.css";

</style>

<div class="navbar bg-base-100">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost text-xl">Main</a>
      <a href="/post" class="btn btn-ghost text-xl">Posts</a>
      <a href="/visit" class="btn btn-ghost text-xl">Visits</a>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a href="/profile" class="justify-between">
              Profile
            </a>
          </li>
          <li><a href="/setting">Settings</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>


<!-- <nav>
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

    
</nav> -->

<slot />