<style>
  main {
    height: 100%;
    position: relative;
    top: calc(-1 * var(--header-height));
  }
</style>

<script>
  import { Header, Data } from '@components/Header/Index.js';
</script>

<Header {...Data} />

<main>
  <slot />
</main>
