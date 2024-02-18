<script lang="ts">
    export let request_id:string = "";
    export let point_person:string = "";
    export let status:string = ""; 

    function toSentenceCase(str: string): string {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
</script>

<div class="w-full bg-base-300 h-[3rem] rounded-lg flex justify-evenly items-center text-white">
    <p>Request ID: {request_id}</p>
    <p>Point Person: {point_person}</p>
    <p>Status: {toSentenceCase(status)}</p>
</div>