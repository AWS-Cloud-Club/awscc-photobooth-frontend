<svelte:head>
    <title>Admin | AWSCC-PUP Manila-Photobooth App</title>
</svelte:head>

<script lang="ts">
    import { TotalQueue, QueueList, DeleteButton, EmailsContainer, UploadContainer, DefaultPane, RequestDetails, Filter } from "$lib/components/admin";
    import { data } from '$lib/index';
    import { Envelope } from "phosphor-svelte";
    import { chosenRequest } from "$lib/stores/RequestStore";
	import { onMount } from "svelte"
    import { chosenFilter } from "$lib/stores/FilterOptionStore";

    interface Request {
        request_id: string;
        emails: string[];
        status: string;
        point_person: string;
    };

    let requestQueue =  data;
    let requestData:Request[] | null = null;
    let emails:string[] = [];
    let status:string = "";
    let point_person:string = "";
    let request_id:string = "";
    let showRequest:boolean = false;
    let totalQueue: number = 0;

    function sortRequests(requestA: Request, requestB:Request) {
        return Number(requestA.request_id) - Number(requestB.request_id);
    }

    
    chosenFilter.subscribe(filter => {
        switch(filter){
        case "all":
            requestQueue = data;
            break;
        case "pending":
            requestQueue = data.filter((request:Request) => request.status === "pending");
            break;
        case "sent":
            requestQueue = data.filter((request:Request) => request.status === "sent");
            break;
        case "cancelled":
            requestQueue = data.filter((request:Request) => request.status === "cancelled");
            break;
            default:
                requestQueue = data;
            }

            requestQueue.sort(sortRequests);
            console.log("Request Queue", requestQueue);
        });


    chosenRequest.subscribe(value => {
        console.log("Chosen Request", value);
        requestData = value;
    });

    $: {
        emails = requestData?.emails;
        status = requestData?.status;
        point_person = requestData?.point_person;
        request_id = requestData?.request_id;
    }

    onMount(() => {
        setTimeout(() => {
            if(localStorage.getItem("showRequest") === "true"){
                showRequest = true;
            }
        }, 1000); 

        totalQueue = requestQueue.filter((request:Request) => request.status === "pending").length;
    });
</script>

<div class="h-[90svh] flex">
    <div class="md:w-[35svw] lg:w-[30svw] xl:w-[30svw] p-6 space-y-5 bg-neutral">
        <TotalQueue {totalQueue}/>
        <div class="hide-scrollbar overflow-y-auto max-h-[70svh]">
            <QueueList {requestQueue}/>
        </div>
    </div>
    <div class="w-full h-full p-10 flex space-x-6">
        {#if $chosenRequest}
        <div class="h-full flex flex-col justify-center">
            <div class="w-64 flex items-center space-x-1 bg-base-300 text-base-content rounded-t-lg p-5">
                <Envelope size={25} weight="fill" />
                <h3 class=" text-lg">Emails</h3>
            </div>
            <div class="hide-scrollbar overflow-y-auto space-y-3 flex flex-col h-full px-5 pb-5 bg-base-300 shadow rounded-b-lg w-64">
                <EmailsContainer {emails}/>
            </div>
        </div>
        <div class="w-full h-[80svh] flex flex-col items-center space-y-3">
            <div class="w-full flex justify-end pb-1">
                <DeleteButton {request_id}/>
            </div>
            <RequestDetails {status} {point_person} {request_id}/>
            <UploadContainer {request_id}/>
        </div>
        
        {:else}
            <DefaultPane />
        {/if}
    </div>
</div>


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