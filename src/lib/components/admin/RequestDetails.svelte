<script lang="ts">
    export let request_id:string = "";
    export let point_person:string = "";
    export let status:string = ""; 
</script>

<div class="w-full bg-black h-[3rem] rounded-lg flex justify-evenly items-center text-white">
    <p>Request ID: {request_id}</p>
    <p>Point Person: {point_person}</p>
    <p>Status: {status}</p>
</div>