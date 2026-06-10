**Card** — raised surface for content blocks (programs, events, profiles). Hairline border + faint lit top edge; no loud shadow.

```jsx
import { Card } from './Card';

<Card eyebrow="Events / 04" title="Emerging technology over lunch">
  <p>Body copy…</p>
</Card>

<Card interactive>…clickable…</Card>
```

Set `interactive` for hover-lift. `eyebrow` is a mono kicker, `title` uses the display font.
