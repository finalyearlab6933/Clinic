/**
 * Design Tokens — Single Source of Truth
 *
 * Every visual property in the application is derived from these tokens.
 * The CSS layer (`variables.css`) mirrors these values as CSS custom
 * properties so that stylesheets consume them via `var(--token-name)`.
 *
 * The JavaScript layer is exposed so that:
 *   1. JS-driven components can read token values.
 *   2. A future API returning `{ primaryColor: '#14B8A6' }` can derive
 *      every related shade here and propagate it through the CSS
 *      custom properties via `document.documentElement.style.setProperty`.
 *
 * Do NOT import a hex literal anywhere outside this file and
 * `variables.css`. Components must reference tokens.
 */

export const tokens = {
  colors: {
    // ─── Primary (teal — healthcare) ──────────────────────────────
    primary: '#14B8A6',
    primaryHover: '#0F9488',
    primaryActive: '#0B7E72',
    primarySoft: '#5EEAD4',
    primaryBg: 'rgba(20, 184, 166, 0.06)',
    primaryBgStrong: 'rgba(20, 184, 166, 0.12)',
    primaryBorder: 'rgba(20, 184, 166, 0.22)',
    primaryRing: 'rgba(20, 184, 166, 0.18)',
    onPrimary: '#FFFFFF',

    // ─── Secondary (deep teal for gradients & emphasis) ───────────
    secondary: '#0F766E',
    secondaryHover: '#115E59',

    // ─── Neutral / Text ───────────────────────────────────────────
    textPrimary: '#0F172A',   // deep navy
    textSecondary: '#475569', // muted slate
    textTertiary: '#94A3B8',  // captions / hints
    textOnDark: '#F1F5F9',
    textOnDarkMuted: '#CBD5E1',

    // ─── Surfaces / Backgrounds ───────────────────────────────────
    bgPage: '#FBFCFD',
    bgPageTint: 'rgba(20, 184, 166, 0.04)',
    bgCard: '#FFFFFF',
    bgSubtle: '#F8FAFC',
    bgMuted: '#F1F5F9',

    // ─── Borders ──────────────────────────────────────────────────
    border: '#E2E8F0',
    borderSubtle: '#F1F5F9',
    borderStrong: '#CBD5E1',

    // ─── Status ───────────────────────────────────────────────────
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',

    statusSuccessBg: '#ECFDF5',
    statusSuccessText: '#047857',
    statusWarningBg: '#FFFBEB',
    statusWarningText: '#B45309',
    statusErrorBg: '#FEF2F2',
    statusErrorText: '#B91C1C',
    statusInfoBg: '#EFF6FF',
    statusInfoText: '#1D4ED8',
    statusPrimaryBg: 'rgba(20, 184, 166, 0.10)',
    statusPrimaryText: '#0F766E',
  },

  font: {
    family:
      "'Manrope', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    weightRegular: 400,
    weightMedium: 500,
    weightSemibold: 600,
    weightBold: 700,
    weightExtrabold: 800,

    sizeXs: '0.75rem',    // 12
    sizeSm: '0.8125rem',  // 13
    sizeBase: '0.875rem', // 14 — body default for management screens
    sizeMd: '0.9375rem',  // 15
    sizeLg: '1rem',       // 16
    sizeXl: '1.125rem',   // 18
    size2xl: '1.375rem',  // 22
    size3xl: '1.75rem',   // 28
    size4xl: '2.25rem',   // 36
    size5xl: '3rem',      // 48

    lineHeightTight: 1.2,
    lineHeightNormal: 1.5,
    lineHeightRelaxed: 1.7,

    letterSpacingTight: '-0.02em',
    letterSpacingNormal: '0',
    letterSpacingWide: '0.04em',
  },

  // 4-pt base scale
  space: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '32px',
    8: '40px',
    9: '48px',
    10: '64px',
    11: '80px',
    12: '96px',
  },

  radius: {
    xs: '6px',
    sm: '10px',
    md: '14px',
    lg: '20px',
    xl: '28px',
    pill: '999px',
  },

  shadow: {
    xs: '0 1px 2px rgba(15, 23, 42, 0.04)',
    sm: '0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.04)',
    md: '0 4px 14px rgba(15, 23, 42, 0.06)',
    lg: '0 12px 32px rgba(15, 23, 42, 0.08)',
    xl: '0 24px 60px rgba(15, 23, 42, 0.10)',
    focus: '0 0 0 4px rgba(20, 184, 166, 0.18)',
    primary: '0 8px 24px rgba(20, 184, 166, 0.25)',
    primaryLg: '0 14px 40px rgba(20, 184, 166, 0.30)',
  },

  // ─── Sizes ────────────────────────────────────────────────────
  controlHeight: {
    sm: '36px',
    md: '44px',
    lg: '52px',
  },

  // ─── Layout ────────────────────────────────────────────────────
  layoutMaxWidth: '1320px',
  headerHeight: '76px',
  headerHeightMobile: '68px',

  // ─── Transitions (generic) ─────────────────────────────────────────
  transitionFast: '120ms ease-out',
  transitionBase: '180ms ease-out',
  transitionSlow: '280ms ease-out',

  // ─── Animation tokens (centralized motion system) ───────────────────
  // Mirror of CSS custom properties for JS-driven animations (count-up hook).
  animation: {
    duration: {
      instant: 80,
      fast: 120,
      normal: 200,
      medium: 320,
      slow: 480,
      count: 900,
    },
    ease: {
      standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
      emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
      entrance: 'cubic-bezier(0, 0, 0.2, 1)',
      exit: 'cubic-bezier(0.4, 0, 1, 1)',
    },
    stagger: {
      tight: 40,
      base: 80,
      loose: 140,
    },
    pressScale: 0.97,
    hoverLift: -2,
  },
};

export default tokens;