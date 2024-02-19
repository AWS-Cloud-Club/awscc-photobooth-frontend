<script lang="ts">
    export let request_id:string = "";
    export let point_person:string = "";
    export let status:string = ""; 

    function toSentenceCase(str: string): string {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
</script>

<div class="w-full bg-neutral h-[3rem] rounded-lg flex justify-evenly items-center text-neutral-content">
    <p>Request ID: <span class="font-semibold text-primary">{request_id}</span></p>
    <p>Point Person: <span class="font-semibold text-primary">{point_person}</span></p>
    <p>Status: <span class="font-semibold text-primary">{toSentenceCase(status)}</span></p>
</div>