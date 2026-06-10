import React from 'react';

/**
 * UiLab Input — a labelled text field. Label is Roboto Mono Bold uppercase;
 * field sits on a sunken surface with a hairline border and a 2px accent
 * focus ring. Supports hint and error states.
 */
export function Input({
  label = null,
  hint = null,
  error = null,
  id,
  type = 'text',
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? 'uil-' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  const borderColor = error ? 'var(--status-stop)' : (focus ? 'var(--accent)' : 'var(--border-strong)');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', ...containerStyle }}>
      {label ? (
        <label htmlFor={fieldId} style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)' }}>
          {label}
        </label>
      ) : null}
      <input
        id={fieldId}
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '15px',
          color: 'var(--text)',
          background: 'var(--surface-sunken)',
          border: '1.5px solid ' + borderColor,
          borderRadius: 'var(--radius-sm)',
          padding: '11px 13px',
          outline: 'none',
          boxShadow: focus ? '0 0 0 3px color-mix(in srgb, var(--accent) 22%, transparent)' : 'none',
          transition: 'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
          width: '100%',
          boxSizing: 'border-box',
          ...style,
        }}
        {...rest}
      />
      {error ? (
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--status-stop)' }}>{error}</span>
      ) : hint ? (
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '12.5px', color: 'var(--text-faint)' }}>{hint}</span>
      ) : null}
    </div>
  );
}
