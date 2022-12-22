<script>
  import { fade, fly } from 'svelte/transition';

  export let taskId;
</script>

{#key taskId}
  <div
    class="task-floating bg-base-200"
    class:--show={taskId}
    in:fly={{ delay: taskId ? 250 : 0 }}
    out:fade
  />
{/key}

<style>
  .task-floating {
    display: none;
    position: absolute;
    inset: 0;
    left: calc(100% - 398px);
  }

  .task-floating.--show {
    display: block;
  }
</style>
