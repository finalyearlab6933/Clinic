import { useEffect, useRef, useState } from 'react';

const formatValue = (n, prefix, suffix, decimals) =>
  `${prefix}${n.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${suffix}`;

const getReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * useCountUp — animates a numeric value from `from` to `target`
 * over `duration` ms using easeOutCubic. Returns the display value
 * as a string with prefix/suffix preserved.
 *
 * Honors `prefers-reduced-motion`: returns target immediately.
 */
export function useCountUp({
  target,
  from = 0,
  duration = 900,
  start = true,
  prefix = '',
  suffix = '',
  decimals = 0,
} = {}) {
  const reducedMotion = getReducedMotion();
  // Initial value: target if reduced motion, else `from` if not started, else `from` (animation will tick it up).
  const initial =
    reducedMotion ? target : start ? from : from;
  const [value, setValue] = useState(
    formatValue(initial, prefix, suffix, decimals)
  );
  const rafRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (!start) return;

    if (reducedMotion) return; // initial state already = target

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    startTimeRef.current = performance.now();

    const tick = (now) => {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const current = from + (target - from) * eased;
      setValue(formatValue(current, prefix, suffix, decimals));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, target, from, duration, prefix, suffix, decimals, reducedMotion]);

  return value;
}

export default useCountUp;