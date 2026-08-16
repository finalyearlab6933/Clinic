import './IconCircle.css';

/**
 * IconCircle — circular icon container with teal-tinted background.
 * Variants: light (default) / solid / outline.
 * Sizes: sm / md / lg.
 * Pass any React node (typically a Lucide icon component) as `icon`.
 */
function IconCircle({
  icon,
  variant = 'light',
  size = 'md',
  className = '',
  ...rest
}) {
  const classes = [
    'icon-circle',
    `icon-circle--${variant}`,
    `icon-circle--${size}`,
    className,
  ].join(' ');

  return (
    <div className={classes} {...rest}>
      {icon}
    </div>
  );
}

export default IconCircle;