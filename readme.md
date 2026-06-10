# UiLab Design System

> **Translating emerging technology into local success.** · *Here for Logan.*

UiLab is an **innovation lab based in Logan, South East Queensland** — a place-based
organisation that connects people, systems and creativity so emerging technology turns
into real, local outcomes. It runs across five verticals — **Community, Connect, Events,
Podcasts, Industry** — hosting workshops, development days, lunches and a podcast, and
linking local talent with the firms, council and residents of Logan.

This project is the UiLab **design system**: brand foundations (colour, type, spacing),
the logo + graphic assets, reusable React UI primitives, and a full UI-kit recreation of
the marketing site. Everything is wired so consuming projects can design on-brand.

---

## Sources

This system was built directly from UiLab's official brand assets:

- **GitHub — brand asset repo:** [`graemecaplen88/uilab-brand`](https://github.com/graemecaplen88/uilab-brand)
  — logo marks & wordmarks (10 colour themes), Logan division graphics, platform
  backgrounds/banners, the colour-system file and the guidelines PDF.
  Explore this repo for the full-resolution source artwork (print SVG/PNG/JPG, social
  templates, virtual backgrounds) if you need assets beyond those copied into `assets/`.
- **UiLab Brand Guidelines, August 2025 (v1090725)** — the 41-page master guideline
  (Typography · Colour · Logomarks · Graphic Assets · Grids & Composition). All colour
  values, type rules and the duotone/clearance rules below are taken verbatim from it.

> ✅ **Fonts shipped.** The brand display face **PP Neue Montreal** (licensed,
> Pangram Pangram) is included in `assets/fonts/` (Light/Regular/Medium/SemiBold/Bold)
> and declared via `@font-face` in `tokens/fonts.css`. **Roboto Mono** (the brand mono
> face) loads from Google Fonts. Both are wired to `--font-display` / `--font-mono`.

---

## Content fundamentals — how UiLab writes

The voice is **functional, understated and optimistic**, always grounded in place.

- **Plain and declarative.** Short, confident statements. "A place for Logan to grow and
  succeed." "Here for Logan." No hype, no buzzwords, no exclamation-mark energy.
- **Sentence case for everything readable** — headlines, body, card titles
  ("Emerging technology over lunch", "Developing the future talent of Logan").
- **ALL-CAPS mono for labels** — eyebrows, names, roles, URLs, metadata, tags
  (`STEFAN MARTIN`, `FULL STACK DEVELOPER`, `UILAB.COM.AU`, `EMERGING TECHNOLOGY / 2025`).
- **Local & specific.** Names real places and people — Logan, Brisbane, South East
  Queensland, council divisions, partners. The brand is *of* a place, not generic.
- **People-first.** Profiles members and their work; "a bridge between people, systems and
  creativity." Inclusion is a theme — "every council division has a place in the system."
- **Underline for emphasis, sparingly.** Key words get a skip-ink underline instead of
  bold or colour ("Translating <u>emerging technology</u> into <u>local success</u>").
- **Australian English.** *-ise*, *-our* (organise, colour, neighbourhood).
- **No emoji.** Status and emphasis come from mono labels, colour pips and underlines.
- **Tone words:** grounded · precise · community · emerging · practical · welcoming.

---

## Visual foundations

**Colour — duotone, dark-first.** The system is built on one core rule from the
guidelines: *the base (background) colour must always be the darker tone, and the
foreground (text, logo, graphics) the lighter tone.* Eight named colours split into
**dark grounds** (Sunset `#4C0027`, Water `#013053`, Earth `#421C01`, Land `#025120`)
and **light pops** (Summer `#FF6325`, Sky `#67DAFF`, Sun `#FFCD0E`, Jacaranda `#DD60FF`),
plus black & white. Each surface pairs **one dark ground with one light pop**; the pop is
the single vivid accent (one primary action per view). The flagship pairing is
**Water + Sun** (navy + yellow). Switch the whole palette by applying a theme scope
(`.uil-water`, `.uil-sunset`, `.uil-land`, `.uil-earth`, `.uil-black`).

**Type — grotesque + mono contrast.** Big, confident **PP Neue Montreal** display
and body in sentence case, with tight tracking on large sizes, set
against small **Roboto Mono Bold** uppercase labels with wide tracking. That contrast —
large humanist headline over a precise mono kicker — is the signature.

**Backgrounds.** Flat, solid dark grounds. No photographic or gradient backgrounds in
chrome; the only "glow" is a *very subtle* accent radial behind a hero/focal element.
The recurring graphic is the **Logan council "Divisions"** — silhouettes of Logan's 12
council boundaries, used as large faint motifs, framing devices, solid graphic shapes,
or image masks, filled with a brand pop colour.

**Shape & depth.** Geometric and modular — the wordmark's **"i" has a square tittle**,
and that squared DNA carries into UI: **tight radii** (2–10px; pills reserved for status
dots & avatars). Depth comes from **layered surface tones + hairline borders**, not heavy
shadow. Cards get a 1px border, a faint lit top edge, and a tight radius. Shadows are
restrained, deep and cool.

**Motion.** Crisp and mechanical — 120–280ms, ease-out. Fades + small (2–4px)
translations; a 0.975 press-scale on buttons. No bounce, no spring, no decorative
infinite loops (the live StatusDot ping is the one allowed pulse).

**States.** Hover lightens the surface/fill one step (primary pop → lighter). Press
briefly darkens + scales down. Focus is a **2px accent ring** (offset). Borders are
white at low alpha; accent borders at ~50%.

**Layout.** A **6-column grid** for square/web formats (extends to 12 wide) and a
**4-column grid** for vertical/editorial. Spacing is a strict **4pt modular scale**.
Generous margins; white space is part of the system.

---

## Iconography

UiLab does **not** ship a bespoke icon set, and the guidelines don't define one. The
brand's "iconography" is carried by three things instead:

1. **The brandmark** — a columned, twin-arch people/colonnade form ("two halves meeting
   in the middle"), used as the app/profile glyph at small sizes. Available in every
   theme colour in `assets/logos/brandmark-*.svg`.
2. **Mono letter-marks** — single letters / initials in Roboto Mono (C · C · I · E for
   the verticals, member initials in avatars). The `Avatar` component encodes this.
3. **Colour pips** — small round status dots with mono labels (the `StatusDot`
   component), never emoji.

When UI genuinely needs functional glyphs (chevrons, arrows, close), use a **thin
outline set — Lucide** (1.5–2px stroke) from CDN to match the technical, understated
feel. *This is a recommended substitution, flagged here:* no icon library is mandated by
the brand, so swap Lucide for your team's preferred outline set if needed. Avoid filled,
duotone or playful icon styles, and never use emoji.

---

## Index / manifest

```
styles.css                 ← global entry (consumers link THIS). @import list only.
tokens/
  fonts.css                @font-face PP Neue Montreal (local) + @import Roboto Mono
  colors.css               brand palette, semantic tokens, theme scopes
  typography.css           families, type scale, label/underline helpers
  spacing.css              4pt scale, grids, container
  effects.css              radii, borders, shadows, motion, focus ring
assets/
  logos/                   brandmark-*.svg, wordmark-*.svg (10 themes)
  graphics/                Logan divisions + boundary (brown source + recoloured pops)
  backgrounds/             zoom virtual backgrounds (navy / green / burgundy)
  banners/                 LinkedIn cover
guidelines/                foundation specimen cards (Design System tab)
components/
  buttons/   Button
  display/   Card · Tag · Avatar · StatusDot
  forms/     Input · Select · Switch
  navigation/ Tabs
ui_kits/
  website/                 uilab.com.au recreation (interactive)
SKILL.md                   Agent-Skills entry point
```

### Components
`Button` · `Card` · `Tag` · `Avatar` · `StatusDot` · `Input` · `Select` · `Switch` · `Tabs`
— each is `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, exposed on
`window.UiLabDesignSystem_b96795`, styled entirely through the CSS custom properties.

### UI kits
`ui_kits/website/` — a full, interactive recreation of the UiLab marketing site
(hero, programs, events, community band, footer, register dialog).

---

*Built from the UiLab brand. Here for Logan.*
