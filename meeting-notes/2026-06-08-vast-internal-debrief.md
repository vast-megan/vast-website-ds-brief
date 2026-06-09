# Meeting Notes: Vast Internal Debrief — Antinomy Prototype Review
**Date:** June 8, 2026 — 10:35am  
**Type:** Vast internal team only (follows the 8:33am Antinomy meeting)  
**Purpose:** Align on feedback to send Antinomy this week  
**Raw transcript:** `raw/2026-06-08-vast-internal-RAW.md`

## Attendees
Megan Luedke, Christopher, Abram, James, Rebecca (notes only)

---

## Context

The team pulled up the Antinomy prototype together (Antinomy had added it to the shared Figma file in a slightly unexpected location). Goal: agree on what feedback to send Antinomy so they can move forward this week.

---

## Feedback by Section

### Navigation

**All: positive direction overall.**

- Frosted/blur underlay works — transitions nicely to a moon-rock tone on lighter backgrounds
- 4 primary menu items is the right call — funnels users to the most important destinations
- **Hamburger menu on desktop:** good idea in principle. Primary items stay visible; secondary items (shop, updates, etc.) go in the hamburger. Feels manageable and uncluttered for new users.
  - Want to see what the hamburger actually reveals before fully committing
  - Consider exploring: primary items centered (Haven Station, Satellites, Lunar) with hamburger offset to the side
- **Max pushback risk:** he may push for more visible items. Team's argument: hamburger menu = second tier with equal value, not hidden. Keeps first impression focused on products and mission. This direction gives us room to scale indefinitely without stuffing things into the footer.
- **Fix needed:** Switch from Inter (what Antinomy used) to Owners (Vast's typeface). Square the button corners.

**Rebecca's note:** "Like the ability to scale. What is the plan for the hamburger menu?"

---

### CTAs / Buttons

**Main issue: buttons on the vapor grey section look too washed out.**

- The CTA underlay is too light — reads as a secondary action, not a primary one
- Possible solution: use frosted/moonrock warm-gray buttons on white backgrounds — may solve both the vapor grey issue and maintain consistency with frosted buttons over video

**Decision: go all square corners on buttons for now.** Decide which moments get rounded corners later, once we have a full picture of all components.

- Consistent rule: start from all-square, introduce rounding intentionally with a documented reason
- Font fix: switch from Inter (what Antinomy used in the prototype) to Owners (Vast's typeface)

**Rebecca's notes:** "CTAs too washed out on vapor / CTA underlay too light, seems like secondary rather than a call to action / Needs square corners / Check font, not Roboto"

---

### Hero / Large Type Moments

- Headline type at 96pt: everyone likes it ✓
- Control button repositioned to the right: feels more balanced ✓
- **Frosted button over video:** like the concept but there are currently two different button styles visible in one section. Needs a consistent rule for when frosted is used.
- Reference: Sunday.ai handles these big scroll moments better — gives you the impact, then quickly moves you forward. The Antinomy prototype's big moments feel slightly like a blocker. How do you have the impact without slowing the user down?

**Rebecca's note:** "Like the 96pt / Like control on the right / Like frosted button over video - but do we want two different button styles?"

---

### Monospace Type (Eyebrows / Labels)

**All agreed: monospace must be in.** It's visibly missing and everyone noticed. Eyebrow labels need monospace — it's part of what makes it feel like Vast.

---

### Announcements Module

**Issue: headlines/announcements are being treated as two separate sections — they need to be together.**

- The current treatment splits the text and media apart, which reduces emphasis on the content
- What we need: text/headline paired with its media in the same section
- Need multiple announcements visible at once (not just one) — e.g. right now there are two crew announcements + satellites = three that should be featured simultaneously
- **Preferred pattern:**
  - One large featured announcement (big type + media together)
  - Below: a 3–6 item grid of latest updates (Max recently changed the homepage to show 6 items)
  - These are two separate components that both need to exist

---

### Haven Station / WebGL Section

**This is working.** The "content above, interaction buttons below as you scroll" pattern is strong.

- Can clearly see how this translates from PNG → video → WebGL — they're all interchangeable within the same component structure ✓
- **Note:** Dragon spacecraft needs to be added to the Haven Station section — the current prototype may be using an older version that's missing it

---

### Icons / Interactive Signifiers

Need a consistent rule for plus signs, arrows, and carets.

| Symbol | Rule |
|---|---|
| **Plus (+)** | On-page interaction — user stays on the page and gets more content |
| **Arrow (→)** | Navigation — user is leaving the current page |
| **No icon** | Footer links — these are just links, no icon needed |

**Examples:** "Watch video" = plus (stays on page). Footer links = no icon. CTAs going to another page = arrow.

**Caret:** Antinomy removed it. That's acceptable as long as the arrow rule above is applied consistently.

**Rebecca's note:** "Carrot? Bring back in CTA / Don't like plus sign for footer as a bullet / Plus if there is an interaction on the page"

---

### Orange CTAs

**Strong feeling: too loud. Not accessible.**

- Orange on white doesn't pass contrast. Orange on black also fails accessibility.
- The orange CTA buttons are the only thing anyone looks at — it overrides everything else on the page
- Team is aligned: **don't use orange as a CTA button style broadly**

**Orange strategy going forward:**
- Scale it back the same way as buttons — default to white/neutral, introduce orange at very intentional moments
- Idea (from James / others): **orange as a hover state** — unexpected, quiet → loud. If something turns orange on hover, that tells you "this is a moment worth noticing." Creates drama without being constantly loud.
- Alternative: orange as a glow or elevation effect (e.g. a warm radiant light behind something), rather than a solid fill

---

### Grid

Antinomy is using a 32-column grid (Sebastian's style).

- Surprising but **not jarring** — still feels on-grid because it maintains base-8 rhythm
- Can be treated mentally as a 16-column with extra subdivisions when needed
- **Outstanding question:** How does this translate to tablet and mobile? Need to see it before committing. Team wants to stay at or under 6 columns on mobile.

---

## Decisions Made

| Decision | Detail |
|---|---|
| **Buttons: all square** | Start all-square, introduce rounded corners intentionally later with documented reason |
| **Monospace for eyebrows** | Agreed — it's missing and needs to be there |
| **Orange CTAs: scale back** | Use orange sparingly; best use = hover state or elevation glow, not solid CTA fill |
| **Nav: positive direction** | Proceed; want to see hamburger menu contents |
| **Announcements: redesign** | Current two-section split isn't working — headline + media must be paired; need multiple featured |
| **Haven Station structure** | Pattern is working — content above, interactions below |
| **Icon rules** | Plus = on-page, Arrow = off-page, No icon = footer |

---

## Next Steps / Action Items

| Owner | Action |
|---|---|
| **Megan** | Share consolidated feedback with Antinomy before end of day today |
| **Megan** | Answer any Antinomy questions on the component brief |
| **Christopher** | Keep collecting visual references from Antinomy's existing work that show what's working |
| **Abram + James** | Start documenting rules for how and when to use color and shape — a living reference document to add to and change as we go |
| **Antinomy** | 1–2 days to incorporate feedback and iterate |
| **All** | Check-in later this week once Antinomy has new work to review |

---

## Supplemental: Rebecca's Notes (Full)
*From Rebecca's own notes taken during the meeting*

**Nav**
- Like the ability to scale
- What is the plan for the hamburger menu?

**Background color / CTAs**
- CTAs too washed out on vapor
- CTA underlay too light, seems like secondary rather than a call to action
- Needs square corners
- Check font, not Roboto

**Headline**
- Like the 96pt
- Like control on the right
- Like frosted button over video — but do we want two different button styles?
- Moonrock buttons so you can see them on white
- Carrot? Bring back in CTA
- Don't like plus sign for footer as a bullet
- Plus if there is an interaction on the page

**Announcements** — don't like this

**Next Steps** (Rebecca's list)
- Megan to share feedback with Antinomy today
- Check in if they have questions on the components Figma
- Get timing from Antinomy for next review
