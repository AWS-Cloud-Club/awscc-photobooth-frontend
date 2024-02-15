<script lang="ts">
  export let emails:Array<string> = [];

  console.log("Emails", emails);
</script>

<div class="w-full h-[5.5rem] bg-white rounded-lg p-2">
  <div class="w-full h-full flex justify-center">
    <div class="w-full h-full overflow-x-auto flex justify-start items-center">
      {#each emails as email, index (email)}
        <div class="flex justify-center items-center bg-slate-700 text-xl text-white rounded-lg px-1 py-1 m-1 md:px-2 py:3 gap-3">
          <span class="bg-white px-3  py-1 text-black rounded-full">
            {index + 1}
          </span> 
          <span>
            {email}
          </span>
        </div>
      {/each}
    </div>
  </div>
</div>
