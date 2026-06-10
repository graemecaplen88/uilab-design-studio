**StatusDot** — colour pip + mono uppercase label; the brand's no-emoji status pattern.

```jsx
import { StatusDot } from './StatusDot';

<StatusDot status="go" pulse>Live now</StatusDot>
<StatusDot status="warn">Filling fast</StatusDot>
<StatusDot status="stop">Closed</StatusDot>
```

`status`: go (sky) · warn (sun) · stop (summer) · idle (faint). `pulse` animates live states.
