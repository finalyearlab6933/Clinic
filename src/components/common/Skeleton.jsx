import './Skeleton.css';

/**
 * Skeleton — placeholder while content loads.
 * Pure CSS shimmer animation; lightweight; no Lottie.
 *
 * Variants:
 *   - text         → single line (auto width)
 *   - text-block   → multi-line paragraph
 *   - card         → rounded rectangle (default)
 *   - circle       → perfect circle (avatar)
 *   - image        → 16:9 ratio rectangle
 */
function Skeleton({
  variant = 'card',
  width,
  height,
  lines = 1,
  className = '',
  style,
}) {
  if (variant === 'text-block') {
    return (
      <div className={`skeleton-stack ${className}`} style={style}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="skeleton skeleton--text"
            style={{
              width: i === lines - 1 ? '70%' : '100%',
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'circle') {
    return (
      <div
        className={`skeleton skeleton--circle ${className}`}
        style={{ width, height, ...style }}
      />
    );
  }

  if (variant === 'image') {
    return (
      <div
        className={`skeleton skeleton--image ${className}`}
        style={{ width, height, ...style }}
      />
    );
  }

  return (
    <div
      className={`skeleton skeleton--${variant} ${className}`}
      style={{ width, height, ...style }}
    />
  );
}

export default Skeleton;