import React from 'react';

/**
 * UiLab Avatar — a square, modular initials chip (the brand favours letter
 * marks like C · C · I · E). Defaults to a tight-radius square; set shape
 * "circle" for people. Tone sets the accent fill.
 */
export function Avatar({ initials = '', shape = 'square', size = 40, tone = 'accent', src = null, style = {}, ...rest }) {
  const toneColor =
    tone === 'sky' ? 'var(--uil-sky)'
    : tone === 'summer' ? 'var(--uil-summer)'
    : tone === 'sun' ? 'var(--uil-sun)'
    : tone === 'jacaranda' ? 'var(--uil-jacaranda)'
    : 'var(--accent)';

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size + 'px',
    height: size + 'px',
    borderRadius: shape === 'circle' ? '999px' : 'var(--radius-sm)',
    background: src ? 'transparent' : `color-mix(in srgb, ${toneColor} 22%, var(--surface-overlay))`,
    color: toneColor,
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    fontSize: Math.round(size * 0.36) + 'px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    overflow: 'hidden',
    border: '1px solid var(--border)',
    flex: 'none',
  };

  return (
    <span style={{ ...base, ...style }} {...rest}>
      {src
        ? <img src={src} alt={initials} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials.slice(0, 2)}
    </span>
  );
}
