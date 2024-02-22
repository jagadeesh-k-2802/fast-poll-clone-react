import React from 'react';

// React Query Load More / Infinite Scroll Example
// https://react-query.tanstack.com/examples/load-more-infinite-scroll
const useIntersectionObserver = ({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  enabled = true
}) => {
  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.isIntersecting && onIntersect();
        });
      },
      {
        root: root && root.current,
        rootMargin,
        threshold
      }
    );

    if (!target) {
      return;
    }

    observer.observe(target);
    return () => observer.unobserve(target);
  }, [target, enabled, root, onIntersect, threshold, rootMargin]);
};

export default useIntersectionObserver;
