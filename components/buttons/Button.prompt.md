**Button** — the primary call to action; use Roboto-Mono uppercase labels and keep one `primary` (accent-fill) action per view.

```jsx
import { Button } from './Button';

<Button variant="primary" size="md">Book a demo</Button>
<Button variant="secondary">Talk to the team</Button>
<Button variant="ghost" iconRight={<ArrowRight size={15} />}>Explore</Button>
```

Variants: `primary` (sun/accent fill, dark text), `secondary` (hairline border), `ghost` (text only, accent on hover), `link` (underlined). Sizes `sm | md | lg`. Pass `iconLeft` / `iconRight` for Lucide glyphs. Hover lightens the fill; press scales down to 0.975.
