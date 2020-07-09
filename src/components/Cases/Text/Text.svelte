<style>
  p {
    --width: auto;

    max-width: var(--width);
  }

  @media screen and (min-width: 1200px) {
    p {
      --width: 60%;
    }
  }
</style>

<script>
  import fadeInView from '@actions/fadeInView.js';
  export let content;
</script>

<p
  class="fs fs--small color color--gray-dark u-case-block u-fade-in-view"
  use:fadeInView>
  {#each content as item}
    {@html item}
    <br />
  {/each}
</p>
