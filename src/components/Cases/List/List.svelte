<style>
  li {
    margin-bottom: var(--spaces-xxs);
  }

  li:last-of-type {
    margin-bottom: 0;
  }
</style>

<script>
  import Link from '@components/Link/Link.svelte';
  import Title from '@components/Cases/Title/Title.svelte';

  export let title;
  export let items;
</script>

<div class="u-case-block">
  <Title text="{title}" isBlock="{false}" />
  <ul class="u-reset-list">
    {#each items as item}
      <li class="fs fs--small color color--gray-dark">
        {#if item.href}
          <Link href="{item.href}" fontSize="small" class="" target="_blank">
            {item.text}
          </Link>
        {:else}
          {@html item.text}
        {/if}
      </li>
    {/each}
  </ul>
</div>
