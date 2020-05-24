<style>
  main {
    height: 100%;
    position: relative;
    top: calc(-1 * var(--header-height));
  }
</style>

<script>
  import { Intro } from '@components/Intro/Index.js';
  import { PageTitle } from '@components/PageTitle/Index.js';
  import { LinksList } from '@components/LinksList/Index.js';
  import CasesData from '@data/cases/list.json';
  import PersonalData from '@data/personal.json';
</script>

<main>
  <Intro />

  <section>
    <PageTitle />
    <LinksList links="{CasesData.data}" />
  </section>

  <section>
    <PageTitle title="Personal" />
    <LinksList links="{PersonalData.data}" />
  </section>
</main>
