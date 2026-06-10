/* @ds-bundle: {"format":3,"namespace":"UiLabDesignSystem_b96795","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"StatusDot","sourcePath":"components/display/StatusDot.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"6cc11bcac8ab","components/display/Avatar.jsx":"4ad2757f1369","components/display/Card.jsx":"a6e7c1a9e362","components/display/StatusDot.jsx":"49fb05b66cd7","components/display/Tag.jsx":"e01e57f99f9d","components/forms/Input.jsx":"c676518265b5","components/forms/Select.jsx":"05f4cecc27ea","components/forms/Switch.jsx":"5ba10b17ceae","components/navigation/Tabs.jsx":"ced27505055b","event-studio/data.js":"680646cbe8c3","event-studio/render.js":"d4b4ae7c7c84","event-studio/studio.js":"e0268cc39157","ui_kits/flyers/image-slot.js":"9309434cb09c","ui_kits/website/App.jsx":"cb6f3672ae37","ui_kits/website/CommunityBand.jsx":"61ce628b435f","ui_kits/website/Events.jsx":"d7abf476161f","ui_kits/website/Footer.jsx":"1a01872750cc","ui_kits/website/Header.jsx":"7a7064dd8f2f","ui_kits/website/Hero.jsx":"73f3a94811c5","ui_kits/website/Verticals.jsx":"fce0206d4c58","ui_kits/website/data.js":"f0c10b148536","ui_kits/website/lib/primitives.jsx":"38f4d3adbfb6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UiLabDesignSystem_b96795 = window.UiLabDesignSystem_b96795 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    sm: {
      fontSize: '11px',
      padding: '7px 12px',
      gap: '6px',
      letterSpacing: '0.12em'
    },
    md: {
      fontSize: '12px',
      padding: '11px 18px',
      gap: '8px',
      letterSpacing: '0.13em'
    },
    lg: {
      fontSize: '13px',
      padding: '15px 26px',
      gap: '10px',
      letterSpacing: '0.14em'
    }
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
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--accent-strong)' : 'var(--accent)',
      color: 'var(--on-accent)',
      borderColor: 'transparent'
    },
    secondary: {
      background: hover && !disabled ? 'var(--fill-subtle)' : 'transparent',
      color: 'var(--text)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: hover && !disabled ? 'var(--fill-subtle)' : 'transparent',
      color: hover && !disabled ? 'var(--accent)' : 'var(--text)',
      borderColor: 'transparent'
    },
    link: {
      background: 'transparent',
      color: 'var(--accent)',
      borderColor: 'transparent',
      padding: 0,
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      textDecorationThickness: '1.5px'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginRight: '-1px'
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginLeft: '-1px'
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UiLab Avatar — a square, modular initials chip (the brand favours letter
 * marks like C · C · I · E). Defaults to a tight-radius square; set shape
 * "circle" for people. Tone sets the accent fill.
 */
function Avatar({
  initials = '',
  shape = 'square',
  size = 40,
  tone = 'accent',
  src = null,
  style = {},
  ...rest
}) {
  const toneColor = tone === 'sky' ? 'var(--uil-sky)' : tone === 'summer' ? 'var(--uil-summer)' : tone === 'sun' ? 'var(--uil-sun)' : tone === 'jacaranda' ? 'var(--uil-jacaranda)' : 'var(--accent)';
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
    flex: 'none'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: initials,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials.slice(0, 2));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    cursor: interactive ? 'pointer' : 'default'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '10.5px',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--accent)',
      marginBottom: 'var(--space-3)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--type-h4)',
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      marginBottom: 'var(--space-3)'
    }
  }, title) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UiLab StatusDot — a small colour pip with a Roboto Mono uppercase label.
 * The brand's status pattern (no emoji): live/online, attention, closed.
 */
function StatusDot({
  children,
  status = 'go',
  pulse = false,
  style = {},
  ...rest
}) {
  const color = status === 'go' ? 'var(--status-go)' : status === 'warn' ? 'var(--status-warn)' : status === 'stop' ? 'var(--status-stop)' : status === 'idle' ? 'var(--text-faint)' : 'var(--status-go)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '9px',
      height: '9px',
      flex: 'none'
    }
  }, pulse ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '999px',
      background: color,
      opacity: 0.5,
      animation: 'uil-ping 1.6s var(--ease-out) infinite'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '999px',
      background: color
    }
  })), children ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--text)'
    }
  }, children) : null, /*#__PURE__*/React.createElement("style", null, `@keyframes uil-ping { 0% { transform: scale(1); opacity: .5 } 70%,100% { transform: scale(2.4); opacity: 0 } }`));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UiLab Tag / Badge — Roboto Mono Bold, uppercase, wide tracking.
 * Soft tinted, solid accent, or hairline outline. Used for verticals,
 * categories, statuses and metadata.
 */
function Tag({
  children,
  variant = 'soft',
  tone = 'accent',
  style = {},
  ...rest
}) {
  const toneColor = tone === 'accent' ? 'var(--accent)' : tone === 'sky' ? 'var(--uil-sky)' : tone === 'summer' ? 'var(--uil-summer)' : tone === 'sun' ? 'var(--uil-sun)' : tone === 'jacaranda' ? 'var(--uil-jacaranda)' : 'var(--accent)';
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
    whiteSpace: 'nowrap'
  };
  const variants = {
    solid: {
      background: toneColor,
      color: 'var(--on-accent)'
    },
    soft: {
      background: `color-mix(in srgb, ${toneColor} 16%, transparent)`,
      color: toneColor
    },
    outline: {
      background: 'transparent',
      color: toneColor,
      borderColor: `color-mix(in srgb, ${toneColor} 45%, transparent)`
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const borderColor = error ? 'var(--status-stop)' : focus ? 'var(--accent)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...containerStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '10.5px',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
      ...style
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--status-stop)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '12.5px',
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UiLab Select — labelled native select styled to match Input, with a mono
 * chevron. Pass options as [{value,label}] or children <option>s.
 */
function Select({
  label = null,
  options = null,
  id,
  style = {},
  containerStyle = {},
  children,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? 'uil-' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...containerStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '10.5px',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
      ...style
    }
  }, rest), options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '13px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--accent)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '11px'
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UiLab Switch — a controlled toggle. Track fills with the accent (pop)
 * colour when on; the thumb is a tight-radius square (square-tittle DNA).
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label = null,
  id,
  style = {},
  ...rest
}) {
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
    flex: 'none'
  };
  const thumb = {
    position: 'absolute',
    top: '3px',
    left: checked ? '21px' : '3px',
    width: '18px',
    height: '18px',
    borderRadius: 'var(--radius-xs)',
    background: checked ? 'var(--on-accent)' : 'var(--text)',
    transition: 'left var(--dur) var(--ease-out), background var(--dur) var(--ease-out)'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '11px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: track,
    role: "switch",
    "aria-checked": checked
  }, /*#__PURE__*/React.createElement("span", {
    style: thumb
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '14px',
      color: 'var(--text)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UiLab Tabs — a horizontal nav row with an accent underline on the active
 * tab. Labels are Roboto Mono Bold uppercase. Controlled via value/onChange,
 * or uncontrolled with defaultValue.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].value));
  const active = value !== undefined ? value : internal;
  const [hover, setHover] = React.useState(null);
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }, rest), items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.value),
      onMouseEnter: () => setHover(it.value),
      onMouseLeave: () => setHover(null),
      style: {
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
        color: on ? 'var(--accent)' : hover === it.value ? 'var(--text)' : 'var(--text-muted)',
        borderBottom: '2px solid ' + (on ? 'var(--accent)' : 'transparent'),
        marginBottom: '-1px',
        transition: 'color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px'
      }
    }, it.label, it.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '10px',
        color: on ? 'var(--accent)' : 'var(--text-faint)'
      }
    }, it.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// event-studio/data.js
try { (() => {
/* ============================================================
   UiLab Event Studio — data model
   Formats, event palettes, and the shared event-info schema.
   Ocean = Water (#013053), Soil = Earth (#421C01).
   ============================================================ */
window.UIL = window.UIL || {};
UIL.COLORS = {
  land: '#025120',
  sunset: '#4C0027',
  ocean: '#013053',
  soil: '#421C01',
  sky: '#67DAFF',
  summer: '#FF6325',
  sun: '#FFCD0E',
  jacaranda: '#DD60FF',
  white: '#FFFFFF'
};
UIL.LABEL = {
  land: 'Land',
  sunset: 'Sunset',
  ocean: 'Ocean',
  soil: 'Soil',
  sky: 'Sky',
  summer: 'Summer',
  sun: 'Sun',
  jacaranda: 'Jacaranda'
};

/* pops that have matching wordmark / brandmark / partner-logo SVGs */
UIL.MARKABLE = ['sky', 'summer', 'sun', 'jacaranda'];

/* Event types — palette options confirmed by UiLab. First entry = default. */
UIL.EVENTS = {
  'digital-builders': {
    label: 'Digital Builders',
    category: 'Digital Builders',
    grounds: ['land', 'sunset'],
    pops: ['sky', 'jacaranda']
  },
  'future-tech-open-house': {
    label: 'Future Tech Open House',
    category: 'Future Tech Open House',
    grounds: ['sunset', 'ocean'],
    pops: ['summer']
  },
  'the-common-ground': {
    label: 'The Common Ground',
    category: 'The Common Ground',
    grounds: ['sunset', 'ocean'],
    pops: ['sun']
  },
  'teacher-ai-toolkit': {
    label: 'Teacher AI Toolkit',
    category: 'Teacher AI Toolkit',
    grounds: ['ocean', 'land'],
    pops: ['jacaranda', 'sky']
  },
  'industry-ai-toolkit': {
    label: 'Industry AI Toolkit',
    category: 'Industry AI Toolkit',
    grounds: ['soil', 'ocean'],
    pops: ['sun', 'summer']
  },
  'automation-studio': {
    label: 'Automation Studio',
    category: 'Automation Studio',
    grounds: ['sunset', 'ocean'],
    pops: ['summer']
  }
};

/* Output formats. layout: 'stacked' (vertical) | 'split' (photo-left / text-right).
   kind: 'web' (PNG) | 'print' (PDF, physical mm). */
UIL.FORMATS = {
  'ig-square': {
    label: 'IG Square',
    w: 1080,
    h: 1080,
    layout: 'stacked',
    kind: 'web'
  },
  'ig-portrait': {
    label: 'IG Portrait',
    w: 1080,
    h: 1350,
    layout: 'stacked',
    kind: 'web'
  },
  'ig-story': {
    label: 'IG Story',
    w: 1080,
    h: 1920,
    layout: 'stacked',
    kind: 'web'
  },
  'ig-ad-square': {
    label: 'IG Ad Square',
    w: 1080,
    h: 1080,
    layout: 'ad',
    kind: 'web'
  },
  'ig-ad-story': {
    label: 'IG Ad Story',
    w: 1080,
    h: 1920,
    layout: 'ad',
    kind: 'web'
  },
  'linkedin': {
    label: 'LinkedIn',
    w: 1200,
    h: 626,
    layout: 'split',
    kind: 'web'
  },
  'facebook': {
    label: 'Facebook',
    w: 1200,
    h: 630,
    layout: 'split',
    kind: 'web'
  },
  'humanitix': {
    label: 'Humanitix',
    w: 3200,
    h: 1600,
    layout: 'split',
    kind: 'web'
  },
  'a4': {
    label: 'A4 Flyer',
    w: 1240,
    h: 1754,
    layout: 'stacked',
    kind: 'print',
    mm: [210, 297]
  },
  'a5': {
    label: 'A5 Flyer',
    w: 874,
    h: 1240,
    layout: 'stacked',
    kind: 'print',
    mm: [148, 210]
  },
  'dl': {
    label: 'DL Flyer',
    w: 583,
    h: 1240,
    layout: 'stacked',
    kind: 'print',
    mm: [99, 210]
  }
};
UIL.FORMAT_ORDER = ['ig-square', 'ig-portrait', 'ig-story', 'ig-ad-square', 'ig-ad-story', 'linkedin', 'facebook', 'humanitix', 'a4', 'a5', 'dl'];

/* Layout variants offered per format. First entry = default.
   standard · text (no photo) · overlay (full-bleed photo + ground tint)
   · remix (divisions-masked hero) · ad (bold headline + button). */
UIL.VARIANTS = {
  'ig-square': [['standard', 'Standard'], ['text', 'Text'], ['overlay', 'Photo overlay']],
  'ig-portrait': [['standard', 'Standard'], ['remix', 'Remix'], ['overlay', 'Photo overlay']],
  'ig-story': [['standard', 'Standard'], ['remix', 'Remix'], ['overlay', 'Photo overlay']],
  'ig-ad-square': [['ad', 'Ad']],
  'ig-ad-story': [['ad', 'Ad']],
  'linkedin': [['standard', 'Standard'], ['overlay', 'Photo overlay']],
  'facebook': [['standard', 'Standard'], ['overlay', 'Photo overlay']],
  'humanitix': [['standard', 'Standard'], ['overlay', 'Photo overlay']],
  'a4': [['standard', 'Standard'], ['remix', 'Remix'], ['overlay', 'Photo overlay']],
  'a5': [['standard', 'Standard'], ['remix', 'Remix'], ['overlay', 'Photo overlay']],
  'dl': [['standard', 'Standard'], ['remix', 'Remix'], ['overlay', 'Photo overlay']]
};
UIL.EVENT_ORDER = ['digital-builders', 'future-tech-open-house', 'the-common-ground', 'teacher-ai-toolkit', 'industry-ai-toolkit', 'automation-studio'];

/* The shared [EDIT] event-info schema. */
UIL.FIELDS = [{
  key: 'name',
  label: 'Event Name',
  type: 'text',
  ph: 'Future Tech Open House'
}, {
  key: 'description',
  label: 'Event Description',
  type: 'textarea',
  ph: 'Get hands-on with automation, AI & robotics.'
}, {
  key: 'day',
  label: 'Day',
  type: 'text',
  ph: 'Thursday'
}, {
  key: 'date',
  label: 'Date',
  type: 'text',
  ph: '30 October 2026'
}, {
  key: 'start',
  label: 'Start Time',
  type: 'text',
  ph: '9:00am'
}, {
  key: 'finish',
  label: 'End / Finish Time',
  type: 'text',
  ph: '2:00pm'
}, {
  key: 'location',
  label: 'Location',
  type: 'text',
  ph: 'UiLab HQ'
}, {
  key: 'address',
  label: 'Address',
  type: 'text',
  ph: 'Unit 14 / 1 Belvedere Drive, Park Ridge, QLD 4125'
}, {
  key: 'category',
  label: 'Event Category',
  type: 'text',
  ph: 'UiLab’s 2026 Events'
}, {
  key: 'cta',
  label: 'CTA',
  type: 'text',
  ph: 'Register at uilab.com.au/events'
}, {
  key: 'subject',
  label: 'Subject',
  type: 'text',
  ph: 'Emerging technology'
}];
UIL.DEFAULT_INFO = {
  name: 'Future Tech Open House',
  description: 'Get hands-on with automation, AI & robotics. Experiment, ask questions and build confidence.',
  day: 'Thursday',
  date: '30 October 2026',
  start: '9:00am',
  finish: '2:00pm',
  location: 'UiLab HQ',
  address: 'Unit 14 / 1 Belvedere Drive, Park Ridge, QLD 4125',
  category: 'UiLab’s 2026 Events',
  cta: 'Register at uilab.com.au/events',
  subject: 'Emerging technology'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "event-studio/data.js", error: String((e && e.message) || e) }); }

// event-studio/render.js
try { (() => {
/* ============================================================
   UiLab Event Studio — artboard renderer
   Reproduces the FIGMA-TEMPLATES [EDIT]/[LOCKED] "event details
   card" in every format. Layout is LOCKED; only palette (per
   event) and [EDIT] text/photo change.
   ============================================================ */
window.UIL = window.UIL || {};
UIL.markSrc = function (kind, pop) {
  // kind: 'wordmark' | 'brandmark' | 'partner'
  // Partner = Queensland AI Hub · Logan mark (recoloured to the event pop).
  if (kind === 'partner') {
    const p = pop === 'summer' ? 'orange' : pop; // summer == native orange
    return `assets/logos/qld-ai-hub-logan-${p}.png`;
  }
  return `assets/logos/${kind}-${pop}.svg`;
};
UIL.escapeHTML = function (s) {
  return String(s == null ? '' : s).replace(/[&<>]/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  })[c]);
};

/* one [EDIT] text node */
UIL.edit = function (field, value, cls) {
  return `<span class="${cls}" data-edit="${field}" contenteditable="true" spellcheck="false">${UIL.escapeHTML(value)}</span>`;
};
UIL.photoBlock = function (ev, info) {
  const src = info.__photo || 'assets/photos/sample-event-1.jpg';
  return `<div class="ph" data-photo title="Click to replace photo"><img src="${src}" alt="" draggable="false"><span class="phhint">Click to add photo</span></div>`;
};
UIL.gridRows = function (info) {
  const cell = f => UIL.edit(f, info[f] || '', 'gv');
  return `
    <div class="grid">
      <div class="row">${cell('day')}${cell('date')}</div>
      <div class="row">${cell('start')}${cell('finish')}</div>
      <div class="row">${cell('location')}${cell('address')}</div>
    </div>`;
};

/* sponsor / partner logos uploaded by the user (per event) */
UIL.sponsorRow = function (info) {
  const s = info.__sponsors || [];
  if (!s.length) return '';
  return `<div class="sponsors">` + s.map((src, i) => `<div class="spon" data-sponsor="${i}" title="Click to remove this logo"><img src="${src}" alt="Sponsor ${i + 1}"></div>`).join('') + `</div>`;
};
UIL.lockMarks = function (pop) {
  return `<div class="lock">
      <img class="word" src="${UIL.markSrc('wordmark', pop)}" alt="UiLab">
      <img class="mark" src="${UIL.markSrc('brandmark', pop)}" alt="">
    </div>`;
};
UIL.foot = function (pop, info) {
  return `
    <div class="foot">
      <div class="footL">
        ${UIL.lockMarks(pop)}
        ${UIL.sponsorRow(info)}
      </div>
      <img class="partner" src="${UIL.markSrc('partner', pop)}" alt="Queensland Government · Logan">
    </div>`;
};

/* ---- STACKED (portrait / square / story / A4 / A5 / DL) ---- */
UIL.renderStacked = function (ev, fmt, info, ground, pop) {
  const u = fmt.w / 1080;
  return `
  <div class="ab stacked" data-ab style="width:${fmt.w}px;height:${fmt.h}px;--g:${UIL.COLORS[ground]};--p:${UIL.COLORS[pop]};--u:${u};">
    <div class="bgdiv"></div>
    <div class="pad">
      <div class="eyebrow">
        ${UIL.edit('category', info.category || '', 'eyl')}
        <span class="eyr">UILAB.COM.AU</span>
      </div>
      <div class="head">
        ${UIL.edit('name', info.name || '', 'hname')}
        ${UIL.photoBlock(ev, info)}
      </div>
      ${UIL.edit('description', info.description || '', 'desc')}
      <div class="grow"></div>
      ${UIL.gridRows(info)}
      ${UIL.edit('cta', info.cta || '', 'cta')}
      ${UIL.foot(pop, info)}
    </div>
  </div>`;
};

/* ---- STACKED REMIX (divisions-masked hero photo; no rectangular image) ---- */
UIL.renderStackedRemix = function (ev, fmt, info, ground, pop) {
  const u = fmt.w / 1080;
  const cell = (label, f) => `<div class="gcell"><span class="glabel">${label}</span>${UIL.edit(f, info[f] || '', 'gv')}</div>`;
  const emptyMask = `assets/graphics/logan-divisions-${pop}.png`;
  return `
  <div class="ab stacked remix" data-ab style="width:${fmt.w}px;height:${fmt.h}px;--g:${UIL.COLORS[ground]};--p:${UIL.COLORS[pop]};--u:${u};">
    <div class="pad">
      <div class="eyebrow">
        ${UIL.edit('category', info.category || '', 'eyl')}
        <span class="eyr">UILAB.COM.AU</span>
      </div>
      ${UIL.edit('name', info.name || '', 'hname')}
      ${UIL.edit('description', info.description || '', 'desc')}
      <div class="divmask" data-photo data-divmask data-empty="${emptyMask}">
        <img class="dmimg" src="${emptyMask}" alt="" draggable="false">
        <span class="phhint">Click to add a photo</span>
      </div>
      <div class="grid">
        <div class="row">${cell('Day', 'day')}${cell('Date', 'date')}</div>
        <div class="row">${cell('Start Time', 'start')}${cell('End Time', 'finish')}</div>
        <div class="row">${cell('Location', 'location')}${cell('Address', 'address')}</div>
      </div>
      ${UIL.edit('cta', info.cta || '', 'ctabar')}
      ${UIL.foot(pop, info)}
    </div>
  </div>`;
};

/* secondary ground colour used for the torn division overlays */
UIL.secondary = function (eventKey, ground) {
  const e = UIL.EVENTS[eventKey];
  const other = (e.grounds || []).find(g => g !== ground);
  return other || (ground === 'ocean' ? 'land' : 'ocean');
};

/* ---- SPLIT (LinkedIn / Facebook / Humanitix) — division-overlay bg + rect photo ---- */
UIL.renderSplit = function (ev, fmt, info, ground, pop) {
  const u = fmt.w / 1200;
  const sec = UIL.secondary(ev.__key, ground);
  const cell = f => UIL.edit(f, info[f] || '', 'gv');
  const photo = info.__photo || 'assets/photos/sample-event-1.jpg';
  return `
  <div class="ab split" data-ab style="width:${fmt.w}px;height:${fmt.h}px;--g:${UIL.COLORS[ground]};--p:${UIL.COLORS[pop]};--u:${u};">
    <img class="divov divtop" src="assets/graphics/divisions/div-9-${sec}.png" alt="" aria-hidden="true">
    <img class="divov divbot" src="assets/graphics/divisions/div-11-${sec}.png" alt="" aria-hidden="true">
    <div class="splitpad">
      <div class="phcol"><div class="phrect" data-photo title="Click to replace photo"><img src="${photo}" alt="" draggable="false"><span class="phhint">Click to add photo</span></div></div>
      <div class="txt">
        <div class="eyebrow">
          ${UIL.edit('category', info.category || '', 'eyl')}
          <span class="eyr">UILAB.COM.AU</span>
        </div>
        ${UIL.edit('name', info.name || '', 'hname')}
        <div class="grid">
          <div class="row">${cell('day')}${cell('date')}</div>
          <div class="row">${cell('start')}${cell('finish')}</div>
          <div class="row">${cell('location')}${cell('address')}</div>
        </div>
      </div>
    </div>
    <div class="splitfooter">
      <img class="partner" src="${UIL.markSrc('partner', pop)}" alt="Queensland AI Hub · Logan">
      <div class="centerlock">
        <img class="word" src="${UIL.markSrc('wordmark', pop)}" alt="UiLab">
        ${UIL.sponsorRow(info)}
      </div>
      <img class="brand" src="assets/logos/brandmark-${pop}.svg" alt="">
    </div>
  </div>`;
};

/* ---- AD (IG Ad Square / Story) — bold headline + description + button ---- */
UIL.renderAd = function (ev, fmt, info, ground, pop) {
  const u = fmt.w / 1080;
  return `
  <div class="ab ad" data-ab style="width:${fmt.w}px;height:${fmt.h}px;--g:${UIL.COLORS[ground]};--p:${UIL.COLORS[pop]};--u:${u};">
    <div class="pad">
      <div class="eyebrow">
        ${UIL.edit('category', info.category || '', 'eyl')}
        <span class="eyr">UILAB.COM.AU</span>
      </div>
      ${UIL.edit('name', info.name || '', 'hname')}
      ${UIL.edit('description', info.description || '', 'addesc')}
      <div class="grow"></div>
      <div class="adbottom">
        <div class="footL">
          <img class="word" src="${UIL.markSrc('wordmark', pop)}" alt="UiLab">
          <img class="mark" src="assets/logos/brandmark-${pop}.svg" alt="">
          ${UIL.sponsorRow(info)}
        </div>
        ${UIL.edit('cta', info.cta || '', 'adbtn')}
      </div>
    </div>
  </div>`;
};

/* ---- TEXT (no photo: eyebrow + headline + description + grid) ---- */
UIL.renderText = function (ev, fmt, info, ground, pop) {
  const u = fmt.w / (fmt.layout === 'split' ? 1200 : 1080);
  return `
  <div class="ab stacked text" data-ab style="width:${fmt.w}px;height:${fmt.h}px;--g:${UIL.COLORS[ground]};--p:${UIL.COLORS[pop]};--u:${u};">
    <div class="pad">
      <div class="eyebrow">
        ${UIL.edit('category', info.category || '', 'eyl')}
        <span class="eyr">UILAB.COM.AU</span>
      </div>
      ${UIL.edit('name', info.name || '', 'hname')}
      ${UIL.edit('description', info.description || '', 'desc')}
      <div class="grow"></div>
      ${UIL.gridRows(info)}
      ${UIL.foot(pop, info)}
    </div>
  </div>`;
};

/* ---- OVERLAY (full-bleed photo + ground tint) ---- */
UIL.renderOverlay = function (ev, fmt, info, ground, pop) {
  const u = fmt.w / (fmt.layout === 'split' ? 1200 : 1080);
  const photo = info.__photo || 'assets/photos/sample-event-1.jpg';
  return `
  <div class="ab overlay" data-ab style="width:${fmt.w}px;height:${fmt.h}px;--g:${UIL.COLORS[ground]};--p:${UIL.COLORS[pop]};--u:${u};">
    <img class="ovphoto" src="${photo}" alt="" draggable="false" data-photo title="Click to replace photo">
    <div class="ovtint"></div>
    <div class="bgdiv"></div>
    <div class="pad">
      <div class="eyebrow">
        ${UIL.edit('category', info.category || '', 'eyl')}
        <span class="eyr">UILAB.COM.AU</span>
      </div>
      ${UIL.edit('name', info.name || '', 'hname')}
      ${UIL.edit('description', info.description || '', 'desc')}
      <div class="grow"></div>
      ${UIL.gridRows(info)}
      ${UIL.foot(pop, info)}
    </div>
  </div>`;
};
UIL.renderArtboard = function (eventKey, formatKey, info, ground, pop, variant) {
  const ev = UIL.EVENTS[eventKey];
  ev.__key = eventKey;
  const fmt = UIL.FORMATS[formatKey];
  let html;
  if (fmt.layout === 'ad') html = UIL.renderAd(ev, fmt, info, ground, pop);else if (variant === 'overlay') html = UIL.renderOverlay(ev, fmt, info, ground, pop);else if (variant === 'text') html = UIL.renderText(ev, fmt, info, ground, pop);else if (fmt.layout === 'split') html = UIL.renderSplit(ev, fmt, info, ground, pop);else if (variant === 'remix') html = UIL.renderStackedRemix(ev, fmt, info, ground, pop);else html = UIL.renderStacked(ev, fmt, info, ground, pop);
  // tag with the format key so CSS can target story / print backgrounds
  return html.replace('class="ab ', `class="ab fmt-${formatKey} `);
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "event-studio/render.js", error: String((e && e.message) || e) }); }

// event-studio/studio.js
try { (() => {
/* ============================================================
   UiLab Event Studio — controller
   Global event-info form populates every template; per-template
   inline edits + photo override; PNG (web) & PDF (print) export.
   ============================================================ */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const LS = {
    get(k, d) {
      try {
        return JSON.parse(localStorage.getItem(k)) ?? d;
      } catch (_) {
        return d;
      }
    },
    set(k, v) {
      try {
        localStorage.setItem(k, JSON.stringify(v));
        return true;
      } catch (_) {
        return false;
      }
    }
  };

  /* in-memory image stores — survive even if localStorage quota is exceeded */
  const photoMem = {};
  const sponsorMem = {};

  /* downscale an uploaded image to keep it inside the storage quota */
  function downscale(dataUrl, maxDim, type, q) {
    return new Promise(res => {
      const img = new Image();
      img.onload = () => {
        const w = img.naturalWidth,
          h = img.naturalHeight;
        const scale = Math.min(1, maxDim / Math.max(w, h));
        const cv = document.createElement('canvas');
        cv.width = Math.max(1, Math.round(w * scale));
        cv.height = Math.max(1, Math.round(h * scale));
        cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
        try {
          res(cv.toDataURL(type || 'image/jpeg', q || 0.85));
        } catch (_) {
          res(dataUrl);
        }
      };
      img.onerror = () => res(dataUrl);
      img.src = dataUrl;
    });
  }
  const state = {
    event: LS.get('uil-cur-event', 'future-tech-open-house'),
    format: LS.get('uil-cur-format', 'ig-portrait'),
    info: Object.assign({}, UIL.DEFAULT_INFO, LS.get('uil-info', {}))
  };
  function selFor(ev) {
    const e = UIL.EVENTS[ev];
    const saved = LS.get('studio-sel-' + ev, {});
    return {
      ground: e.grounds.includes(saved.ground) ? saved.ground : e.grounds[0],
      pop: e.pops.includes(saved.pop) ? saved.pop : e.pops[0]
    };
  }
  function setSel(ev, kind, val) {
    const s = selFor(ev);
    s[kind] = val;
    LS.set('studio-sel-' + ev, s);
    render();
  }
  const ovKey = (ev, fmt) => `uil-ov-${ev}-${fmt}`;
  function overrides(ev, fmt) {
    return LS.get(ovKey(ev, fmt), {});
  }
  function setOverride(ev, fmt, field, val) {
    const o = overrides(ev, fmt);
    o[field] = val;
    LS.set(ovKey(ev, fmt), o);
  }
  function clearOverrides(ev, fmt) {
    localStorage.removeItem(ovKey(ev, fmt));
    render();
  }
  function photoFor(ev) {
    return photoMem[ev] || LS.get('uil-photo-' + ev, null);
  }
  function sponsorsFor(ev) {
    return sponsorMem[ev] || LS.get('uil-sponsors-' + ev, []);
  }
  function variantFor(fmt) {
    const list = UIL.VARIANTS[fmt] || [['standard', 'Standard']];
    const keys = list.map(v => v[0]);
    const saved = LS.get('uil-variant-' + fmt, null);
    return keys.includes(saved) ? saved : keys[0];
  }
  function setVariant(fmt, v) {
    LS.set('uil-variant-' + fmt, v);
    render();
  }
  function effInfo() {
    const ov = overrides(state.event, state.format);
    const merged = Object.assign({}, state.info, ov);
    merged.__photo = photoFor(state.event);
    merged.__sponsors = sponsorsFor(state.event);
    return merged;
  }

  /* ---------- build form ---------- */
  function buildForm() {
    const form = $('#form');
    form.innerHTML = UIL.FIELDS.map(f => {
      const v = UIL.escapeHTML(state.info[f.key] || '');
      const input = f.type === 'textarea' ? `<textarea data-field="${f.key}" rows="2" placeholder="${f.ph}">${v}</textarea>` : `<input type="text" data-field="${f.key}" value="${v}" placeholder="${f.ph}">`;
      return `<label class="fld"><span>${f.label}</span>${input}</label>`;
    }).join('');
    form.querySelectorAll('[data-field]').forEach(el => {
      el.addEventListener('input', () => {
        state.info[el.dataset.field] = el.value;
        LS.set('uil-info', state.info);
        render();
      });
    });
  }

  /* ---------- build switchers ---------- */
  function buildSwitchers() {
    const eb = $('#events');
    eb.innerHTML = UIL.EVENT_ORDER.map(k => `<button data-ev="${k}" class="${k === state.event ? 'on' : ''}">${UIL.EVENTS[k].label}</button>`).join('');
    eb.querySelectorAll('button').forEach(b => b.onclick = () => {
      state.event = b.dataset.ev;
      LS.set('uil-cur-event', state.event);
      render();
    });
    const fb = $('#formats');
    fb.innerHTML = UIL.FORMAT_ORDER.map(k => {
      const f = UIL.FORMATS[k];
      return `<button data-fmt="${k}" class="${k === state.format ? 'on' : ''}">${f.label}<small>${f.w}×${f.h}</small></button>`;
    }).join('');
    fb.querySelectorAll('button').forEach(b => b.onclick = () => {
      state.format = b.dataset.fmt;
      LS.set('uil-cur-format', state.format);
      render();
    });
  }
  function buildChips() {
    const e = UIL.EVENTS[state.event],
      sel = selFor(state.event);
    const chip = (kind, name, on) => `<button class="sw ${on ? 'on' : ''}" data-kind="${kind}" data-val="${name}"><span class="dot" style="background:${UIL.COLORS[name]}"></span>${UIL.LABEL[name]}</button>`;
    const g = e.grounds.length > 1 ? `<div class="grp"><span class="glbl">Ground</span>${e.grounds.map(x => chip('ground', x, x === sel.ground)).join('')}</div>` : '';
    const p = e.pops.length > 1 ? `<div class="grp"><span class="glbl">Pop</span>${e.pops.map(x => chip('pop', x, x === sel.pop)).join('')}</div>` : '';
    const wrap = $('#chips');
    wrap.innerHTML = g || p || `<span class="none">${UIL.LABEL[sel.ground]} ground · ${UIL.LABEL[sel.pop]} pop</span>`;
    wrap.querySelectorAll('.sw').forEach(b => b.onclick = () => setSel(state.event, b.dataset.kind, b.dataset.val));
  }
  function buildVariant() {
    const wrap = $('#variant');
    const list = UIL.VARIANTS[state.format] || [];
    if (list.length < 2) {
      wrap.innerHTML = '';
      return;
    }
    const v = variantFor(state.format);
    wrap.innerHTML = `<span class="glbl">Layout</span>` + list.map(([k, lbl]) => `<button data-v="${k}" class="${k === v ? 'on' : ''}">${lbl}</button>`).join('');
    wrap.querySelectorAll('button').forEach(b => b.onclick = () => setVariant(state.format, b.dataset.v));
  }

  /* ---------- render artboard ---------- */
  function render() {
    buildSwitchers();
    buildChips();
    buildVariant();
    const sel = selFor(state.event);
    const fmt = UIL.FORMATS[state.format];
    const host = $('#artboard');
    host.innerHTML = UIL.renderArtboard(state.event, state.format, effInfo(), sel.ground, sel.pop, variantFor(state.format));

    // inline editing → overrides
    host.querySelectorAll('[data-edit]').forEach(el => {
      el.addEventListener('input', () => setOverride(state.event, state.format, el.dataset.edit, el.innerText));
    });
    // photo upload
    host.querySelectorAll('[data-photo]').forEach(el => {
      el.addEventListener('click', () => pickPhoto());
    });
    // sponsor remove
    host.querySelectorAll('[data-sponsor]').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        removeSponsor(+el.dataset.sponsor);
      });
    });
    // remix: bake the photo into the divisions silhouette (so preview & export match)
    host.querySelectorAll('[data-divmask]').forEach(el => bakeDivMask(el));
    $('#meta').textContent = `${UIL.EVENTS[state.event].label} · ${fmt.label} · ${fmt.w}×${fmt.h}px` + (fmt.kind === 'print' ? ` · ${fmt.mm[0]}×${fmt.mm[1]}mm` : '');
    fit();
  }
  function fit() {
    const fmt = UIL.FORMATS[state.format];
    const ab = $('#artboard [data-ab]');
    if (!ab) return;
    const stage = $('#stage');
    const sc = Math.min((stage.clientWidth - 80) / fmt.w, (stage.clientHeight - 80) / fmt.h, 1);
    ab.style.transform = `scale(${sc})`;
    $('#artboard').style.width = fmt.w * sc + 'px';
    $('#artboard').style.height = fmt.h * sc + 'px';
  }

  /* ---------- photo ---------- */
  function pickPhoto() {
    const inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = 'image/*';
    inp.onchange = () => {
      const file = inp.files[0];
      if (!file) return;
      const r = new FileReader();
      r.onload = async () => {
        const small = await downscale(r.result, 1800);
        photoMem[state.event] = small;
        LS.set('uil-photo-' + state.event, small);
        bakeCache = {};
        render();
      };
      r.readAsDataURL(file);
    };
    inp.click();
  }

  /* ---------- remix divisions mask: bake photo × divisions alpha to a flat PNG
     (a plain <img>, so it renders identically in the preview and the export) ---------- */
  let bakeCache = {};
  let divSourceImg = null;
  function loadImg(src) {
    return new Promise((res, rej) => {
      const i = new Image();
      i.crossOrigin = 'anonymous';
      i.onload = () => res(i);
      i.onerror = rej;
      i.src = src;
    });
  }
  async function bakeDivMask(el) {
    const photo = photoFor(state.event);
    const hint = el.querySelector('.phhint');
    const img = el.querySelector('.dmimg');
    if (!photo) {
      if (hint) hint.style.display = '';
      return;
    } // empty → recoloured silhouette stays
    if (hint) hint.style.display = 'none';
    const key = state.event;
    if (bakeCache[key]) {
      img.src = bakeCache[key];
      return;
    }
    try {
      if (!divSourceImg) divSourceImg = await loadImg('assets/graphics/logan-divisions.png');
      const ph = await loadImg(photo);
      const W = divSourceImg.naturalWidth,
        H = divSourceImg.naturalHeight;
      const c = document.createElement('canvas');
      c.width = W;
      c.height = H;
      const x = c.getContext('2d');
      const s = Math.max(W / ph.naturalWidth, H / ph.naturalHeight); // cover
      const pw = ph.naturalWidth * s,
        phh = ph.naturalHeight * s;
      x.drawImage(ph, (W - pw) / 2, (H - phh) / 2, pw, phh);
      x.globalCompositeOperation = 'destination-in'; // keep photo only where silhouette is opaque
      x.drawImage(divSourceImg, 0, 0, W, H);
      const url = c.toDataURL('image/png');
      bakeCache[key] = url;
      img.src = url;
    } catch (e) {/* keep silhouette on failure */}
  }

  /* ---------- sponsor logos ---------- */
  function addSponsor() {
    const inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = 'image/*';
    inp.multiple = true;
    inp.onchange = () => {
      const files = [...inp.files];
      if (!files.length) return;
      const list = sponsorsFor(state.event).slice();
      let pending = files.length;
      files.forEach(file => {
        const r = new FileReader();
        r.onload = async () => {
          const small = await downscale(r.result, 600, 'image/png');
          list.push(small);
          if (--pending === 0) {
            sponsorMem[state.event] = list;
            LS.set('uil-sponsors-' + state.event, list);
            render();
          }
        };
        r.readAsDataURL(file);
      });
    };
    inp.click();
  }
  function removeSponsor(i) {
    const list = sponsorsFor(state.event).slice();
    list.splice(i, 1);
    sponsorMem[state.event] = list;
    LS.set('uil-sponsors-' + state.event, list);
    render();
  }

  /* ---------- export ---------- */
  async function exportPNG() {
    const fmt = UIL.FORMATS[state.format];
    const ab = $('#artboard [data-ab]');
    if (!ab || !window.htmlToImage) return;
    const prev = ab.style.transform;
    ab.style.transform = 'none';
    document.body.classList.add('exporting');
    try {
      const url = await window.htmlToImage.toPng(ab, {
        width: fmt.w,
        height: fmt.h,
        pixelRatio: 1,
        cacheBust: true
      });
      const a = document.createElement('a');
      a.download = `UiLab_${state.event}_${state.format}_${fmt.w}x${fmt.h}.png`;
      a.href = url;
      a.click();
    } catch (e) {
      alert('Export failed: ' + e.message);
    }
    document.body.classList.remove('exporting');
    ab.style.transform = prev;
    fit();
  }

  /* ---------- PDF: build from a high-res PNG sized exactly to the format ---------- */
  async function exportPDF() {
    const fmt = UIL.FORMATS[state.format];
    const ab = $('#artboard [data-ab]');
    if (!ab || !window.htmlToImage || !(window.jspdf && window.jspdf.jsPDF)) {
      alert('PDF library not ready — try again in a moment.');
      return;
    }
    const prev = ab.style.transform;
    ab.style.transform = 'none';
    document.body.classList.add('exporting');
    try {
      const url = await window.htmlToImage.toPng(ab, {
        width: fmt.w,
        height: fmt.h,
        pixelRatio: 2,
        cacheBust: true
      });
      const {
        jsPDF
      } = window.jspdf;
      let unit, pw, ph;
      if (fmt.kind === 'print') {
        unit = 'mm';
        pw = fmt.mm[0];
        ph = fmt.mm[1];
      } else {
        unit = 'px';
        pw = fmt.w;
        ph = fmt.h;
      }
      const pdf = new jsPDF({
        orientation: pw > ph ? 'landscape' : 'portrait',
        unit,
        format: [pw, ph],
        compress: true
      });
      pdf.addImage(url, 'PNG', 0, 0, pw, ph, undefined, 'FAST');
      pdf.save(`UiLab_${state.event}_${state.format}.pdf`);
    } catch (e) {
      alert('PDF export failed: ' + e.message);
    }
    document.body.classList.remove('exporting');
    ab.style.transform = prev;
    fit();
  }

  /* ---------- Print-ready: max resolution + 3mm bleed (print formats) ---------- */
  async function exportPrintReady() {
    const fmt = UIL.FORMATS[state.format];
    const ab = $('#artboard [data-ab]');
    if (!ab || !window.htmlToImage || !(window.jspdf && window.jspdf.jsPDF)) {
      alert('PDF library not ready — try again in a moment.');
      return;
    }
    const prev = ab.style.transform;
    ab.style.transform = 'none';
    document.body.classList.add('exporting');
    const btn = $('#btnPrint');
    const lbl = btn ? btn.textContent : '';
    if (btn) {
      btn.textContent = 'Rendering…';
      btn.disabled = true;
    }
    try {
      // ~450dpi for the 150dpi base, capped so huge formats don't blow memory
      const maxPx = 6200;
      let pr = Math.min(3, maxPx / fmt.w, maxPx / fmt.h);
      pr = Math.max(2, pr);
      const url = await window.htmlToImage.toPng(ab, {
        width: fmt.w,
        height: fmt.h,
        pixelRatio: pr,
        cacheBust: true
      });
      const {
        jsPDF
      } = window.jspdf;
      if (fmt.kind === 'print') {
        const bleed = 3; // mm on every edge
        const tw = fmt.mm[0],
          th = fmt.mm[1];
        const pw = tw + bleed * 2,
          ph = th + bleed * 2;
        const pdf = new jsPDF({
          orientation: pw > ph ? 'landscape' : 'portrait',
          unit: 'mm',
          format: [pw, ph],
          compress: true
        });
        // cover the full bleed page with uniform scale (no distortion); design bleeds past trim
        const sc = Math.max(pw / tw, ph / th);
        const dw = tw * sc,
          dh = th * sc;
        pdf.addImage(url, 'PNG', (pw - dw) / 2, (ph - dh) / 2, dw, dh, undefined, 'FAST');
        pdf.save(`UiLab_${state.event}_${state.format}_print-ready_${tw}x${th}mm_bleed3mm.pdf`);
      } else {
        // web formats: high-res PDF at exact pixel size (no bleed)
        const pdf = new jsPDF({
          orientation: fmt.w > fmt.h ? 'landscape' : 'portrait',
          unit: 'px',
          format: [fmt.w, fmt.h],
          compress: true
        });
        pdf.addImage(url, 'PNG', 0, 0, fmt.w, fmt.h, undefined, 'FAST');
        pdf.save(`UiLab_${state.event}_${state.format}_highres.pdf`);
      }
    } catch (e) {
      alert('Print-ready export failed: ' + e.message);
    }
    if (btn) {
      btn.textContent = lbl;
      btn.disabled = false;
    }
    document.body.classList.remove('exporting');
    ab.style.transform = prev;
    fit();
  }
  function boot() {
    buildForm();
    $('#btnPng').onclick = exportPNG;
    $('#btnPdf').onclick = exportPDF;
    $('#btnPrint').onclick = exportPrintReady;
    $('#btnReset').onclick = () => clearOverrides(state.event, state.format);
    $('#btnPhoto').onclick = pickPhoto;
    $('#btnSponsor').onclick = addSponsor;
    window.addEventListener('resize', fit);
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);else boot();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "event-studio/studio.js", error: String((e && e.message) || e) }); }

// ui_kits/flyers/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flyers/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* UiLab website — app shell, routing & register dialog */
const {
  Header,
  Hero,
  Verticals,
  Events,
  CommunityBand,
  Footer
} = window;
function AboutBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(2.5rem, 5vw, 4.5rem) var(--page-margin)',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,0.8fr) minmax(0,1.2fr)',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'var(--accent)'
    }
  }, "Built in Logan / 02"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--type-h2)',
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      margin: 0
    }
  }, "A bridge between ", /*#__PURE__*/React.createElement("u", {
    style: {
      textDecorationColor: 'var(--accent)',
      textDecorationThickness: '3px',
      textUnderlineOffset: '5px'
    }
  }, "people"), ", systems and creativity \u2014 turning what\u2019s emerging into what\u2019s useful, locally."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-body)',
      color: 'var(--text-muted)',
      lineHeight: 1.6,
      marginTop: 'var(--space-5)',
      maxWidth: '60ch'
    }
  }, "UiLab is shaped by people who do the work \u2014 founders, engineers and makers based in Logan. We run the events, build the network and create the pathways that help new technology land where it matters most: in local hands."))));
}
function RegisterDialog({
  event,
  onClose
}) {
  const {
    Input,
    Select,
    Button,
    Tag,
    StatusDot
  } = window.UiLabDesignSystem_b96795;
  const [done, setDone] = React.useState(false);
  if (!event) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      background: 'color-mix(in srgb, #000 64%, transparent)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    className: "uil-water",
    style: {
      width: 'min(460px, 100%)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-6)',
      boxShadow: 'inset 0 1px 0 0 color-mix(in srgb, #fff 9%, transparent), var(--shadow-lg)'
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--space-4) 0'
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: "go"
  }, "You\u2019re registered"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--type-h3)',
      letterSpacing: '-0.02em',
      margin: 'var(--space-4) 0 var(--space-3)'
    }
  }, "See you there."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '14.5px',
      color: 'var(--text-muted)',
      lineHeight: 1.5,
      margin: '0 0 var(--space-6)'
    }
  }, "We\u2019ve held your spot for ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text)'
    }
  }, event.title), ". A confirmation is on its way."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClose,
    style: {
      width: '100%'
    }
  }, "Done")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "soft"
  }, event.tag), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: '16px'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--type-h3)',
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      margin: '0 0 6px'
    }
  }, event.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-5)'
    }
  }, event.date, " \xB7 ", event.time), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Stefan Martin"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@firm.com.au"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "I\u2019m attending as",
    options: [{
      value: 'engineer',
      label: 'Engineer / developer'
    }, {
      value: 'founder',
      label: 'Founder / business'
    }, {
      value: 'council',
      label: 'Council / government'
    }, {
      value: 'student',
      label: 'Student / resident'
    }]
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setDone(true),
    style: {
      width: '100%',
      marginTop: 'var(--space-6)'
    }
  }, event.status === 'stop' ? 'Join the waitlist' : 'Confirm registration'))));
}
function App() {
  const [route, setRoute] = React.useState('home');
  const [reg, setReg] = React.useState(null);
  const scrollTop = () => window.scrollTo({
    top: 0
  });
  const go = r => {
    setRoute(r);
    scrollTop();
  };
  const join = () => {
    setRoute('events');
    scrollTop();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "uil-root uil-water",
    style: {
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    route: route,
    onRoute: go,
    onJoin: join
  }), route === 'home' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onJoin: join
  }), /*#__PURE__*/React.createElement(Verticals, null), /*#__PURE__*/React.createElement(AboutBand, null), /*#__PURE__*/React.createElement(Events, {
    onRegister: setReg
  }), /*#__PURE__*/React.createElement(CommunityBand, {
    onJoin: join
  })), route === 'programs' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Verticals, null), /*#__PURE__*/React.createElement(AboutBand, null), /*#__PURE__*/React.createElement(CommunityBand, {
    onJoin: join
  })), route === 'events' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Events, {
    onRegister: setReg
  }), /*#__PURE__*/React.createElement(CommunityBand, {
    onJoin: join
  })), route === 'industry' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AboutBand, null), /*#__PURE__*/React.createElement(Verticals, {
    heading: true
  }), /*#__PURE__*/React.createElement(CommunityBand, {
    onJoin: join
  })), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(RegisterDialog, {
    event: reg,
    onClose: () => setReg(null)
  }));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CommunityBand.jsx
try { (() => {
/* UiLab website — "Here for Logan" community band (duotone theme shift) */
function CommunityBand({
  onJoin
}) {
  const {
    Button,
    Tag
  } = window.UiLabDesignSystem_b96795;
  return /*#__PURE__*/React.createElement("section", {
    className: "uil-sunset",
    style: {
      background: 'var(--ground)',
      color: 'var(--text)',
      padding: 'clamp(3rem, 6vw, 5.5rem) var(--page-margin)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/graphics/logan-divisions-summer.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 'calc(-1 * var(--page-margin))',
      bottom: '-14%',
      width: 'min(42%, 520px)',
      opacity: 0.16,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    variant: "solid",
    tone: "summer"
  }, "Community / 03"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--type-display)',
      letterSpacing: '-0.03em',
      lineHeight: 0.98,
      margin: 'var(--space-5) 0 0'
    }
  }, "Here for Logan."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-lead)',
      color: 'var(--text-muted)',
      lineHeight: 1.5,
      maxWidth: '44ch',
      marginTop: 'var(--space-5)'
    }
  }, "Every council division has a place in the system. Join a network built to help local people, ideas and firms grow and succeed."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-7)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: onJoin
  }, "Become a member"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost"
  }, "Read the brief"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/graphics/logan-divisions-summer.png",
    alt: "Logan council divisions",
    style: {
      width: '100%',
      maxWidth: '340px'
    }
  }))));
}
window.CommunityBand = CommunityBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CommunityBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Events.jsx
try { (() => {
/* UiLab website — events listing (with filter tabs) */
function Events({
  onRegister,
  compact = false
}) {
  const {
    Card,
    Tag,
    StatusDot,
    Button,
    Tabs
  } = window.UiLabDesignSystem_b96795;
  const D = window.UILAB_DATA;
  const [filter, setFilter] = React.useState('all');
  const tabs = [{
    value: 'all',
    label: 'All'
  }, {
    value: 'Connect',
    label: 'Connect'
  }, {
    value: 'Industry',
    label: 'Industry'
  }, {
    value: 'Community',
    label: 'Community'
  }];
  const list = D.events.filter(e => filter === 'all' || e.tag === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(2.5rem, 5vw, 4.5rem) var(--page-margin)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'var(--accent)'
    }
  }, "What\u2019s on / Logan"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--type-h2)',
      letterSpacing: '-0.02em',
      lineHeight: 1.08,
      margin: 'var(--space-3) 0 0'
    }
  }, "Emerging technology, in person."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: filter,
    onChange: setFilter,
    items: tabs
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, list.map((e, i) => {
    const [d, m, y] = e.date.split(' ');
    return /*#__PURE__*/React.createElement(Card, {
      key: i,
      padding: "var(--space-5)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '72px 1fr auto',
        gap: 'var(--space-5)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        borderRight: '1px solid var(--border)',
        paddingRight: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: '26px',
        color: 'var(--accent)',
        lineHeight: 1
      }
    }, d), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--text-faint)',
        marginTop: '4px'
      }
    }, m, " ", y)), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '7px',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      variant: "soft"
    }, e.tag), /*#__PURE__*/React.createElement(StatusDot, {
      status: e.status
    }, e.statusLabel)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '19px',
        letterSpacing: '-0.015em',
        lineHeight: 1.12
      }
    }, e.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        color: 'var(--text-muted)',
        marginTop: '6px',
        letterSpacing: '0.02em'
      }
    }, e.time, " \xB7 ", e.place)), /*#__PURE__*/React.createElement("div", {
      style: {
        justifySelf: 'end'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: e.status === 'stop' ? 'secondary' : 'primary',
      size: "sm",
      onClick: () => onRegister && onRegister(e)
    }, e.status === 'stop' ? 'Join waitlist' : 'Register'))));
  })));
}
window.Events = Events;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Events.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* UiLab website — footer */
function Footer() {
  const D = window.UILAB_DATA;
  const colLabel = {
    fontFamily: 'var(--font-mono)',
    fontWeight: 700,
    fontSize: '10.5px',
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    color: 'var(--text-faint)',
    marginBottom: 'var(--space-4)'
  };
  const link = {
    fontFamily: 'var(--font-display)',
    fontSize: '14px',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-sunken)',
      borderTop: '1px solid var(--border)',
      padding: 'clamp(2.5rem, 5vw, 4rem) var(--page-margin) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wordmark-sun.svg",
    alt: "UiLab",
    style: {
      height: '22px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '14px',
      color: 'var(--text-muted)',
      lineHeight: 1.5,
      maxWidth: '30ch',
      marginTop: 'var(--space-4)'
    }
  }, "Translating emerging technology into local success."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '11px',
      letterSpacing: '0.1em',
      color: 'var(--text-faint)',
      marginTop: 'var(--space-5)'
    }
  }, "UILAB.COM.AU \xB7 @UILAB.AU")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colLabel
  }, "Programs"), D.verticals.map(v => /*#__PURE__*/React.createElement("a", {
    key: v.name,
    href: "#",
    style: link
  }, v.name))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colLabel
  }, "Lab"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Industry"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Events"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Contact")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colLabel
  }, "Follow"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Podcast"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid var(--border)',
      marginTop: 'var(--space-7)',
      paddingTop: 'var(--space-5)',
      flexWrap: 'wrap',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--text-faint)',
      letterSpacing: '0.04em'
    }
  }, "\xA9 2025 UiLab \xB7 Logan, South East Queensland"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--accent)'
    }
  }, "Here for Logan")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* UiLab website — sticky header */
function Header({
  route,
  onRoute,
  onJoin
}) {
  const {
    Button
  } = window.UiLabDesignSystem_b96795;
  const D = window.UILAB_DATA;
  const [scrolled, setScrolled] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px var(--page-margin)',
      background: 'color-mix(in srgb, var(--ground) 86%, transparent)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onRoute('home');
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/brandmark-sun.svg",
    alt: "UiLab",
    style: {
      height: '28px'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wordmark-sun.svg",
    alt: "UiLab",
    style: {
      height: '19px'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, D.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onRoute(n.id);
    },
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.13em',
      textDecoration: 'none',
      color: route === n.id ? 'var(--accent)' : 'var(--text-muted)',
      transition: 'color var(--dur) var(--ease-out)'
    }
  }, n.label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: onJoin
  }, "Join UiLab"));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* UiLab website — hero */
function Hero({
  onJoin
}) {
  const {
    Button,
    Tag
  } = window.UiLabDesignSystem_b96795;
  const D = window.UILAB_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(3rem, 8vw, 7rem) var(--page-margin) clamp(2.5rem, 5vw, 4.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-22%',
      right: '-8%',
      width: '52vw',
      height: '52vw',
      maxWidth: '760px',
      maxHeight: '760px',
      background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 16%, transparent), transparent 62%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/graphics/logan-divisions-sun.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 'calc(-1 * var(--page-margin))',
      bottom: '-6%',
      width: 'min(56%, 720px)',
      opacity: 0.14,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: '980px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "solid",
    tone: "sun"
  }, "Here for Logan"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--text-muted)'
    }
  }, "Logan \xB7 South East QLD")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--type-display)',
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      margin: 0,
      maxWidth: '15ch'
    }
  }, "Translating ", /*#__PURE__*/React.createElement("u", {
    style: {
      textDecorationColor: 'var(--accent)',
      textDecorationThickness: '4px',
      textUnderlineOffset: '6px',
      textDecorationSkipInk: 'auto'
    }
  }, "emerging technology"), " into ", /*#__PURE__*/React.createElement("u", {
    style: {
      textDecorationColor: 'var(--accent)',
      textDecorationThickness: '4px',
      textUnderlineOffset: '6px',
      textDecorationSkipInk: 'auto'
    }
  }, "local success"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-lead)',
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      maxWidth: '52ch',
      marginTop: 'var(--space-6)'
    }
  }, "UiLab is Logan\u2019s innovation lab \u2014 connecting people, systems and creativity so new technology turns into real outcomes for the people who live and work here."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-7)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: onJoin
  }, "Join UiLab"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Talk to the team"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--gutter)',
      marginTop: 'clamp(2.5rem, 5vw, 4.5rem)',
      borderTop: '1px solid var(--border)',
      paddingTop: 'var(--space-6)'
    }
  }, D.stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 'clamp(1.6rem, 1rem + 1.6vw, 2.4rem)',
      color: 'var(--accent)',
      letterSpacing: '-0.01em'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '10.5px',
      textTransform: 'uppercase',
      letterSpacing: '0.13em',
      color: 'var(--text-faint)',
      marginTop: '6px'
    }
  }, s.label)))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Verticals.jsx
try { (() => {
/* UiLab website — verticals / programs */
function Verticals({
  heading = true
}) {
  const {
    Card,
    Tag,
    Button
  } = window.UiLabDesignSystem_b96795;
  const D = window.UILAB_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(2.5rem, 5vw, 4.5rem) var(--page-margin)'
    }
  }, heading ? /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '60ch',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'var(--accent)'
    }
  }, "The system / 01"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--type-h1)',
      letterSpacing: '-0.02em',
      lineHeight: 1.08,
      margin: 'var(--space-4) 0 0'
    }
  }, "One lab, five ways in."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-lead)',
      color: 'var(--text-muted)',
      lineHeight: 1.5,
      marginTop: 'var(--space-4)'
    }
  }, "The same platform, tailored to how you work \u2014 from first meetup to factory floor.")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 'var(--gutter)'
    }
  }, D.verticals.map(v => /*#__PURE__*/React.createElement(Card, {
    key: v.name,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '20px',
      letterSpacing: '-0.02em',
      color: 'var(--accent)'
    }
  }, "UiLab"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '20px',
      letterSpacing: '-0.01em',
      color: 'var(--text)'
    }
  }, v.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '14.5px',
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      margin: '0 0 var(--space-5)'
    }
  }, v.blurb), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm"
  }, "Explore ", v.name)))));
}
window.Verticals = Verticals;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Verticals.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* UiLab website — demo content (plain global, no JSX) */
window.UILAB_DATA = {
  nav: [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'programs',
    label: 'Programs'
  }, {
    id: 'events',
    label: 'Events'
  }, {
    id: 'industry',
    label: 'Industry'
  }],
  verticals: [{
    name: 'Community',
    tone: 'sun',
    blurb: 'A place for Logan to grow and succeed — meetups, mentoring and a network that has your back.'
  }, {
    name: 'Connect',
    tone: 'sky',
    blurb: 'Linking people, systems and creativity. We match local talent to the firms that need it.'
  }, {
    name: 'Events',
    tone: 'summer',
    blurb: 'Workshops, lunches and development days that put emerging technology in local hands.'
  }, {
    name: 'Podcasts',
    tone: 'jacaranda',
    blurb: 'Conversations with the founders, engineers and makers shaping Logan’s tech future.'
  }, {
    name: 'Industry',
    tone: 'sun',
    blurb: 'Where established firms meet new technology, talent and the partnerships to apply it.'
  }],
  events: [{
    title: 'Emerging technology over lunch',
    date: '21 Oct 2025',
    time: '11:30am — 1:30pm',
    place: 'Extraction Artisan Coffee, Slacks Creek',
    tag: 'Connect',
    status: 'go',
    statusLabel: 'Registering'
  }, {
    title: 'Logan Development Day',
    date: '04 Nov 2025',
    time: '9:00am — 4:00pm',
    place: 'Logan Entertainment Centre',
    tag: 'Industry',
    status: 'warn',
    statusLabel: 'Filling fast'
  }, {
    title: 'Brisbane Industrial factory walkthrough',
    date: '18 Nov 2025',
    time: '10:00am — 12:00pm',
    place: '3375 Pacific Hwy, Slacks Creek',
    tag: 'Industry',
    status: 'go',
    statusLabel: 'Registering'
  }, {
    title: 'Ai brand toolkit workshop',
    date: '02 Dec 2025',
    time: '6:00pm — 8:00pm',
    place: 'UiLab Studio, Springwood',
    tag: 'Community',
    status: 'stop',
    statusLabel: 'Waitlist'
  }],
  stats: [{
    value: '12',
    label: 'Council divisions'
  }, {
    value: '131K',
    label: 'Community reach'
  }, {
    value: '40+',
    label: 'Events a year'
  }, {
    value: '2025',
    label: 'Founded in Logan'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/lib/primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    sm: {
      fontSize: '11px',
      padding: '7px 12px',
      gap: '6px',
      letterSpacing: '0.12em'
    },
    md: {
      fontSize: '12px',
      padding: '11px 18px',
      gap: '8px',
      letterSpacing: '0.13em'
    },
    lg: {
      fontSize: '13px',
      padding: '15px 26px',
      gap: '10px',
      letterSpacing: '0.14em'
    }
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
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--accent-strong)' : 'var(--accent)',
      color: 'var(--on-accent)',
      borderColor: 'transparent'
    },
    secondary: {
      background: hover && !disabled ? 'var(--fill-subtle)' : 'transparent',
      color: 'var(--text)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: hover && !disabled ? 'var(--fill-subtle)' : 'transparent',
      color: hover && !disabled ? 'var(--accent)' : 'var(--text)',
      borderColor: 'transparent'
    },
    link: {
      background: 'transparent',
      color: 'var(--accent)',
      borderColor: 'transparent',
      padding: 0,
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      textDecorationThickness: '1.5px'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginRight: '-1px'
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginLeft: '-1px'
    }
  }, iconRight) : null);
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
    cursor: interactive ? 'pointer' : 'default'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '10.5px',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--accent)',
      marginBottom: 'var(--space-3)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--type-h4)',
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      marginBottom: 'var(--space-3)'
    }
  }, title) : null, children);
}

// --- components/display/Tag.jsx ---
/**
 * UiLab Tag / Badge — Roboto Mono Bold, uppercase, wide tracking.
 * Soft tinted, solid accent, or hairline outline. Used for verticals,
 * categories, statuses and metadata.
 */
function Tag({
  children,
  variant = 'soft',
  tone = 'accent',
  style = {},
  ...rest
}) {
  const toneColor = tone === 'accent' ? 'var(--accent)' : tone === 'sky' ? 'var(--uil-sky)' : tone === 'summer' ? 'var(--uil-summer)' : tone === 'sun' ? 'var(--uil-sun)' : tone === 'jacaranda' ? 'var(--uil-jacaranda)' : 'var(--accent)';
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
    whiteSpace: 'nowrap'
  };
  const variants = {
    solid: {
      background: toneColor,
      color: 'var(--on-accent)'
    },
    soft: {
      background: `color-mix(in srgb, ${toneColor} 16%, transparent)`,
      color: toneColor
    },
    outline: {
      background: 'transparent',
      color: toneColor,
      borderColor: `color-mix(in srgb, ${toneColor} 45%, transparent)`
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}

// --- components/display/Avatar.jsx ---
/**
 * UiLab Avatar — a square, modular initials chip (the brand favours letter
 * marks like C · C · I · E). Defaults to a tight-radius square; set shape
 * "circle" for people. Tone sets the accent fill.
 */
function Avatar({
  initials = '',
  shape = 'square',
  size = 40,
  tone = 'accent',
  src = null,
  style = {},
  ...rest
}) {
  const toneColor = tone === 'sky' ? 'var(--uil-sky)' : tone === 'summer' ? 'var(--uil-summer)' : tone === 'sun' ? 'var(--uil-sun)' : tone === 'jacaranda' ? 'var(--uil-jacaranda)' : 'var(--accent)';
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
    flex: 'none'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: initials,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials.slice(0, 2));
}

// --- components/display/StatusDot.jsx ---
/**
 * UiLab StatusDot — a small colour pip with a Roboto Mono uppercase label.
 * The brand's status pattern (no emoji): live/online, attention, closed.
 */
function StatusDot({
  children,
  status = 'go',
  pulse = false,
  style = {},
  ...rest
}) {
  const color = status === 'go' ? 'var(--status-go)' : status === 'warn' ? 'var(--status-warn)' : status === 'stop' ? 'var(--status-stop)' : status === 'idle' ? 'var(--text-faint)' : 'var(--status-go)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '9px',
      height: '9px',
      flex: 'none'
    }
  }, pulse ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '999px',
      background: color,
      opacity: 0.5,
      animation: 'uil-ping 1.6s var(--ease-out) infinite'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '999px',
      background: color
    }
  })), children ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--text)'
    }
  }, children) : null, /*#__PURE__*/React.createElement("style", null, `@keyframes uil-ping { 0% { transform: scale(1); opacity: .5 } 70%,100% { transform: scale(2.4); opacity: 0 } }`));
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
  const borderColor = error ? 'var(--status-stop)' : focus ? 'var(--accent)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...containerStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '10.5px',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
      ...style
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--status-stop)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '12.5px',
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}

// --- components/forms/Select.jsx ---
/**
 * UiLab Select — labelled native select styled to match Input, with a mono
 * chevron. Pass options as [{value,label}] or children <option>s.
 */
function Select({
  label = null,
  options = null,
  id,
  style = {},
  containerStyle = {},
  children,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? 'uil-' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...containerStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '10.5px',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
      ...style
    }
  }, rest), options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '13px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--accent)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '11px'
    }
  }, "\u25BE")));
}

// --- components/forms/Switch.jsx ---
/**
 * UiLab Switch — a controlled toggle. Track fills with the accent (pop)
 * colour when on; the thumb is a tight-radius square (square-tittle DNA).
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label = null,
  id,
  style = {},
  ...rest
}) {
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
    flex: 'none'
  };
  const thumb = {
    position: 'absolute',
    top: '3px',
    left: checked ? '21px' : '3px',
    width: '18px',
    height: '18px',
    borderRadius: 'var(--radius-xs)',
    background: checked ? 'var(--on-accent)' : 'var(--text)',
    transition: 'left var(--dur) var(--ease-out), background var(--dur) var(--ease-out)'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '11px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: track,
    role: "switch",
    "aria-checked": checked
  }, /*#__PURE__*/React.createElement("span", {
    style: thumb
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '14px',
      color: 'var(--text)'
    }
  }, label) : null);
}

// --- components/navigation/Tabs.jsx ---
/**
 * UiLab Tabs — a horizontal nav row with an accent underline on the active
 * tab. Labels are Roboto Mono Bold uppercase. Controlled via value/onChange,
 * or uncontrolled with defaultValue.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].value));
  const active = value !== undefined ? value : internal;
  const [hover, setHover] = React.useState(null);
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }, rest), items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.value),
      onMouseEnter: () => setHover(it.value),
      onMouseLeave: () => setHover(null),
      style: {
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
        color: on ? 'var(--accent)' : hover === it.value ? 'var(--text)' : 'var(--text-muted)',
        borderBottom: '2px solid ' + (on ? 'var(--accent)' : 'transparent'),
        marginBottom: '-1px',
        transition: 'color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px'
      }
    }, it.label, it.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '10px',
        color: on ? 'var(--accent)' : 'var(--text-faint)'
      }
    }, it.count) : null);
  }));
}
window.UiLabDesignSystem_b96795 = Object.assign(window.UiLabDesignSystem_b96795 || {}, {
  Button,
  Card,
  Tag,
  Avatar,
  StatusDot,
  Input,
  Select,
  Switch,
  Tabs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/lib/primitives.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
