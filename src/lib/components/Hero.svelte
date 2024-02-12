<script lang="ts">
    import { onMount } from 'svelte';
    import { videoLinks } from '$lib/assets';
    let videoElement: HTMLVideoElement;
    let currentVideoIndex = 0; 
    let heroImage = 'https://awscc-photobooth.s3.ap-southeast-1.amazonaws.com/assets/AWS-Cloud-Club.jpg';

    onMount(() => {
        videoElement.addEventListener('ended', () => {
            currentVideoIndex = (currentVideoIndex + 1) % videoLinks.length;
            videoElement.src = videoLinks[currentVideoIndex];
            videoElement.play();
        });
    });
</script>  

<div class="hero flex justify-center items-center">
    <video bind:this={videoElement} autoplay muted id="awsccvideo">
        <source src={videoLinks[currentVideoIndex]} type="video/mp4">
    </video>
</div>

<!-- <div class="hero min-h-screen">
    <div class="hero-overlay bg-opacity-60"></div>
</div> -->


<style>
    .hero {
        object-position: center;
        background-size: cover;
        background-position: center;
        width: 100%;
        background-image: url('https://awscc-photobooth.s3.ap-southeast-1.amazonaws.com/assets/AWS-Cloud-Club.jpg');
    }
    #awsccvideo {
        position: relative;
        width: 100%;
        height:  100%;
        object-fit: cover;
    }
</style>