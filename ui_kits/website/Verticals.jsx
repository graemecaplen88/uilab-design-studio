/* UiLab website — verticals / programs */
function Verticals({ heading = true }) {
  const { Card, Tag, Button } = window.UiLabDesignSystem_b96795;
  const D = window.UILAB_DATA;
  return (
    <section style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) var(--page-margin)' }}>
      {heading ? (
        <div style={{ maxWidth: '60ch', marginBottom: 'var(--space-7)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--accent)' }}>The system / 01</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--type-h1)', letterSpacing: '-0.02em', lineHeight: 1.08, margin: 'var(--space-4) 0 0' }}>
            One lab, five ways in.
          </h2>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--type-lead)', color: 'var(--text-muted)', lineHeight: 1.5, marginTop: 'var(--space-4)' }}>
            The same platform, tailored to how you work — from first meetup to factory floor.
          </p>
        </div>
      ) : null}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--gutter)' }}>
        {D.verticals.map(v => (
          <Card key={v.name} interactive>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: 'var(--space-4)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.02em', color: 'var(--accent)' }}>UiLab</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '20px', letterSpacing: '-0.01em', color: 'var(--text)' }}>{v.name}</span>
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '14.5px', lineHeight: 1.5, color: 'var(--text-muted)', margin: '0 0 var(--space-5)' }}>{v.blurb}</p>
            <Button variant="link" size="sm">Explore {v.name}</Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
window.Verticals = Verticals;
