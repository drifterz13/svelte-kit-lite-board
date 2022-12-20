<input type="checkbox" id="create-project-modal" class="modal-toggle" />
<label for="create-project-modal" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <form
      class="form-control w-full mx-auto"
      method="POST"
      action="?/createProject"
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
      />
      <button class="btn btn-primary mt-5">Create</button>
    </form>
  </label>
</label>
