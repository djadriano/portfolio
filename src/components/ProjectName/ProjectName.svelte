<style>
  div {
    display: flex;
    flex-direction: column;
  }

  h2 {
    order: 2;
  }

  p {
    order: 1;
    margin-top: 0;
    margin-bottom: var(--spaces-xxs);
    color: var(--color-gray-dark);
  }
</style>

<script>
  export let title = 'Works';
  export let subtitle = null;
  export let date = null;
  export let color = 'gray-dark';
</script>

<div>
  <h2 class="fs fs--huge u-title color color--{color}">{title}</h2>
  {#if subtitle}
    <p class="fs fs--smallest">
      {subtitle}
      {#if date}
        -
        <time>{date}</time>
      {/if}
    </p>
  {/if}
</div>
