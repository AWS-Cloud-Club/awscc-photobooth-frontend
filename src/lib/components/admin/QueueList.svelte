<script lang="ts">

  import { RequestButton, Filter } from "$lib/components/admin";
	import { onMount } from "svelte"
  import { chosenFilter } from "$lib/stores/FilterOptionStore";

  let filterOption:string = "";

  chosenFilter.subscribe((value) => {
    filterOption = value?.toUpperCase();
  });

  interface QueueItem {
    requestId: string;
    emails: Array<string>;
    status: string;
    pointPerson: string;
  }

  export let requestQueue:QueueItem[] = [];

</script>

<!-- <div class="flex justify-between items-center">
  <h2 class="text-content font-bold text-sm pl-2"><span>{filterOption} Requests:</span></h2>
  <Filter />
</div> -->
<div class="w-full h-screen rounded-lg px-2 py-2 gap-3 flex flex-col">
  {#each requestQueue as { requestId, emails, status, pointPerson } (requestId)}
      <RequestButton 
        request_id={requestId} 
        emails={emails} 
        status={status} 
        point_person={pointPerson}
      />
  {/each}
</div>