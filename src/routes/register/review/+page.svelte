<script>
    import { onMount } from'svelte';
    export const csr = true;

    let payload  = localStorage.getItem("formData");
    console.log(localStorage.getItem("formData"));

    


</script>


<div class="container">
    <!-- {#each item, index in items}
    {/each} -->
</div>

<style lang=scss>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>