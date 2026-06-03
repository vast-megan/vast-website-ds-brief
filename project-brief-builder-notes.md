# Vast Website DS Brief Builder — Project Notes
**Last updated:** June 2, 2026

---

## Note for Claude — Read This First

After reading this file to get context, do two things before we start working:

1. **Check for anything that looks stale or incomplete** — if a decision is marked TBD but Megan may have resolved it since, or if a section looks like it's missing information that came up in the current conversation, flag it. Say something like: *"I noticed [X] is still marked as undecided — do you know the answer now? I can update the notes."*

2. **Offer to update this file as we go** — if something gets decided, clarified, or added during the session, offer to write it into the relevant section here so the next conversation starts with the freshest information. Don't wait to be asked.

The goal is that this file stays accurate and useful over time — not just a snapshot from day one. If Megan says something that changes a decision or adds clarity, that belongs in these notes.

**When explaining things:** Megan is learning as she goes. When introducing a new concept, tool, or decision, give a plain-language explanation before diving in — one sentence is usually enough. Avoid jargon without context.

---

## Live Tool
**URL:** https://vast-megan.github.io/vast-website-ds-brief/brief-builder.html  
**Repo:** https://github.com/vast-megan/vast-website-ds-brief

---

## Agreed Architecture (next phase)
The tool is being expanded from a single-purpose audit tool into a full project brief system. Tab structure:

1. **Dashboard** — project-level progress across all sections. Shows % complete for Audit Feedback, Component Checklist, and Brief. Highlights unresolved blockers. Has a "ready to send" state and one-click to generate the final Figma brief prompt.

2. **Audit Feedback** — the 22 feedback items from Figma comments. Keep/Evolve, Cut, Defer decisions. Figma screenshots, stakeholder comments, and notes per item. This is the current Decisions tab.

3. **Components** — Atoms → Molecules → Organisms checklist (from `antinomy-brief-checklist.md`). Checkboxes, status, and notes per component.

4. **Brief** — auto-assembles from Audit Feedback + Component decisions. Final output includes a "Generate Figma Brief" button that produces a consolidated prompt to build the Figma board in Claude.

**Flow:** Audit → Components → Brief → Figma

---

## Export / Import Workflow (for collaborating with James)
1. Both open the live URL independently in their own browser
2. Each fills in decisions and notes separately
3. James clicks **↓ Export** → types his name → downloads a zip file named `vast-website-ds-brief-notes-james-[date].zip`
4. James sends the zip to Megan
5. Megan clicks **↑ Import** → selects the JSON inside the zip → his notes merge into hers
6. If both left notes on the same item, both versions are kept with James's name prepended
7. Megan synthesizes and that becomes the final brief

---

## Pushing Updates (VS Code workflow)
1. Claude edits files directly on the laptop
2. In VS Code, open the **Source Control panel** (branch icon in left sidebar)
3. Stage changed files with **+**
4. Write a commit message (action verb + what changed, e.g. `add components tab`)
5. Click **✓ Commit**
6. Click **Sync Changes**
7. GitHub Pages updates automatically within ~60 seconds

No Terminal needed.

---

## Figma File Keys
| File | Key |
|---|---|
| 2026 Website Refresh (main) | `Dhpi5a7jp2NUKId3J3YvNq` |
| Design System (new) | `mALfoeX2vv7cWVC6F4P9yg` |
| Wireframe Review — May 2026 | `Dmid14FQJXX12Bsto458mB` |
| Component Exploration | `X1C3jQJbFYLL5CGlrpFrvs` |
| Moodboard (FigJam) | `bTSBaGohsmXEZbTdx7L82q` |
| Pulse (internal app design system) | `f8xD9U06qRRdqhEz3hAPoD` |

---

## Key People
- **Megan Luedke** — Vast Digital Lead, primary contact
- **James Trump** — Vast Head of Brand, meeting partner
- **Hillary** — Vast Head of Design / exec stakeholder
- **Abram** — Vast Design Systems
- **Christopher** — Vast Brand
- **Adriana** — Antinomy Studio lead designer (paused as of May 26, 2026)
- **Oscar** — Antinomy Studio

---

## Files in This Folder
| File | Purpose |
|---|---|
| `brief-builder.html` | The live tool — source of truth |
| `antinomy-brief-checklist.md` | Component checklist (Atoms → Molecules → Organisms) — feeds the Components tab |
| `screenshots/` | 17 Figma node screenshots used in the Audit Feedback cards |
| `Vast_Wordmark_Meteorite_Black_RGB.png` | Logo used in the tool header |
| `project-brief-builder-notes.md` | This file |

---

## What's Next
- Add "Generate Figma Brief" button to Brief tab (currently shows a "Copy to Clipboard" button)
- Eventually: push final brief into a Figma board via Claude + Figma MCP
- Share tool with James for parallel review using the Export/Import workflow

---

## Tool UI System — Card Behavior (June 2026)

This section documents how cards work across every tab so future Claude sessions don't have to reverse-engineer it.

### View modes
- **Default:** List view on all tabs (changed from grid)
- **List view:** cards expand and collapse in place (accordion)
- **Grid view:** clicking a tile opens a modal
- This rule is consistent across every tab — no exceptions

### Status label system
All status badges use the `.status-label.sl-*` CSS class. Never use the old `.badge.d-*` or `.comp-badge.comp-*` systems. The complete set:

**Component / Blocker states:**
- `sl-todo` → "Not started"
- `sl-progress` → "In progress"
- `sl-done` → "Ready"
- `sl-deferred` → "Deferred"

**Audit states:**
- `sl-undecided` → "Not Started"
- `sl-keep` → "Keep / Evolve"
- `sl-cut` → "Cut"
- `sl-defer` → "Deferred"

**Blocker resolved state:**
- `sl-done` → "Resolved"

### Card state machines

**Components (Organisms / Molecules / Atoms):**
1. **Not started** → editable form, "Mark as ready" button at the bottom
2. **In progress** → same editable form (auto-set when notes are typed)
3. **Deferred** → immediately read-only; "Restore" + "Edit" buttons; sorted to bottom of section
4. **Ready** → read-only showing notes, variants, types; "Unmark" + "Edit" buttons
5. **Editing a ready/deferred card** → full editable form + "Done editing" button

**Audit Feedback:**
1. **Not Started** → editable — shows screenshot, hint box, stakeholder comments, then Notes textarea, then decision buttons at the bottom
2. **Decided (Keep/Cut/Deferred)** → clicking a decision button immediately locks the card to read-only. The decision IS the final action — no separate "Mark as ready" step.
3. **Read-only** → shows all reference material (screenshot, hint, comments) + notes; "Edit" button only
4. **Editing** → full editable form + "Done editing" button to re-lock
5. Toggle off: clicking the currently-selected decision button sets it back to undecided and keeps the card editable

**Blockers (Strategic Open Decisions):**
1. **Not started** → editable textarea for answer + "Mark resolved" button
2. **In progress** → same (auto-set when answer is typed)
3. **Resolved** → read-only showing the answer text; "Mark unresolved" + "Edit" buttons
4. **Editing a resolved card** → editable textarea + "Mark unresolved" + "Done editing"

### Deferred items behavior
- Deferred items are **not** visually dimmed — opacity reduction was removed
- They are sorted to the **bottom of their category section** automatically
- This applies to all three component tiers (Organisms, Molecules, Atoms)
- In the Blockers tab, deferred component items appear in their own "Deferred Components" sub-section

### Modal close behavior
`_closeModal()` is tab-aware — it re-renders whichever tab is currently active (not always Components). This ensures the list/grid view stays in sync after closing a modal from any tab.

---

## Decisions Tab — Section Structure

The Decisions tab has three sections, each with a filter:

1. **Components Ready** — items marked "Ready" across Organisms, Molecules, Atoms. Each category (Organisms/Molecules/Atoms) has its own sub-header with a "Go to Components →" link. Cards are read-only, expand to show notes/variants/types.

2. **Audit Decisions** — all audit items with a decision made (Keep/Cut/Deferred). Uses identical card logic to the Audit Feedback tab — same read-only/edit states, same content structure.

3. **Resolved Blockers** — Strategic Open Decisions marked as resolved in the Blockers tab. Shows the question title, description, and recorded answer in read-only. "Edit" to modify the answer while keeping it resolved.

Filter buttons: All | Components | Audit Decisions | Resolved Blockers

---

## Visual System Decisions (June 2026)

### Color tokens
```css
--defer:     #2563eb;           /* blue — changed from amber #b45309 */
--defer-dim: rgba(37,99,235,0.08);
```
All "deferred" states across the tool use this blue. Previously the component "deferred" state used a separate slate-blue (`#64748b`) — that has been unified.

### Copy standards
| Old | New |
|---|---|
| "Defer" | "Deferred" |
| "Undecided" | "Not Started" |
| "Notes / Refinements" | "Notes" |
| "chars" | "characters" |

These apply everywhere in the UI — filter buttons, status badges, action buttons, score boxes.

### Blocker descriptions
All Strategic Open Decision descriptions use sentence case (capitalised first word). They are displayed at the top level of the list card header — visible without expanding — using `.card-title` and `.card-desc` CSS classes.

---

## Content Rules (Locked — do not redesign around these)

- **Type styles:** 5 maximum across the entire site
- **Brand fonts:** Owner's + Phonic only — no Inter
- **Type pairing:** Large headline with body copy in a supporting role
- **Headline rule:** Long headline OR short headline + paragraph — never both
- **Description copy:** 150 characters max
- **Blur/glass effect:** Video backgrounds only — not over static images
- **Center alignment:** Use sparingly — must feel intentional, not default
- **Carousel media:** Images only — no card overlays, keep images the focus
- **Infographics:** Light/line drawing style only — no heavy infographic style

---

## Confirmed Cuts (do not include in brief)

| Item | Reason |
|---|---|
| Payload card components | No longer exist on site (Megan confirmed) |
| Full screen takeover module | Too complex — "too much going on" |
| Dark overlay texture module | Doesn't fit brand (Hillary confirmed) |
| Secondary header | Redundant — add logo to primary nav instead |
| Carousel card overlays | Images should be the focus |
| Old infographic style | Being removed from site entirely |
| Inter typeface | Not a brand font |

---

## Open Decisions — Blockers

These must be resolved before Antinomy can finalize designs.

| # | Decision | Options | Impact |
|---|---|---|---|
| 1 | **Type ramp** — which 5 styles? | TBD | Foundational — blocks everything |
| 2 | **Deep dive model** | Stripe (expand-in-place) vs Apple (drill-down) | Affects accordion, tab panel, card behavior |
| 3 | **Video autoplay** | Yes or No | Affects video block, tab panel |
| 4 | **Accordion vs tabs** | For specs and technical content | Affects Technical & Data section |
| 5 | **Footer structure** | Which of 4 current variants wins? | Blocks footer finalization |
| 6 | **Center-alignment** | Blanket rule or case-by-case? | Affects feature highlight, CTA section |
| 7 | **Copy density** | 150 chars confirmed? Exceptions? | Affects all content-heavy sections |
| 8 | **Icon style** | Line weight, outline vs filled? | Blocks icon set build |
| 9 | **Breakpoints** | Mobile/tablet behavior — none defined yet | Blocks responsive design |
| 10 | **Dark mode** | Full dark mode or surface variants only? | Affects color token system |

---

## Component Checklist Structure (Atoms → Molecules → Organisms)

Built from `antinomy-brief-checklist.md`. Lives in the Components tab of the tool.

**Organisms (38 total):**
- Global / Persistent: Nav Bar, Mega Menu, Announcement Bar, Cookie Bar, Skip Link, Footer
- Hero Patterns: Hero Video, Hero Image, Hero Split
- Content Sections: Feature Highlight, Feature Grid, Stats Bar, Card Grid, Editorial Block, Testimonial, Timeline
- Media Sections: Gallery, Carousel, Video Block, Video+Text, Scrollable Video
- Technical & Data: Accordion Group, Tab Panel, Spec Table, Diagram
- Navigation & Utility: Quick Links, Resource Grid, ToC, Filter Bar
- Conversion: CTA Section, Contact Form, Newsletter
- Feedback & Overlay: Modal, Drawer, Toast, Empty State, Error State, Loading State

**Molecules (37 total):** Text & Display, Buttons & Links, Form Controls, Navigation, Media, Feedback, Content Blocks

**Atoms (15 total):** Color, Typography, Spacing, Shape, Elevation, Motion, Grid, Icons, Base elements

---

## Figma Push Flow (when brief is complete)

1. Complete all component annotations in the Components tab
2. Click "Generate Brief" in the Brief tab → copy the text
3. Open a new Claude conversation (Figma MCP must be active)
4. Paste brief + instruction: *"Create one frame per component section organized by Organisms → Molecules → Atoms in the [file name] Figma file. Each frame should include the component name, notes, and numbered variant descriptions."*
5. Review the Figma output
6. Share the Figma file link with Antinomy
