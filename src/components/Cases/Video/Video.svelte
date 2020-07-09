<style>
  div {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 2.5rem;
    height: 0;
    border: 1px solid var(--color-gray-light);
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<script>
  import fadeInView from '@actions/fadeInView.js';
  export let url;
</script>

<div class="u-case-block u-fade-in-view" use:fadeInView>
  <iframe
    src="{url}"
    frameborder="0"
    title="video-player"
    allowfullscreen></iframe>
</div>
