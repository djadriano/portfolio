<style>
  .content {
    padding: var(--spaces-l) var(--spaces-s);
  }
</style>

<script>
  import { params, beforeUrlChange } from '@sveltech/routify';
  import Main from '@components/Main/Main.svelte';
  import Intro from '@components/Intro/Intro.svelte';
  import PageTitle from '@components/PageTitle/PageTitle.svelte';
  import Title from '@components/Cases/Title/Title.svelte';
  import Text from '@components/Cases/Text/Text.svelte';
  import Image from '@components/Cases/Image/Image.svelte';
  import List from '@components/Cases/List/List.svelte';
  import Video from '@components/Cases/Video/Video.svelte';
  import Footer from '@components/Cases/Footer/Footer.svelte';
  import { Cases } from '@stores/stores.js';

  export let id;

  let caseId;
  let nextCase;
  let caseData;

  let currentUrl;

  $: {
    id = $params.id;
    caseId = $Cases.findIndex(item => item.permalink === id);
    caseData = $Cases.find(item => item.permalink === id);
    nextCase = $Cases[caseId + 1];
  }

  $beforeUrlChange((event, store) => {
    currentUrl = store.params.id;
    return true;
  });
</script>

{#if caseData && currentUrl !== id}
  <!-- <main>
    <PageTitle
      title="{caseData.name}"
      subtitle="{caseData.company}"
      date="{caseData.year}" />

    <section>
      {#each caseData.content as item}
        {#if item.type === 'title'}
          <Title text="{item.text}" />
        {/if}
        {#if item.type === 'text'}
          <Text content="{item.content}" />
        {/if}
        {#if item.type === 'image'}
          <Image sizes="{item.sizes}" />
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
  </main> -->

  <Main>
    <Intro logo="{caseData.logo}" />

    <section>
      <PageTitle
        title="{caseData.name}"
        subtitle="{caseData.company}"
        date="{caseData.year}" />

      <div class="content">
        {#each caseData.content as item}
          {#if item.type === 'title'}
            <Title text="{item.text}" />
          {/if}
          {#if item.type === 'text'}
            <Text content="{item.content}" />
          {/if}
          {#if item.type === 'image'}
            <Image sizes="{item.sizes}" />
          {/if}
          {#if item.type === 'list'}
            <List title="{item.title}" items="{item.items}" />
          {/if}
          {#if item.type === 'video'}
            <Video url="{item.url}" />
          {/if}
        {/each}
      </div>

      {#if nextCase}
        <Footer name="{nextCase.name}" permalink="{nextCase.permalink}" />
      {/if}
    </section>

  </Main>
{/if}
