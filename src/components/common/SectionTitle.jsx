import './SectionTitle.css';

/**
 * SectionTitle — consistent heading block at the top of every section.
 * eyebrow: small uppercase teal pill (e.g., "OUR SERVICES")
 * title:   main heading (supports highlighted span via children)
 * subtitle: optional supporting paragraph
 * align: left | center
 * action: optional right-aligned content (button, link)
 */
function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  action,
  className = '',
  children,
}) {
  return (
    <div
      className={[
        'section-title',
        `section-title--${align}`,
        className,
      ].join(' ')}
    >
      <div className="section-title__main">
        {eyebrow ? <span className="section-title__eyebrow">{eyebrow}</span> : null}
        {title ? <h2 className="section-title__title">{title}</h2> : null}
        {subtitle ? (
          <p className="section-title__subtitle">{subtitle}</p>
        ) : null}
        {children}
      </div>

      {action ? <div className="section-title__action">{action}</div> : null}
    </div>
  );
}

export default SectionTitle;