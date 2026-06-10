import React from 'react';

/**
 * UiLab Select — labelled native select styled to match Input, with a mono
 * chevron. Pass options as [{value,label}] or children <option>s.
 */
export function Select({ label = null, options = null, id, style = {}, containerStyle = {}, children, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? 'uil-' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', ...containerStyle }}>
      {label ? (
        <label htmlFor={fieldId} style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)' }}>
          {label}
        </label>
      ) : null}
      <div style={{ position: 'relative', display: 'flex' }}>
        <select
          id={fieldId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            appearance: 'none',
            WebkitAppearance: 'none',
            fontFamily: 'var(--font-display)',
            fontSize: '15px',
            color: 'var(--text)',
            background: 'var(--surface-sunken)',
            border: '1.5px solid ' + (focus ? 'var(--accent)' : 'var(--border-strong)'),
            borderRadius: 'var(--radius-sm)',
            padding: '11px 38px 11px 13px',
            outline: 'none',
            boxShadow: focus ? '0 0 0 3px color-mix(in srgb, var(--accent) 22%, transparent)' : 'none',
            transition: 'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
            width: '100%',
            cursor: 'pointer',
            ...style,
          }}
          {...rest}
        >
          {options
            ? options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)
            : children}
        </select>
        <span style={{ position: 'absolute', right: '13px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '11px' }}>▾</span>
      </div>
    </div>
  );
}
