# Meeting Notes: Antinomy Homepage Exploration + Component Brief
**Date:** June 8, 2026 — 8:33am  
**Type:** Antinomy Studio + Vast joint meeting  
**Raw transcript:** `raw/2026-06-08-antinomy-meeting-RAW.md`

## Attendees
**Vast:** Megan Luedke, Christopher (Chris), Abram, James  
**Antinomy:** Sebastian (led prototype presentation), Adriana, Oscar

---

## Part 1: Homepage Prototype Walkthrough

Antinomy shared a new homepage prototype on screen. Sebastian walked through it top to bottom.

### What was shown

| Section | What Antinomy did |
|---|---|
| **Hero** | Cleaner layout, more white space, consistent CTAs and typography |
| **Module below hero** | Vapor grey background, subdued/turned-down buttons (less in-your-face) |
| **Announcements** | Starts as a big type moment → scrolls to reveal the article view with headline appearing |
| **Haven Station (WebGL)** | WebGL gets significantly more space; text stays sticky as you scroll; toggles between Haven Demo / Haven-1 / Capabilities |
| **Satellites / star lines** | Same scroll mechanic — WebGL path scrolls with you |
| **Missions** | Reuses the announcement component pattern; has inline video expand (click to open full player) |
| **Press** | Cleaned up, less card-heavy; uses arrow navigation instead of year tabs |
| **Join Our Team** | Much more breathing room, image in background, cleaner approach |
| **Footer** | Significantly simplified and cleaned up |

**Notable structural decisions:**
- Alternate grid for station/satellites sections (different from the standard hero grid) — creates cleaner white space
- **Sticky contextual bottom navigation** (Apple-like) — appears as you scroll, contextual to the section you're in, consistent interaction across the whole site
- **Desktop hamburger menu** option — keeps primary nav focused, hides secondary items

---

### Vast team feedback on the prototype

**Abram:**
- Loves the "quiet until loud" concept — the site feels calm until a deliberate moment draws attention
- Solar Orange CTAs feel intentional and dramatic — good in that framing
- Meteorite Black used as background only for intentional, dramatic moments — resonates
- Question on crosshairs: likes the framing use (corners, anchors), but noticed they're used as bullets in the footer too. Doesn't dislike it, just wants to understand the reasoning and make sure we're not overusing them.
- Antinomy response: footer is treated as its own component, so the slight diversion from crosshairs-as-framing is intentional there

**Christopher:**
- Overall clean, typography working well in most places
- Eyebrow labels (small category text above headlines) may be slightly too small still
- Orange CTAs: concerned they're too heavy — orange should be reserved for very specific highlight moments, not used broadly. Maybe one strategic orange button per page maximum.
- Menu: thinks this is a smart middle-ground between the old floating menu and standard nav. Hamburger on desktop = likes it (keeps nav focused). Wants to see what the hamburger menu would actually reveal.
- Feels a bit static right now — wants to see more "life" (acknowledged this will improve with scroll animation and WebGL integration)
- Big type/scroll moments: might be one scroll too many before you understand what you're about to see. Tension between impactfulness and giving context. Needs to sit with it.
- **Squared corners** feel more "like us" — referenced explorations done on Crew Display product where squaring corners felt unexpectedly more Vast-like
- **Monospace font** for eyebrow/label text — combined with squared corners, this combination would feel more distinctly Vast's voice

**Antinomy's response to feedback:**
- Currently limited to hover states only — will be much more animated on type and objects in final execution
- Orange CTAs were a deliberate test — they knew it was further from the direction but wanted to see the team's reaction
- Frosted menu background: they liked it internally but weren't sure Vast still wanted it, so kept it as a reduced treatment

---

## Part 2: Component Brief Discussion

### Megan's key points on direction

- **End of July is a hard deadline** — new content must go live then, no flexibility
- For Haven Station specifically: WebGL or heavy interactivity is not achievable by July. Need a solid, ownable base.
- The goal is a **component kit / Lego kit** — building blocks that let us assemble any page, now and in the future
- **Phase 1 is reusable** — not just for Haven Station but for lower-investment products (Lunar, Satellites) where we don't want to over-spend until contracts are won
- All product pages should feel like they have the **same level of intent** — whether showing a PNG or a WebGL object, the structure and moments should feel parallel
- The brief is essentially: *"What are all the building blocks we need to build a website at any given point in time?"*
- We got caught off guard in the Max meeting because we didn't have good examples of stats components ready
- Need **grid flexibility** — e.g., an update grid that works with 3 items AND 6 items
- For every component: ask *"Is this a one-off?"* If yes, document why and how it's used. Infographics and product-specific visuals may be one-offs. Almost everything else should be reusable.

### Antinomy's design approach (Adriana / Sebastian)

- The UX wireframe phase has a lot of applicable material — but Vast hasn't given feedback on it yet, so unsure what to pull from it
- There is a **real risk** in designing section by section without seeing sections together: you can lose the "less is more" feel, white space, and visual clarity
- Suggestion: test the design system by dragging 5 sections onto a page (like Haven Station) and seeing if it holds together
- **Critical point:** Global visual direction must be validated first before diving into individual components. An eyebrow size change is an *atom* — if it changes anywhere, it must change everywhere
- Moving from duplicated elements to **Figma component instances** — change the button in one place, it updates everywhere
- Aim for ~80% locked, then make adjustments as you go

### Agreed working method

1. Antinomy continues with the homepage exploration direction
2. Vast drops visual feedback directly in Figma
3. Sebastian (or Christopher) does quick check-in syncs to validate visual direction before components are built on top of it
4. Atoms and global styles (grid, spacing, type scale) need sign-off before component-level work

---

## Decisions Made

| Decision | Detail |
|---|---|
| **Dark mode** | PARKED — remove from the brief. Not in scope. |
| **Crosshairs** | Primarily used as framing/corner anchors. Footer use as a decorative element is acceptable as a one-off. |
| **Orange CTAs** | Keep exploring; team wants them more restrained. Not resolved yet. |
| **Sticky bottom nav** | Positive direction — keep exploring |
| **Hamburger on desktop** | Positive — want to see what it reveals |
| **Squared corners** | Strong preference — feels more distinctly Vast |
| **Monospace for eyebrows** | Strong preference — makes it feel more uniquely Vast |

---

## Next Steps / Action Items

| Owner | Action |
|---|---|
| **Vast (all)** | Drop visual direction feedback on the Antinomy prototype in Figma |
| **Vast (Megan)** | Organize and consolidate component reference material — it exists but is scattered |
| **Antinomy** | Pass design files into shared Figma file (external link) for Vast to review |
| **Antinomy** | Reach out to Rebecca on timeline and budget logistics |
| **Christopher** | Quick check-in sync with Antinomy to validate visual direction iterations |
| **Megan** | Will be partially unavailable — back fully Tuesday June 16 |
| **Rebecca** | Point of contact while Megan is on vacation |

**Key dates:**
- Sebastian on vacation: June 8–13 (back Tuesday June 16)
- Megan on vacation: back Tuesday June 16
- Vast company holiday: Friday June 13
- Vast office-wide holiday: Friday June 19
