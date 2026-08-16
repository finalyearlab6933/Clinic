import { forwardRef, useEffect, useRef, useState } from 'react';
import './TextField.css';

/**
 * TextField — label + input/select/textarea wrapper.
 * Use `as="input" | "select" | "textarea"` to choose element type.
 * Pass standard HTML attributes via spread (placeholder, required, rows, etc.).
 *
 * When `error` transitions from falsy → truthy after mount, the
 * control shakes gently (CSS keyframe).
 */
const TextField = forwardRef(function TextField(
  {
    label,
    helperText,
    error,
    required,
    as = 'input',
    className = '',
    id,
    children,
    ...rest
  },
  ref
) {
  const generatedId =
    id || `field-${Math.random().toString(36).slice(2, 9)}`;
  const [shake, setShake] = useState(false);
  const firstRender = useRef(true);
  const prevError = useRef(error);

  useEffect(() => {
    // Skip first render so initial errors don't shake
    if (firstRender.current) {
      firstRender.current = false;
      prevError.current = error;
      return;
    }
    // Shake only on transition falsy → truthy
    if (error && !prevError.current) {
      setShake(true);
      const id = setTimeout(() => setShake(false), 360);
      prevError.current = error;
      return () => clearTimeout(id);
    }
    prevError.current = error;
  }, [error]);

  const classes = [
    'textfield',
    error ? 'textfield--error' : '',
    shake ? 'textfield--shake' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const Element = as;

  return (
    <div className={classes}>
      {label ? (
        <label htmlFor={generatedId} className="textfield__label">
          {label}
          {required ? <span className="textfield__required">*</span> : null}
        </label>
      ) : null}

      <Element
        id={generatedId}
        ref={ref}
        className={`textfield__control textfield__${as}`}
        {...rest}
      >
        {children}
      </Element>

      {error ? (
        <div className="textfield__error">{error}</div>
      ) : helperText ? (
        <div className="textfield__helper">{helperText}</div>
      ) : null}
    </div>
  );
});

export default TextField;