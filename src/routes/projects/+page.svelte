<script>
  import CreateProjectModal from './CreateProjectModal.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1 class="text-2xl mb-10">Projects</h1>
<label for="create-project-modal" class="btn gap-2 mb-5">
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

<div class="w-full grid grid-cols-3 gap-5">
  {#each data.projects as project (project.id)}
    <a href={`/projects/${project.id}`}>
      <div class="card w-72 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            {project.title}
          </h2>
        </div>
      </div>
    </a>
  {/each}
</div>

<CreateProjectModal />
