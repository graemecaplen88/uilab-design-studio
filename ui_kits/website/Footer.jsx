/* UiLab website — footer */
function Footer() {
  const D = window.UILAB_DATA;
  const colLabel = { fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-faint)', marginBottom: 'var(--space-4)' };
  const link = { fontFamily: 'var(--font-display)', fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none', display: 'block', marginBottom: '10px' };
  return (
    <footer style={{ background: 'var(--surface-sunken)', borderTop: '1px solid var(--border)', padding: 'clamp(2.5rem, 5vw, 4rem) var(--page-margin) var(--space-6)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 'var(--space-7)' }}>
        <div>
          <img src="../../assets/logos/wordmark-sun.svg" alt="UiLab" style={{ height: '22px' }} />
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5, maxWidth: '30ch', marginTop: 'var(--space-4)' }}>
            Translating emerging technology into local success.
          </p>
          <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.1em', color: 'var(--text-faint)', marginTop: 'var(--space-5)' }}>UILAB.COM.AU · @UILAB.AU</div>
        </div>
        <div>
          <div style={colLabel}>Programs</div>
          {D.verticals.map(v => <a key={v.name} href="#" style={link}>{v.name}</a>)}
        </div>
        <div>
          <div style={colLabel}>Lab</div>
          <a href="#" style={link}>About</a>
          <a href="#" style={link}>Industry</a>
          <a href="#" style={link}>Events</a>
          <a href="#" style={link}>Contact</a>
        </div>
        <div>
          <div style={colLabel}>Follow</div>
          <a href="#" style={link}>Instagram</a>
          <a href="#" style={link}>LinkedIn</a>
          <a href="#" style={link}>Podcast</a>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', marginTop: 'var(--space-7)', paddingTop: 'var(--space-5)', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-faint)', letterSpacing: '0.04em' }}>© 2025 UiLab · Logan, South East Queensland</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)' }}>Here for Logan</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
