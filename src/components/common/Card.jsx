import './Card.css';

/**
 * Card — consistent surface for content blocks.
 * Variants: default / outlined / elevated.
 * Padding: sm / md / lg.
 * Interactive: pass `onClick` or `as` to render as link/button.
 */
function Card({
  variant = 'default',
  padding = 'md',
  interactive = false,
  className = '',
  as: Component = 'div',
  children,
  ...rest
}) {
  const classes = [
    'card',
    `card--${variant}`,
    `card--p-${padding}`,
    interactive ? 'card--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

export default Card;