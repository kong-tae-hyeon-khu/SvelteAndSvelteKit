<script>
    import {enhance} from '$app/forms'
</script>

<style>
    
    @import "../../../app.css";
    
</style>



<div class="flex justify-center h-screen">
    <div method="POST" class="w-full max-w-xs">
        <form class="rounded px-10 pt-6">

            <h2 class="text-2xl mb-4">회원가입</h2>
            <hr class="my-4">
            <div class="space-y-2 mb-4">
                <label class="font-medium" for="userName">Name</label>
                <input name="name" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="space-y-2 mb-4">
                <label class="font-medium" for="userNickName">Nick Name</label>
                <input name="nickName" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="space-y-2 mb-4">
                <label class="font-medium" for="userEmail">Email</label>
                <input name="email" type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="space-y-2 mb-4">
                <label class="font-medium" for="userPassword">Password</label>
                <input name="password" type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div>

            <button class="btn btn-secondary w-full space-y-2">Sign Up</button>
        </form>
    </div>
</div>
