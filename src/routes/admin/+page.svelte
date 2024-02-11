<svelte:head>
    <title>Admin | AWSCC-PUP Manila-Photobooth App</title>
</svelte:head>

<script lang="ts">
    import { TotalQueue, QueueList, DeleteButton, EmailsContainer } from "$lib/components/admin";
    import { data } from '$lib/index';
    import { Envelope } from "phosphor-svelte";
    import { chosenRequest } from "$lib/stores/RequestStore";

    let requestQueue =  data;
    let requestData:any = {};
    let emails:string[] = [];
    let status:string = "";
    let point_person:string = "";

    chosenRequest.subscribe(value => {
        console.log("Chosen Request", value);
        requestData = {...value};
        console.log("Request Data", requestData);
    });

    $: {
        emails = requestData?.emails;
        status = requestData?.status;
        point_person = requestData?.point_person;
    }


</script>

<div class="grid grid-cols-10 grid-rows-5 h-[90vh]">
    <div class="col-span-2 row-span-5 bg-slate-700">
        <div class="py-3 px-5 flex gap-2 flex-col h-[44.2rem]">
            <div class="px-2">
                <TotalQueue />
            </div>
                <QueueList {requestQueue}/>
        </div>
    </div>
    <div class="col-span-8 row-span-5 col-start-3 bg-zinc-800">
        {#if $chosenRequest}
        <div class="w-full px-8 h-[3rem] flex justify-between items-center pt-8">
            <div class="flex items-center gap-2 text-white">
                <Envelope size={40} color="white" />
                <h3 class=" text-xl">Emails</h3>
            </div>
            <DeleteButton />
        </div>
        <div>
            <EmailsContainer {emails}/>
        </div>
        {:else}
        <div class="flex justify-center items-center h-[90vh] bg-white">
            <div class="w-72 flex flex-col justify-center items-center gap-2 text-black font-bold">
                <img src=" https://awscc-photobooth.s3.ap-southeast-1.amazonaws.com/assets/AWSCC-PUP-Logo" alt="">
                <p>No Request Chosen</p>
            </div>
        </div>
        {/if}
    </div>
</div>
    

<style lang=scss>
</style>