<script>
  import { enhance } from '$app/forms';

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<h1 class="text-2xl font-bold capitalize mb-5">Login</h1>

<form class="form-control w-full max-w-xs" method="POST" use:enhance>
  <label class="label" for="email">
    <span class="label-text text-gray-700 font-semibold">Email</span>
  </label>
  <input
    id="email"
    type="email"
    name="email"
    class="input input-bordered w-full max-w-xs"
    class:input-error={form && form.errors && form.errors['email']}
  />

  {#if form && form.errors && form.errors['email']}
    <label class="label" for="email">
      <span class="label-text-alt text-error">{form.errors['email']}</span>
    </label>
  {/if}

  <label class="label" for="password">
    <span class="label-text text-gray-700 font-semibold">Password</span>
  </label>
  <input
    id="password"
    type="password"
    name="password"
    class="input input-bordered w-full max-w-xs"
    class:input-error={form && form.errors && form.errors['password']}
  />

  {#if form && form.errors && form.errors['password']}
    <label class="label" for="password">
      <span class="label-text-alt text-error">{form.errors['password']}</span>
    </label>
  {/if}

  <button type="submit" class="btn btn-primary mt-6">Submit</button>
</form>
