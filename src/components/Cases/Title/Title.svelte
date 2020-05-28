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
</script>

<h2 class="fs fs--medium u-case-block">
  <b>{text}</b>
</h2>
