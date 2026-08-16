import { useEffect } from 'react';
import LottieAnimation from './LottieAnimation';
import { successCheck, errorCross, loading } from '../../theme/lottie/animations';
import './Toast.css';

/**
 * Toast — slide-in notification with Lottie icon. Auto-dismiss
 * after `duration` ms (default 3500ms). Built but not wired
 * into the current pages — ready for future use.
 *
 * Props:
 *   variant: 'success' | 'error' | 'info' (default 'success')
 *   title, message, duration, onClose
 */
function Toast({
  variant = 'success',
  title,
  message,
  duration = 3500,
  onClose,
}) {
  useEffect(() => {
    if (!duration) return;
    const id = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(id);
  }, [duration, onClose]);

  const animMap = {
    success: successCheck,
    error: errorCross,
    info: loading,
  };

  return (
    <div className={`toast toast--${variant}`} role="status" aria-live="polite">
      <LottieAnimation
        animationData={animMap[variant]}
        size={36}
        loop={false}
        autoplay
        ariaLabel={variant}
      />
      <div className="toast__body">
        {title ? <strong className="toast__title">{title}</strong> : null}
        {message ? <p className="toast__message">{message}</p> : null}
      </div>
    </div>
  );
}

export default Toast;