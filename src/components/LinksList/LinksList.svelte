<style>
  ul {
    padding: var(--spaces-s);
    margin-top: var(--spaces-xs);
  }

  li {
    margin-bottom: var(--spaces-s);
  }

  li:last-of-type {
    margin-bottom: 0;
  }
</style>

<script>
  import ProjectName from '@components/ProjectName/ProjectName.svelte';

  export let links = [];
</script>

<ul class="u-reset-list">
  {#each links as item}
    <li class="u-project-name">
      <ProjectName
        title="{item.name}"
        subtitle="{item.company}"
        color="black"
        link="{item.permalink}"
        date="{item.year}" />
    </li>
  {/each}
</ul>
