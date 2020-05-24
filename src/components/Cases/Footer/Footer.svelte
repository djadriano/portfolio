<style>
  footer {
    padding: var(--spaces-s);
    margin-top: var(--spaces-s);
  }
</style>

<script>
  import { ProjectName } from '@components/ProjectName/Index.js';

  export let name;
  export let permalink;
</script>

<footer class="u-project-name">
  <ProjectName
    title="{name}"
    subtitle="Next project"
    color="black"
    link="/case/{permalink}" />
</footer>
