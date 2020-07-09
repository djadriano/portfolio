const fadeInView = node => {
  const observer = new IntersectionObserver(onIntersect);

  function onIntersect(entries = []) {
    entries.forEach(entry => {
      const isIntersect = entry.intersectionRatio > 0 || entry.isIntersecting;

      if (isIntersect) {
        entry.target.classList.add('is-visible');
        observer.unobserve(node);
      }
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
};

export default fadeInView;
