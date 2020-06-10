<style>
  h2 {
    --width: auto;

    max-width: var(--width);
  }

  @media screen and (min-width: 768px) {
    h2 {
      --width: 80%;
    }
  }

  @media screen and (min-width: 1200px) {
    h2 {
      --width: 50%;
    }
  }
</style>

<script>
  export let text;
  export let isBlock = true;
</script>

<h2 class="fs fs--medium" class:u-case-block="{isBlock}">
  <b>{text}</b>
</h2>
