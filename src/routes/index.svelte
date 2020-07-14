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

<svelte:head>
  <title>AKF - Frontend Developer @ Amsterdam / Netherlands</title>
  <meta
    name="description"
    content="I’m a multidisciplinary developer with more than 16 years of
    experience, focused on UX, Code and Design" />
  <meta
    name="keywords"
    content="frontend developer, amsterdam, react, html5, css, javascript,
    svelte" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://akfernandes.dev" />
  <meta
    property="og:title"
    content="AKF - Frontend Developer @ Amsterdam / Netherlands" />
  <meta
    property="og:description"
    content="I’m a multidisciplinary developer with more than 16 years of
    experience, focused on UX, Code and Design" />
  <meta
    property="og:image"
    content="https://www.akfernandes.dev/images/share-image.jpg" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://akfernandes.dev" />
  <meta
    property="twitter:title"
    content="AKF - Frontend Developer @ Amsterdam / Netherlands" />
  <meta
    property="twitter:description"
    content="I’m a multidisciplinary developer with more than 16 years of
    experience, focused on UX, Code and Design" />
  <meta
    property="twitter:image"
    content="https://www.akfernandes.dev/images/share-image.jpg" />
</svelte:head>

<main>
  <Intro />

  <section>
    <PageTitle />
    <LinksList links="{cases}" />
  </section>
</main>
