<script>
  import { onMount } from 'svelte';
  import { params, goto } from '@sveltech/routify';
  import CasesData from '@data/cases/list.json';
  export let id;

  let isPage;

  id = $params.id;
  $: isPage = CasesData.data.find(item => item.permalink === id);

  onMount(() => {
    if (!isPage) $goto('/');
  });
</script>

{#if isPage}
  <slot scoped="{isPage}" />
{/if}
