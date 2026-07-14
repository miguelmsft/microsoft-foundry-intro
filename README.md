# Microsoft Foundry: An Introduction

An interactive presentation introducing the **new Microsoft Foundry** platform to a mixed audience of technical and business decision-makers. It walks through Foundry's core capabilities — the **model catalog & model choice**, the **Agent Service & tools**, **Foundry IQ** (knowledge & grounding), and **trust & enterprise readiness** — pairing each capability with the business value it delivers.

▶️ **Live presentation:** https://miguelmsft.github.io/microsoft-foundry-intro/

- **Audience:** technical + business decision-makers, new to Foundry
- **Length:** ~30 minutes + Q&A (27 slides)
- **Tone:** plain-language, starts from the basics and builds up

## Navigating the deck

- **Arrow keys / Space / PageDown** — next slide; **← / PageUp** — previous
- **Home / End** — first / last slide
- **N** — toggle speaker notes · **F** — fullscreen · **A** — settings/admin panel
- The admin panel offers a theme switcher (GitHub Cosmos, Warm, Corporate, Cyberpunk), a go-to-slide box, and a slide checklist.

## Run locally

```bash
cd "presentation/2026-07-14T0227-v1-microsoft-foundry"
npm install
npm run dev      # dev server at http://localhost:5173/
npm run build    # production build to dist/
```

## How this was built

The deck is grounded in research from official Microsoft sources (Microsoft Learn, the Microsoft/Azure blogs, and official GitHub repositories). The workflow ran as a research → content → slides pipeline, with each stage independently reviewed for accuracy and audience fit.

- `research/` — source research reports (one per capability area, plus business value)
- `presentation-content.md` — the reviewed slide-by-slide content draft
- `presentation/` — the built interactive presentation web app (Vite + GSAP)
- `agent-reviews/` — review records for each stage
- `presentation-status.md` — end-to-end workflow log

> Content reflects Microsoft Foundry as documented around mid-2026. Preview/GA status and figures (e.g., model counts) can change — reconfirm against official Microsoft sources before presenting.
