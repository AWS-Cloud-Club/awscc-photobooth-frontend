<script>
    import ThemeChanger from "./ThemeChanger.svelte";
    import { AWSCCLOGO } from "$lib/assets";
</script>

<div class="navbar bg-base-200 shadow border-b-4 border-primary">
    <div class="flex-1">
        <a href="/" class="flex items-center space-x-3 text-lg px-3">
          <img src="{AWSCCLOGO}" alt="" class="w-10 md:block">
          <span class="hidden md:block">AWSCC-PUP Manila Photobooth</span>
        </a>
      </div>

    <div class="flex space-x-2 pr-3">
        <ul class="menu menu-horizontal px-1">
            <li><a href="/register">Register</a></li>
            <li><a href="/admin" data-sveltekit-preload-data>Admin</a></li>
        </ul>
        <ThemeChanger />
    </div>
</div>