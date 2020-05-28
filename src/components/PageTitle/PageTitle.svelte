<style>
  aside {
    background: var(--color-white);
    position: sticky;
    top: 0;
    padding: var(--spaces-s);
    border-bottom: 1px solid var(--color-gray-light);
    z-index: var(--z-index-small);
  }
</style>

<script>
  import ProjectName from '@components/ProjectName/ProjectName.svelte';

  export let title = 'Works';
  export let subtitle = null;
  export let date = null;
</script>

<aside class="u-project-name">
  <ProjectName {title} {subtitle} {date} />
</aside>
