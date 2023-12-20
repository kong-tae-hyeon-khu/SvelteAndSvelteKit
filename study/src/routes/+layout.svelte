<script>
    import {user} from "$lib/user/user"
    let userInfo;

    const unsubscribe = user.subscribe((value) => {
        userInfo = value;
    })

</script>

<style>
    @import "../app.css";

</style>

<div class ="navbar bg-base-100">

  <div class="flex-1">
    <a href="/" class="btn btn-ghost text-xl">Kong-Log</a>
  </div>
  {#if userInfo.isLogin === false}

  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/user/signin">Sign In</a></li>
      <li><a href="/user/signup">Sign Up</a></li>
    </ul>
  </div>


  {:else}


  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
      <div class="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>

    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <a href="/user/profile" class="justify-between">
          Profile
        </a>
      </li>
      <li><a href="/user/logout">Logout</a></li>
    </ul>
  </div>
  {/if}
  
</div>




<slot />