import { Lottie } from 'lottie-react';
import { useEffect, useState } from 'react';
import './LottieAnimation.css';

/**
 * LottieAnimation — wrapper around `lottie-react` (v3+).
 *
 * Props:
 *   animationData   → Lottie JSON object
 *   size            → width & height in px (default 48)
 *   loop, autoplay  → standard
 *   speed           → playback rate
 *   ariaLabel       → optional accessible name (renders role="img")
 *
 * Honors `prefers-reduced-motion` by pinning to first frame
 * (`segment: [0, 1]`) and disabling autoplay. Updates live if
 * the user toggles the OS setting.
 */
function LottieAnimation({
  animationData,
  size = 48,
  loop = true,
  autoplay = true,
  speed = 1,
  className = '',
  ariaLabel,
}) {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const dim = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      className={`lottie-wrap ${className}`}
      style={{ width: dim, height: dim }}
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      <Lottie
        src={animationData}
        loop={loop && !reducedMotion}
        autoplay={autoplay && !reducedMotion}
        speed={speed}
        segment={reducedMotion ? [0, 1] : undefined}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default LottieAnimation;