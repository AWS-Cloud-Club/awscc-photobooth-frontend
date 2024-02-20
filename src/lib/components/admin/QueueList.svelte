<script lang="ts">

  import { RequestButton, Filter } from "$lib/components/admin";
	import { onMount } from "svelte"
  import { chosenFilter } from "$lib/stores/FilterOptionStore";

  let filterOption:string = "";

  chosenFilter.subscribe((value) => {
    filterOption = value?.toUpperCase();
  });

  interface QueueItem {
    request_id: string;
    emails: Array<string>;
    status: string;
    point_person: string;
  }

  export let requestQueue:QueueItem[] = [];

</script>

<div class="flex justify-between items-center">
  <h2 class="text-content font-bold text-sm pl-2"><span>{filterOption} Requests:</span></h2>
  <Filter />
</div>
<div class="w-full h-screen rounded-lg overflow-y-auto px-2 py-2 gap-3 flex flex-col">
  {#each requestQueue as { request_id, emails, status, point_person } (request_id)}
      <RequestButton 
        request_id={request_id} 
        emails={emails} 
        status={status} 
        point_person={point_person}
      />
  {/each}
</div>