<script lang="ts">

    export let request_id: String = "";

    async function deleteRequest() {
        console.log("Deleting request", request_id);
    }

</script>

<button on:click={deleteRequest} class="btn btn-outline btn-error">Delete Request</button>