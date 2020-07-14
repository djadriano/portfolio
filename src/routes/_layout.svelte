<style lang="scss" global>
  @import './styles/index.scss';
</style>

<script>
  import Header from '@components/Header/Header.svelte';
  import Data from '@components/Header/Header.json';

  // import { stores } from '@sapper/app';
  // const { preloading } = stores();

  // preloading.subscribe(isPreloading => {
  //   if (isPreloading) {
  //     console.log('isPreloading');
  //   } else {
  //     console.log('is not Preloading');
  //   }
  // });
</script>

<Header {...Data} />

<slot />
