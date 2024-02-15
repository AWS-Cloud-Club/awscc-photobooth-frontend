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
    let requestData:Request[] | null = [];
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

<div class="grid grid-cols-10 grid-rows-5 h-[90vh]">
    <div class="col-span-2 row-span-5 bg-slate-700">
        <div class="py-3 px-5 flex gap-2 flex-col h-[44.2rem]">
            <div class="px-2">
                <TotalQueue {totalQueue}/>
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
            <div class="pr-1">
                <DeleteButton {request_id}/>
            </div>
        </div>
        <div class="w-full flex justify-center items-center px-9 pt-8">
            <EmailsContainer {emails}/>
        </div>
        <div class="pt-8 w-full h-[3rem] px-52">
            <RequestDetails {status} {point_person} {request_id}/>
        </div>
        <div class="flex justify-center items-center w-full h-[80h] pt-16 px-52">
            <UploadContainer {request_id}/>
        </div>
        {:else}
            <DefaultPane />
        {/if}
    </div>
</div>
    