<script lang="ts">
    import { cancelRequest } from "$lib/api";
    import { Refetch  } from "$lib/stores/RefetchStore";


    export let request_id: string = "";

    async function deleteRequest() {
        console.log("Deleting request", request_id);

        try {
            const response = await cancelRequest(request_id);
            console.log(response);
            Refetch.set(true);
        } catch (error) {
            console.error(error);
        }
    }

</script>

<button on:click={deleteRequest} class="btn btn-outline btn-error">Delete Request</button>