**Tabs** — section navigation with an accent underline on the active tab.

```jsx
import { Tabs } from './Tabs';
const [tab, setTab] = React.useState('community');

<Tabs value={tab} onChange={setTab} items={[
  { value: 'community', label: 'Community' },
  { value: 'connect', label: 'Connect' },
  { value: 'events', label: 'Events', count: 6 },
  { value: 'industry', label: 'Industry' },
]} />
```

Controlled (`value`/`onChange`) or uncontrolled (`defaultValue`). Optional `count` per tab.
