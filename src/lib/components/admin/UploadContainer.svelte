<script lang="ts">
    import { ImagesSquare } from "phosphor-svelte";
    export let request_id:string = "";

    async function uploadImages(){
        const fileInput = document.querySelector('.file-input') as HTMLInputElement;
        const files = fileInput.files;
        if(files){
            const formData = new FormData();
            for(let i = 0; i < files.length; i++){
                formData.append('images', files[i]);
            }
            formData.append('request_id', request_id);
            console.log(formData);
            for (var pair of formData.entries()) {
                console.log(pair[0]+ ', ' + pair[1]); 
            }
        }
    }
</script>


<div class="w-full h-[50vh] bg-white rounded-lg flex justify-center items-center px-12 md:px-28">
    <div class="bg-black w-full h-[75%] rounded-lg flex flex-col px-10 py-4">
        <div class="flex items-center self-start p-4 bg-purple-400 w-full rounded-lg text-white">
            <ImagesSquare size={64} color="white"/>
            <span class="text-xl font-bold">Choose Images to Upload</span>
        </div>
        <div class="flex justify-center items-center h-full flex-col gap-10">
            <input type="file" multiple class="file-input file-input-bordered file-input-primary w-full max-w-xs" />
            <button on:click={uploadImages} class="btn btn-outline btn-primary btn-lg">Submit</button>
        </div>
    </div>  
</div>