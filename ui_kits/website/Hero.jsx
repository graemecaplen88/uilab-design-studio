/* UiLab website — hero */
function Hero({ onJoin }) {
  const { Button, Tag } = window.UiLabDesignSystem_b96795;
  const D = window.UILAB_DATA;
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(3rem, 8vw, 7rem) var(--page-margin) clamp(2.5rem, 5vw, 4.5rem)' }}>
      {/* subtle accent glow */}
      <div style={{ position: 'absolute', top: '-22%', right: '-8%', width: '52vw', height: '52vw', maxWidth: '760px', maxHeight: '760px',
        background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 16%, transparent), transparent 62%)', pointerEvents: 'none' }} />
      {/* big faint divisions silhouette */}
      <img src="../../assets/graphics/logan-divisions-sun.png" alt="" aria-hidden="true"
        style={{ position: 'absolute', right: 'calc(-1 * var(--page-margin))', bottom: '-6%', width: 'min(56%, 720px)', opacity: 0.14, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: '980px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--space-6)' }}>
          <Tag variant="solid" tone="sun">Here for Logan</Tag>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)' }}>Logan · South East QLD</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--type-display)', lineHeight: 1.05, letterSpacing: '-0.03em', margin: 0, maxWidth: '15ch' }}>
          Translating <u style={{ textDecorationColor: 'var(--accent)', textDecorationThickness: '4px', textUnderlineOffset: '6px', textDecorationSkipInk: 'auto' }}>emerging technology</u> into <u style={{ textDecorationColor: 'var(--accent)', textDecorationThickness: '4px', textUnderlineOffset: '6px', textDecorationSkipInk: 'auto' }}>local success</u>.
        </h1>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--type-lead)', lineHeight: 1.5, color: 'var(--text-muted)', maxWidth: '52ch', marginTop: 'var(--space-6)' }}>
          UiLab is Logan’s innovation lab — connecting people, systems and creativity so new
          technology turns into real outcomes for the people who live and work here.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-7)', flexWrap: 'wrap' }}>
          <Button size="lg" variant="primary" onClick={onJoin}>Join UiLab</Button>
          <Button size="lg" variant="secondary">Talk to the team</Button>
        </div>
      </div>

      {/* stats strip */}
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--gutter)', marginTop: 'clamp(2.5rem, 5vw, 4.5rem)', borderTop: '1px solid var(--border)', paddingTop: 'var(--space-6)' }}>
        {D.stats.map(s => (
          <div key={s.label}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'clamp(1.6rem, 1rem + 1.6vw, 2.4rem)', color: 'var(--accent)', letterSpacing: '-0.01em' }}>{s.value}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.13em', color: 'var(--text-faint)', marginTop: '6px' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Hero = Hero;
