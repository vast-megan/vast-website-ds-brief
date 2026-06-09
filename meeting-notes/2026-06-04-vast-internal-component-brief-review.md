# Meeting Notes: Component Design System Brief Review & Antinomy Handoff Prep
**Date:** June 4, 2026 — 3:18pm  
**Type:** Vast internal working session  
**Source:** AI-generated summary (PDF) — Meeting ID: meeting-c0feb43d-d64b-487c-949c-28dcc4e748a8  
**Context:** Reviewed the component brief (assembled by Megan + James) before the Monday June 8 kickoff with Antinomy

## Attendees
Megan (speaker/lead), James, Christopher, Abram, Karma, Hillary

---

## What This Meeting Was About

Working session to review and refine the component brief before handing it off to Antinomy on Monday. Covered nav bar, hero sections, galleries, grids, dropdowns, and feature/stats sections. The overarching goal: build a highly modular, reusable React component library that lets Vast update pages independently — without needing Antinomy for routine changes.

---

## Key Decisions

### Navigation
- Mini logo nav = **not the right direction**
- Full-page nav takeover = **not yet feasible**
- **Preferred direction:** Three core products (Haven Station, Lunar, Satellites) front and center as primary items. Secondary items (About, Careers, Customers, etc.) in a separate dropdown or overflow menu.
- **Dropdowns should still be built** even if only single-button nav items are needed initially — the component should exist for future use
- Max wants Customers up top — noted but not confirmed as the direction

### Component Philosophy
- Components must be **modular and reusable** — agnostic of specific pages, not one-offs
- Reusability and scalability are the most important qualities
- Padding between sections should be systematic: small / medium / large — consistent across the board
- Move away from page-specific design thinking toward **system-first** approach

### Stats vs. Feature Sections
- These are **two separate concerns** — don't mix them:
  - **Stats sections:** flexible grid/card system, content front and center (satisfies Max's request)
  - **Feature sections:** interactive deep-dive (tabs, images, video, WebGL) for product storytelling
- Cards need to support a range of content: icons, images, big numbers, text, or combinations

### Dropdowns — defined as a spectrum of the same component:
1. Simple: text-only accordion (title + description)
2. Medium: text + side image
3. Full: full-width expanding panel
*(Same structure, varying content complexity — same approach as sliders/galleries)*

### React Library + Webflow
- Confirmed direction: building in a **React library that integrates with Webflow**, convertible to native Webflow components if needed
- This same library can power other products (roadmap app) and the shop — shared foundational system

### Shop Components
- In scope for the React library: **product listing grid, product detail page, cart**
- Checkout = handled by Shopify, out of scope

### Self-Sufficiency Goal
- Baptist's stated goal: make the Vast team **self-sufficient** — able to build and update pages without relying on Antinomy for routine edits
- Antinomy's effort should go toward highest-reuse components and special interactive moments (e.g., WebGL), not one-off fixes

---

## Action Items (from June 4)

| Owner | Task | Due |
|---|---|---|
| **Megan** | Finalize component brief in Figma with visual references, do's and don'ts, notes per component, and clearly stated deliverables for each section | June 5 (before going out) |
| **Megan + James** | Pull in nav structure reference and add notes on preferred nav direction | June 5 |
| **Megan** | Finish Claude-generated component brief output and merge it with visual references into the Figma file | June 5 |
| **Megan + Chris** | Detailed pass through the brief file, especially for components with gaps (galleries, stats, dropdowns) | June 4–5 |
| **Megan** | Invite Hillary to Monday's Antinomy meeting | Before June 8 |
| **Team** | Attend Monday June 8 — 8:30 AM meeting with Antinomy to present brief and review their work in progress | June 8 |
| **Abram** | Stress the non-one-off, reusable/modular nature of the system when briefing Antinomy | June 8 meeting |

---

## Discussion Highlights

**Nav:** Agreed mini-logo nav is wrong long-term. Centering Haven Station, Satellites, Lunar as primary with secondary items in overflow/dropdown is the preferred direction. Dropdown component gets built regardless for future flexibility.

**Modularity:** Biggest theme of the meeting — system-first, not page-first. Any component should be stackable in any order on any page and still feel cohesive.

**React + Webflow:** Confirmed as the technical direction going into the Antinomy brief. The same React library will serve the website, shop, and potentially other products like the roadmap app.

**Shop scope:** Product grid, product detail, cart — but NOT checkout (Shopify handles that).
