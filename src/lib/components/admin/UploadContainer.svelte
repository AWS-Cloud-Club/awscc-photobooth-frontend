<script lang="ts">
    import { ImagesSquare, X } from "phosphor-svelte";
    export let request_id:string = "";
    import { alfUFO } from '$lib/assets';
    let selectedImages: File[] = [];

    // async function uploadImages(){
    //     const fileInput = document.querySelector('.file-input') as HTMLInputElement;
    //     const files = fileInput.files;
    //     if(files){
    //         const formData = new FormData();
    //         for(let i = 0; i < files.length; i++){
    //             formData.append('images', files[i]);
    //         }
    //         formData.append('request_id', request_id);
    //         console.log(formData);
    //         for (var pair of formData.entries()) {
    //             console.log(pair[0]+ ', ' + pair[1]);
    //         }
    //     }
    //     selectedImages = [];
    // }

    async function uploadImages() {
        if (selectedImages.length === 0) {
            return;
        }

        const formData = new FormData();
        for (const image of selectedImages) {
            formData.append('images', image);
            console.log(`Uploading image: ${image.name}`);
        }
        formData.append('request_id', request_id);

        console.log('Form ');
        for (const [name, value] of formData.entries()) {
            console.log(`- ${name}: ${value}`);
        }

        selectedImages = [];

        (document.querySelector('.file-input') as HTMLInputElement).value = '';
    }

    function handleFileChange(event: Event & { currentTarget: HTMLInputElement }) {
        const fileInput = event.currentTarget;
        const files = fileInput.files;
        if(files){
            selectedImages = Array.from(files);
        }
    }

    function removeImage(index: number) {
        selectedImages = selectedImages.filter((_, i) => i !== index);
        const dataTransfer = new DataTransfer();
        for (const image of selectedImages) {
            dataTransfer.items.add(image);
        }
        const fileInput = document.querySelector('.file-input') as HTMLInputElement;
        fileInput.files = dataTransfer.files;
    }

    $: {}
</script>

<div class="shadow flex flex-col items-center w-full p-10 rounded-lg bg-base-200 border-base-300 justify-between space-y-4">
    <div class="h-[40svh] flex flex-col justify-top space-y-4">
        <input type="file" multiple class="file-input file-input-bordered file-input-neutral w-full h-14 max-w-xs border" on:change={handleFileChange} />
        <div class="hide-scrollbar overflow-y-auto h-full space-y-4 bg-base-300 p-4 rounded-lg shadow">
            {#if selectedImages.length === 0}
                <div class="flex flex-col justify-center w-full items-center h-full">
                    <img src="{alfUFO}" class="w-[75px] h-auto opacity-50" alt="AWSCC Pup Manila Logo">
                </div>
            {:else}
                {#each selectedImages as image, index (image.name)}
                    <div class="shadow flex items-center max-w-xs bg-neutral p-3 rounded-sm" data-index="{index}">
                        <div class="w-full overflow-clip text-xs text-neutral-content">
                            {image.name}
                        </div>
                        <button class="text-error hover:text-base-100 active:text-accent transition-all" on:click={() => removeImage(index)}>
                            <X size={16} />
                        </button>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
    <div>
        <button on:click={uploadImages} class="btn btn-outline btn-primary">Submit</button>
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
