<script lang="ts">
    import { onMount } from'svelte';
    import { goto } from '$app/navigation';
    import { space } from '$lib/assets'

    function goBack() {
        history.back();
    }
    
    let formData = localStorage.getItem("formData");
    let payload = formData ? JSON.parse(formData) : {};

    let emails: String[] = payload.emails ? payload.emails.map((email: {value: string}) => email.value) : [];
    let pointPerson = payload.pointPerson ? payload.pointPerson : "Not Available";

    function onSubmit() {
        
        try {
            console.log("Form Submitted");
            console.log('Payload', payload);
            goto('/register/review/success');
            localStorage.removeItem("formData");
        } catch (err) {
            console.error(err);
        }
    }
</script>


<div class="h-[90svh] flex justify-center items-center  bg-cover bg-center bg-no-repeat relative" style="background-image: url({space})">
    <div class="absolute inset-0 bg-base-300 opacity-50 h-[90svh]"></div>
    <div class="flex flex-col justify-between bg-opacity-80 h-[70svh] w-[85svw] xl:w-[50svw] md:w-[70svw] sm:w-[80svw] rounded-xl bg-base-200 relative">
        <div class="rounded-t-xl bg-base-300 p-10 flex gap-2">
            Point Person: 
            <div>
                {pointPerson}
            </div>
        </div>
        <div class="h-full px-10 py-5">
            Emails:
            <div class="flex flex-col">
                {#each emails as email}
                    <div>{email}</div>
                {/each}
            </div>
        </div>
        <div class="flex items-center justify-end p-9 space-x-2">
            <button class="btn btn-primary btn-outline w-28" on:click={goBack}>
                Go Back
            </button>
            <button on:click={onSubmit}  class="btn btn-primary w-28">
                Submit
            </button>
        </div>
    </div>
</div>

<!-- {#each item, index in items}
{/each} -->
