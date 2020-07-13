<style lang="scss" global>
  @import './styles/index.scss';
</style>

<script>
  import Header from '@components/Header/Header.svelte';
  import Data from '@components/Header/Header.json';
</script>

<Header {...Data} />

<slot />
