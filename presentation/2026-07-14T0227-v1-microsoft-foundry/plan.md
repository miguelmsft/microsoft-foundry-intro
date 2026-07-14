# Build Plan — Microsoft Foundry: An Introduction

- **Topic slug:** microsoft-foundry
- **Content version:** 2 (approved)
- **Total slides:** 27
- **Audience:** Mixed TDM/BDM, new to Foundry
- **Run time:** ~30 min + Q&A
- **Default theme:** GitHub Cosmos (dark)
- **Themes shipped:** GitHub Cosmos, Warm, Corporate, Cyberpunk
- **Build folder:** `presentation/2026-07-14T0227-v1-microsoft-foundry/`
- **Images:** none — no `presentation-images/` folder exists (expected). Skipped cleanly.

## Section breakdown

| Section | Title | Slides |
|---|---|---|
| 1 | Opening | 1–2 |
| 2 | Foundry Basics | 3–6 |
| 3 | Capability 1: Models & Model Choice | 7–10 |
| 4 | Capability 2: Agents & Tools | 11–15 |
| 5 | Capability 3: Foundry IQ (Knowledge & Grounding) | 16–19 |
| 6 | Capability 4: Trust & Enterprise Readiness | 20–24 |
| 7 | Closing | 25–27 |

## Per-slide type + rendering approach

| # | Type | Visual | Rendering approach |
|---|---|---|---|
| 1 | title-slide | — | Title + subtitle + tagline, zoom transition, floating orbs |
| 2 | list | — | Ordered `.slide-list` of 5 items |
| 3 | boxes | hand-craft | 3-up `.tool-grid` (Tool sprawl / Can't trust it / Pilots stall) + callout |
| 4 | single-point | — | Big centered statement + philosophy quote |
| 5 | diagram | hand-craft | Vertical hierarchy: Foundry Resource → Project → Models/Agents/Tools+Knowledge (nested boxes) + access footer |
| 6 | boxes | hand-craft | Spectrum bar (Simple → Full control) + 3 `.tool-card` boxes |
| 7 | transition | — | Section opener, dissolve |
| 8 | list | — | Headline stat + provider `.slide-list` + footer line |
| 9 | boxes | hand-craft | 3-step `.flow-container` (Filter → Benchmark → Try live) + model-router callout |
| 10 | comparison | hand-craft | 2-column compare (Locked vs Freedom) + endpoint callout |
| 11 | transition | — | Section opener, dissolve |
| 12 | comparison | hand-craft | 2-column compare (Chatbot vs Agent) + formula strip (Model+Instructions+Tools) |
| 13 | boxes | hand-craft | 3-up `.tool-grid` (Built-in / Your code / Enterprise) + MCP callout |
| 14 | diagram | hand-craft | 5 orchestration-pattern mini-cards (Sequential/Concurrent/Handoff/Group chat/Manager) w/ inline SVG glyphs + human-in-the-loop |
| 15 | quote | — | Blockquote + stat strip + attribution |
| 16 | transition | — | Section opener, dissolve |
| 17 | single-point | — | Problem statement + grounding fix |
| 18 | diagram | hand-craft | Vertical `.handoff`/flow chain: Agent → Knowledge base → Sources → Agentic retrieval → Grounded answer |
| 19 | boxes | hand-craft | 2×2 `.tool-grid` (Better answers / Build once / Secure / Faster) |
| 20 | transition | — | Section opener, dissolve |
| 21 | boxes | hand-craft | 5 pillar cards + lifecycle strip (Discover → Build → Operate) |
| 22 | comparison | hand-craft | 2-column compare (Evaluation vs Observability) |
| 23 | boxes | hand-craft | 2-column compare cards (Safety vs Security) |
| 24 | single-point | — | Control Plane statement + 67% stat |
| 25 | recap | hand-craft | 2×2 recap grid (Models / Agents / Foundry IQ / Trust), dissolve |
| 26 | single-point | — | Bottom-line statement + on-ramp CTA |
| 27 | title-slide | — | "Questions?" + thank you, zoom |

## Transition mapping (GSAP)

- title-slide → zoom (slides 1, 27)
- transition, recap → dissolve (slides 7, 11, 16, 20, 25)
- code-example → fade-scale (none in this deck)
- all others → slide

## Notes

- No demo slides, no break slides (per content author).
- Every acronym defined on first use in body/notes — preserve verbatim.
- All speaker notes rendered (hidden by default, toggle with N / 📝 button).
- Hand-craft slides rendered as real HTML components / inline SVG — never raw ASCII.
- Vite `base` left at default `/` (subpath base set at deploy time).
- Slide loads via `import.meta.env.BASE_URL`.
- `npm run build` + `npm run preview` scripts included for static (GitHub Pages) publishing.
