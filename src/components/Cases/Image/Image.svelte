<style>
  figure {
    padding: 5%;
    border: 1px solid var(--color-gray-light);
  }

  picture {
    width: 100%;
    overflow: hidden;
  }

  img {
    transition: filter 0.5s 300ms ease-in-out;
    display: block;
    width: 100%;
  }
</style>

<script>
  export let common;
  export let sizes;

  let observer;

  function lazyLoad(images) {
    images.forEach(picture => {
      if (picture.intersectionRatio > 0) {
        const sources = [...picture.target.children];
        const pictureEl = picture.target;

        sources.forEach(source => {
          if (source.hasAttribute('data-srcset')) {
            source.setAttribute('srcset', source.getAttribute('data-srcset'));
          } else {
            source.setAttribute('src', source.getAttribute('data-src'));
          }

          source.addEventListener(
            'load',
            image => {
              image.target.closest('picture').classList.remove('lazy-initial');
            },
            false
          );
        });

        observer.unobserve(pictureEl);
      }
    });
  }

  function setObserver(node) {
    observer = new IntersectionObserver(lazyLoad, {
      rootMargin: '100px',
      threshold: 1.0,
    });

    observer.observe(node);

    return {
      destroy() {
        observer.unobserve(node);
      },
    };
  }
</script>

<figure class="u-case-block">
  <picture use:setObserver>
    {#each sizes as item}
      <source
        media="({item.media})"
        data-srcset="/images/cases/{item.src}"
        alt="{item.alt}" />
    {/each}
    {#if common}
      <img data-src="/images/cases/{common.src}" alt="{common.alt}" />
    {/if}
  </picture>
</figure>
