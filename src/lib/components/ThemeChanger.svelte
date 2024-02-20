<script lang="ts">
  import { Palette } from 'phosphor-svelte'
  import { onMount } from 'svelte'
  import { themes } from '../themes'

  let current_theme = ''

  onMount(() => {
    if (typeof window !== 'undefined') {
      const theme = window.localStorage.getItem('theme')
      if (theme && themes.includes(theme)) {
        document.documentElement.setAttribute('data-theme', theme)
        current_theme = theme
      }
    }
  })

  function set_theme(theme: string) {
    if (themes.includes(theme)) {
      const one_year = 60 * 60 * 24 * 365
      window.localStorage.setItem('theme', theme)
      document.cookie = `theme=${theme}; max-age=${one_year}; path=/;`
      document.documentElement.setAttribute('data-theme', theme)
      current_theme = theme
    }
  }
</script>


<div class="dropdown dropdown-bottom dropdown-end">
  <div tabindex="0" role="button" class="mr-2 text-primary"><Palette size={20} weight="fill"/></div>
  <ul tabindex="0" class="dropdown-content z-[1] menu mt-3 shadow bg-base-300 rounded-box w-32">
    {#each themes as theme}
    <li class="capitalize cursor-pointer" on:click={() => set_theme(theme)}>{theme}</li>
    {/each}
  </ul>
</div>
