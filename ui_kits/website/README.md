# UiLab Website — UI kit

A high-fidelity recreation of the **uilab.com.au** marketing site, built from the
UiLab brand system. Demonstrates the duotone surfaces, mono labels, the Logan
divisions motif and the brand voice ("Translating emerging technology into local
success" / "Here for Logan").

## Run / preview
Open `index.html`. It loads React + Babel, the generated `_ds_bundle.js` (design
system primitives) and the section files below.

## Interactions
- **Top nav** routes between Home · Programs · Events · Industry (client-side).
- **Register** on any event opens a dialog with a working form → confirmation state.
- **Event filter tabs** narrow the listing by vertical.
- Hover-lift on cards, accent focus rings on inputs, theme shift to Sunset/Summer
  on the "Here for Logan" community band.

## Files
| File | Role |
|---|---|
| `index.html` | Shell — loads bundle + sections, mounts `App` |
| `data.js` | Demo content (verticals, events, stats) |
| `Header.jsx` | Sticky nav + wordmark/brandmark lockup |
| `Hero.jsx` | Tagline hero with divisions silhouette + stats |
| `Verticals.jsx` | The five programs (Community · Connect · Events · Podcasts · Industry) |
| `Events.jsx` | Filterable event listing |
| `CommunityBand.jsx` | "Here for Logan" duotone CTA band |
| `Footer.jsx` | Footer with sitemap + social |
| `App.jsx` | Routing + register dialog + About band |

## Composition
Screens compose the design-system primitives — `Button`, `Card`, `Tag`,
`StatusDot`, `Input`, `Select`, `Tabs` — via `window.UiLabDesignSystem_b96795`.
Layout and one-off pieces are token-driven (no re-implementing primitives).
