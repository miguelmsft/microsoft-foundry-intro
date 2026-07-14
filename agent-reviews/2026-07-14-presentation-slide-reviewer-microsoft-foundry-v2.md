---
reviewer: presentation-slide-reviewer
subject: Microsoft Foundry: An Introduction
companion: presentation-slide-builder
date: 2026-07-14
verdict: APPROVED
slides_reviewed: 30
critical_issues: 0
---

## Review Round 1 — 2026-07-14

# Visual Slide Review — Microsoft Foundry: An Introduction

**Date:** 2026-07-14
**Reviewer:** Copilot Slide Reviewer Agent
**URL:** http://localhost:5173/
**Viewport:** 1920×1080
**Theme tested:** GitHub Cosmos default; Warm/Corporate/Cyberpunk smoke-tested on slides 1, 17, and 26
**Slides reviewed:** 30
**Resolved presentation path:** presentation/2026-07-14T1743-v2-microsoft-foundry/
**Screenshots saved to:** presentation/2026-07-14T1743-v2-microsoft-foundry/review-screenshots/

---

## Summary

| Metric | Count |
|--------|-------|
| Total slides reviewed | 30 |
| ✅ clean | 29 |
| ⚠️ issues | 1 |
| 🔴 critical | 0 |
| Critical issues (🔴) | 0 |
| Important issues (🟡) | 1 |
| Minor issues (🟢) | 0 |

## All Slides — Status Table

| # | Title | Type | Status | Issues |
|---|-------|------|--------|--------|
| 1 | Microsoft Foundry | title-slide | ✅ clean | none |
| 2 | What we'll cover | list | ✅ clean | none |
| 3 | Why now: AI has moved from experiments to real work | boxes | ✅ clean | none |
| 4 | What is Microsoft Foundry? | single-point | ✅ clean | none |
| 5 | The building blocks | diagram | ✅ clean | none |
| 6 | What can you build? | boxes | ✅ clean | none |
| 7 | Models & Model Choice | transition | ✅ clean | none |
| 8 | One catalog, many models | list | ✅ clean | none |
| 9 | Choose, compare, and route | boxes | ✅ clean | none |
| 10 | Freedom of model choice | comparison | ✅ clean | none |
| 11 | Foundry Agent Service & Tools | transition | ✅ clean | none |
| 12 | From chatbot to agent | comparison | ✅ clean | none |
| 13 | Tools: connecting AI to real work | boxes | ✅ clean | none |
| 14 | Multiple agents, working together | diagram | ✅ clean | none |
| 15 | Enterprise-grade by default | boxes | ✅ clean | none |
| 16 | Building agents you can trust | list | ⚠️ issues | 🟡 tight-fit: Only 11px bottom margin |
| 17 | Guardrails: safe by default, tunable to your policy | diagram | ✅ clean | none |
| 18 | Success Story: Commerzbank's "Ava" | quote | ✅ clean | none |
| 19 | Foundry IQ | transition | ✅ clean | none |
| 20 | The problem: models can't see your data | single-point | ✅ clean | none |
| 21 | How Foundry IQ works | diagram | ✅ clean | none |
| 22 | Better answers, built once | boxes | ✅ clean | none |
| 23 | Trust & Enterprise Readiness | transition | ✅ clean | none |
| 24 | Five pillars of trust | boxes | ✅ clean | none |
| 25 | Evaluate and observe | comparison | ✅ clean | none |
| 26 | Keep it safe and secure | boxes | ✅ clean | none |
| 27 | Govern the whole fleet | single-point | ✅ clean | none |
| 28 | Recap: four capabilities, one platform | recap | ✅ clean | none |
| 29 | The bottom line | single-point | ✅ clean | none |
| 30 | Questions? | title-slide | ✅ clean | none |

## Detailed Findings

### Slide 16 — Building agents you can trust
**Status:** ⚠️ issues
**Screenshot:** `review-screenshots/slide-016.png`

| Check | Result |
|-------|--------|
| Vertical overflow | ✅ No overflow (bottom margin: 11px) |
| Horizontal overflow | ✅ None |
| Element visibility/clipping | ✅ Visible |
| Speaker notes on slide face | ✅ Hidden by default |
| Fonts | "Space Grotesk", sans-serif |

**Issues:**
- 🟡 **tight-fit:** Only 11px bottom margin

---

## Functional Checks

| Check | Result |
|-------|--------|
| Keyboard navigation | ✅ |
| Slide counter accuracy | ✅ |
| Admin panel | ✅ |
| Settings gear top-right | ✅ |
| No agenda/overview icon (jump via settings) | ✅ |
| Panel label contrast (Show speaker notes) | ✅ rgb(230, 237, 243) |
| Jump-to-slide in settings | ✅ input and ▶ buttons work |
| Slide checklist entries include titles | ✅ |
| Persistent notes-toggle button | ✅ |
| Speaker notes do NOT overlap slide | ✅ |
| Theme smoke test (4 themes × 3 slides) | ✅ |
| Network failures | ✅ None |
| Console errors | ✅ None |

### Special Attention Slides

- Slide 15 “Enterprise-grade by default”: ✅ 6-box grid fits; text is not clipped.
- Slide 16 “Building agents you can trust”: issues listed above
- Slide 17 “Guardrails: safe by default, tunable to your policy”: ✅ scan flow, compare grid, callouts, and arrows render without overflow.
- Slide 18 “Success Story: Commerzbank’s Ava”: ✅ renders correctly after renumbering.
- Slide 26 “Keep it safe and secure”: ✅ regenerated compare-grid fits.
- Non-default theme spot-check: Warm/Corporate/Cyberpunk smoke test passed on the dense visual slides checked.

## Verdict: NEEDS REWORK
🔴 NEEDS REWORK — must-fix blockers remain: Slide 16: Only 11px bottom margin


## Review Round 2 — 2026-07-14

### Fix Verification

- ✅ Slide 16 “Building agents you can trust” tight-fit blocker verified fixed. Measured content bottom margin is **48px** at 1920×1080, comfortably above the 20px threshold.
- ✅ Slide 16 renders all **6 / 6** checklist items; no clipping, vertical overflow, horizontal overflow, or speaker-note face leakage detected.
- ✅ Screenshot overwritten: `presentation/2026-07-14T1743-v2-microsoft-foundry/review-screenshots/slide-016.png`.
- ✅ Regression spot-checks passed: slide 2 agenda, slide 15 six-box grid, and slide 17 guardrails diagram have no introduced overflow/clipping.

### Round 2 Measurements

| Slide | Result |
|---|---|
| 2 — What we'll cover | ✅ no overflow/clipping; bottom margin 294px |
| 15 — Enterprise-grade by default | ✅ no overflow/clipping; bottom margin 63px |
| 16 — Building agents you can trust | ✅ no overflow/clipping; bottom margin 48px; 6 checklist items |
| 17 — Guardrails: safe by default, tunable to your policy | ✅ no overflow/clipping; bottom margin 88px |

### Functional Smoke

- Console errors: ✅ none
- Network failures: ✅ none

## Verdict: APPROVED
✅ APPROVED
