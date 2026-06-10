/* UiLab website — events listing (with filter tabs) */
function Events({ onRegister, compact = false }) {
  const { Card, Tag, StatusDot, Button, Tabs } = window.UiLabDesignSystem_b96795;
  const D = window.UILAB_DATA;
  const [filter, setFilter] = React.useState('all');
  const tabs = [{ value: 'all', label: 'All' }, { value: 'Connect', label: 'Connect' }, { value: 'Industry', label: 'Industry' }, { value: 'Community', label: 'Community' }];
  const list = D.events.filter(e => filter === 'all' || e.tag === filter);

  return (
    <section style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) var(--page-margin)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--accent)' }}>What’s on / Logan</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--type-h2)', letterSpacing: '-0.02em', lineHeight: 1.08, margin: 'var(--space-3) 0 0' }}>Emerging technology, in person.</h2>
        </div>
      </div>

      <div style={{ marginBottom: 'var(--space-6)' }}>
        <Tabs value={filter} onChange={setFilter} items={tabs} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {list.map((e, i) => {
          const [d, m, y] = e.date.split(' ');
          return (
            <Card key={i} padding="var(--space-5)">
              <div style={{ display: 'grid', gridTemplateColumns: '72px 1fr auto', gap: 'var(--space-5)', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', borderRight: '1px solid var(--border)', paddingRight: 'var(--space-4)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '26px', color: 'var(--accent)', lineHeight: 1 }}>{d}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-faint)', marginTop: '4px' }}>{m} {y}</div>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '7px', flexWrap: 'wrap' }}>
                    <Tag variant="soft">{e.tag}</Tag>
                    <StatusDot status={e.status}>{e.statusLabel}</StatusDot>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '19px', letterSpacing: '-0.015em', lineHeight: 1.12 }}>{e.title}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px', letterSpacing: '0.02em' }}>{e.time} · {e.place}</div>
                </div>
                <div style={{ justifySelf: 'end' }}>
                  <Button variant={e.status === 'stop' ? 'secondary' : 'primary'} size="sm" onClick={() => onRegister && onRegister(e)}>
                    {e.status === 'stop' ? 'Join waitlist' : 'Register'}
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
window.Events = Events;
