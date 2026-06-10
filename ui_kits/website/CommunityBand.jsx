/* UiLab website — "Here for Logan" community band (duotone theme shift) */
function CommunityBand({ onJoin }) {
  const { Button, Tag } = window.UiLabDesignSystem_b96795;
  return (
    <section className="uil-sunset" style={{ background: 'var(--ground)', color: 'var(--text)', padding: 'clamp(3rem, 6vw, 5.5rem) var(--page-margin)', position: 'relative', overflow: 'hidden' }}>
      <img src="../../assets/graphics/logan-divisions-summer.png" alt="" aria-hidden="true"
        style={{ position: 'absolute', left: 'calc(-1 * var(--page-margin))', bottom: '-14%', width: 'min(42%, 520px)', opacity: 0.16, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)', gap: 'var(--space-8)', alignItems: 'center' }}>
        <div>
          <Tag variant="solid" tone="summer">Community / 03</Tag>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--type-display)', letterSpacing: '-0.03em', lineHeight: 0.98, margin: 'var(--space-5) 0 0' }}>
            Here for Logan.
          </h2>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--type-lead)', color: 'var(--text-muted)', lineHeight: 1.5, maxWidth: '44ch', marginTop: 'var(--space-5)' }}>
            Every council division has a place in the system. Join a network built to help local
            people, ideas and firms grow and succeed.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-7)', flexWrap: 'wrap' }}>
            <Button size="lg" variant="primary" onClick={onJoin}>Become a member</Button>
            <Button size="lg" variant="ghost">Read the brief</Button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="../../assets/graphics/logan-divisions-summer.png" alt="Logan council divisions" style={{ width: '100%', maxWidth: '340px' }} />
        </div>
      </div>
    </section>
  );
}
window.CommunityBand = CommunityBand;
