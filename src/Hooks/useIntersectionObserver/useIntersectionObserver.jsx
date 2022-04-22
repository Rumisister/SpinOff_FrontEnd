import { useEffect } from 'react';

const useIntersectionObserver = ({
  root,
  target,
  onIntersect,
  threshold = 1,
  rootMargin = '0px',
}) => {
  useEffect(() => {
    if (!root) {
      return;
    }
    console.log(root);
    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    if (!target) {
      return;
    }
    console.log('인터 4');
    console.log(target);
    observer.observe(target);

    return () => {
      console.log('옵저버 언마운트!!!');
      observer.unobserve(target);
    };
  }, [target, root, rootMargin, onIntersect, threshold]);
};

export default useIntersectionObserver;
