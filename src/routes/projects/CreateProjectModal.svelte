<script>
  import { enhance } from '$app/forms';
  import { createEventDispatcher } from 'svelte';

  export let show;

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('close-modal');
  }
</script>

<label
  for="create-project-modal"
  class="modal"
  class:modal-open={show}
  class:cursor-pointer={!show}
  on:click={() => {
    if (show) {
      closeModal();
    }
  }}
  on:keypress
>
  <label class="modal-box relative" for="create_project_modal">
    <form
      id="create_project_modal"
      class="form-control w-full mx-auto"
      method="POST"
      action="?/createProject"
      use:enhance
    >
      <label class="label" for="title">
        <span class="label-text">Project Title</span>
      </label>
      <input
        id="title"
        class="input input-bordered"
        name="title"
        type="text"
        placeholder="My Project..."
        on:click|stopPropagation
      />
      <button class="btn btn-primary mt-5" on:click={closeModal}>Create</button>
    </form>
  </label>
</label>
