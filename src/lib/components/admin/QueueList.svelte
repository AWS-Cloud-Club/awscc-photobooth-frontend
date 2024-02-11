<script lang="ts">

  import { RequestButton } from "$lib/components/admin";
	import { onMount } from "svelte"
  interface QueueItem {
    request_id: string;
    emails: Array<string>;
    status: string;
    point_person: string;
  }

  export let requestQueue:QueueItem[] = [];

</script>

<h2 class="text-black font-bold text-xl pl-2 pt-2">Requests:</h2>
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