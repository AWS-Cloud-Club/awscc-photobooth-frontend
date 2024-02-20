<script lang="ts">
  export let status;
  let isVisible = false;
  export function show() {
    isVisible = true;
  };

  let image = "";
  let phrase = "";

  if (status === "success") {
    phrase = "Success";
    image = "https://media.giphy.com/media/3o7TKz5vVUzY9v6w9C/giphy.gif";
  } else if (status === "error") {
    phrase = "Failed";
    image = "https://media.giphy.com/media/3o7TKz5vVUzY9v6w9C/giphy.gif";
  }
</script>

{#if isVisible}
  <dialog id="my_modal_2" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">{phrase}</h3>
      <div>
        <img src="{image}" alt="">
      </div>
      <p class="py-4">Press ESC key or click outside to close</p>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
{/if}