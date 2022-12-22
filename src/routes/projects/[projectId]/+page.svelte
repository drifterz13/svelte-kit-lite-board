<script>
  import { page } from '$app/stores';
  import TaskFloating from '$lib/components/TaskFloating.svelte';
  import { autofocus } from '$lib/use/autofocus';
  import { fly } from 'svelte/transition';

  /** @type {import('./$types').PageData} */
  export let data;

  let taskInputVisible = false;

  function toggleTaskInputVisibility() {
    taskInputVisible = !taskInputVisible;
  }

  $: taskId = $page.url.searchParams.get('taskId');
</script>

<div class="flex gap-5 items-center mb-10">
  <a
    href="/projects"
    class="link link-primary hover:bg-base-200 w-7 h-7 p-4 rounded-full grid place-content-center"
  >
    <span role="img" aria-label="back icon">
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
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
    </span>
  </a>
  <h1 class="text-2xl">{data.project.title}</h1>
</div>

<div class="grid grid-flow-col gap-8 w-max">
  {#each data.tasklists as tasklist (tasklist.id)}
    <ul class="flex flex-col bg-base-100 w-96 rounded-box">
      <li
        class="flex justify-between items-center text-sm py-4 px-6 font-bold capitalize text-gray-700"
      >
        <span>{tasklist.title}</span>
        <button
          class="btn btn-square btn-xs"
          on:click={toggleTaskInputVisibility}
        >
          <span role="img" aria-label="plus icon">
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
        <li
          class="px-6 py-3 h-12 box-border rounded-box hover:bg-base-200 cursor-pointer mb-2"
        >
          <a class="block" href={`${$page.url.pathname}?taskId=${task.id}`}>
            {task.title}
          </a>
        </li>
      {/each}

      {#if taskInputVisible}
        <li
          class="form-control h-12 box-border rounded-box"
          in:fly={{ duration: 500 }}
        >
          <form action="?/createTask" method="POST">
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
  {/each}
</div>

{#if taskId}
  <TaskFloating {taskId} />
{/if}
