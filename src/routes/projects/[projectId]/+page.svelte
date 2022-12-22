<script>
  import { page } from '$app/stores';
  import TaskFloating from '$lib/components/TaskFloating.svelte';
  import Tasklist from './Tasklist.svelte';
  import TasklistCreator from './TasklistCreator.svelte';

  /** @type {import('./$types').PageData} */
  export let data;

  $: taskId = $page.url.searchParams.get('taskId');
</script>

<div class="flex gap-5 items-center mb-10">
  <a
    href="/projects"
    class="link link-primary hover:bg-base-200 w-7 h-7 p-4 rounded-full grid place-content-center"
  >
    <span role="img" aria-label="go back link">
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

<div class="flex gap-8 w-max">
  {#each data.tasklists as tasklist (tasklist.id)}
    <Tasklist {tasklist} />
  {/each}

  <TasklistCreator projectId={data.project.id} />
</div>

{#if taskId}
  <TaskFloating {taskId} />
{/if}
