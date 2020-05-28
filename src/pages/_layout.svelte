<script>
  import Header from '@components/Header/Header.svelte';
  import Data from '@components/Header/Header.json';
</script>

<Header {...Data} />

<slot />
