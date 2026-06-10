---
name: uilab-design
description: Use this skill to generate well-branded interfaces and assets for UiLab, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colours, type, fonts, assets, and UI kit components for prototyping. UiLab is a Logan (South East Queensland) innovation lab — "translating emerging technology into local success".
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out
and create static HTML files for the user to view. If working on production code, you can
copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## Quick start

- **Global CSS:** link `styles.css` (it `@import`s everything — tokens + fonts).
- **The one rule:** dark ground + light pop. Background is always the darker tone, text
  / logo / graphics the lighter. Pick a theme scope (`.uil-water`, `.uil-sunset`,
  `.uil-land`, `.uil-earth`, `.uil-black`) on any container to re-skin the duotone.
- **Type:** display/body = `var(--font-display)` (PP Neue Montreal → Hanken Grotesk),
  sentence case. Labels/eyebrows/tags = `var(--font-mono)` (Roboto Mono) **Bold
  UPPERCASE** with wide tracking. Emphasise key words with a skip-ink underline.
- **Colours:** `--uil-water/sunset/earth/land` (grounds) · `--uil-sun/summer/sky/jacaranda`
  (pops). Semantic: `--ground`, `--surface-raised`, `--text`, `--accent`, `--border`.
- **Voice:** plain, declarative, local, optimistic. No emoji, no hype. Australian English.
  "Here for Logan." Tag people/roles/URLs in mono caps.
- **Shape:** tight radii, hairline borders, layered surfaces over heavy shadow. 4pt spacing.
- **Motif:** the Logan "Divisions" silhouettes (`assets/graphics/`) as faint backgrounds,
  masks or solid pop-coloured shapes.
- **Icons:** no bespoke set — use the brandmark, mono letter-marks (`Avatar`), colour pips
  (`StatusDot`); reach for thin-outline Lucide only when functional glyphs are needed.

## Event flyers
When asked to design a flyer for a specific kind of event, **read
`guidelines/event-playbook.md` first** — it holds a per-event-type recipe (theme pairing,
accent, icons, layout, motif, copy tone) that layers on top of the core brand. Apply the
matching recipe; if none matches, ask which is closest or request a new one.

## Components
`Button · Card · Tag · Avatar · StatusDot · Input · Select · Switch · Tabs`, exposed on
`window.UiLabDesignSystem_b96795` once `_ds_bundle.js` is loaded. See each component's
`.prompt.md` for usage. The marketing-site recreation lives in `ui_kits/website/`.

## Assets
Logos in `assets/logos/` (brandmark + wordmark in 10 colour themes). Logan division
graphics in `assets/graphics/` (brown source + recoloured Sun/Summer/Sky/White variants).
Backgrounds and banners under `assets/backgrounds/` and `assets/banners/`.
