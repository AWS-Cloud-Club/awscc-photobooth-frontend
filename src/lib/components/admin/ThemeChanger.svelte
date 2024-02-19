<script lang='ts'>    
    import { Palette } from 'phosphor-svelte'
    import { theme } from "$lib/stores/ThemeStore";

    let storedTheme = localStorage.getItem('theme') || 'awsccDark';

    function setTheme(selectedTheme: string) {
        theme.set(selectedTheme);
    }
</script>

<div class="dropdown dropdown-bottom dropdown-end">
    <div tabindex="0" role="button" class="mr-2 text-primary"><Palette size={20} weight="fill" /></div>
    <ul tabindex="0" class="dropdown-content z-[1] menu mt-3 shadow bg-base-300 rounded-box w-32">
      <li><a on:click={() => setTheme('awsccLight')}>Light</a></li>
      <li><a on:click={() => setTheme('awsccDark')}>Dark</a></li>
      <li><a on:click={() => setTheme('night')}>Night</a></li>
      <li><a on:click={() => setTheme('coffee')}>Coffee</a></li>
      <li><a on:click={() => setTheme('valentine')}>Valentine</a></li>
    </ul>
  </div>