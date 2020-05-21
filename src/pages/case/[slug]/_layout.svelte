<script>
  import { params, goto } from '@sveltech/routify';
  import CasesData from '@data/cases.json';
  export let slug;

  slug = $params.slug;
  const isPage = CasesData.data.find(item => item.permalink === slug);

  if (!isPage) $goto('/');
</script>

{#if isPage}
  <slot />
{/if}
