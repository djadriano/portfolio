<script>
  import Main from '@components/Main/Main.svelte';
  import Intro from '@components/Intro/Intro.svelte';
  import PageTitle from '@components/PageTitle/PageTitle.svelte';
  import LinksList from '@components/LinksList/LinksList.svelte';
  import { Cases } from '@stores/stores.js';
</script>

<Main>
  <Intro />

  <section>
    <PageTitle />
    <LinksList links="{$Cases}" />
  </section>
</Main>
