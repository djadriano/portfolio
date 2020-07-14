<style>
  section {
    padding: var(--spaces-l) var(--spaces-s);
  }
</style>

<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`case/${params.id}.json`);
    const res2 = await this.fetch(`index.json`);
    const data = await res.json();
    const data2 = await res2.json();

    const nextCaseId = data2.findIndex(item => item.permalink === params.id);

    if (res.status === 200) {
      return {
        caseData: data,
        nextCase: data2[nextCaseId + 1],
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import PageTitle from '@components/PageTitle/PageTitle.svelte';
  import Title from '@components/Cases/Title/Title.svelte';
  import Text from '@components/Cases/Text/Text.svelte';
  import Image from '@components/Cases/Image/Image.svelte';
  import List from '@components/Cases/List/List.svelte';
  import Video from '@components/Cases/Video/Video.svelte';
  import Footer from '@components/Cases/Footer/Footer.svelte';

  export let caseData;
  export let nextCase;
</script>

<svelte:head>
  <title>
    AKF - {caseData.metatags.title} - {caseData.company} / {caseData.year}
  </title>
  <meta name="description" content="{caseData.metatags.description}" />
  <meta name="keywords" content="{caseData.metatags.keywords}" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://akfernandes.dev/cases/{caseData.permalink}" />
  <meta
    property="og:title"
    content="AKF - {caseData.metatags.title} - {caseData.company} / {caseData.year}" />
  <meta property="og:description" content="{caseData.metatags.description}" />
  {#if caseData.metatags.thumb}
    <meta
      property="og:image"
      content="https://akfernandes.dev/images/{caseData.metatags.thumb}" />
  {/if}

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:url"
    content="https://akfernandes.dev/cases/{caseData.permalink}" />
  <meta
    property="twitter:title"
    content="AKF - {caseData.metatags.title} - {caseData.company} / {caseData.year}" />
  <meta
    property="twitter:description"
    content="{caseData.metatags.description}" />
  {#if caseData.metatags.thumb}
    <meta
      property="twitter:image"
      content="https://akfernandes.dev/images/{caseData.metatags.thumb}" />
  {/if}
</svelte:head>

<main>
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
</main>
