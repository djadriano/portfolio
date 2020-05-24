<script>
  export let title;
  export let items;
</script>

<div class="u-case-block">
  <h2 class="fs fs--medium">
    <b>{title}</b>
  </h2>
  <ul class="u-reset-list">
    {#each items as item}
      <li class="fs fs--small color color--gray-dark">
        {@html item}
      </li>
    {/each}
  </ul>
</div>
