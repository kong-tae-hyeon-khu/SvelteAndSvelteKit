

<script>
    import ContactList from '$lib/components/contactList.svelte';
    import {enhance} from '$app/forms';
    export let data;
    export let form;
    console.log(form);
    console.log(data);
</script>

<style>
    @import '../app.css';
</style>

<form method="post" action="?/create" use:enhance>
    <div>
        <label for="name" class="label">
            <span class="label-text">name</span>
        </label>
        <input type="text" name="name" value={form?.name ?? ''} class="input" input/>
    </div>
    
    <div>
        <label for="email" class="label">
            <span class="label-text">Email</span>
        </label>
        <input type="text" name="email" value={form?.email ?? ''} class="input"/>
    </div>

    <div>
        <label for="email" class="label">
            <span class="label-text">Company</span>
        </label>
        <input type="text" name="company" value={form?.company ?? ''} class="input"/>
    </div>

    <div>
        <label for="email" class="label">
            <span class="label-text">Job</span>
        </label>
        <input type="text" name="job" value={form?.job ?? ''} class="input"/>
    </div>
    <button>Add</button>
</form>
<ContactList contacts = {data?.contacts}/>