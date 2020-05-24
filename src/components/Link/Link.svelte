<style>
  a {
    --color: var(--color-black);
    --color-hover: var(--color-gray-dark);

    color: var(--color);
    font-weight: inherit;
  }

  a:hover {
    text-decoration: line-through;
    color: var(--color-hover);
  }
</style>

<script>
  import { url } from '@sveltech/routify';

  let className = '';

  export { className as class };
  export let fontSize = 'smallest';
  export let color = 'black';
  export let colorHover = 'gray-dark';

  $: ({ href, ...rest } = $$restProps);
</script>

<a
  href="{$url(href)}"
  class="fs fs--{fontSize}
  {className}"
  style="--color: var(--color-{color}); --color-hover: var(--color-{colorHover})"
  {...rest}>
  <slot />
</a>
