/* UiLab website — app shell, routing & register dialog */
const { Header, Hero, Verticals, Events, CommunityBand, Footer } = window;

function AboutBand() {
  return (
    <section style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) var(--page-margin)', borderTop: '1px solid var(--border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,0.8fr) minmax(0,1.2fr)', gap: 'var(--space-8)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--accent)' }}>Built in Logan / 02</div>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--type-h2)', letterSpacing: '-0.02em', lineHeight: 1.12, margin: 0 }}>
            A bridge between <u style={{ textDecorationColor: 'var(--accent)', textDecorationThickness: '3px', textUnderlineOffset: '5px' }}>people</u>, systems and creativity — turning what’s emerging into what’s useful, locally.
          </h2>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--type-body)', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 'var(--space-5)', maxWidth: '60ch' }}>
            UiLab is shaped by people who do the work — founders, engineers and makers based in
            Logan. We run the events, build the network and create the pathways that help new
            technology land where it matters most: in local hands.
          </p>
        </div>
      </div>
    </section>
  );
}

function RegisterDialog({ event, onClose }) {
  const { Input, Select, Button, Tag, StatusDot } = window.UiLabDesignSystem_b96795;
  const [done, setDone] = React.useState(false);
  if (!event) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'color-mix(in srgb, #000 64%, transparent)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-5)' }}>
      <div onClick={(e) => e.stopPropagation()} className="uil-water" style={{ width: 'min(460px, 100%)', background: 'var(--surface-raised)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: 'var(--space-6)', boxShadow: 'inset 0 1px 0 0 color-mix(in srgb, #fff 9%, transparent), var(--shadow-lg)' }}>
        {done ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-4) 0' }}>
            <StatusDot status="go">You’re registered</StatusDot>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--type-h3)', letterSpacing: '-0.02em', margin: 'var(--space-4) 0 var(--space-3)' }}>See you there.</h3>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.5, margin: '0 0 var(--space-6)' }}>
              We’ve held your spot for <strong style={{ color: 'var(--text)' }}>{event.title}</strong>. A confirmation is on its way.
            </p>
            <Button variant="primary" onClick={onClose} style={{ width: '100%' }}>Done</Button>
          </div>
        ) : (
          <React.Fragment>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-5)' }}>
              <Tag variant="soft">{event.tag}</Tag>
              <button onClick={onClose} aria-label="Close" style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '16px' }}>✕</button>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--type-h3)', letterSpacing: '-0.02em', lineHeight: 1.12, margin: '0 0 6px' }}>{event.title}</h3>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', marginBottom: 'var(--space-5)' }}>{event.date} · {event.time}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <Input label="Full name" placeholder="Stefan Martin" />
              <Input label="Email" type="email" placeholder="you@firm.com.au" />
              <Select label="I’m attending as" options={[
                { value: 'engineer', label: 'Engineer / developer' },
                { value: 'founder', label: 'Founder / business' },
                { value: 'council', label: 'Council / government' },
                { value: 'student', label: 'Student / resident' },
              ]} />
            </div>
            <Button variant="primary" onClick={() => setDone(true)} style={{ width: '100%', marginTop: 'var(--space-6)' }}>
              {event.status === 'stop' ? 'Join the waitlist' : 'Confirm registration'}
            </Button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function App() {
  const [route, setRoute] = React.useState('home');
  const [reg, setReg] = React.useState(null);
  const scrollTop = () => window.scrollTo({ top: 0 });
  const go = (r) => { setRoute(r); scrollTop(); };
  const join = () => { setRoute('events'); scrollTop(); };

  return (
    <div className="uil-root uil-water" style={{ minHeight: '100vh' }}>
      <Header route={route} onRoute={go} onJoin={join} />
      {route === 'home' && (
        <React.Fragment>
          <Hero onJoin={join} />
          <Verticals />
          <AboutBand />
          <Events onRegister={setReg} />
          <CommunityBand onJoin={join} />
        </React.Fragment>
      )}
      {route === 'programs' && (
        <React.Fragment>
          <Verticals />
          <AboutBand />
          <CommunityBand onJoin={join} />
        </React.Fragment>
      )}
      {route === 'events' && (
        <React.Fragment>
          <Events onRegister={setReg} />
          <CommunityBand onJoin={join} />
        </React.Fragment>
      )}
      {route === 'industry' && (
        <React.Fragment>
          <AboutBand />
          <Verticals heading={true} />
          <CommunityBand onJoin={join} />
        </React.Fragment>
      )}
      <Footer />
      <RegisterDialog event={reg} onClose={() => setReg(null)} />
    </div>
  );
}
window.App = App;
