import React from 'react';

/**
 * UiLab Tabs — a horizontal nav row with an accent underline on the active
 * tab. Labels are Roboto Mono Bold uppercase. Controlled via value/onChange,
 * or uncontrolled with defaultValue.
 */
export function Tabs({ items = [], value, defaultValue, onChange, style = {}, ...rest }) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].value));
  const active = value !== undefined ? value : internal;
  const [hover, setHover] = React.useState(null);

  const select = (v) => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };

  return (
    <div
      role="tablist"
      style={{ display: 'flex', gap: 'var(--space-6)', borderBottom: '1px solid var(--border)', ...style }}
      {...rest}
    >
      {items.map((it) => {
        const on = it.value === active;
        return (
          <button
            key={it.value}
            role="tab"
            aria-selected={on}
            onClick={() => select(it.value)}
            onMouseEnter={() => setHover(it.value)}
            onMouseLeave={() => setHover(null)}
            style={{
              appearance: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0 0 14px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.13em',
              color: on ? 'var(--accent)' : (hover === it.value ? 'var(--text)' : 'var(--text-muted)'),
              borderBottom: '2px solid ' + (on ? 'var(--accent)' : 'transparent'),
              marginBottom: '-1px',
              transition: 'color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
            }}
          >
            {it.label}
            {it.count != null ? (
              <span style={{ fontSize: '10px', color: on ? 'var(--accent)' : 'var(--text-faint)' }}>{it.count}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
