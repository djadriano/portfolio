<script>
  export let content;
</script>

<p class="fs fs--small color color--gray-dark u-case-block">
  {#each content as item}
    {@html item}
    <br />
  {/each}
</p>
