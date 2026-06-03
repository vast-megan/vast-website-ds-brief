# Component Audit: Vast Website Refresh
**File:** 2026 - Website Refresh (Antinomy partnership)  
**Date:** June 2, 2026  
**Status:** Scope assessment and consolidation

---

## Executive Summary

The Figma file contains **4 major sections** with evidence of scope expansion:
- **Styleguide** — Foundation elements (spacing, colors, grid, typography)
- **Before vs After** — Comparative design iterations (largest section, most variants)
- **System applied** — Implementation examples
- **Audit** — Flagged issues and recommendations (Evolve/Keep/Remove categories)

**Primary scope concern:** The "Before vs After" section contains extensive iteration with multiple states per component, suggesting feature creep and lack of decisive direction.

---

## Component Instance Inventory

### Actual Figma Components (reusable symbols)
These are the TRUE components being used across designs:

| Component | Usage Count | Notes |
|-----------|-------------|-------|
| **Footer link** | 74× | Most used component |
| **Link Nav** | 34× | Navigation links |
| **pause** | 8× | Video/media control |
| **link** | 4× | Generic link component |
| **Control** | 3× | Interactive control element |
| **desktop/primary** | 2× | Desktop-specific primary component |
| **Button** | 2× | Surprisingly low usage for actual Button component |
| **Intro Section** | 1× | |
| **Card Image** | 1× | |
| **arrow** | 1× | |
| **slider-button-right-blur-black** | 1× | Specific variant |

**Key observation:** Only **11 unique component instances** are actually being used. This is surprisingly low for a full website refresh, suggesting either:
1. Components are not properly instanced (many one-offs)
2. Components haven't been systematized yet
3. Heavy use of local overrides instead of proper variants

---

## Component Type Categories

### Navigation Components
- Default menu
- Menu on scroll
- Menu Open
- Burger
- Nav element
- Nav element - Unified
- Link Nav (component)

**States tracked:** Default, Scroll, Open

### Button Components
- Button (component)
- Button Text
- Buttons (collection)
- slider-button-left-blur-black
- slider-button-right-blur-black

**Issue:** Multiple button variations suggest lack of unified button system

### Card Components
- Card Image (component)
- Post
- Team Member Container
- Card Container
- Blurred Card

**States tracked:** Default variations

### Section/Module Components
- Intro Section
- Section Triptych
- Video Block (3× usage)
- Video and Text
- Capabilities open
- scrollable video extension
- Contextual Content (tooltip/modal pattern)

**Issue:** Extensive "module" variants without clear hierarchy

### Footer Components
- Footer 16, Footer 17, Footer 26, Footer 27 (numbered variants)
- Footer link (component, 74× usage)
- Address Details
- Social Media Icons

**Issue:** Why 4+ numbered Footer variants? Unclear differentiation.

### Media Components
- Image Container
- Logo
- Video Block
- Screenshots (numerous: 2025-01-24, 2026-04-10, etc.)

**Issue:** Screenshots suggest work-in-progress mockups, not production assets

### Interactive States
- Default
- Hover
- Click
- Date Open
- Hotspot Open
- Toggle
- Transparent
- pause (component)

**Observation:** Interactive states are being designed but may not be componentized properly

---

## Unique Pages/Screens (1440px desktop frames)

| Screen/Module | Occurrences | Section |
|---------------|-------------|---------|
| **homepage** | 1× | Styleguide |
| **Default menu** | 3× | Before vs After, System applied |
| **Menu on scroll** | 2× | Before vs After |
| **Menu Open** | 1× | Before vs After |
| **Hotspot Open** | 1× | Before vs After |
| **Date Open** | 1× | Before vs After |
| **Video Block** | 3× | System applied |
| **Video and Text** | 1× | System applied |
| **scrollable video extension** | 1× | System applied |
| **Capabilities open** | 2× | System applied |
| **Big title with big image modules** | 1× | Before vs After |
| **Section Triptych** | 1× | Before vs After |
| **Small Pills' Titles** | 1× | Before vs After |
| **Intro text (no more than 3 words)** | 1× | Before vs After |
| **Detail content** | 2× | Before vs After |
| **Post** | 2× | Before vs After |
| **Footer 16 / Footer 17** | Multiple | Before vs After, System applied |

---

## Section Breakdown

### Styleguide Section
**Purpose:** Design system foundation  
**Contents:**
- Spacing - Desktop
- Colors
- Grid - Desktop
- homepage (reference page)

**Status:** ✅ Foundational — appears complete and stable

---

### Before vs After Section
**Purpose:** Comparative iterations  
**Contents:** **LARGEST SECTION** with extensive variations

**Red flags indicating scope creep:**
- Multiple navigation states (Default menu, Menu on scroll, Menu Open, Hotspot Open, Date Open)
- Multiple content modules with unclear differentiation:
  - "Big title with big image modules"
  - "Intro text (no more than 3 words)"
  - "Small Pills' Titles"
  - "Avoid using similar or same text style in a text comp." ← editorial comment as frame name
- Footer variants (Footer 16, 17, 26, 27)
- Interactive pattern exploration:
  - Toggle
  - Transparent
  - Detail content
  - Scrollytelling
  - Contextual Content modals

**Observation:** This section contains design exploration and commentary mixed with production work. Many frames are design critiques, not deliverables.

---

### System Applied Section
**Purpose:** Finalized implementation examples  
**Contents:**
- Before/After comparison frames
- Video modules (Video Block, Video and Text, scrollable video extension)
- Navigation variations
- Capabilities open (interactive module)
- Footer variants

**Status:** Appears to be more refined than "Before vs After" but still contains multiple variants per pattern

---

### Audit Section
**Purpose:** Quality control and decision-making  
**Contents:**
- **Evolve** — Patterns to iterate/improve
- **Keep** — Approved patterns
- **Remove** — Patterns to cut

**Status:** This is the KEY section for scope management. Need to review what's flagged here.

---

## Scope Creep Indicators

### 1. **Multiple Footer Variants**
Why do we have Footer 16, 17, 26, 27? What differentiates them? This suggests indecision or over-iteration.

### 2. **Navigation State Explosion**
- Default menu
- Menu on scroll
- Menu Open
- Date Open
- Hotspot Open

Are all these states necessary? Or are some experimental?

### 3. **Ambiguous Module Names**
- "Big title with big image modules"
- "Intro text (no more than 3 words)"
- "Avoid using similar or same text style in a text comp."

These read as work-in-progress notes, not production component names.

### 4. **Low Component Reuse**
Only 11 component instances are being used across the entire file. This suggests heavy local overrides or lack of systematization.

### 5. **Interactive Pattern Exploration**
Evidence of designing interaction patterns that may not be scoped:
- Scrollytelling
- Contextual Content modals
- Toggle interactions
- Hotspot reveals
- Date filtering

Are these all in scope? Or explorations?

---

## Recommendations

### Immediate Actions

1. **Review the Audit Section**  
   Go through Evolve/Keep/Remove decisions and make cuts. This is where Antinomy has flagged issues.

2. **Consolidate Footer Variants**  
   Determine why 4+ footer variants exist. Merge or cut.

3. **Clarify Navigation Scope**  
   Which navigation states are required vs. nice-to-have? Default + Menu Open may be sufficient.

4. **Componentize Properly**  
   11 component instances for a full site refresh is too low. Convert repeated patterns to proper components with variants.

5. **Rename Work-in-Progress Frames**  
   Clean up editorial comments used as frame names. Use consistent naming: `[Component] - [Variant]`

### Strategic Questions

- **What is the MVP?** — Which modules are launch-critical vs. future enhancement?
- **What are the core templates?** — Homepage, interior page, article... what else?
- **What interactions are in scope?** — Scrollytelling, modals, filters... confirm with stakeholders
- **What's the component hierarchy?** — Atoms → Molecules → Organisms → Templates

---

## Next Steps

**Option A: Deep dive into Audit section**  
Screenshot and review the Evolve/Keep/Remove recommendations from Antinomy.

**Option B: Template-based scope reset**  
Define the 3-5 core page templates and build component inventory from those.

**Option C: Component consolidation workshop**  
Export all unique patterns, group similar, merge duplicates, establish naming convention.

**Which approach would be most helpful?**
