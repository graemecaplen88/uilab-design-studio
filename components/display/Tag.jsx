import React from 'react';

/**
 * UiLab Tag / Badge — Roboto Mono Bold, uppercase, wide tracking.
 * Soft tinted, solid accent, or hairline outline. Used for verticals,
 * categories, statuses and metadata.
 */
export function Tag({ children, variant = 'soft', tone = 'accent', style = {}, ...rest }) {
  const toneColor =
    tone === 'accent' ? 'var(--accent)'
    : tone === 'sky' ? 'var(--uil-sky)'
    : tone === 'summer' ? 'var(--uil-summer)'
    : tone === 'sun' ? 'var(--uil-sun)'
    : tone === 'jacaranda' ? 'var(--uil-jacaranda)'
    : 'var(--accent)';

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    fontSize: '10.5px',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    lineHeight: 1,
    padding: '5px 9px',
    borderRadius: 'var(--radius-xs)',
    border: '1px solid transparent',
    whiteSpace: 'nowrap',
  };

  const variants = {
    solid:   { background: toneColor, color: 'var(--on-accent)' },
    soft:    { background: `color-mix(in srgb, ${toneColor} 16%, transparent)`, color: toneColor },
    outline: { background: 'transparent', color: toneColor, borderColor: `color-mix(in srgb, ${toneColor} 45%, transparent)` },
  };

  return <span style={{ ...base, ...variants[variant], ...style }} {...rest}>{children}</span>;
}
