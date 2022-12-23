<script>
  import CreateProjectModal from './CreateProjectModal.svelte';
  import ProjectMenu from './ProjectMenu.svelte';

  /** @type {import('./$types').PageData} */
  export let data;

  let show;
</script>

<h1 class="text-2xl mb-10">Projects</h1>
<label
  for="create-project-modal"
  class="btn gap-2 mb-5"
  on:click={() => (show = true)}
  on:keypress
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
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  </span>
  Create Project
</label>

<div class="w-full flex flex-wrap gap-5">
  {#each data.projects as project (project.id)}
    <div class="card w-72 bg-base-100 shadow-xl">
      <div class="card-body flex flex-row items-baseline justify-between">
        <h2 class="card-title">
          {project.title}
        </h2>
        <div class="flex gap-1 items-center">
          <a
            href={`/projects/${project.id}`}
            class="capitalize btn btn-outline btn-primary btn-sm"
          >
            Open
          </a>
          <ProjectMenu projectId={project.id} />
        </div>
      </div>
    </div>
  {/each}
</div>

<CreateProjectModal {show} on:close-modal={() => (show = false)} />
