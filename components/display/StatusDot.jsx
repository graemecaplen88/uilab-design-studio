import React from 'react';

/**
 * UiLab StatusDot — a small colour pip with a Roboto Mono uppercase label.
 * The brand's status pattern (no emoji): live/online, attention, closed.
 */
export function StatusDot({ children, status = 'go', pulse = false, style = {}, ...rest }) {
  const color =
    status === 'go' ? 'var(--status-go)'
    : status === 'warn' ? 'var(--status-warn)'
    : status === 'stop' ? 'var(--status-stop)'
    : status === 'idle' ? 'var(--text-faint)'
    : 'var(--status-go)';

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', ...style }} {...rest}>
      <span style={{ position: 'relative', width: '9px', height: '9px', flex: 'none' }}>
        {pulse ? (
          <span style={{ position: 'absolute', inset: 0, borderRadius: '999px', background: color, opacity: 0.5, animation: 'uil-ping 1.6s var(--ease-out) infinite' }} />
        ) : null}
        <span style={{ position: 'absolute', inset: 0, borderRadius: '999px', background: color }} />
      </span>
      {children ? (
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text)' }}>{children}</span>
      ) : null}
      <style>{`@keyframes uil-ping { 0% { transform: scale(1); opacity: .5 } 70%,100% { transform: scale(2.4); opacity: 0 } }`}</style>
    </span>
  );
}
