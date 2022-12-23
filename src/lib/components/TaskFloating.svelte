<script>
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';

  export let task;
</script>

{#key task.id}
  <div
    class="task-floating bg-base-100 p-5"
    class:--show={task.id}
    transition:fly
  >
    <a
      href={$page.url.pathname}
      class="btn btn-circle btn-ghost box-border ml-auto grid place-content-center mb-5"
    >
      <span role="img" aria-label="Close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          /></svg
        >
      </span>
    </a>
    <h2 class="text-2xl font-bold">{task.title}</h2>
  </div>
{/key}

<style>
  .task-floating {
    display: none;
    position: absolute;
    inset: 0;
    left: calc(100% - 398px);
  }

  .task-floating.--show {
    display: block;
  }
</style>
