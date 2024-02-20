<!-- create store for auth -->

<script>
    import { login } from '$lib/api';

    let username = '';
    let password = '';

    async function onSubmit() {
        try {
            console.log("Form Submitted");
            await login(username, password);
            console.log('Logged in', username, password)
        } catch (err) {
            console.error(err);
        }
    }
</script>

<form>
    <div class="space-y-6 p-3">
        <div class="space-y-4">
            <span class="text-xl font-bold">Login</span>
            <input bind:value={username} type="text" placeholder="Username" class="input input-bordered text-base-content input-base-100 w-full" required/>
            <input bind:value={password} type="password" placeholder="Password" class="input input-bordered text-base-content input-base-100 w-full" required/>
        </div>
        <button on:click={onSubmit} class="btn btn-primary w-full">Enter</button>
    </div>
</form>