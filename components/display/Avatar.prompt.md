**Avatar** — square initials chip (letter marks like C · C · I · E), or a circle for people.

```jsx
import { Avatar } from './Avatar';

<Avatar initials="SM" />
<Avatar initials="UC" tone="sky" />
<Avatar shape="circle" src="/people/stefan.jpg" size={48} />
```

Defaults to a tight-radius square. `tone` sets the accent fill; `src` shows a photo.
