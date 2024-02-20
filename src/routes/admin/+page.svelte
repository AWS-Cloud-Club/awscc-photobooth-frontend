<svelte:head>
    <title>Admin | AWSCC-PUP Manila-Photobooth App</title>
</svelte:head>

<script lang="ts">
    import { TotalQueue, QueueList, DeleteButton, EmailsContainer, UploadContainer, DefaultPane, RequestDetails, Filter } from "$lib/components/admin";
    import { Envelope } from "phosphor-svelte";
    import { chosenRequest } from "$lib/stores/RequestStore";
	import { onMount } from "svelte"
    import { chosenFilter } from "$lib/stores/FilterOptionStore";
    import { Refetch } from "$lib/stores/RefetchStore";

    export let data;
    const { requests } = data;
    let filterOption:string = "";
    let requestQueue =  data;
    let requestData:Request[] | null = null;
    let emails:string[] = [];
    let status:string = "";
    let point_person:string = "";
    let request_id:string = "";
    let showRequest:boolean = false;
    let totalQueue: number = 0;

    interface Request {
        request_id: string;
        emails: string[];
        status: string;
        point_person: string;
    };

    Refetch.subscribe(async value => {
        if(value){
            window.location.reload();
        };

        setTimeout(() => {
            Refetch.set(false);
        }, 200);
    });

    chosenFilter.subscribe((value) => {
        filterOption = value?.toUpperCase();
    });

    chosenFilter.subscribe(filter => {
        switch(filter){
        case "all":
            requestQueue = requests;
            break;
        case "pending":
            requestQueue = requests.filter((request:Request) => request.status === "pending");
            break;
        case "sent":
            requestQueue = requests.filter((request:Request) => request.status === "sent");
            break;
        case "cancelled":
            requestQueue = requests.filter((request:Request) => request.status === "cancelled");
            break;
            default:
                requestQueue = requests;
            }
``
            requestQueue.sort(sortRequests);
        });

    chosenRequest.subscribe(value => {
        requestData = value;
    });

    $: {
        emails = requestData?.emails;
        status = requestData?.status;
        point_person = requestData?.point_person;
        request_id = requestData?.request_id;
    }

    function sortRequests(requestA: Request, requestB:Request) {
        return Number(requestA.request_id) - Number(requestB.request_id);
    };

    function showRequestDetails(){
        setTimeout(() => {
            if(localStorage.getItem("showRequest") === "true"){
            showRequest = true;
            }
        }, 200);
    }

    function setTotalQueue(){
        totalQueue = requestQueue.filter((request:Request) => request.status === "pending").length;
    };

    onMount(() => {
        showRequestDetails();
        setTotalQueue();
    });
</script>

<div class="h-[90svh] flex">
    <div class="md:w-[35svw] lg:w-[30svw] xl:w-[30svw] p-6 space-y-5 bg-neutral">
        <TotalQueue {totalQueue}/>
        <div class="flex justify-between items-center">
            <h2 class="text-content font-bold text-sm pl-2 text-neutral-content"><span>{filterOption} Requests:</span></h2>
            <Filter />
        </div>
        <div class="hide-scrollbar overflow-y-auto max-h-[65svh]">
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