/* AUTO-GENERATED for the UiLab website UI kit.
   A self-contained build of the design-system primitives so the kit renders
   standalone (the DS tab injects _ds_bundle.js, which is not on disk).
   Regenerate from components/ if you change a primitive. */

// --- components/buttons/Button.jsx ---
/**
 * UiLab Button — mono, uppercase, technical.
 * Labels are Roboto Mono Bold uppercase with wide tracking; corners are tight.
 * Variants: primary (accent fill), secondary (hairline), ghost (text only),
 * link (underlined). Sizes: sm | md | lg.
 */
function Button({
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

// --- components/display/Card.jsx ---
/**
 * UiLab Card — a raised surface with a hairline border and a faint lit top
 * edge. Depth comes from layered tone, not heavy shadow. Optional eyebrow
 * (mono kicker), title and interactive hover-lift.
 */
function Card({
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

// --- components/display/Tag.jsx ---
/**
 * UiLab Tag / Badge — Roboto Mono Bold, uppercase, wide tracking.
 * Soft tinted, solid accent, or hairline outline. Used for verticals,
 * categories, statuses and metadata.
 */
function Tag({ children, variant = 'soft', tone = 'accent', style = {}, ...rest }) {
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

// --- components/display/Avatar.jsx ---
/**
 * UiLab Avatar — a square, modular initials chip (the brand favours letter
 * marks like C · C · I · E). Defaults to a tight-radius square; set shape
 * "circle" for people. Tone sets the accent fill.
 */
function Avatar({ initials = '', shape = 'square', size = 40, tone = 'accent', src = null, style = {}, ...rest }) {
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

// --- components/display/StatusDot.jsx ---
/**
 * UiLab StatusDot — a small colour pip with a Roboto Mono uppercase label.
 * The brand's status pattern (no emoji): live/online, attention, closed.
 */
function StatusDot({ children, status = 'go', pulse = false, style = {}, ...rest }) {
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

// --- components/forms/Input.jsx ---
/**
 * UiLab Input — a labelled text field. Label is Roboto Mono Bold uppercase;
 * field sits on a sunken surface with a hairline border and a 2px accent
 * focus ring. Supports hint and error states.
 */
function Input({
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

// --- components/forms/Select.jsx ---
/**
 * UiLab Select — labelled native select styled to match Input, with a mono
 * chevron. Pass options as [{value,label}] or children <option>s.
 */
function Select({ label = null, options = null, id, style = {}, containerStyle = {}, children, ...rest }) {
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

// --- components/forms/Switch.jsx ---
/**
 * UiLab Switch — a controlled toggle. Track fills with the accent (pop)
 * colour when on; the thumb is a tight-radius square (square-tittle DNA).
 */
function Switch({ checked = false, onChange, disabled = false, label = null, id, style = {}, ...rest }) {
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

// --- components/navigation/Tabs.jsx ---
/**
 * UiLab Tabs — a horizontal nav row with an accent underline on the active
 * tab. Labels are Roboto Mono Bold uppercase. Controlled via value/onChange,
 * or uncontrolled with defaultValue.
 */
function Tabs({ items = [], value, defaultValue, onChange, style = {}, ...rest }) {
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

window.UiLabDesignSystem_b96795 = Object.assign(window.UiLabDesignSystem_b96795 || {}, { Button, Card, Tag, Avatar, StatusDot, Input, Select, Switch, Tabs });
