<script lang="ts">
  import { ClipboardText } from 'phosphor-svelte'
  import { ArrowRight } from 'phosphor-svelte'
  import { chosenRequest } from '$lib/stores/RequestStore';
  export let request_id:string = "";
  export let emails:Array<string> = [];
  export let status:string = "";
  export let point_person:string = "";


  async function chooseRequest(){

    if(localStorage.getItem("showRequest") === "true"){
      localStorage.setItem("showRequest", "false");
    } else {
      localStorage.setItem("showRequest", "true");
    }

    chosenRequest.set({
      request_id,
      emails,
      status,
      point_person
    });
  }

</script>

<div>
  <button on:click={chooseRequest} class="grid grid-cols-4 grid-rows-6 gap-0 btn w-full h-[5rem]">
      <div class="row-span-2 row-start-3 flex justify-center items-center">
        <ClipboardText size={46} weight="fill"/>
      </div>
      <div class="col-span-2 row-span-2 row-start-2 col-start-2 flex items-start text-sm">{request_id}</div>
      <div class="col-span-3 row-span-1 col-start-2 row-start-4  gap-2 items-center text-sm gap inline-flex">View Request <ArrowRight size={12}/>
      </div>
  </button>
</div>
