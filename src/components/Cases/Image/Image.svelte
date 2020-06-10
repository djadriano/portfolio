<style>
  figure {
    padding: var(--spaces-xs);
    border: 1px solid var(--color-gray-light);
  }

  picture {
    width: 100%;
    overflow: hidden;
  }

  @media screen and (min-width: 768px) {
    figure {
      min-height: 30rem;
    }
  }
</style>

<script>
  export let sizes;

  let srcset = [];

  function setSourceSet(sources = [], reset = false) {
    const imageAttr = 'data-srcset';

    sources
      .filter(image => image.hasAttribute(imageAttr))
      .map(
        (item, i) => (srcset[i] = reset ? '' : item.getAttribute(imageAttr))
      );
  }

  function setObserver(node) {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: '100px',
      threshold: 1.0,
    });

    function onIntersect(entries = []) {
      entries.forEach(entry => {
        const sources = [...entry.target.children];
        const isIntersect = entry.intersectionRatio > 0 || entry.isIntersecting;

        setSourceSet(sources, !isIntersect);

        if (isIntersect) observer.unobserve(node);
      });
    }

    observer.observe(node);

    return {
      update() {
        observer.observe(node);
      },
      destroy() {
        observer && observer.unobserve(node);
      },
    };
  }
</script>

<figure class="u-case-block">
  <picture use:setObserver="{sizes}">
    {#each sizes as item, index}
      <source
        media="({item.media})"
        data-srcset="/images/cases/{item.src}"
        srcset="{srcset[index]}"
        alt="{item.alt}" />
    {/each}
    <img alt="" />
  </picture>
</figure>
