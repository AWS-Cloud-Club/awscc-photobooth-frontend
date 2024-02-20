<script lang="ts">
  import { alfHuhu, alfSwag } from '$lib/assets';

  export let statusModal:string;
  let image = "";

  $: if (statusModal === "SUCCESS") {
    image = alfSwag;
  } else if (statusModal === "ERROR") {
    image = alfHuhu;
  }
</script>

<div class="flex flex-col justify-center items-center space-y-3">
  <h3 class="font-bold text-lg text-base-content">{statusModal}</h3>
  <img src="{image}" class="w-full h-auto" alt="status">
</div>