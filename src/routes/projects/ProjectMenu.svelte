<script>
  import { invalidate } from '$app/navigation';

  export let projectId;

  async function deleteProject() {
    const response = await fetch('/api/projects', {
      method: 'DELETE',
      body: JSON.stringify({ projectId }),
      headers: {
        'content-type': 'application/json'
      }
    });

    const data = await response.json();
    if (data.success) {
      await invalidate('api:projects');
    }
  }
</script>

<div class="dropdown">
  <label
    tabindex="-1"
    class="btn btn-circle btn-group btn-ghost btn-sm"
    for="project_menu"
  >
    <span role="img" aria-label="Project menu">
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
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>
    </span>
  </label>
  <ul
    id="project_menu"
    tabindex="-1"
    class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
  >
    <li>
      <button on:click={deleteProject} class="text-error capitalize">
        Delete
      </button>
    </li>
  </ul>
</div>
