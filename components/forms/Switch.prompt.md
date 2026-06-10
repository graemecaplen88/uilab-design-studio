**Switch** — controlled toggle for settings and filters.

```jsx
import { Switch } from './Switch';
const [on, setOn] = React.useState(true);

<Switch checked={on} onChange={setOn} label="Notify me about Logan events" />
```

Track fills with the accent colour when on; thumb is a squared chip. `onChange` receives `(checked, event)`.
