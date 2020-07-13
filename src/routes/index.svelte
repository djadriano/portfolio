<style>
  main {
    height: 100%;
    position: relative;
    top: calc(-1 * var(--header-height));
  }
</style>

<script context="module">
  export function preload() {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(cases => {
        return { cases };
      });
  }
</script>

<script>
  import Intro from '@components/Intro/Intro.svelte';
  import PageTitle from '@components/PageTitle/PageTitle.svelte';
  import LinksList from '@components/LinksList/LinksList.svelte';

  export let cases;
</script>

<main>
  <Intro />

  <section>
    <PageTitle />
    <LinksList links="{cases}" />
  </section>
</main>
