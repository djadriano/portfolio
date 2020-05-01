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
  export let links;
</script>

<header>
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
          <a
            href="{link.url}"
            target="_blank"
            class="fs fs--smallest color color--black">
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
