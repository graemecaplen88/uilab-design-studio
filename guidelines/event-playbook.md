# UiLab — event flyer playbook

A library of **per-event-type recipes**. Each entry layers ON TOP of the core UiLab brand
(see `readme.md` / `BRIEF.md`) — same voice, same dark-ground/light-pop rule, same type
system — but locks in the **theme pairing, accent, icons, layout, motif and copy tone** for
that specific kind of event.

> **How to use:** when asked to "design a `<type>` flyer", find the matching recipe below,
> apply it over the brand foundations, and pull assets from `assets/`. If no recipe matches,
> ask which existing type is closest, or request a new recipe.
>
> **How to extend:** the user teaches one event type at a time. Capture it using the
> **template** at the bottom — fill every field; never invent rules that weren't given.

Default flyer canvas: **A4 portrait (1240×1754 @150dpi)** unless told otherwise. Also
support **square (1080×1080)** and **story (1080×1920)** for social.

---

## Recipe index
| Event type | Theme pairing | Accent | Status |
|---|---|---|---|
| Digital Builders | Land ground + Sky pop | Sky `#67DAFF` (2nd: Jacaranda · Sunset) | ✅ complete |
| Future Tech Open House | Sunset ground + Summer pop | Summer `#FF6325` (2nd: Ocean) | ✅ confirmed |
| The Common Ground | Sunset ground + Sun pop | Sun `#FFCD0E` (2nd: Ocean) | ✅ confirmed |
| Teacher AI Toolkit | Ocean **or** Land ground + Jacaranda **or** Sky pop | Jacaranda `#DD60FF` / Sky `#67DAFF` | ✅ confirmed |
| Industry AI Toolkit | Soil ground (2nd: Ocean) + Summer **or** Sun pop | Summer `#FF6325` / Sun `#FFCD0E` | ✅ confirmed |
| Automation Studio | Sunset ground (2nd: Ocean) + Summer pop | Summer `#FF6325` | ✅ confirmed |

**Legend:** 🔲 not yet taught · 🟡 partial · ✅ complete

---

## Master templates & production rules
*From the Figma `FIGMA-TEMPLATES` page — the studio's own brand-template system.*

**Standard export formats** (produce one of each per event campaign):
| Format | Size (px) |
|---|---|
| Instagram Square | 1080×1080 |
| Instagram Post (Portrait) | 1080×1350 |
| Instagram Story | 1080×1920 |
| LinkedIn post (landscape) | 1200×626 |
| Facebook post | 1200×630 |
| Humanitix banner | 3200×1600 |
| Name card | front + back |

**`[LOCKED]` / `[EDIT]` discipline** (the studio's golden rule for templated assets):
- `[LOCKED]` layers must **not** be moved, resized, replaced or modified — ever.
- `[EDIT]` layers are for **text content only**.
- Do **not** change fonts, colours, spacing, sizing, position or layout. Don't add or remove
  elements. Reproduce the layout exactly — only swap `[EDIT]` text. Never infer colour
  changes on other layers.

**Standard event-info schema** (fields that populate `[EDIT]` layers):
`Event Name` · `Event Description` · `Day` · `Date` · `Start Time` · `End/Finish Time` ·
`Location` (UiLab HQ **or** Webinar) · `Address` · `Event Category` · `CTA` · `Subject`.

**Locations:** UiLab HQ — **Unit 14 / 1 Belvedere Drive, Park Ridge, QLD 4125**; online via
**Microsoft Teams** (Webinar).

### Event Studio (interactive tool)
`UiLab Event Studio.html` (root) builds on this system: enter the event-info fields once and
every template auto-populates. Pick any **event type** × **format**, flip the **ground/pop**
palette, edit any text **inline**, drop in a **photo**, then **export PNG** (web) or
**Print/PDF** (print). Formats: IG Square/Portrait/Story · LinkedIn · Facebook · Humanitix ·
A4 · A5 · DL. Faithfully reproduces the `FIGMA-TEMPLATES` "event details card" (stacked for
portrait/square/story/A-series, photo-left split for landscape/banner). Engine lives in
`event-studio/` (`data.js`, `render.js`, `studio.js`).

**Canonical hex list (per the template note):** Burgundy `#4C0037`* · Jacaranda `#DD60FF` ·
Water/Ocean `#013053` · Sky `#67DAFF` · Summer `#FF6325` · Land `#025120` · Earth/Soil
`#421C01` · Sun `#FFCD0E`.
> *\*Burgundy/Sunset discrepancy:* the template note says `#4C0037`, but the brand-guidelines
> PDF and the actual fills used throughout the file are `#4C0027` (rgb 76,0,39). Tokens
> currently use `#4C0027` — confirm which is canonical.

---

## Digital Builders
*Status: ✅ complete · learned from `DigitalBuildersEventStyle.fig` (Digital-Builders-Hackathons page)*

A **schools / students vibe-coding hackathon** — teams build real apps in a day with
emerging tech, no experience needed, mentors + prizes. Audience: high-school students
(≈Years 7–12) and the teachers/schools who book it. This is the **youth-facing** corner of
the brand, so the voice is more energetic than the corporate default.

- **When to use:** any Digital Builders hackathon asset — school posters, social tiles,
  stories, "book it for your school" flyers, student call-to-enter pieces.
- **Theme pairing:** **Land `#025120` (forest green) ground + Sky `#67DAFF` pop** is the
  signature primary pairing (Sky carries the headline, body, eyebrow and logo). Keep the
  dark-base/light-pop rule. Individual past tiles also appear on Water navy or Sunset
  burgundy grounds, but **Land + Sky is the canonical Digital Builders look**.
- **Secondary colours:** **Jacaranda `#DD60FF`** and **Sunset `#4C0027`** — use for the
  CTA / scan line, an accent ground panel, a highlighted word, or a second-tier graphic.
  Reserve them so the action or accent pops against the Sky-on-Land base; never use them
  for long body copy.
- **Mood:** energetic, encouraging, hands-on, future-focused, inclusive ("all skill levels").
- **Type treatment:**
  - *Headline:* PP Neue Montreal **Bold**, very large (clamp ~64–120px), **sentence case**,
    tight tracking (-0.02em). Set on **two lines with the second line pushed right**
    (e.g. "Digital Builders" left / "Hackathon" indented right). Colour = Sky.
  - *Eyebrow:* Roboto Mono **Bold ~15px UPPERCASE**, Sky — event series top-left
    ("UILAB'S 2026 EVENTS"), "UILAB.COM.AU" top-right.
  - *Body:* PP Neue Montreal **Bold ~22–25px**, Sky; emphasise key phrases by weight.
  - *Info rows (posters):* PP Neue Montreal ~22px in two columns, separated by **thin Sky
    hairline rules** — Date · Time · Location · Year level · What you'll need.
- **Layout (A4 portrait default):** eyebrow row across the top → **giant two-line headline**
  in the upper third → short bold intro paragraph → then either a **photo masked into a
  Logan-division silhouette** (social tiles) or a **hairline info table** (school posters)
  → **QR code** with an orange "Scan the QR code to…" line → footer: **Sky UiLab wordmark +
  brandmark** on one side and a **partner-logo row** (school · university · QLD Gov · Lovable)
  on the other.
- **Icons:** no functional icon set — visual interest comes from the **QR code**, the
  **photo-in-divisions** mask, and **partner logos**. If a glyph is truly needed, thin Sky
  Lucide outline.
- **Motif / imagery:** real student/hackathon **photos masked into a Logan Division shape**
  (warm, candid, people-focused), or a large faint division silhouette. Photos always sit
  inside the division mask, never full-bleed rectangles on social tiles.
- **Logo:** **Sky** wordmark + brandmark (`assets/logos/wordmark-sky.svg`,
  `brandmark-sky.svg`), usually bottom-right. School/partner posters add a footer logo row.
- **Copy tone:** punchy and youth-facing — short hooks and questions, exclamation marks are
  welcome here ("Ever dreamt of building the next viral app?", "What will you create to
  win?", "no experience needed!"). Verbs: build · create · win · learn · team up. Reassure
  beginners ("all skill levels", "zero experience"). Tagline seen: "Powered by community,
  backed by Logan and built for your future." CTA: "Scan the QR code to…" or "LEARN MORE".
- **Do / Don't:** **Do** build on Land + Sky and reserve Jacaranda/Sunset for the one CTA
  or accent. **Do** mask photos into the divisions. **Do** show partner logos when it's a
  school/sponsored event. **Don't** use the restrained corporate voice — this audience is
  students. **Don't** put dark text on the Sky/colour. **Don't** scatter multiple CTAs.
- **Sizes:** A4 poster (1240×1754), square social 1080×1080, story 1080×1920. On square/
  story, lead with the headline + brandmark and a single "LEARN MORE" pill (Sunset or Land
  fill, Sky or Jacaranda mono label); push QR/partners to posters.

---

> **Colour-name note:** UiLab's event branding calls **Water (`#013053`) "Ocean"** and
> **Earth (`#421C01`) "Soil"**. Both names refer to the same tokens (`--uil-ocean` /
> `--uil-water`, `--uil-soil` / `--uil-earth`).

---

## Future Tech Open House
*Status: ✅ complete · palette confirmed by UiLab · learned from Figma (Future-Tech-Open-House page)*

Monthly **in-person, hands-on** sessions with automation, AI & robotics. Audience:
educators, industry leaders and the **tech-curious** — broad and welcoming.

- **When to use:** any Future Tech Open House asset — monthly session promos, Humanitix
  banners, social tiles, stories, ads.
- **Theme pairing (confirmed):** **Sunset `#4C0027` ground + Summer orange `#FF6325` pop**
  (headline, eyebrow, body, logo all Summer).
- **Secondary colours:** **Ocean (Water `#013053`)** as an alternate ground or accent panel;
  white for the occasional emphasis word. Keep type all-Summer.
- **Mood:** energetic, curious, hands-on, inclusive, experimental.
- **Type treatment:** *Headline* PP Neue Montreal **Medium ~75px, underlined** (skip-ink),
  sentence case — e.g. "Future Tech Open House / Monthly In-Person Sessions". *Eyebrow* Roboto
  Mono Bold ~24px UPPERCASE Summer ("UILAB'S 2026 EVENTS" / "UILAB.COM.AU"). *Body* PP Neue
  Montreal **Medium ~36px** Summer.
- **Layout:** eyebrow row top → **photo masked into a Logan-division** silhouette upper area
  → underlined headline mid → body paragraph below → Summer wordmark + brandmark bottom-left.
- **Icons:** none functional — photo-in-divisions carries the visual. Mono labels for details.
- **Motif / imagery:** candid hands-on / robotics / workshop **photos masked into divisions**.
- **Logo:** **Summer** wordmark + brandmark, bottom-left.
- **Copy tone:** inviting and energetic — "Get hands-on with automation, AI & robotics!",
  "Experiment, ask questions and build confidence." Welcomes everyone ("perfect for educators,
  industry leaders & the tech-curious"). Exclamation marks OK.
- **Do / Don't:** **Do** underline the headline. **Do** keep the whole piece monochrome-Summer
  on the dark ground. **Don't** mix in other pops.
- **Sizes:** square 1080×1350 / 1200×1200, story 1080×1920, Humanitix 3200×1600 banner.

---

## The Common Ground
*Status: ✅ complete · palette confirmed by UiLab · learned from Figma (The-Common-Ground page)*

A recurring **community gathering** — where Logan comes together to explore emerging tech,
hear **guest speakers**, and build digital confidence and networks. Also runs as local
"Chapter" events and physical **cube-style signage**.

- **When to use:** Common Ground / Chapter events — invites (A5), social tiles, stories,
  Humanitix + LinkedIn banners, event signage.
- **Theme pairing (confirmed):** **Sunset `#4C0027` ground + Sun yellow `#FFCD0E` pop**
  (headline, eyebrow, body, logo all Sun).
- **Secondary colours:** **Ocean (Water `#013053`)** as an alternate ground or accent panel;
  white for occasional emphasis. Otherwise stay all-Sun.
- **Mood:** warm, communal, forward-looking, connective.
- **Type treatment:** *Headline* PP Neue Montreal **Bold ~75px** (NOT underlined), sentence
  case — "The Common Ground". *Eyebrow* Roboto Mono Bold ~24px UPPERCASE Sun. *Body* PP Neue
  Montreal **Medium ~36px** Sun (longer, paragraph-style).
- **Layout:** eyebrow row top → **photo masked into divisions** → bold title mid → a longer
  community-focused paragraph → Sun wordmark + brandmark bottom-left. A5 invites and cube
  signage use the same palette with the title centred.
- **Icons:** none functional; QR on invites. Mono labels for speaker/date details.
- **Motif / imagery:** community / audience / speaker **photos masked into divisions**.
- **Logo:** **Sun** wordmark + brandmark, bottom-left.
- **Copy tone:** inclusive and aspirational — "Where our community comes together…", "build
  digital confidence together", "be part of building a future-ready community". Warmer and
  more reflective than Digital Builders.
- **Do / Don't:** **Do** keep the title bold and un-underlined (distinct from FTOH). **Do**
  use Sun throughout. **Don't** crowd it — Common Ground pieces breathe.
- **Sizes:** A5 invite 148×210mm, square 1080×1350 / 1200×1200, story 1080×1920, Humanitix/
  LinkedIn 3200×1600, cube signage 1200×1200.

---

## Teacher AI Toolkit
*Status: ✅ complete · palette confirmed by UiLab · learned from Figma (Teachers-AI-Toolkit page)*

A **monthly online series + practical toolkit for teachers/educators** — bite-size,
actionable AI tips ("Toolkit Takeaway") they can use in class tomorrow.

- **When to use:** Teacher AI Toolkit tips, monthly online series promos, educator course
  flyers, social tiles/stories, Humanitix listings.
- **Theme pairing (confirmed — two valid combos):** **Ocean (Water `#013053`) or Land
  `#025120` ground**, paired with **Jacaranda `#DD60FF` or Sky `#67DAFF` pop**. Pick one
  ground + one pop per piece; Ocean + Jacaranda is the lead combination seen in-file.
- **Secondary colours:** the unused pop from the pair makes a good accent; white for emphasis.
- **Mood:** practical, supportive, classroom-ready, confidence-building.
- **Type treatment:** *Headline* PP Neue Montreal **Bold ~80px**, sentence case, often a
  two-line "Toolkit Takeaway: <tip>". *Eyebrow* Roboto Mono Bold ~17px UPPERCASE Jacaranda
  ("TEACHER AI TOOLKIT" / "UILAB.COM.AU"). *Body* a **stacked takeaway list** — short
  imperative lines ("Push your prompt. Change the context. See what breaks.") in PP Neue
  Montreal, with a follow-up sentence.
- **Layout:** eyebrow top-left → bold takeaway headline upper-left → **stacked tip lines**
  below → **photo as a right-hand vertical column** (not always masked into divisions) →
  Jacaranda wordmark + brandmark bottom-left. Text lives on the left half, image on the right.
- **Icons:** none functional; numbered/stacked text steps do the work. Dietary/info chips
  exist for in-person educator events.
- **Motif / imagery:** teacher/classroom **photo in a right-side column**; divisions optional.
- **Logo:** **Jacaranda** wordmark + brandmark, bottom-left.
- **Copy tone:** instructional and encouraging, teacher-to-teacher — "Toolkit Takeaway:",
  imperative steps, "Repeat until it's solid!". Practical, never condescending.
- **Do / Don't:** **Do** use the left-text / right-photo split and the stacked-tip format.
  **Do** keep everything Jacaranda. **Don't** force a divisions mask if a clean right-column
  photo reads better.
- **Sizes:** square 1080×1350 / 1200×1200, story 1080×1920, educator flyer A4, Humanitix.

---

## Industry AI Toolkit
*Status: ✅ complete · palette confirmed by UiLab · learned from Figma (Industry-AI-Toolkit page)*

The **industry/business** counterpart to the Teacher toolkit — a monthly online series and
practical AI toolkit for **local firms and professionals**.

- **When to use:** Industry AI Toolkit promos, monthly online series, business-facing
  flyers, social tiles/stories, Humanitix listings.
- **Theme pairing (confirmed):** **primary ground = Soil (Earth `#421C01`)**, **secondary
  ground = Ocean (Water `#013053`)**; **pop = Summer `#FF6325` or Sun `#FFCD0E`** (warm,
  grounded, business-like). Pick one pop per piece.
- **Secondary colours:** the Ocean ground for alternate/variant tiles; the unused warm pop
  (Summer/Sun) as a small accent; white for emphasis.
- **Mood:** capable, practical, professional, approachable.
- **Type treatment:** *Headline* PP Neue Montreal **Bold ~80px**, sentence case, sometimes
  **centred** for CTA tiles ("Register via the link in bio or visit uilab.com.au/events").
  *Eyebrow* Roboto Mono Bold ~24px UPPERCASE Sun ("UILAB'S 2026 EVENTS UPDATE"). *Body* PP
  Neue Montreal Medium ~36px Sun.
- **Layout:** eyebrow top → headline (left or centred) → supporting line / CTA → photo either
  **full-bleed behind** a darkened wash or **masked into divisions** → Sun wordmark +
  brandmark bottom.
- **Icons:** none functional; mono labels for details.
- **Motif / imagery:** workplace / professional **photos** — full-bleed (with the dark ground
  as a wash) or masked into divisions.
- **Logo:** **Sun** wordmark + brandmark, bottom (left, or right brandmark on photo tiles).
- **Copy tone:** business-practical and benefit-led — outcomes, capability, "future-proof",
  efficiency. Confident, not hype. Clear single CTA ("Register…").
- **Do / Don't:** **Do** keep it Sun-on-Earth and professional. **Do** allow full-bleed photo
  tiles. **Don't** use the youthful exclamation-heavy voice — this is for industry.
- **Sizes:** square 1080×1350 / 1200×1200, portrait 1080×1350, story 1080×1920, FB 1200×1200,
  Humanitix, business flyer A4.

---

## Automation Studio
*Status: ✅ complete · palette confirmed by UiLab · learned from Figma (Automation-Studio page)*

Business automation / AI-readiness program ("Regional Enablers Program", "AI Readiness",
Automation Power Sessions) — helping **local businesses future-proof** with automation. Often
government-backed (Queensland Government lockup).

- **When to use:** Automation Studio / AI-Readiness / Regional Enablers assets — power-session
  promos, Humanitix banners, newsletters, name cards, social tiles/stories, ads.
- **Theme pairing (confirmed):** **Sunset `#4C0027` ground + Summer orange `#FF6325` pop**.
- **Secondary colours:** **Ocean (Water `#013053`)** as the alternate/secondary ground;
  white for emphasis; partner/government logos in Summer or white.
- **Mood:** purposeful, business-forward, enabling, credible.
- **Type treatment:** *Headline* PP Neue Montreal Bold, large, sentence case ("Future-proof
  your business"). *Eyebrow* Roboto Mono Bold UPPERCASE Summer — program tag
  ("REGIONAL ENABLERS PROGRAM" / "UILAB.COM.AU"). *Body* PP Neue Montreal Medium Summer.
- **Layout:** program eyebrow top → headline → supporting business benefit → photo (masked
  into divisions or full-bleed) → footer with **Summer wordmark + brandmark** and the
  **Queensland Government / partner lockup** on the right.
- **Icons:** none functional; mono labels. Government/partner logos in the footer.
- **Motif / imagery:** business / automation / workplace photos; divisions mask or full-bleed.
- **Logo:** **Summer** wordmark + brandmark, footer-left; QLD Gov / partner lockup footer-right.
- **Copy tone:** business-credible and outcome-driven — "future-proof your business", "unlock
  your potential", capability + ROI framing. Government-grant tone where relevant; not youthful.
- **Do / Don't:** **Do** include the Queensland Government / partner lockup when grant-funded.
  **Do** keep it Summer + professional. **Don't** use the student voice.
- **Sizes:** square 1200×1200, story 1080×1920, Humanitix 3200×1600, newsletter, name card,
  business flyer A4.

---

## 📋 Recipe template (copy for any new event type)

```md
## <Event type name>
*Status: 🔲 not yet taught*
- **When to use:** <what this event is / when to pick this recipe>
- **Theme pairing:** <dark ground> + <light pop> (hex) · secondary tint: <colour>
- **Mood:** <3–4 adjectives>
- **Type treatment:** <headline weight/case, eyebrow style, underline rule, size notes>
- **Layout:** <where eyebrow / headline / details / CTA / motif sit; grid; orientation>
- **Icons:** <which glyphs, which set, stroke, colour> (or "none")
- **Motif / imagery:** <divisions? photography? solid shapes? opacity & placement>
- **Logo:** <which wordmark/brandmark theme + placement>
- **Copy tone:** <voice notes, CTA verb, what to include/avoid>
- **Do / Don't:** <type-specific rules>
- **Sizes:** <A4 / square / story — any per-size tweaks>
```

---

*Recipes are additive — they never override the core brand rules, only specialise them.*
