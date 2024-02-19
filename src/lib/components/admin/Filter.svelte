<script lang="ts">
    import { Funnel } from "phosphor-svelte";
    import { chosenFilter } from "$lib/stores/FilterOptionStore";

    let selectedOption:string = "";

    let filterOptions = {
        "all" : "All",
        "pending": "Pending",
        "sent": "Sent",
        "cancelled": "Cancelled"
    }

    function selectOption(option:string){
        selectedOption = option;
        chosenFilter.set(option);
        console.log("Selected Option", selectedOption);
    }

    function toSentenceCase(str: string): string {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
</script>

<!-- <div class="dropdown">
  <div tabindex="0" role="button" class="btn m-1"> <Funnel /> Filter</div>
  <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    {#each Object.keys(filterOptions) as option}
    <button on:click={() => selectOption(option)}>
        <li class="menu-title">{filterOptions[option]}</li>
    </button>
    {/each}
  </ul>
</div> -->

<div class="dropdown dropdown-bottom dropdown-end">
  <div tabindex="0" role="button" class="btn mb-1 flex min-w-min -space-x-1">
    <span><Funnel size={14} weight="fill" /></span>
    <span>{toSentenceCase(selectedOption) || "Filter"}</span>
  </div>
  <ul tabindex="0" class="dropdown-content z-[1] menu shadow bg-base-100 rounded-lg">
    {#each Object.keys(filterOptions) as option}
    <button on:click={() => selectOption(option)} class="text-left hover:bg-base-200 active:bg-base-300">
        <li class="menu-title">{filterOptions[option]}</li>
    </button>
    {/each}
  </ul>
</div>