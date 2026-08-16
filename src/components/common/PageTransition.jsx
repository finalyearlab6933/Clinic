import { useLocation } from 'react-router-dom';
import './PageTransition.css';

/**
 * PageTransition — wraps routed content and fades it up on every
 * route change. The `key` prop forces React to remount the wrapper
 * div whenever the pathname changes, which re-triggers the CSS
 * `page-transition-enter` keyframe. No JS state needed.
 */
function PageTransition({ children, className = '' }) {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      className={`page-transition page-transition--enter ${className}`}
    >
      {children}
    </div>
  );
}

export default PageTransition;