<script lang="ts">
    import { onMount } from'svelte';
    import { goto } from '$app/navigation';
    import { space } from '$lib/assets'
    import { User, Envelope } from 'phosphor-svelte'

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
    <div class="absolute inset-0 bg-base-300 opacity-20 h-[90svh]"></div>
    <div class="flex flex-col justify-between bg-opacity-80 h-[70svh] w-[85svw] xl:w-[50svw] md:w-[70svw] sm:w-[80svw] rounded-xl bg-base-100 relative">
        <div class="rounded-t-xl bg-base-300 p-10 mb-5 flex space-x-2 items-center text-lg">
            <span>
                <User weight="fill" size={18} />
            </span>
            <span>
                Point Person:
            </span>
            <span class="text-accent font-semibold">
                {pointPerson}
            </span>
        </div>
        <div class="hide-scrollbar space-y-3 overflow-y-auto h-full px-10 pb-5">
            <div class="flex space-x-2 items-center text-lg">
                <span>
                    <Envelope weight="fill" size={20} />
                </span>
                <span>
                    Emails:
                </span> 
            </div>
            <div class="flex flex-col space-y-3">
                {#each emails as email}
                    <div class="hide-scrollbar overflow-x-auto rounded-xl w-full bg-base-200 p-5 shadow">{email}</div>
                {/each}
            </div>
        </div>
        <div class="flex items-center justify-end px-9 pt-5 pb-9 space-x-2">
            <button class="btn btn-secondary btn-outline w-28" on:click={goBack}>
                Go Back
            </button>
            <button on:click={onSubmit}  class="btn btn-primary w-28">
                Submit
            </button>
        </div>
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
