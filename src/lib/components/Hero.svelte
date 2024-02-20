<script lang="ts">
    import { onMount } from 'svelte';
    import { spaceHero } from '$lib/assets';
    // import { videoLinks } from '$lib/assets';
    let videoElement: HTMLVideoElement;
    let currentVideoIndex = 0;
    // onMount(() => {
    //     videoElement.addEventListener('ended', () => {
    //         currentVideoIndex = (currentVideoIndex + 1) % videoLinks.length;
    //         videoElement.src = videoLinks[currentVideoIndex];
    //         videoElement.play();
    //     });
    // });
</script>

<!-- <div class="hero flex justify-center items-center">
    <video bind:this={videoElement} autoplay muted id="awsccvideo">
        <source src={videoLinks[currentVideoIndex]} type="video/mp4">
    </video>
</div> -->

<div class=" object-center bg-cover bg-center w-full h-[90svh]" style="background-image:url({spaceHero})">
    <!-- <div class="hero-overlay bg-opacity-40"></div> -->
</div>


<style>
    /* #awsccvideo {
        position: relative;
        width: 100%;
        height:  100%;
        object-fit: cover;
    } */
</style>
