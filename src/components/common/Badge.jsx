import './Badge.css';

/**
 * Badge — small soft-tinted status pill.
 * Variants: primary | success | warning | error | info | neutral.
 */
function Badge({
  variant = 'neutral',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
    className,
  ].join(' ');

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}

export default Badge;