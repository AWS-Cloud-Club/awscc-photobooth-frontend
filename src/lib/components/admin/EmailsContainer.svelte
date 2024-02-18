<script lang="ts">
  export let emails:Array<string> = [];
  console.log("Emails", emails);
</script>

{#each emails as email, index (email)}
  <div class="flex bg-base-200 p-3 w-full space-x-2 shadow rounded-sm">
    <span class="text-xs bg-neutral-400 text-center px-2 py-1 text-black rounded-full">
      {index + 1}
    </span> 
    <span class="hide-scrollbar text-xs flex flex-col justify-center overflow-clip overflow-x-auto">
      {email}
    </span>
  </div>
{/each}

<style>

  .hide-scrollbar::-webkit-scrollbar-track {
      display: none;
  }

  .hide-scrollbar::-webkit-scrollbar {
      display: none;
  }

  .hide-scrollbar::-webkit-scrollbar-thumb {
      display: none;
  }
</style>