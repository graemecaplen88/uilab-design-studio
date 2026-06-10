# 02 — Functional spec (UiLab Event Studio)

The complete behaviour spec. Pair with `../BRIEF.md` (brand) and the reference source in
`../event-studio/`. All values below are taken verbatim from the working tool.

---

## 1. Event types (6)
Each event has a default palette of dark **grounds** and light **pops** (first = default).

| Key | Label | Grounds | Pops |
|---|---|---|---|
| `digital-builders` | Digital Builders | land, sunset | sky, jacaranda |
| `future-tech-open-house` | Future Tech Open House | sunset, ocean | summer |
| `the-common-ground` | The Common Ground | sunset, ocean | sun |
| `teacher-ai-toolkit` | Teacher AI Toolkit | ocean, land | jacaranda, sky |
| `industry-ai-toolkit` | Industry AI Toolkit | soil, ocean | sun, summer |
| `automation-studio` | Automation Studio | sunset, ocean | summer |

## 2. Colours
Grounds (dark, backgrounds): `land #025120` · `sunset #4C0027` · `ocean #013053` · `soil #421C01`.
Pops (light, foreground/accent): `sky #67DAFF` · `summer #FF6325` · `sun #FFCD0E` · `jacaranda #DD60FF`.
Neutral: `white #FFFFFF`.
Rule: background is ALWAYS a ground (darker); text/logo/graphics ALWAYS a pop (lighter).

## 3. Output formats (11)
| Key | Label | px (w×h) | layout | kind | print mm |
|---|---|---|---|---|---|
| `ig-square` | IG Square | 1080×1080 | stacked | web | — |
| `ig-portrait` | IG Portrait | 1080×1350 | stacked | web | — |
| `ig-story` | IG Story | 1080×1920 | stacked | web | — |
| `ig-ad-square` | IG Ad Square | 1080×1080 | ad | web | — |
| `ig-ad-story` | IG Ad Story | 1080×1920 | ad | web | — |
| `linkedin` | LinkedIn | 1200×626 | split | web | — |
| `facebook` | Facebook | 1200×630 | split | web | — |
| `humanitix` | Humanitix | 3200×1600 | split | web | — |
| `a4` | A4 Flyer | 1240×1754 | stacked | print | 210×297 |
| `a5` | A5 Flyer | 874×1240 | stacked | print | 148×210 |
| `dl` | DL Flyer | 583×1240 | stacked | print | 99×210 |

## 4. Layout variants (per format; first = default)
- `ig-square`: Standard · Text · Photo overlay
- `ig-portrait` / `ig-story`: Standard · Remix · Photo overlay
- `ig-ad-square` / `ig-ad-story`: Ad (only)
- `linkedin` / `facebook` / `humanitix`: Standard · Photo overlay
- `a4` / `a5` / `dl`: Standard · Remix · Photo overlay

## 5. Event-info schema (the single source of copy — 11 fields)
`name` (Event Name) · `description` (textarea) · `day` · `date` · `start` (Start Time) ·
`finish` (End/Finish Time) · `location` (UiLab HQ **or** Webinar) · `address`
(Unit 14 / 1 Belvedere Drive, Park Ridge, QLD 4125 **or** Microsoft Teams) ·
`category` (Event Category eyebrow) · `cta` · `subject`.

These populate every template. Per-(event,format) **inline edits** override the shared
values without changing them globally (store as an overrides map keyed by event+format).

## 6. The four artboard layouts
All artboards: a fixed-size element `w×h px`, scaled to fit the stage with `transform:
scale()` (controls live OUTSIDE the scaled element). Every size scales by `u` so the design
is resolution-independent: `u = w / 1080` (stacked/ad) or `w / 1200` (split). All paddings,
fonts, gaps are `calc(var(--u) * Npx)`. Ground = `--g`, pop = `--p`.

**A. Stacked** (square/portrait/story/A4/A5/DL):
eyebrow row (`category` left, `UILAB.COM.AU` right, Roboto Mono 700 uppercase) → head row
(big `name` headline left + square photo right) → `description` → spacer → info grid (3
rows × 2 cols: day/date, start/finish, location/address, hairline-ruled) → `cta` → footer
(UiLab wordmark+brandmark+sponsors left, Queensland AI Hub mark right). A faint full
divisions silhouette watermark sits behind (≈7% opacity; larger/lower on story & print).

**B. Split** (LinkedIn/Facebook/Humanitix):
Solid ground with **two individual division silhouettes** (a secondary ground colour)
bleeding off the top-right and bottom-left corners. A square photo on the left (~42%),
text on the right (eyebrow, big `name`, info grid). A dedicated **footer band** at the
bottom: Queensland AI Hub mark left, UiLab wordmark + sponsors centre, brandmark right.
Reserve the footer band (≈130·u px) so photo + grid never overlap it.

**C. Ad** (IG Ad Square / Story):
eyebrow → very large `name` headline → `description` → spacer → bottom row: UiLab
wordmark+brandmark+sponsors (left) and the `cta` as a **filled pop-colour button** (right,
capped at ≈52% width so it never collides with the logos).

**D. Overlay** (Photo overlay variant, any format):
full-bleed background photo + a ground-colour tint element at ~82% opacity over it + faint
divisions watermark, then the same stacked content (eyebrow, name, description, grid,
footer) in the pop colour on top. On the landscape split formats, use compact type so
content fits the short height.

**Text variant** = the Stacked layout with the photo removed (headline full-width).

## 7. Photos, masks & sponsors
- **Photo upload:** accept an image, **downscale to ≤1800px** (JPEG ~0.85) before storing
  (prevents localStorage/quota issues — use a canvas). One photo per event, reused across
  that event's formats.
- **Remix (divisions-masked hero):** the photo is composited INTO the Logan-divisions
  silhouette. CSS masks do NOT survive html-to-image export, so **bake to a flat PNG via
  canvas**: draw the photo cover-scaled onto a canvas the size of `logan-divisions.png`,
  then `ctx.globalCompositeOperation = 'destination-in'` and draw the divisions PNG (its
  alpha clips the photo to the shape). Use the resulting PNG in a plain `<img>`. When empty,
  show the pop-coloured silhouette (`logan-divisions-<pop>.png`) with a "Click to add a
  photo" hint. The hero **bleeds past the artboard edges** (negative side margins +
  object-fit cover).
- **Sponsor logos:** user uploads 0–N; render on small white plates to the right of the
  UiLab lockup (downscale to ~600px). Click a sponsor on the artboard to remove it.

## 8. Exports
- **PNG** (Download PNG): `html-to-image.toPng(artboard, {width, height, pixelRatio:1})`
  at exact px → download.
- **PDF** (Download PDF): render PNG at `pixelRatio:2`, place into a jsPDF page sized to the
  exact format — print formats in **mm** (`format:[mm_w, mm_h]`), web formats in **px**.
  One image, one page. (The old `window.print()` + `@media print` approach renders badly —
  do NOT use it.)
- **Print-ready** (print formats): render at `pixelRatio:3` (~450dpi). Page = trim + **3mm
  bleed** each edge (`[mm_w+6, mm_h+6]`). Cover-scale the image uniformly to fill the bleed
  page: `sc = max(pw/tw, ph/th); dw=tw*sc; dh=th*sc;` placed centred → design bleeds past
  trim with no distortion. (RGB output; note CMYK needs a desktop tool — see brief.)

## 9. Persistence (web app additions, not in the HTML tool)
- Auth: Supabase magic-link, restrict sign-ups to `@uilab.com.au`.
- `events` table: `{ id, owner, label, info(jsonb of the 11 fields), photo_url,
  sponsor_urls[], created_at, updated_at }`. Store uploaded images in Supabase Storage.
- "My Events": list / open / duplicate / delete. Opening loads the field set + media into
  the studio.
- Keep per-(event,format) layout/palette/variant choices remembered per user.
