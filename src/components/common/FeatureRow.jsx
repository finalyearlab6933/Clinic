import './FeatureRow.css';

/**
 * FeatureRow — icon + title + description row.
 * Used in About (checkmarks) and service pages.
 * Pass any Lucide icon as `icon`. Title and description render inline.
 */
function FeatureRow({
  icon,
  title,
  description,
  variant = 'check',
  className = '',
}) {
  return (
    <div className={['feature-row', `feature-row--${variant}`, className].join(' ')}>
      <div className="feature-row__icon">{icon}</div>
      <div className="feature-row__body">
        <div className="feature-row__title">{title}</div>
        {description ? (
          <div className="feature-row__description">{description}</div>
        ) : null}
      </div>
    </div>
  );
}

export default FeatureRow;