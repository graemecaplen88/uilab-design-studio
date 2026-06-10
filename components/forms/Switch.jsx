import React from 'react';

/**
 * UiLab Switch — a controlled toggle. Track fills with the accent (pop)
 * colour when on; the thumb is a tight-radius square (square-tittle DNA).
 */
export function Switch({ checked = false, onChange, disabled = false, label = null, id, style = {}, ...rest }) {
  const fieldId = id || (label ? 'uil-sw-' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);

  const track = {
    position: 'relative',
    width: '44px',
    height: '26px',
    borderRadius: '999px',
    background: checked ? 'var(--accent)' : 'var(--surface-overlay)',
    border: '1px solid ' + (checked ? 'transparent' : 'var(--border-strong)'),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)',
    flex: 'none',
  };
  const thumb = {
    position: 'absolute',
    top: '3px',
    left: checked ? '21px' : '3px',
    width: '18px',
    height: '18px',
    borderRadius: 'var(--radius-xs)',
    background: checked ? 'var(--on-accent)' : 'var(--text)',
    transition: 'left var(--dur) var(--ease-out), background var(--dur) var(--ease-out)',
  };

  return (
    <label htmlFor={fieldId} style={{ display: 'inline-flex', alignItems: 'center', gap: '11px', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <span style={track} role="switch" aria-checked={checked}>
        <span style={thumb} />
      </span>
      <input
        id={fieldId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.checked, e)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      {label ? (
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '14px', color: 'var(--text)' }}>{label}</span>
      ) : null}
    </label>
  );
}
