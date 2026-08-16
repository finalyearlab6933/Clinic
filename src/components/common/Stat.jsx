import './Stat.css';
import AnimatedNumber from './AnimatedNumber';

/**
 * Stat — large number + label tile.
 * Used for "12+ Years Experience", "8+ Specialists", etc.
 * Numeric values animate via `AnimatedNumber` once in view.
 * Pass `animate={false}` to disable count-up (e.g. for ratings).
 * Optional icon (any React node — pass a Lucide icon component).
 */
function Stat({
  value,
  label,
  icon,
  variant = 'soft',
  align = 'left',
  animate = true,
  className = '',
}) {
  const classes = [
    'stat',
    `stat--${variant}`,
    `stat--${align}`,
    className,
  ].join(' ');

  const isNumeric = animate && /^[\d,]+(\.\d+)?[+%]*$/.test(String(value).trim());

  return (
    <div className={classes}>
      {icon ? <div className="stat__icon">{icon}</div> : null}
      <div className="stat__body">
        <div className="stat__value">
          {isNumeric ? <AnimatedNumber value={value} /> : value}
        </div>
        <div className="stat__label">{label}</div>
      </div>
    </div>
  );
}

export default Stat;