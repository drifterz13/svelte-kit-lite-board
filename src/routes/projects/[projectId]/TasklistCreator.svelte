<script>
  import { enhance } from '$app/forms';
  import { autofocus } from '$lib/use/autofocus';
  import { clickOutside } from '$lib/use/clickOutside';
  import { fly } from 'svelte/transition';

  function handleClick(e) {
    creating = !creating;
  }

  let creating = false;

  export let projectId;
</script>

<div class="w-96 h-12">
  {#if creating}
    <form
      action="?/createTasklist"
      method="POST"
      class="form-control h-12 box-border rounded-box"
      in:fly
      use:enhance
      use:clickOutside
      on:outclick={() => (creating = false)}
    >
      <input type="hidden" name="projectId" value={projectId} />
      <label for="tasklist" hidden>Tasklist title</label>
      <input
        id="tasklist"
        name="title"
        type="text"
        class="input input-bordered w-full"
        placeholder="To do"
        use:autofocus
      />
    </form>
  {:else}
    <button class="btn btn-ghost gap-2 w-full" on:click={handleClick}>
      Create tasklist
      <span role="img" aria-label="create tasklist button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </span>
    </button>
  {/if}
</div>
