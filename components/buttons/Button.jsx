import React from 'react';

/**
 * UiLab Button — mono, uppercase, technical.
 * Labels are Roboto Mono Bold uppercase with wide tracking; corners are tight.
 * Variants: primary (accent fill), secondary (hairline), ghost (text only),
 * link (underlined). Sizes: sm | md | lg.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = {
    sm: { fontSize: '11px', padding: '7px 12px', gap: '6px', letterSpacing: '0.12em' },
    md: { fontSize: '12px', padding: '11px 18px', gap: '8px', letterSpacing: '0.13em' },
    lg: { fontSize: '13px', padding: '15px 26px', gap: '10px', letterSpacing: '0.14em' },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    textTransform: 'uppercase',
    lineHeight: 1,
    border: '1.5px solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.42 : 1,
    transition: 'background var(--dur) var(--ease-out), color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    transform: active && !disabled ? 'scale(0.975)' : 'scale(1)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    ...sizes[size],
  };

  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--accent-strong)' : 'var(--accent)',
      color: 'var(--on-accent)',
      borderColor: 'transparent',
    },
    secondary: {
      background: hover && !disabled ? 'var(--fill-subtle)' : 'transparent',
      color: 'var(--text)',
      borderColor: 'var(--border-strong)',
    },
    ghost: {
      background: hover && !disabled ? 'var(--fill-subtle)' : 'transparent',
      color: hover && !disabled ? 'var(--accent)' : 'var(--text)',
      borderColor: 'transparent',
    },
    link: {
      background: 'transparent',
      color: 'var(--accent)',
      borderColor: 'transparent',
      padding: 0,
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      textDecorationThickness: '1.5px',
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{ ...base, ...variants[variant], ...style }}
      {...rest}
    >
      {iconLeft ? <span style={{ display: 'inline-flex', marginRight: '-1px' }}>{iconLeft}</span> : null}
      {children}
      {iconRight ? <span style={{ display: 'inline-flex', marginLeft: '-1px' }}>{iconRight}</span> : null}
    </button>
  );
}
