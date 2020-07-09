<style>
  section {
    width: 100%;
    height: 100%;
    padding-top: calc(var(--header-height) / 2);
    padding-bottom: 0;
    position: relative;
    align-items: center;
    display: flex;
    padding: var(--spaces-s);
  }

  span {
    position: absolute;
    bottom: var(--spaces-s);
    left: 0;
    width: 100%;
    text-align: center;
  }

  img {
    width: 100%;
    object-fit: contain;
  }
</style>

<script>
  import { fly, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let logo = null;

  let y;
</script>

<svelte:window bind:scrollY="{y}" />

<section>
  {#if logo}
    <img
      src="/images/icons/{logo}.svg"
      alt=""
      transition:scale="{{ duration: 650, opacity: 0.5, start: 0, easing: quintOut }}" />
  {:else}
    <h2
      class="fs fs--huge color color--gray-dark u-title"
      in:fly="{{ y: 150, duration: 450 }}">
      I’m a multidisciplinary developer with more than 16 years of experience,
      focused on UX, Code and Design
    </h2>
  {/if}
  <span class="fs fs--smallest" style="opacity: {1 - Math.max(0, y / 150)}">
    Scroll down
  </span>
</section>
