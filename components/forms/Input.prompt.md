**Input** — labelled text field for forms (sign-ups, contact, search).

```jsx
import { Input } from './Input';

<Input label="Email" type="email" placeholder="you@firm.com.au" />
<Input label="Name" hint="As it appears on the day." />
<Input label="Postcode" error="Enter a valid QLD postcode." />
```

Mono uppercase label, sunken field, 2px accent focus ring. `hint` and `error` render below.
