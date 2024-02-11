<svelte:head>
    <title>Register | AWSCC-PUP Manila-Photobooth App</title>
</svelte:head>

<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { Trash } from "phosphor-svelte"

    interface Email {
        value: string;
    }

    let formData = {
        pointPerson: "",
        emails: [{ value: "" }]
    };

    let error: string = "";

    function addEmailField() {
        formData = {
            ...formData,
            emails: [...formData.emails, { value: "" }]
        };
    }

    function removeEmailField(index: number) {
        if (formData.emails.length > 1) {
            formData = {
                ...formData,
                emails: formData.emails.filter((_, i) => i !== index)
            };
        }
    }

    function validateForm() {
        const atLeastOneEmailFilled = formData.emails.some((email) => email.value.length > 0);
        if (!atLeastOneEmailFilled) {
            error = "Please enter at least one email address";
            return;
        }

        const pointPersonValue = formData.pointPerson.trim();
        if (!pointPersonValue) {
            error = "Please enter a point person"; 
            return;
        }

        const formDataCopy = { ...formData };
        localStorage.setItem("formData", JSON.stringify(formDataCopy));
    }

    function HandleReviewForm() {
        if (formData.pointPerson.length > 0 && formData.emails.length >= 1) {   
            console.log("submit");
            console.log("formData", formData);
            goto("register/review");
        }
    }

    onMount(() => {
        const savedFormData = localStorage.getItem("formData");

        if (savedFormData) {
            const parsedFormData = JSON.parse(savedFormData);
            formData = parsedFormData;
            console.log("formData: ", parsedFormData);
            console.log(savedFormData);
        }
    });
</script>


<div class="container">
    <form on:submit|preventDefault={validateForm}>
        <div>Point Person
            <input type="text" placeholder="Point Person's Name" class="input input-bordered input-primary w-full max-w-xs" bind:value={formData.pointPerson} required/>
        </div>
        {#each formData.emails as {value}, index(index)}
        <div>
            Email Address {index + 1}
        </div>
        <div class="flex">
            <input type="email" placeholder="Email Address" class="input input-bordered input-primary w-full max-w-xs" bind:value={formData.emails[index].value} required/>
            <button class="btn btn-ghost" on:click={() => removeEmailField(index)}><Trash size={28} color="#df1111" weight="fill"/></button>
        </div>
        {/each}
        <div>
            <button class="btn btn-primary" on:click={addEmailField}>
                Add Email
            </button>
        </div>
        <div>
            <button class="btn btn-primary" on:click={HandleReviewForm}>
                Review
            </button>
        </div>
    </form>
</div>

<style lang=scss>
    .container {
        @apply min-h-screen flex justify-center items-center;
    }
    input {
        @apply p-5
    }
</style>