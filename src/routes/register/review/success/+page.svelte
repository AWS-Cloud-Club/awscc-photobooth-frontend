<script lang="ts">
	import { goto } from '$app/navigation';
  import { AWSCCLOGO, space } from '$lib/assets';
  
  function newRequest() {
    goto('/register');
  }
</script>

<div class="h-[90svh] flex justify-center items-center  bg-cover bg-center bg-no-repeat relative" style="background-image: url({space})">
    <div class="absolute inset-0 bg-base-300 opacity-50 h-[90svh]"></div>
    <div class="flex flex-col justify-center items-center  bg-opacity-80 h-[70svh] w-[85svw] xl:w-[50svw] md:w-[70svw] sm:w-[80svw] rounded-xl bg-base-200 relative gap-7">
      <div class="flex flex-col justify-center items-center">
        <h1>Please wait patiently for your turn.</h1>
        <p>Thank you for registering!</p>
      </div>
      <img src="{AWSCCLOGO}" alt="" class=" w-60">
      <button on:click={newRequest} class="btn btn-outline btn-primary">New Request</button> 
    </div>
</div>