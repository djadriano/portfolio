<script>
  import { onMount } from 'svelte';
  import { params, goto } from '@sveltech/routify';
  import { Cases } from '@stores/stores.js';
  export let id;

  let isPage;

  id = $params.id;
  $: isPage = $Cases.find(item => item.permalink === id);

  onMount(() => {
    if (!isPage) $goto('/');
  });
</script>

<svelte:head>
  <title>AKF - {isPage.name}</title>
</svelte:head>

{#if isPage}
  <slot scoped="{isPage}" />
{/if}
