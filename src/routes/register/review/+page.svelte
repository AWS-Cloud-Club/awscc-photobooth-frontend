<script>
    import { onMount } from'svelte';
    import { goto } from '$app/navigation';

    export const csr = true;

    function goBack() {
        history.back();
    }

    let payload  = localStorage.getItem("formData");
    console.log(localStorage.getItem("formData"));
</script>


<div class="h-[90svh] flex justify-center items-center bg-[url('/Space.png')] bg-cover bg-center bg-no-repeat relative">
    <div class="absolute inset-0 bg-base-300 opacity-50 h-[90svh]"></div>
    <div class="flex flex-col justify-between bg-opacity-80 h-[70svh] w-[85svw] xl:w-[50svw] md:w-[70svw] sm:w-[80svw] rounded-xl bg-base-200 relative">
        <div class="rounded-t-xl bg-base-300 p-10">
            Point Person: 
        </div>
        <div class="h-full px-10 py-5">
            Emails:
        </div>
        <div class="flex items-center justify-end p-9 space-x-2">
            <button class="btn btn-primary btn-outline w-28" on:click={goBack}>
                Go Back
            </button>
            <button class="btn btn-primary w-28">
                Submit
            </button>
        </div>
    </div>
</div>

<!-- {#each item, index in items}
{/each} -->
