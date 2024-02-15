<script lang="ts">
  export let emails:Array<string> = [];

  console.log("Emails", emails);
</script>

<div class="w-full h-[5rem] bg-white px-3 flex justify-center items-center rounded-md">
  <div class="w-[90rem] overflow-y-scroll flex justify-center items-center">
    {#each emails as email (email)}
      <div class="flex justify-center items-center bg-slate-700 text-xl text-white rounded-lg px-1 py-1 m-1 md:px-2 py:3">
        {email}
      </div>
    {/each}
  </div>
</div>

