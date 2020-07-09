<style>
  footer {
    padding: var(--spaces-s);
  }
</style>

<script>
  import ProjectName from '@components/ProjectName/ProjectName.svelte';

  export let name;
  export let permalink;
</script>

<footer class="u-project-name">
  <ProjectName
    title="{name}"
    subtitle="Next project"
    color="black"
    link="{permalink}" />
</footer>
