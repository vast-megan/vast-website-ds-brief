# Website Refresh: Scope Triage & Audit
**Project:** Vast 2026 Website Refresh (Antinomy partnership)  
**Date:** June 2, 2026  
**Status:** Antinomy paused, awaiting internal Vast decisions

---

## Purpose

This project contains a complete audit and scope triage system for the Vast website refresh Figma file. Created to help the Vast team make internal Keep/Cut/Defer decisions before re-engaging Antinomy and burning agency spend.

---

## What's Inside

### 📊 Analysis Documents

**[component-audit-vast-refresh.md](component-audit-vast-refresh.md)**
- Structural analysis from Figma file metadata
- Component inventory (11 component instances identified)
- Section breakdown (Styleguide, Before vs After, System applied, Audit)
- Scope creep indicators (multiple footer variants, navigation state explosion, etc.)

**[comment-synthesis-vast-refresh.md](comment-synthesis-vast-refresh.md)**
- Complete analysis of 467 Figma comments (extracted via REST API)
- 380 unresolved comments categorized into 9 themes
- Top commenters and activity patterns
- Problem nodes with most comments
- Critical unresolved issues including "paused until further alignment" status

### ✅ Action Documents

**[scope-triage-decision-matrix.md](scope-triage-decision-matrix.md)** ⭐ **START HERE**
- Actionable checklist: 22 items needing Keep/Cut/Defer decisions
- 17 specific modules with context and checkboxes
- 5 general patterns (interaction models, typography rules, etc.)
- Summary scorecard to track decisions
- Next steps for creating Antinomy brief

**[scope-triage-summary.md](scope-triage-summary.md)**
- Quick reference guide to the entire process
- Recommended 3-phase approach
- Key decisions that need to be made first
- Biggest cut candidates identified
- Timeline estimates

---

## How to Use This

### Phase 1: Internal Decisions (This Week)
**No Antinomy spend**

1. Open [scope-triage-decision-matrix.md](scope-triage-decision-matrix.md)
2. Schedule 30-60 min internal meeting (Abram, Megan, James, Hillary)
3. Go through all 22 items together
4. Check Keep/Cut/Defer boxes
5. Fill in notes and new rules

**Output:** Completed decision matrix

---

### Phase 2: Create Antinomy Brief (Next)
**No Antinomy spend yet**

1. Use completed matrix to write brief
2. List modules to KEEP (with refinement notes)
3. List modules to CUT
4. Document new constraints/rules
5. Updated component list

**Output:** Clear brief for Antinomy

---

### Phase 3: Re-engage Antinomy
**Resume spend with clear direction**

1. Share brief with Antinomy
2. Get updated timeline/estimate
3. Unblock "paused until further alignment" status
4. Resume design work

**Output:** Agency unblocked, working toward launch

---

## Key Findings

### The Situation
- **467 total comments** (81% unresolved)
- **Antinomy paused** as of May 26, 2026
- **29 scope-related comments** flagged for reduction
- **144 nodes** with comments (concentrated problem areas)

### Top Issues
1. **Typography chaos** — ~10 font styles instead of 5, Inter appearing instead of brand fonts
2. **Scope creep** — Multiple footer variants, navigation states, module iterations
3. **Interactive pattern uncertainty** — 23 comments about autoplay/toggles/accordions with no decisions
4. **Content overload** — Repeated "too much copy" feedback
5. **Deep dive model undefined** — Stripe vs. Apple approach not chosen

### Biggest Cut Candidates
1. Payload card components (confirmed obsolete)
2. Full takeover modules ("too much going on")
3. Dark overlay textures (doesn't fit brand)
4. Old infographic style (being removed)
5. Secondary headers (redundant)
6. Carousel card overlays (images should be focus)
7. Some contact button placements (out of place)

**Estimate:** Cutting these could reduce scope ~20-30%

---

## Critical Decisions Needed

### 1. Typography System (Foundational)
- Lock to 5 font styles maximum
- Define type ramp before module design continues

### 2. Deep Dive Interaction Pattern
- Choose: Stripe model, Apple model, or Hybrid
- Affects multiple module designs

### 3. Copy Density Rules
- Set character limits for descriptions
- Establish headline + paragraph rules

### 4. Card Component System
- Define 2-column, 3-column, 4-column variants
- Reduce proliferation

### 5. Center-Aligned Content Policy
- When is it appropriate? Rule or case-by-case?

---

## Comment Statistics

**By User:**
- Megan Luedke: 170 comments (Digital Lead, primary point of contact)
- Christopher: 98 comments (Brand)
- Hillary: 59 comments (Head of Design)
- James Trump: 51 comments (Head of Brand)
- Adriana (Antinomy): 40 comments (Agency Designer)
- Abram: 27 comments (Design Systems)

**By Theme:**
- Module Design: 171 comments (largest category)
- Design Polish: 55 comments
- Content/Copy: 55 comments
- Interactive Elements: 23 comments
- Scope Reduction: 18 comments
- Technical Implementation: 10 comments
- Hierarchy/Organization: 8 comments
- Component Simplification: 7 comments
- Audience Strategy: 6 comments

**Most Commented Nodes:**
- Node 332:17320: 42 comments (updates/news content)
- Node 3:11264: 42 comments (typography sizing)
- Node 55:16808: 19 comments (headline length)
- Node 1504:2468: 15 comments (PixelFlux module)

---

## Data Sources

**Figma File:** `Dhpi5a7jp2NUKId3J3YvNq` (2026 - Website Refresh)  
**Analysis Methods:**
1. Figma metadata via `get_metadata` tool (structural analysis)
2. Figma REST API comments endpoint (comment extraction)
3. Python scripts for comment categorization and synthesis

**Tools Used:**
- Figma MCP server for file access
- Figma REST API for comment data
- Python for data analysis and categorization

---

## Next Steps

1. **Complete the decision matrix** — Internal Vast meeting
2. **Create Antinomy brief** — Based on matrix decisions
3. **Re-engage Antinomy** — Share brief, get estimate, proceed
4. **Lock foundational systems** — Typography, color, spacing before module work
5. **Reduce iteration depth** — Max 2 rounds per module, then decide or cut

---

## Questions?

**Need help with decisions?**
- Reference [comment-synthesis-vast-refresh.md](comment-synthesis-vast-refresh.md) for full context
- Look for patterns: 3+ people saying "too much" = probably too much
- Default to simpler when uncertain

**Want to see specific nodes?**
- Use node IDs from decision matrix to screenshot in Figma
- I can help pull screenshots if needed

**Ready to create Antinomy brief?**
- Complete decision matrix first
- I'll help translate decisions into clear brief document

---

## Timeline

**Current Status:** Day 0 (June 2, 2026)  
**Day 1-2:** Complete decision matrix internally (1-2 hours)  
**Day 2-3:** Create Antinomy brief (1-2 hours)  
**Day 3-4:** Share with Antinomy, get estimate  
**Week 2+:** Resume design work with clear scope

**Total time to unblock:** ~3-5 days
