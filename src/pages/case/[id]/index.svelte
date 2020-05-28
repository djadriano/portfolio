<style>
  section {
    padding: var(--spaces-l) var(--spaces-s);
  }
</style>

<script>
  import { params } from '@sveltech/routify';
  import { PageTitle } from '@components/PageTitle/Index.js';
  import { Title } from '@components/Cases/Title/Index.js';
  import { Text } from '@components/Cases/Text/Index.js';
  import { Image } from '@components/Cases/Image/Index.js';
  import { List } from '@components/Cases/List/Index.js';
  import { Video } from '@components/Cases/Video/Index.js';
  import { Footer } from '@components/Cases/Footer/Index.js';
  import CasesData from '@data/cases/list.json';

  export let id;
  export let scoped;

  let caseId;
  let nextCase;

  $: id = $params.id;
  $: caseId = CasesData.data.findIndex(item => item.permalink === id);
  $: nextCase = CasesData.data[caseId + 1];
</script>

<main>
  <PageTitle
    title="{scoped.name}"
    subtitle="{scoped.company}"
    date="{scoped.year}" />

  <section>
    {#each scoped.content as item}
      {#if item.type === 'title'}
        <Title text="{item.text}" />
      {/if}
      {#if item.type === 'text'}
        <Text content="{item.content}" />
      {/if}
      {#if item.type === 'image'}
        <Image common="{item.common}" sizes="{item.sizes}" />
      {/if}
      {#if item.type === 'list'}
        <List title="{item.title}" items="{item.items}" />
      {/if}
      {#if item.type === 'video'}
        <Video url="{item.url}" />
      {/if}
    {/each}
  </section>

  {#if nextCase}
    <Footer name="{nextCase.name}" permalink="{nextCase.permalink}" />
  {/if}
</main>
