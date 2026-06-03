# Vast Website Refresh — Design System Checklist
**For:** Antinomy Studio  
**Date:** June 2, 2026  
**Status:** Draft — pending internal decisions (see bottom)

---

## Content Rules
*These are guardrails for the whole system, not components. Lock these before Antinomy designs anything.*

- **Type styles:** 5 maximum across the entire site
- **Brand fonts only:** Owner's + Phonic. No Inter.
- **Type pairing rule:** Large headline with body copy in a supporting role. Long headline OR short headline + paragraph — never both.
- **Description copy:** 150 characters max
- **Blur/glass effect:** Only over video backgrounds. Not over static images.
- **Center alignment:** Rule TBD — use sparingly, must feel intentional (not default)
- **Carousel media:** Images only. No card overlays. Keep images the main focus.
- **Infographics:** Light/line drawing style only. No heavy infographic style.

---

## Atoms
*The irreducible raw materials. Nothing is built from anything smaller.*

### Color Tokens
- [ ] Brand palette (primary, secondary, accent)
- [ ] Semantic tokens (text, background, border, surface, overlay)
- [ ] Interactive state colors (hover, focus, active, disabled, error, success)
- [ ] Dark and light surface variants

### Typography Tokens
- [ ] Type scale — Display, H1–H4, Body Large, Body, Body Small, Caption, Label/Overline
- [ ] Font family assignments (Owner's and Phonic — which styles use which?)
- [ ] Line height per style
- [ ] Letter spacing per style
- [ ] Max 5 named styles in active use

### Spacing Tokens
- [ ] Spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 96, 128px or equivalent)
- [ ] Named tiers (xs, sm, md, lg, xl, 2xl)

### Shape Tokens
- [ ] Border radius scale (none, sm, md, lg, full/pill)
- [ ] Border width (1px, 2px)

### Elevation & Shadow Tokens
- [ ] Shadow scale (flat, low, mid, high)
- [ ] Blur/glass treatment — video backgrounds only (rule confirmed)

### Motion Tokens
- [ ] Duration scale (instant, fast, default, slow)
- [ ] Easing curves (ease-in, ease-out, ease-in-out, spring)
- [ ] Principles: what animates and what doesn't

### Grid & Layout Tokens
- [ ] Column count per breakpoint
- [ ] Gutter width per breakpoint
- [ ] Max content width
- [ ] Breakpoints defined (mobile, tablet, desktop, wide)

### Iconography
- [ ] Icon grid and sizes (16, 20, 24px)
- [ ] Icon style defined (line weight, style)
- [ ] Core set: arrow, close, menu, pause, play, chevron, external link, download
- [ ] Social icons: LinkedIn, X/Twitter, Instagram (others TBD)

### Base Elements
- [ ] Line / Divider
- [ ] Image (aspect ratio variants: 1:1, 4:3, 16:9, freeform)
- [ ] Video (base element, no controls yet)
- [ ] Avatar (circular, with fallback/initials state)
- [ ] Skeleton / Placeholder (loading state shape)
- [ ] Focus ring (accessibility — applied to all interactive elements)
- [ ] Logo mark and full lockup

---

## Molecules
*Two or more atoms doing one job together.*

### Text & Display
- [ ] Eyebrow + Headline pairing
- [ ] Headline + Body copy pairing
- [ ] Stat callout (large number + label)
- [ ] Quote / Pullquote
- [ ] Media caption (image + caption text)
- [ ] Badge / Tag / Pill
- [ ] Tag group / Filter chips

### Buttons & Links
- [ ] Button — Primary
- [ ] Button — Secondary
- [ ] Button — Ghost / Outlined
- [ ] Button — Text / Link
- [ ] Button — Icon only
- [ ] Button group (two adjacent buttons)
- [ ] Link (inline text link, standalone link)

### Form Controls
- [ ] Toggle / Switch
- [ ] Checkbox
- [ ] Radio button
- [ ] Text input
- [ ] Textarea
- [ ] Select / Dropdown
- [ ] Form field (label + input + helper text + error state)
- [ ] Search field (input + submit)

### Navigation
- [ ] Nav item (label + optional icon + hover/active states)
- [ ] Dropdown menu item
- [ ] Breadcrumb
- [ ] Pagination controls

### Media
- [ ] Video thumbnail + play button
- [ ] Image with overlay text
- [ ] Icon + label pairing
- [ ] Social link item (icon + platform name)

### Feedback
- [ ] Tooltip (trigger + popover)
- [ ] Inline alert (icon + message — for form validation)
- [ ] Progress indicator (bar or step dots)

### Content Blocks
- [ ] Accordion item (single collapsible row — open + closed)
- [ ] Tab item (single tab — default, hover, active)
- [ ] Card (base: container + optional image + text + optional action)
- [ ] Post / article preview (thumbnail + date + headline)
- [ ] Team member tile (photo + name + title)
- [ ] Timeline entry (date + event)
- [ ] Spec row (label + value)

---

## Organisms
*Full sections and components that live directly on a page.*

### Global / Persistent
- [ ] Navigation bar — default state
- [ ] Navigation bar — on scroll / condensed state
- [ ] Navigation bar — open / expanded state
- [ ] Mega menu / dropdown
- [ ] Announcement bar (top of page)
- [ ] Cookie / legal bar
- [ ] Skip to content link (accessibility)
- [ ] Footer (one consolidated variant — resolve current 4 versions)

### Hero Patterns
- [ ] Hero — Full viewport with video background
- [ ] Hero — Full viewport with image
- [ ] Hero — Split (text left, media right)

### Content Sections
- [ ] Feature highlight — Single: text + media, full-width or split layout
- [ ] Feature grid — 2-up, 3-up, 4-up
- [ ] Stats / Metrics bar
- [ ] Card grid — 2, 3, 4 column
- [ ] Editorial / Long-form block (text + inline media, article-like)
- [ ] Quote / Testimonial block
- [ ] Timeline / Milestone list

### Media Sections
- [ ] Gallery — image grid
- [ ] Carousel — images only, no card overlays
- [ ] Video block — full-width player
- [ ] Video + text — side by side
- [ ] Scrollable video / video extension module

### Technical & Data Sections
- [ ] Accordion group (full FAQ or deep-dive pattern)
- [ ] Tab panel (horizontally organized content)
- [ ] Spec / Data table (comparison format)
- [ ] Diagram / Annotated figure (line drawing style — light)

### Navigation & Utility Sections
- [ ] Quick links bar
- [ ] Resource / Link grid (docs, downloads, press)
- [ ] Table of contents (for editorial and documentation pages)
- [ ] Filter bar (for galleries or resource listings)

### Conversion Sections
- [ ] CTA section (standalone: headline + button)
- [ ] Contact / Inquiry form
- [ ] Newsletter signup

### Feedback & Overlay
- [ ] Modal / Dialog
- [ ] Drawer / Side panel
- [ ] Toast / Notification (temporary feedback)
- [ ] Empty state (no results or no content — with message)
- [ ] Error state — page level (404, 500)
- [ ] Loading state (skeleton screens for async sections)

---

## Confirmed Cuts
*These have been explicitly removed from scope. Do not design.*

- ~~Payload card components~~ — No longer exist on site (Megan confirmed)
- ~~Full screen takeover module~~ — Too much going on
- ~~Dark overlay texture module~~ — Doesn't fit brand (Hillary confirmed)
- ~~Secondary header~~ — Remove; add logo to primary nav instead (Megan confirmed)
- ~~Carousel card overlays~~ — Images should be the focus (Megan confirmed)
- ~~Old infographic style~~ — Being removed from site entirely
- ~~Inter typeface~~ — Not a brand font; use Owner's + Phonic only

---

## Decisions Still Needed
*These are blockers. Antinomy cannot finalize components that depend on these.*

| Decision | Options | Status |
|---|---|---|
| Type ramp | Which 5 styles? Lock before anything else. | ❌ Undecided |
| Deep dive interaction model | Stripe (expand-in-place) vs Apple (drill-down to new view) | ❌ Undecided |
| Video autoplay | Yes or No — affects video block and tab panel components | ❌ Undecided |
| Accordion vs tabs | For specs and technical content | ❌ Undecided |
| Footer structure | Which variant becomes the one? | ❌ Undecided |
| Center-alignment rule | When is it appropriate? Blanket rule or case-by-case? | ❌ Undecided |
| Copy density | 150 chars confirmed for descriptions? Any exceptions? | ❌ Undecided |
| Icon style | Line weight, outline vs filled — needs to be defined before icon set is built | ❌ Undecided |
| Breakpoints | Mobile and tablet behavior not yet defined — desktop only so far | ❌ Undecided |
| Dark mode | File has dark-background sections — is this a full dark mode or surface variants only? | ❌ Undecided |
