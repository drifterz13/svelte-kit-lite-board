<script>
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';
  import { autofocus } from '$lib/use/autofocus';
  import { clickOutside } from '$lib/use/clickOutside';
  import { fly } from 'svelte/transition';

  export let tasklist;

  let creating = false;
  function handleClick(e) {
    creating = !creating;
  }
</script>

<ul class="flex flex-col bg-base-100 w-96 rounded-box h-min">
  <li
    class="flex justify-between items-center text-sm py-4 px-6 font-bold capitalize text-gray-700"
  >
    <span>{tasklist.title}</span>
    <button class="btn btn-square btn-xs" on:click={handleClick}>
      <span role="img" aria-label="toggle task input button">
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
            d="M12 6v12m6-6H6"
          />
        </svg>
      </span>
    </button>
  </li>

  {#each tasklist.tasks as task (task.id)}
    <a href={`${$page.url.pathname}?taskId=${task.id}`}>
      <li
        class="px-6 py-3 h-12 box-border rounded-box hover:bg-base-200 cursor-pointer mb-2"
      >
        {task.title}
      </li>
    </a>
  {/each}

  {#if creating}
    <li
      class="form-control h-12 box-border rounded-box"
      in:fly={{ duration: 500 }}
      use:clickOutside
      on:outclick={() => (creating = false)}
    >
      <form action="?/createTask" method="POST" use:enhance>
        <input type="hidden" name="tasklistId" value={tasklist.id} />
        <label for="task-input" hidden>Task title</label>
        <input
          id="task-input"
          name="title"
          type="text"
          class="input input-bordered w-full"
          placeholder="My task"
          use:autofocus
        />
      </form>
    </li>
  {/if}
</ul>
