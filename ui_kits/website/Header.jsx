/* UiLab website — sticky header */
function Header({ route, onRoute, onJoin }) {
  const { Button } = window.UiLabDesignSystem_b96795;
  const D = window.UILAB_DATA;
  const [scrolled, setScrolled] = React.useState(false);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px var(--page-margin)',
      background: 'color-mix(in srgb, var(--ground) 86%, transparent)',
      backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <a href="#" onClick={(e)=>{e.preventDefault();onRoute('home');}} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <img src="../../assets/logos/brandmark-sun.svg" alt="UiLab" style={{ height: '28px' }} />
        <img src="../../assets/logos/wordmark-sun.svg" alt="UiLab" style={{ height: '19px' }} />
      </a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
        {D.nav.map(n => (
          <a key={n.id} href="#" onClick={(e)=>{e.preventDefault();onRoute(n.id);}}
            style={{
              fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '11px',
              textTransform: 'uppercase', letterSpacing: '0.13em', textDecoration: 'none',
              color: route === n.id ? 'var(--accent)' : 'var(--text-muted)',
              transition: 'color var(--dur) var(--ease-out)',
            }}>{n.label}</a>
        ))}
      </nav>
      <Button size="sm" variant="primary" onClick={onJoin}>Join UiLab</Button>
    </header>
  );
}
window.Header = Header;
