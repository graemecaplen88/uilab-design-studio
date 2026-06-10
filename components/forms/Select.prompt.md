**Select** — labelled dropdown styled to match Input, with a mono chevron.

```jsx
import { Select } from './Select';

<Select label="Vertical" options={[
  { value: 'community', label: 'Community' },
  { value: 'connect', label: 'Connect' },
  { value: 'events', label: 'Events' },
]} />
```

Pass `options={[{value,label}]}` or `<option>` children.
