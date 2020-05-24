<style>
  figure {
    padding: 5%;
    border: 1px solid var(--color-gray-light);
  }

  picture {
    width: 100%;
    overflow: hidden;
  }

  img {
    transition: filter 0.5s 300ms ease-in-out;
    display: block;
    width: 100%;
  }
</style>

<script>
  export let common;
  export let sizes;
</script>

<figure class="u-case-block">
  <picture>
    {#each sizes as item}
      <source
        media="({item.media})"
        srcset="/images/cases/{item.src}"
        alt="{item.alt}" />
    {/each}
    {#if common}
      <img src="/images/cases/{common.src}" alt="{common.alt}" />
    {/if}
  </picture>
</figure>
