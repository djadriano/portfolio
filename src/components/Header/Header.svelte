<style>
  header {
    z-index: var(--z-index-medium);
    position: relative;
    padding: var(--spaces-s);
  }

  h1 {
    font-weight: 600;
  }

  nav {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    margin: 0;
    position: fixed;
    right: var(--spaces-s);
    top: var(--spaces-s);
    list-style: none;
  }

  li {
    margin-right: var(--spaces-xs);
  }

  li:last-of-type {
    margin-right: 0;
  }
</style>

<script>
  import { onMount } from 'svelte';
  import { Link } from '@components/Link/Index.js';
  export let links;

  let headerEl;

  onMount(() => {
    registerEvents();
    setHeight();
  });

  function registerEvents() {
    window.addEventListener('resize', setHeight);
  }

  function setHeight() {
    const root = document.documentElement;

    root.style.setProperty(
      '--header-height',
      `${headerEl.getBoundingClientRect().height}px`
    );
  }
</script>

<header bind:this="{headerEl}">
  <nav>
    <div>
      <h1 class="fs fs--logo">
        <a href="/" class="color color--black">AKF</a>
      </h1>
      <p class="fs fs--smallest">
        Frontend Developer
        <br />
        Amsterdam, Netherlands
      </p>
    </div>
    <ul>
      {#each links as link}
        <li>
          <Link href="{link.url}" target="_blank">{link.name}</Link>
        </li>
      {/each}
    </ul>
  </nav>
</header>
