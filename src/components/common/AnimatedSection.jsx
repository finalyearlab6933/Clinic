import { useInView } from '../../hooks/useInView';
import './AnimatedSection.css';

/**
 * AnimatedSection — wraps a block of content and fades it up
 * (with optional stagger) when it scrolls into view.
 *
 * Uses IntersectionObserver (via `useInView`) + CSS keyframes
 * for transform-only animation. Honors prefers-reduced-motion
 * (animation skipped, content shown instantly).
 *
 * Props:
 *   as         → tag/component to render (default: 'div')
 *   delay      → optional animation-delay override (ms)
 *   className  → pass-through
 *   threshold  → IntersectionObserver threshold
 */
function AnimatedSection({
  as: Component = 'div',
  delay = 0,
  threshold = 0.15,
  className = '',
  children,
  ...rest
}) {
  const [ref, inView] = useInView({ threshold, once: true });

  const classes = [
    'animated-section',
    inView ? 'animated-section--in' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      ref={ref}
      className={classes}
      style={delay ? { '--anim-delay': `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default AnimatedSection;