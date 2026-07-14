# Build Plan — Microsoft Foundry: An Introduction (v2)

- **Topic slug:** microsoft-foundry
- **Content version:** 4 (approved)
- **Total slides:** 30 (was 27 in v1 — 3 slides added in the Agents & Tools section)
- **Audience:** Mixed TDM/BDM, new to Foundry
- **Run time:** ~30 min + Q&A
- **Default theme:** GitHub Cosmos (dark)
- **Themes shipped:** GitHub Cosmos, Warm, Corporate, Cyberpunk
- **Build folder:** `presentation/2026-07-14T1743-v2-microsoft-foundry/`
- **Images:** none — no `presentation-images/` folder exists at project root (expected). Skipped cleanly.

## What changed vs v1
- **+3 new slides** in Section 4 (Agents & Tools):
  - **15 — Enterprise-grade by default** (boxes) — 3×2 grid of six inherited foundations.
  - **16 — Building agents you can trust** (list) — 6-step numbered defense-in-depth checklist.
  - **17 — Guardrails: safe by default, tunable to your policy** (diagram) — 4-point scan flow + what/how panels.
- **Commerzbank "Ava"** moved from slide 15 → **slide 18**.
- Trust & Enterprise Readiness section renumbered to **23–27**; Closing to **28–30**.
- **Slide 14** speaker-notes transition updated to bridge into the new enterprise-foundations slide.
- **Slide 26 (Keep it safe and secure)** regenerated — SAFETY box now centers on the AI Red Teaming Agent (guardrails detail moved to the new slide 17), plus a guardrails callback callout.

## Section breakdown

| Section | Title | Slides |
|---|---|---|
| 1 | Opening | 1–2 |
| 2 | Foundry Basics | 3–6 |
| 3 | Capability 1: Models & Model Choice | 7–10 |
| 4 | Capability 2: Agents & Tools | 11–18 |
| 5 | Capability 3: Foundry IQ (Knowledge & Grounding) | 19–22 |
| 6 | Capability 4: Trust & Enterprise Readiness | 23–27 |
| 7 | Closing | 28–30 |

## Per-slide type + rendering approach

| # | Type | Visual | Rendering approach |
|---|---|---|---|
| 1 | title-slide | — | Title + eyebrow + tagline, zoom, floating orbs |
| 2 | list | — | Ordered `.slide-list` of 5 items |
| 3 | boxes | hand-craft | 3-up `.tool-grid` (Tool sprawl / Can't trust it / Pilots stall) + callout |
| 4 | single-point | — | Big statement + philosophy quote |
| 5 | diagram | hand-craft | Vertical hierarchy: Resource → Project → Models/Agents/Tools+Knowledge + access footer |
| 6 | boxes | hand-craft | Spectrum bar + 3 `.tool-card` (model call / prompt agent / hosted agent) |
| 7 | transition | — | Section opener, dissolve |
| 8 | list | — | Headline stat + provider `.slide-list` + footer |
| 9 | boxes | hand-craft | 3-step `.flow-container` (Filter → Benchmark → Try live) + model-router callout |
| 10 | comparison | hand-craft | 2-col compare (Locked vs Freedom) + endpoint callout |
| 11 | transition | — | Section opener, dissolve |
| 12 | comparison | hand-craft | 2-col compare (Chatbot vs Agent) + formula strip |
| 13 | boxes | hand-craft | 3-up `.tool-grid` (Built-in / Your code / Enterprise) + MCP callout |
| 14 | diagram | hand-craft | 5 orchestration-pattern SVG mini-cards + human-in-the-loop callout |
| 15 | boxes | hand-craft | **NEW** — 3×2 `.tool-grid` of six inherited foundations + callout |
| 16 | list | hand-craft | **NEW** — 6-step numbered checklist (`.trust-checklist`) + payoff callout |
| 17 | diagram | hand-craft | **NEW** — 4-point scan flow + What-catches / How-works compare panels + tunable note |
| 18 | quote | — | Commerzbank blockquote + stat strip + attribution |
| 19 | transition | — | Section opener, dissolve |
| 20 | single-point | — | Problem statement + grounding fix |
| 21 | diagram | hand-craft | Vertical `.vflow` chain: Agent → KB → Sources → Agentic retrieval → Grounded answer |
| 22 | boxes | hand-craft | 2×2 `.tool-grid` (Better answers / Build once / Secure / Faster) |
| 23 | transition | — | Section opener, dissolve |
| 24 | boxes | hand-craft | 5 pillar cards + lifecycle strip (Discover → Build → Operate) |
| 25 | comparison | hand-craft | 2-col compare (Evaluation vs Observability) |
| 26 | boxes | hand-craft | **REGENERATED** — 2-col compare (Safety=Red Teaming vs Security) + guardrails callback |
| 27 | single-point | — | Control Plane statement + 67% stat |
| 28 | recap | hand-craft | 2×2 recap grid (Models / Agents / Foundry IQ / Trust), dissolve |
| 29 | single-point | — | Bottom-line statement |
| 30 | title-slide | — | "Questions?" + thank you, zoom |

## Transition mapping (GSAP)
- title-slide → zoom (slides 1, 30)
- transition, recap → dissolve (slides 7, 11, 19, 23, 28)
- code-example → fade-scale (none in this deck)
- all others → slide

## Notes
- No demo slides, no break slides (per content author).
- Every acronym defined on first use — preserved verbatim.
- All speaker notes rendered (hidden by default; toggle with N / 📝).
- Hand-craft slides rendered as real HTML components / inline SVG — never raw ASCII.
- Vite `base` left at default `/` (subpath base set at deploy time for GitHub Pages).
- Slide loads via `import.meta.env.BASE_URL`.
- `npm run build` (dist/) + `npm run preview` scripts included for static hosting.
