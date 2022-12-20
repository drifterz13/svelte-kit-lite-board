<script>
  import { autofocus } from '$lib/use/autofocus';

  /** @type {import('./$types').PageData} */
  export let data;

  let taskInputVisible = false;

  function toggleTaskInputVisibility() {
    taskInputVisible = !taskInputVisible;
  }
</script>

<h1 class="text-2xl mb-10">{data.project.title}</h1>

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
        </button>
      </li>

      {#each tasklist.tasks as task (task.id)}
        <li
          class="px-6 py-3 h-12 box-border rounded-box hover:bg-base-200 cursor-pointer mb-2"
        >
          {task.title}
        </li>
      {/each}

      {#if taskInputVisible}
        <!-- content here -->
        <li class="form-control h-12 box-border rounded-box">
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
