import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { tokens } from './tokens';

/**
 * ThemeContext — single point for runtime theme overrides.
 *
 * The default theme is `tokens` (defined in tokens.js). Components
 * consume tokens via CSS custom properties (declared in
 * `variables.css`) and never read this context directly — but the
 * provider exposes a `setPrimary(color)` API that, today, simply
 * updates a state value, and **also writes to
 * `document.documentElement.style.setProperty`**. Because every
 * component reads `var(--color-primary)` (not the literal hex),
 * the entire UI re-skins instantly.
 *
 * Future integration:
 *   useEffect(() => {
 *     fetch('/api/branding').then(r => r.json()).then(({ primaryColor }) => {
 *       setPrimary(primaryColor);
 *     });
 *   }, []);
 *
 * The `setPrimary` function also recomputes the derived tokens
 * (hover/active/soft/bg/border/ring) by mixing the input color
 * with white/black — keeping the whole palette consistent even
 * when the brand color comes from an API.
 */

const ThemeContext = createContext(null);

/** Mix a hex color with white or black by `amount` (0-1). */
function mix(hex, withColor, amount) {
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const m = withColor;
  const mr = parseInt(m.substring(0, 2), 16);
  const mg = parseInt(m.substring(2, 4), 16);
  const mb = parseInt(m.substring(4, 6), 16);
  const mixR = Math.round(r + (mr - r) * amount);
  const mixG = Math.round(g + (mg - g) * amount);
  const mixB = Math.round(b + (mb - b) * amount);
  return `#${[mixR, mixG, mixB]
    .map((v) => v.toString(16).padStart(2, '0'))
    .join('')}`;
}

function hexToRgba(hex, alpha) {
  const c = hex.replace('#', '');
  return `rgba(${parseInt(c.substring(0, 2), 16)}, ${parseInt(
    c.substring(2, 4),
    16
  )}, ${parseInt(c.substring(4, 6), 16)}, ${alpha})`;
}

/** Derive the related primary shades from a single brand color. */
function derivePrimaryShades(primary) {
  return {
    primary,
    primaryHover: mix(primary, '000000', 0.12),
    primaryActive: mix(primary, '000000', 0.22),
    primarySoft: mix(primary, 'ffffff', 0.55),
    primaryBg: hexToRgba(primary, 0.06),
    primaryBgStrong: hexToRgba(primary, 0.12),
    primaryBorder: hexToRgba(primary, 0.22),
    primaryRing: hexToRgba(primary, 0.18),
    secondary: mix(primary, '000000', 0.28),
    secondaryHover: mix(primary, '000000', 0.36),
    statusPrimaryBg: hexToRgba(primary, 0.1),
    statusPrimaryText: mix(primary, '000000', 0.28),
    shadowPrimary: `0 8px 24px ${hexToRgba(primary, 0.25)}`,
    shadowPrimaryLg: `0 14px 40px ${hexToRgba(primary, 0.3)}`,
  };
}

export function ThemeProvider({ children }) {
  const [activeTokens, setActiveTokens] = useState(tokens);

  const setPrimary = useCallback((primaryColor) => {
    if (!primaryColor || typeof primaryColor !== 'string') return;
    const derived = derivePrimaryShades(primaryColor);

    // Update the JS token mirror (for any JS-side consumption)
    setActiveTokens((prev) => ({
      ...prev,
      colors: { ...prev.colors, ...derived },
    }));

    // Update the CSS custom properties — every component re-themes.
    const root = document.documentElement;
    root.style.setProperty('--color-primary', derived.primary);
    root.style.setProperty('--color-primary-hover', derived.primaryHover);
    root.style.setProperty('--color-primary-active', derived.primaryActive);
    root.style.setProperty('--color-primary-soft', derived.primarySoft);
    root.style.setProperty('--color-primary-bg', derived.primaryBg);
    root.style.setProperty(
      '--color-primary-bg-strong',
      derived.primaryBgStrong
    );
    root.style.setProperty('--color-primary-border', derived.primaryBorder);
    root.style.setProperty('--color-primary-ring', derived.primaryRing);
    root.style.setProperty('--color-secondary', derived.secondary);
    root.style.setProperty('--color-secondary-hover', derived.secondaryHover);
    root.style.setProperty(
      '--color-status-primary-bg',
      derived.statusPrimaryBg
    );
    root.style.setProperty(
      '--color-status-primary-text',
      derived.statusPrimaryText
    );
    root.style.setProperty('--shadow-primary', derived.shadowPrimary);
    root.style.setProperty('--shadow-primary-lg', derived.shadowPrimaryLg);
  }, []);

  const value = useMemo(
    () => ({ tokens: activeTokens, setPrimary }),
    [activeTokens, setPrimary]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a <ThemeProvider>');
  }
  return ctx;
}

export default ThemeContext;