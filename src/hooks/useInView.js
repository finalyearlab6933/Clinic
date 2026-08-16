import { useEffect, useRef, useState } from 'react';

const getInitialReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * useInView — IntersectionObserver hook returning [ref, isInView].
 *
 * When the user prefers reduced motion, `isInView` is true from
 * the first render so entrance animations are skipped and content
 * shows instantly.
 */
export function useInView({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const reducedMotion = getInitialReducedMotion();
  const [isInView, setIsInView] = useState(reducedMotion ? true : false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      // Fallback for SSR / older browsers: assume in view
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isInView];
}

export default useInView;