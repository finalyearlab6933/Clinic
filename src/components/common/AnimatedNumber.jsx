import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';
import './AnimatedNumber.css';

/**
 * AnimatedNumber — counts up from 0 (or `from`) to `value`
 * once the element scrolls into view. Renders with tabular-nums
 * so digits don't shift width mid-animation.
 *
 * Accepts a numeric `value` OR a string like "5,000+" — if the
 * value contains a non-numeric suffix, it animates the numeric
 * portion and re-attaches the suffix.
 */
function AnimatedNumber({
  value,
  from = 0,
  duration = 900,
  className = '',
}) {
  const [ref, inView] = useInView({ threshold: 0.4, once: true });

  // Parse numeric prefix + suffix (e.g. "5,000+" → numeric "5000", suffix "+")
  const match = String(value).match(/^([\d,]*\.?\d+)(.*)$/);
  const numericPart = match ? match[1] : String(value);
  const suffix = match ? match[2] : '';
  const target = parseFloat(numericPart.replace(/,/g, ''));

  const display = useCountUp({
    target,
    from,
    duration,
    start: inView,
    suffix,
  });

  return (
    <span ref={ref} className={`animated-number ${className}`}>
      {display}
    </span>
  );
}

export default AnimatedNumber;