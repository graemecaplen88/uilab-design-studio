# 03 — Assets & brand

Upload these to Lovable (Supabase Storage or the public `assets/` folder). Paths are
relative to the project root. The brand rules live in `../BRIEF.md` — add it to Knowledge.

## Fonts (`assets/fonts/`) — required
- `PPNeueMontreal-Light.otf` (300)
- `PPNeueMontreal-Regular.otf` (400)
- `PPNeueMontreal-Medium.otf` (500)
- `PPNeueMontreal-SemiBold.otf` (600)
- `PPNeueMontreal-Bold.otf` (700)

Declare via `@font-face` as `--font-display`. Roboto Mono (`--font-mono`) loads from Google
Fonts. **Licensing:** PP Neue Montreal is licensed (Pangram Pangram) — confirm UiLab's
licence covers web embedding before deploying publicly; otherwise host behind auth.

## Logos (`assets/logos/`)
- Wordmarks: `wordmark-{sky,summer,sun,jacaranda,land,sunset,water}.svg`
- Brandmarks: `brandmark-{sky,summer,sun,jacaranda,land,sunset,earth,water,black,white}.svg`
- Partner mark (Queensland AI Hub · Logan): `qld-ai-hub-logan-{orange,sky,sun,jacaranda,white}.png`
  (orange = native = use for the `summer` pop).

The app picks `wordmark-<pop>.svg` / `brandmark-<pop>.svg` / partner `qld-ai-hub-logan-<pop>`
to match the chosen pop colour (summer → the `orange`/native files).

## Division graphics (`assets/graphics/`)
- `logan-divisions.png` — the full 12-division silhouette (mask source for Remix).
- `logan-divisions-{sky,summer,sun,jacaranda,white}.png` — recoloured silhouettes (empty
  Remix state, watermarks).
- `divisions/div-{1..12}.png` — the 12 individual council-division shapes (black).
- `divisions/div-{1,3,5,8,9,10,11}-{land,sunset,ocean,soil}.png` — individual shapes
  recoloured per ground (the **split-layout corner overlays**; secondary = the event's other
  ground). Split uses `div-9-<secondary>` top-right and `div-11-<secondary>` bottom-left.

> To recolour a silhouette PNG to a brand colour: draw it to a canvas, then for every pixel
> with alpha>0 set RGB to the target hex. (This is how the recoloured variants were made —
> regenerate in code if you add colours.)

## Photos (`assets/photos/`)
- `sample-event-1.jpg` — default placeholder photo. Replace with UiLab's own event photos.

## Reference template images (for visual QA only — `../uploads/`)
The original Figma exports the templates were matched to: `LinkedIn post (landscape)
1200x626.png`, `Humanitix Banner 3200x1600.png`, `Instagram Square 1080x1080.png`,
`FTOH - May Story.png`, `Social Tile - AI toolkits 1200x12005.png`,
`Social Tile - Chapter 1200x1200.png`. Use these to check the rebuild matches.

## Brand essentials (full detail in ../BRIEF.md)
- **Dark ground + light pop**, one pop accent per surface.
- **Type:** PP Neue Montreal (sentence case display/body) + Roboto Mono Bold UPPERCASE labels.
- **Tight radii**, hairline white-alpha borders, depth from layered tone not shadow, 4pt spacing.
- **Voice:** plain, local, optimistic; no emoji; Australian English; "Here for Logan."
- **Motif:** Logan division silhouettes as watermarks, masks and corner overlays.
- **HQ:** Unit 14 / 1 Belvedere Drive, Park Ridge, QLD 4125 (or Microsoft Teams for webinars).
