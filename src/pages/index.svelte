<style>
  main {
    height: 100%;
    position: relative;
    top: calc(-1 * var(--header-height));
  }
</style>

<script>
  import Intro from '@components/Intro/Intro.svelte';
  import PageTitle from '@components/PageTitle/PageTitle.svelte';
  import LinksList from '@components/LinksList/LinksList.svelte';
  import { Cases, Personal } from '@stores/stores.js';
</script>

<main>
  <Intro />

  <section>
    <PageTitle />
    <LinksList links="{$Cases}" />
  </section>

  <section>
    <PageTitle title="Personal" />
    <LinksList links="{$Personal}" />
  </section>
</main>
