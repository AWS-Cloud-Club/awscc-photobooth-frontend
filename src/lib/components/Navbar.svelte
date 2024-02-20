<script>
    import ThemeChanger from "./ThemeChanger.svelte";
    import { LockSimple, LockSimpleOpen } from "phosphor-svelte";
    import Login from "./Login.svelte";

    import { AWSCCLOGO } from "$lib/assets";

    let authenticated = true;
</script>

<div class="navbar bg-base-200 shadow border-b-4 border-primary h-[4.5em]">
    <div class="flex-1">
        <a href="/" class="flex items-center space-x-3 text-lg px-3">
          <img src="{AWSCCLOGO}" alt="" class="w-10 md:block">
          <span class="hidden md:block">AWSCC-PUP Manila Photobooth</span>
        </a>
      </div>

    <div class="flex space-x-4 pr-3">
        <ul class="menu menu-horizontal px-1 items-center">
            {#if authenticated}
                <li><a href="/register">Register</a></li>
                <li><a href="/admin" data-sveltekit-preload-data>Admin</a></li>
            {/if}
        </ul>
        <div>
            <label for="my_modal_7" class="text-base-content cursor-pointer hover:text-primary">
                {#if authenticated}
                        <LockSimpleOpen size={20} weight="fill" />
                {:else}
                        <LockSimple size={20} weight="fill" />
                {/if}
            </label>
            <input type="checkbox" id="my_modal_7" class="modal-toggle" />
            <div class="modal" role="dialog">
                <div class="modal-box bg-base-200 w-72">
                <Login />
                </div>
                <label class="modal-backdrop" for="my_modal_7">Close</label>
            </div>
        </div>
        <ThemeChanger />
    </div>
</div>