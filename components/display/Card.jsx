import React from 'react';

/**
 * UiLab Card — a raised surface with a hairline border and a faint lit top
 * edge. Depth comes from layered tone, not heavy shadow. Optional eyebrow
 * (mono kicker), title and interactive hover-lift.
 */
export function Card({
  children,
  eyebrow = null,
  title = null,
  interactive = false,
  padding = 'var(--space-5)',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  const base = {
    position: 'relative',
    background: 'var(--surface-raised)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-lg)',
    padding,
    color: 'var(--text)',
    boxShadow: 'inset 0 1px 0 0 color-mix(in srgb, var(--uil-white) 9%, transparent)',
    transition: 'transform var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), background var(--dur) var(--ease-out)',
    transform: interactive && hover ? 'translateY(-2px)' : 'translateY(0)',
    borderColor: interactive && hover ? 'var(--border-strong)' : 'var(--border)',
    cursor: interactive ? 'pointer' : 'default',
  };

  return (
    <div
      style={{ ...base, ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {eyebrow ? (
        <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--accent)', marginBottom: 'var(--space-3)' }}>
          {eyebrow}
        </div>
      ) : null}
      {title ? (
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--type-h4)', letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: 'var(--space-3)' }}>
          {title}
        </div>
      ) : null}
      {children}
    </div>
  );
}
