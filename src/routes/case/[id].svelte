<style>
  section {
    padding: var(--spaces-l) var(--spaces-s);
  }
</style>

<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`case/${params.id}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return {
        caseData: data,
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
</script>

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

  <Footer />
</main>
