import './Button.css';

/**
 * Button — primary, secondary, outline, ghost, link variants.
 * Pill border-radius by default; rounded-md option available.
 * Sizes: sm (36px) / md (44px) / lg (52px).
 * Renders <button> by default; pass `as={Link}` (from react-router) or
 * `href="#"` to render as link/anchor.
 */
function Button({
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  as: Component = 'button',
  children,
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    `btn--${shape}`,
    fullWidth ? 'btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...rest}>
      {leftIcon ? <span className="btn__icon">{leftIcon}</span> : null}
      <span className="btn__label">{children}</span>
      {rightIcon ? <span className="btn__icon">{rightIcon}</span> : null}
    </Component>
  );
}

export default Button;