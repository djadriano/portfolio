<script>
  import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div
  class="foo"
  in:fade="{{ delay: 600, duration: 300 }}"
  out:fade="{{ duration: 300 }}">
  <h1 in:fly="{{ delay: 600, duration: 300, y: 100 }}">About this site</h1>
  <p in:fly="{{ delay: 900, duration: 300, y: 100 }}">
    This is the 'about' page. There's not much here.
  </p>
</div>
