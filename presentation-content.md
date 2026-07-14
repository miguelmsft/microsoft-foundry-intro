---
topic: "Microsoft Foundry: An Introduction"
topic_slug: microsoft-foundry
audience: mixed
target_duration: 30 min + Q&A
emphasis:
  - Model catalog & model choice
  - Foundry Agent Service & tools
  - Foundry IQ (knowledge & grounding)
  - Trust & enterprise readiness (evaluation, observability, safety, security, governance)
  - Business value woven into every capability
de_emphasis: none
structural_preferences: >-
  30-minute talk with Q&A at the end (~27 slides, hard cap ~30). Open with a short
  basics section (what Foundry is / what you can build), then go capability-by-capability
  in the emphasis order, pairing each capability with the business problem it solves.
  Plain, simple language; define every acronym on first use; layer depth in speaker
  notes for the mixed TDM/BDM audience. Industry-agnostic. No demo slides. No break slides.
source_files:
  - research/2026-07-13-msdocs-foundry-overview-model-catalog.md
  - research/2026-07-13-msdocs-foundry-agent-service-tools.md
  - research/2026-07-13-msdocs-foundry-iq-knowledge.md
  - research/2026-07-13-msdocs-foundry-trust-enterprise-readiness.md
  - research/2026-07-13-web-foundry-business-value-outcomes.md
research_allowlist:
  mode: all
  files:
    - research/2026-07-13-msdocs-foundry-overview-model-catalog.md
    - research/2026-07-13-msdocs-foundry-agent-service-tools.md
    - research/2026-07-13-msdocs-foundry-iq-knowledge.md
    - research/2026-07-13-msdocs-foundry-trust-enterprise-readiness.md
    - research/2026-07-13-web-foundry-business-value-outcomes.md
version: 4
created: 2026-07-13
revised: 2026-07-14
---

# Presentation Outline — Microsoft Foundry: An Introduction

**Audience:** Mixed — technical decision-makers (TDMs) and business decision-makers (BDMs), all new to Foundry.
**Run time:** ~30 minutes + Q&A. **Slide count:** 30.

**Design intent:** Start from zero knowledge, then walk the four capabilities in order, pairing each with the business problem it solves. Plain language throughout; deeper technical detail lives in speaker notes.

### Section 1 — Opening (Slides 1–2)
1. Title slide
2. Agenda / the journey

### Section 2 — Foundry Basics (Slides 3–6)
3. Why now — the problem Foundry solves
4. What is Microsoft Foundry?
5. The building blocks (diagram)
6. What can you build? (spectrum)

### Section 3 — Capability 1: Models & Model Choice (Slides 7–10)
7. Section transition
8. One catalog, many models
9. Choose, compare, and route
10. Freedom of model choice

### Section 4 — Capability 2: Agents & Tools (Slides 11–18)
11. Section transition
12. From chatbot to agent
13. Tools: connecting AI to real work
14. Multiple agents, working together
15. Enterprise-grade by default
16. Building agents you can trust
17. Guardrails: safe by default, tunable to your policy
18. Success Story: Commerzbank "Ava"

### Section 5 — Capability 3: Foundry IQ (Knowledge & Grounding) (Slides 19–22)
19. Section transition
20. The problem: models can't see your data
21. How Foundry IQ works (diagram)
22. Better answers, built once

### Section 6 — Capability 4: Trust & Enterprise Readiness (Slides 23–27)
23. Section transition
24. Five pillars of trust (overview)
25. Evaluate and observe
26. Keep it safe and secure
27. Govern the whole fleet

### Section 7 — Closing (Slides 28–30)
28. Recap: four capabilities, one platform
29. The bottom line
30. Q&A

---

<!-- Slide 1 | Section: Opening | Type: title-slide -->

# Microsoft Foundry
## An Introduction

One platform to build, ground, run, and govern AI apps and agents.

**Speaker Notes:**
Welcome. Over the next ~30 minutes we'll get everyone — technical and business roles alike — from "I've heard the name" to "I understand what Microsoft Foundry does and why it matters."

No prior Foundry knowledge is assumed. I'll define terms as we go and keep the language plain. Save questions for the Q&A at the end, though feel free to jot them down as we move.

The whole talk is organized around four capabilities. For each one, I'll explain what it is in everyday language and then immediately connect it to the business problem it solves.

Transition: Let's start with where we're headed.

Sources: research/2026-07-13-web-foundry-business-value-outcomes.md, research/2026-07-13-msdocs-foundry-overview-model-catalog.md

---

<!-- Slide 2 | Section: Opening | Type: list -->

# What we'll cover

1. **Foundry basics** — what it is and what you can build

2. **Models & model choice** — pick the best model for each job

3. **Agents & tools** — AI that reasons *and* takes action

4. **Foundry IQ** — grounding answers in your own knowledge

5. **Trust & enterprise readiness** — evaluate, observe, secure, and govern

**Speaker Notes:**
Here's the map. We open with a quick "what is this thing" section, then walk four capabilities in order.

A promise for the mixed room: business folks, every capability comes with a plain "why it matters." Technical folks, I'll drop the deeper detail into how each piece actually works, and I'm happy to go further in Q&A.

Notice the arc — it mirrors how you'd actually build: choose a model, wrap it in an agent that can act, ground it in your data, then make it trustworthy enough for production.

Transition: Before the capabilities, let's talk about why a platform like this exists at all.

Sources: research/2026-07-13-web-foundry-business-value-outcomes.md

---

<!-- Slide 3 | Section: Foundry Basics | Type: boxes | Visual: hand-craft -->

# Why now: AI has moved from experiments to real work

The hard part isn't a single model — it's assembling everything *around* it.

```
┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│    TOOL SPRAWL      │  │    CAN'T TRUST IT    │  │    PILOTS STALL     │
│  stitching many     │  │  can't see what the  │  │  demos never reach  │
│  disconnected tools │  │  AI did, or prove    │  │  production at      │
│  together by hand   │  │  it's safe/accurate  │  │  scale              │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘
```

Foundry brings building, grounding, running, and governing into **one coherent system** — and **100,000+ organizations are already building on it.**

**Speaker Notes:**
Set the scene: AI has crossed from side experiments into running real work.

The blocker most organizations hit isn't picking a model — it's the "integration tax" of gluing together separate tools for hosting, data, safety, and monitoring.

Microsoft's framing (Jay Parikh, EVP CoreAI): "Enterprises can't afford to assemble their agent strategy one piece at a time. Disconnected tools stitched together after the fact can slow teams down and introduce unnecessary risk."

And a memorable line for BDMs: "The winners won't be those with the most demos, but those that turn AI into a governed, continuously improving system for running real work."

The "100,000+ organizations building on Microsoft Foundry" figure is current as of July 2026 and speaks to momentum — this isn't experimental.

Named production users include Adobe, Telefónica, and Tata Consultancy Services.

Transition: So what exactly is this "one coherent system"?

Sources: research/2026-07-13-web-foundry-business-value-outcomes.md, research/2026-07-13-msdocs-foundry-overview-model-catalog.md

---

<!-- Slide 4 | Section: Foundry Basics | Type: single-point -->

# What is Microsoft Foundry?

A **unified platform to build, ground, and govern AI apps and agents** — one place for the whole journey, instead of a pile of disconnected tools.

Microsoft's design philosophy: *"Open by design, intelligent by default, and trusted by architecture."*

**Speaker Notes:**
Keep this plain. Microsoft's own one-liner: "Microsoft Foundry is a unified platform to build, ground, and govern AI apps and agents that understand your business context."

Three verbs to remember, which also preview the rest of the talk: **build** (models + agents), **ground** (connect to your data), **govern** (trust and control). The technical framing adds that it "unifies agents, models, and tools under a single management grouping."

For the mixed room, note Foundry is deliberately built for three roles at once: application developers building AI products; ML engineers and data scientists who tune and evaluate models; and IT/platform teams who govern access and enforce policy. That's why it suits both the builders and the decision-makers in this room.

Foundry is an Azure platform-as-a-service — you focus on the application, Microsoft runs the infrastructure.

Transition: Let's see how the pieces fit together.

Sources: research/2026-07-13-web-foundry-business-value-outcomes.md, research/2026-07-13-msdocs-foundry-overview-model-catalog.md

---

<!-- Slide 5 | Section: Foundry Basics | Type: diagram | Visual: hand-craft -->

# The building blocks

```
                    MICROSOFT FOUNDRY
          "one place to build, ground & govern AI"
                          │
          ┌───────────────┴────────────────┐
          │       FOUNDRY RESOURCE          │  org-level governance:
          │                                 │  security, networking, access
          └───────────────┬────────────────┘
                          │
          ┌───────────────┴────────────────┐
          │            PROJECT              │  a team's workspace to build
          │  ┌──────────┬──────────┬──────┐ │
          │  │  MODELS  │  AGENTS  │TOOLS+│ │
          │  │  the     │ reason & │KNOW- │ │
          │  │  catalog │ act      │LEDGE │ │
          │  └──────────┴──────────┴──────┘ │
          └─────────────────────────────────┘
     Reach it via: portal (ai.azure.com) · software development kits (SDKs) · VS Code · command-line interface (CLI)
```

**Speaker Notes:**
Only two nouns to remember. A **Foundry resource** is the top-level container where an organization sets governance — security, networking, who can access what. A **project** is the workspace *inside* it where a team actually builds.

Why the split matters: IT applies controls once at the resource level, and multiple teams then build inside their own projects — reusing model deployments and connections "without repeated IT setup." Central control, local speed.

Inside a project you'll find the three things the rest of the talk covers: models (from the catalog), agents (model + instructions + tools), and the tools/knowledge they use. Teams reach all of it through a browser portal at ai.azure.com, or via code — SDKs (software development kits) for Python, C#, JavaScript, and Java, a VS Code extension, and a command line.

Transition: With the pieces named, what can you actually build?

Sources: research/2026-07-13-msdocs-foundry-overview-model-catalog.md

---

<!-- Slide 6 | Section: Foundry Basics | Type: boxes | Visual: hand-craft -->

# What can you build?

From a single question to a fully coded, production agent — start simple and grow.

```
   SIMPLE ──────────────────────────────────────► FULL CONTROL

  ┌────────────────┐   ┌────────────────┐   ┌────────────────┐
  │  A MODEL CALL  │   │  PROMPT AGENT  │   │  HOSTED AGENT  │
  │ send a prompt, │   │ model + instr- │   │ your own code, │
  │ get a response │   │ uctions + tools│   │ any framework; │
  │                │   │ — no code to   │   │ Foundry runs & │
  │                │   │ run; Foundry   │   │ scales it for  │
  │                │   │ hosts it       │   │ you            │
  └────────────────┘   └────────────────┘   └────────────────┘
    least to manage ─────────────────────────► most control
```

**Speaker Notes:**
This spectrum is reassuring for a new audience: you don't have to boil the ocean on day one.

Left: just call a model — send a prompt, get an answer, no orchestration. Middle: a **prompt agent** — you specify a model, instructions, and tools, and Foundry hosts and runs it; no application code or servers to maintain. Right: a **hosted agent** — you bring your own code in any framework, and Foundry runs it with a managed endpoint, scaling, identity, and monitoring.

Teams start with the least to manage and "graduate to full code as needs grow," which protects early investment — you never hit a wall that forces a rewrite.

We'll unpack "agent" properly in Section 4; for now the point is the on-ramp is gentle.

Transition: Everything starts with the model, so that's Capability 1.

Sources: research/2026-07-13-msdocs-foundry-overview-model-catalog.md

---

<!-- Slide 7 | Section: Models & Model Choice | Type: transition -->

# Capability 1 — Models & Model Choice

*One catalog, many models — choose the right brain for each job.*

**Speaker Notes:**
We're now in the first of four capabilities. Everything an agent does starts with a model, so this is the natural place to begin.

The theme to carry through this section is **freedom of model choice**: no single model wins every task, and Foundry is built so you're never locked into one.

Transition: Let's look at what's actually in the catalog.

Sources: research/2026-07-13-msdocs-foundry-overview-model-catalog.md, research/2026-07-13-web-foundry-business-value-outcomes.md

---

<!-- Slide 8 | Section: Models & Model Choice | Type: list -->

# One catalog, many models

**1,900+ curated models** from the leading providers — the full catalog is larger still, with roughly **50 new models added every month.**

- **Microsoft** — Phi (small models), the MAI multimodal family
- **OpenAI** — GPT-5 and GPT-4.1 families, o-series reasoning models
- **Anthropic** — the Claude family
- **Meta, Mistral, xAI, DeepSeek, Cohere, NVIDIA** — open and specialized models
- **Hugging Face community** + industry-specific models

Text, images, video, audio, embeddings — not just chat.

**Speaker Notes:**
The headline number to use is the conservative, documented one: "over 1,900 models" in the curated Foundry Models catalog.

The broader catalog is larger; keep it qualitative rather than quoting a hard total.

The steady "~50 new models each month" is the more useful fact — it's why you stay current.

The point for a new audience isn't the logos, it's the *range*: frontier flagship models, small models that can run in constrained environments, reasoning models, and domain/industry models — spanning text, image, video, audio, and embeddings.

A credibility note for BDMs: as of 2026, Azure is positioned as the only cloud offering both Anthropic's Claude and OpenAI's GPT frontier models to its customers.

Model access can vary by region and, for some partner models, by marketplace — the live portal is the authoritative list.

Transition: A big catalog is only useful if choosing is easy — so how do you pick?

Sources: research/2026-07-13-msdocs-foundry-overview-model-catalog.md, research/2026-07-13-web-foundry-business-value-outcomes.md

---

<!-- Slide 9 | Section: Models & Model Choice | Type: boxes | Visual: hand-craft -->

# Choose, compare, and route

```
 ┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
 │  FILTER & BROWSE  │   │   BENCHMARK &     │   │   TRY IT LIVE     │
 │ by provider, capa-│   │   COMPARE         │   │ playground —      │
 │ bility, industry, │──▶│ leaderboards on   │──▶│ test & compare up │
 │ task              │   │ quality, safety,  │   │ to 3 models side  │
 │                   │   │ performance       │   │ by side           │
 └───────────────────┘   └───────────────────┘   └───────────────────┘

  Or let the MODEL ROUTER pick the best model for each request,
  automatically — up to 40% faster responses, no code changes.
```

**Speaker Notes:**
This turns "which model should we use?" from a research project into a guided decision. You filter the catalog, read standardized benchmark leaderboards (quality, safety, and performance like latency/throughput), and then try candidates hands-on in a playground — comparing up to three side by side before you commit a line of code.

The **model router** is the "don't choose at all" option: it's a trained model that routes each prompt in real time to the most suitable model behind a single deployment. Microsoft reports "up to 40% faster responses ... without code changes or loss in quality" in early customer deployments. The router is generally available.

Best-practice caveat worth voicing: leaderboards are a first pass — validate on *your own* data, and don't default to the biggest model for everything (a top-quality reasoning model may be too slow for real-time chat). Note for accuracy: model leaderboards are in preview.

Transition: All of this points to one business payoff.

Sources: research/2026-07-13-msdocs-foundry-overview-model-catalog.md, research/2026-07-13-web-foundry-business-value-outcomes.md

---

<!-- Slide 10 | Section: Models & Model Choice | Type: comparison | Visual: hand-craft -->

# Freedom of model choice

```
  LOCKED TO ONE MODEL              │   FREEDOM OF CHOICE (FOUNDRY)
  ─────────────────────            │   ──────────────────────────
  • bet everything on one          │   • pick the best model per job
    provider                       │   • switch models without
  • rewrite the app to switch      │     changing your code
  • fall behind when a better      │   • new models usable as they
    model ships                    │     ship — no re-platforming
```

You reach supported models through **one project endpoint** — so comparing or swapping a model is a **configuration change, not a rewrite.**

**Speaker Notes:**
This is the message to carry across the whole deck. Because supported models sit behind one project endpoint and one set of credentials, Microsoft's documentation says you can "switch between models and use them in your application without changing any code."

Spell out the three business wins: (1) **pick the best model for each task** — deep-reasoning model for planning, a fast model for high-volume chat; (2) **avoid lock-in** — you're not stranded on one provider; (3) **stay future-proof** — new models arrive continuously, so you adopt advances without disruptive migrations. Microsoft frames deployment as "something you level up to, not a gate."

Scope it accurately for technical folks: this is about *supported Foundry model deployments* reached through the project endpoint — not a literal "one endpoint for absolutely everything."

Transition: A model on its own only produces text. To get real work done, you wrap it in an agent — Capability 2.

Sources: research/2026-07-13-msdocs-foundry-overview-model-catalog.md, research/2026-07-13-web-foundry-business-value-outcomes.md

---

<!-- Slide 11 | Section: Agents & Tools | Type: transition -->

# Capability 2 — Foundry Agent Service & Tools

*From answering questions to actually getting work done.*

**Speaker Notes:**
Capability 2 is where AI stops talking and starts doing. Foundry Agent Service is the managed home for building, deploying, and scaling AI agents.

The business theme here: **speed to production** and **connecting AI to real work** — automating routine, multi-step tasks so people focus on higher-value work.

Transition: First, what exactly *is* an agent?

Sources: research/2026-07-13-msdocs-foundry-agent-service-tools.md

---

<!-- Slide 12 | Section: Agents & Tools | Type: comparison | Visual: hand-craft -->

# From chatbot to agent

**A chatbot talks; an agent does.**

```
        A CHATBOT                    │           AN AGENT
        ─────────                    │           ────────
   generates text in reply          │   reasons about a goal, then
                                     │   takes action across steps:
                                     │   searches, runs code, calls
                                     │   your systems, and finishes
                                     │   the task

     EVERY AGENT = MODEL  +  INSTRUCTIONS  +  TOOLS
                  (reason)   (goals/limits)  (act)
```

Build it two ways: a **prompt agent** (no code — Foundry runs it) or a **hosted agent** (your code, any framework — Foundry hosts and scales it).

**Speaker Notes:**
The cleanest definition: "Unlike a simple chatbot that only generates text, an agent can call tools, access external data, and make decisions across multiple steps to complete a task." Some agents don't even have a chat window — they run in the background, triggered by events.

The mental model is three parts, every time: a **model** (the reasoning engine), **instructions** (goals, constraints, behavior), and **tools** (how it takes action or reaches data).

Recall the build spectrum from earlier: **prompt agents** need no application code — great for fast starts and internal tools. **Hosted agents** let engineering teams bring their own code in frameworks like the Microsoft Agent Framework, LangGraph, or the OpenAI Agents SDK, while Foundry handles hosting, scaling, identity, and monitoring. Teams offload the "undifferentiated heavy lifting" and ship faster.

Transition: The magic word there was "tools." Let's look at those.

Sources: research/2026-07-13-msdocs-foundry-agent-service-tools.md

---

<!-- Slide 13 | Section: Agents & Tools | Type: boxes | Visual: hand-craft -->

# Tools: connecting AI to real work

Tools are how an agent stops being a demo and starts doing real work.

```
 ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
 │  BUILT-IN TOOLS  │  │  YOUR OWN CODE    │  │ ENTERPRISE SYSTEMS│
 │ web search, code │  │ function calling; │  │ 1,400+ ready-made │
 │ interpreter,     │  │ your APIs via     │  │ connectors (SAP,  │
 │ file search      │  │ OpenAPI           │  │ Salesforce, D365) │
 └──────────────────┘  └──────────────────┘  └──────────────────┘

   Open standard: MCP (Model Context Protocol) — build a tool once,
   reuse it across many agents. Agents act with scoped identities.
```

**Speaker Notes:**
Plain framing: "An agent on its own uses a model to generate text, but tools let it take action — searching the web, running code, querying your data, or calling your own APIs."

Three families: built-in tools (some, like web search and memory, are in preview — mention lightly); your own capabilities via function calling or OpenAPI; and pre-built connectors into enterprise systems. Azure Logic Apps brings "1,400+ built-in connectors" to systems like SAP, Salesforce, and Dynamics 365 — often with no custom code.

Define MCP once: the **Model Context Protocol** is an open standard for how apps expose tools to AI models. Because it's open, a tool built once can be reused by many agents and runtimes — less glue code, faster rollout.

Agents plug into the systems a business already runs, and each agent acts with its own scoped identity and permissions rather than shared credentials — so automation is real *and* controlled.

Transition: One agent is powerful; sometimes you need several working together.

Sources: research/2026-07-13-msdocs-foundry-agent-service-tools.md, research/2026-07-13-msdocs-foundry-overview-model-catalog.md, research/2026-07-13-web-foundry-business-value-outcomes.md

---

<!-- Slide 14 | Section: Agents & Tools | Type: diagram | Visual: hand-craft -->

# Multiple agents, working together

Break a big, messy job into specialized roles that cooperate.

```
  SEQUENTIAL    CONCURRENT     HANDOFF        GROUP CHAT     MANAGER
  A→B→C         A ┐            A ─► B ─► C    ┌─A─┐          Mgr
                B ├─► merge    (pass control   │  │          ├─►A
                C ┘             with context)  B──C          ├─►B
                                              (shared chat)  └─►C

  + HUMAN-IN-THE-LOOP: a person approves the consequential steps.
```

Coordinated by the **open-source Microsoft Agent Framework** — standard orchestration patterns reduce custom routing code.

**Speaker Notes:**
Microsoft's guidance: start with reliable single agents, then orchestrate them when one agent's instructions "consistently struggle with the complexity, breadth, or depth of a task." The signal to go multi-agent is real complexity, not novelty.

The patterns are just "shapes" of cooperation — an assembly line (sequential), divide-and-conquer (concurrent), escalation/expert routing (handoff), a shared brainstorm (group chat), or a manager coordinating specialists (magentic). Teams pick a pattern instead of writing routing code by hand.

The recommended engine is the **Microsoft Agent Framework** — an open-source SDK that unifies the enterprise foundations of Semantic Kernel with the orchestration ideas of AutoGen. It's the go-forward orchestration engine.

Emphasize **human-in-the-loop** for the BDMs: agents can prepare work, but a person approves before anything consequential is sent or changed. That's what makes it safe to automate real processes in regulated settings.

Transition: Whether it's one agent or a whole team of them, they all stand on the same enterprise foundation — so let's look at what every agent gets for free.

Sources: research/2026-07-13-msdocs-foundry-agent-service-tools.md

---

<!-- Slide 15 | Section: Agents & Tools | Type: boxes | Visual: hand-craft -->

# Enterprise-grade by default

Every Foundry agent inherits the same enterprise foundations — with no extra work.

```
 ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐
 │     OWN IDENTITY     │  │  PRIVATE NETWORKING  │  │    ACCESS CONTROL    │
 │ a dedicated Microsoft│  │ runs inside your own │  │ role-based access    │
 │ Entra identity per   │  │ Azure virtual network│  │ control (RBAC) sets  │
 │ agent — scoped       │  │ (bring-your-own VNet;│  │ who can create,      │
 │ access, no shared    │  │ isolated per-session │  │ invoke, and manage   │
 │ keys                 │  │ sandboxes)           │  │ agents               │
 └──────────────────────┘  └──────────────────────┘  └──────────────────────┘
 ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐
 │    CONTENT SAFETY    │  │    OBSERVABILITY     │  │        REACH         │
 │ built-in filters help│  │ end-to-end tracing   │  │ publish to Microsoft │
 │ block harmful content│  │ of every decision    │  │ 365 Copilot and Teams│
 │ and prompt-injection,│  │ the agent makes      │  │ in a few clicks      │
 │ incl. cross-prompt   │  │                      │  │                      │
 │ injection (XPIA)     │  │                      │  │                      │
 └──────────────────────┘  └──────────────────────┘  └──────────────────────┘
```

Enterprise-readiness isn't bolted on later — it's the starting point, so agents are production-ready from day one.

**Speaker Notes:**
Every agent built on Foundry Agent Service inherits enterprise-grade infrastructure automatically — you don't add these things later.

Walk the six quickly. **Own identity** — each agent gets a dedicated Microsoft Entra identity (Entra is Microsoft's identity service), so it authenticates with scoped, least-privilege access instead of shared keys or embedded secrets. **Private networking** — agents run inside your own Azure virtual network (VNet); hosted agents support bring-your-own VNet with per-session sandboxes isolated at the VM level. **Access control** — role-based access control (RBAC) governs who can create, invoke, and manage agents. **Content safety** — integrated filters help block harmful content and prompt-injection, including cross-prompt injection (XPIA), where malicious instructions are hidden in content the agent reads. **Observability** — end-to-end tracing lets you "see every decision your agent makes." **Reach** — publish finished agents into Microsoft 365 Copilot and Teams in a few clicks, putting them where people already work.

BDM takeaway: because these foundations are inherited, teams don't spend weeks bolting on security, networking, and monitoring — production-readiness is the starting line, which cuts both risk and time to production.

Transition: Those foundations come for free. On top of them, here's the short checklist every team should apply when building an agent you can actually trust.

Sources: research/2026-07-13-msdocs-foundry-agent-service-tools.md, research/2026-07-13-msdocs-foundry-overview-model-catalog.md

---

<!-- Slide 16 | Section: Agents & Tools | Type: list | Visual: hand-craft -->

# Building agents you can trust

Layer these safeguards so automation never runs unchecked — defense in depth.

```
   ┌──────────────────────────────────────────────────────────┐
   │ 1  SCOPED IDENTITY                                         │
   │    least-privilege Entra identity per agent; no shared keys│
   ├──────────────────────────────────────────────────────────┤
   │ 2  APPROVAL GATES + ALLOW-LISTS                            │
   │    human approval for high-risk actions (tools that write  │
   │    or change data); restrict to an allow-list of tools     │
   ├──────────────────────────────────────────────────────────┤
   │ 3  HUMAN-IN-THE-LOOP                                        │
   │    a person approves consequential steps                   │
   ├──────────────────────────────────────────────────────────┤
   │ 4  GUARDRAILS ON THE AGENT                                  │
   │    scan the prompt, the tool call, the tool response, and  │
   │    the final answer                                        │
   ├──────────────────────────────────────────────────────────┤
   │ 5  TEST BEFORE YOU SHIP                                     │
   │    AI Red Teaming Agent + evaluations (task adherence,     │
   │    tool-call accuracy)                                      │
   ├──────────────────────────────────────────────────────────┤
   │ 6  TRACE EVERY DECISION                                     │
   │    full observability of what the agent did, and why       │
   └──────────────────────────────────────────────────────────┘
```

The payoff: automate real work without losing control — the difference between a demo and something you run in production.

**Speaker Notes:**
This is Microsoft's practical guidance for taking an agent from prototype to production responsibly. Frame it as "defense in depth" — no single control is enough, so you layer them.

Go through the list. (1) **Scoped identity** — give each agent its own least-privilege Entra identity; never shared keys. (2) **Approval gates and allow-lists** — Microsoft recommends requiring human approval for high-risk operations, "especially tools that write data or change resources," and restricting the agent to an allow-list of tools. (3) **Human-in-the-loop** — ensure a person can intervene, correct, or override, "especially when those decisions have safety or legal implications." (4) **Guardrails on the agent** — scan at every step: the prompt, the proposed tool call, the tool's response, and the final answer (we unpack this on the next slide). (5) **Test before you ship** — run the AI Red Teaming Agent and evaluations like task adherence and tool-call accuracy before publishing. (6) **Trace every decision** — keep full observability so you can reconstruct what the agent did and why.

One pitfall worth naming: don't overload a single agent with too many tools — Microsoft warns its guidance can become "fragmented, outdated, or misleading." Fewer, well-chosen tools are safer.

BDM takeaway: this checklist is exactly what lets a regulated business automate real work without losing control.

Transition: One item on that list protects you at every step and deserves a closer look — guardrails.

Sources: research/2026-07-13-msdocs-foundry-agent-service-tools.md, research/2026-07-13-msdocs-foundry-trust-enterprise-readiness.md

---

<!-- Slide 17 | Section: Agents & Tools | Type: diagram | Visual: hand-craft -->

# Guardrails: safe by default, tunable to your policy

A guardrail defines a risk to detect, where to scan for it, and what to do when it's found.

```
  SAFE BY DEFAULT: every model gets Microsoft's default guardrail
  (Microsoft.DefaultV2) — protection with zero setup.

  WHERE THEY SCAN — four points along the flow:

    user input ──▶ tool call ──▶ tool response ──▶ final output
                   └──── agents only (preview) ────┘

  WHAT THEY CATCH                      HOW THEY WORK
  ───────────────                      ─────────────
  • hate · sexual · self-harm ·        content filters,
    violence (Off/Low/Med/High)        prompt shields, and
  • jailbreak & cross-prompt           abuse detection
    injection (XPIA)                   (Azure AI Content
  • personal data (PII), protected     Safety classifiers)
    material, off-task answers

  TUNABLE: set each severity to your policy — applies to
  models and agents (agent guardrails in preview).
```

Safe by default, configurable to your standards, and blocking in real time — protecting your brand, your users, and your legal exposure.

**Speaker Notes:**
Define it plainly: a guardrail is a named set of controls, and each control "defines a risk to be detected, intervention points to scan for the risk, and the response action to take."

**Safe by default** is the headline for a nervous audience: every model is assigned Microsoft's default guardrail (Microsoft.DefaultV2), so there's protection with zero configuration.

**Where they scan** — four intervention points: the user's input, the proposed tool call, the tool's response, and the final output. The two middle points (tool call and tool response) are agent-specific and currently in preview — mention that lightly.

**What they catch** — the four harm categories (hate, sexual, self-harm, violence), each tunable Off/Low/Medium/High; plus jailbreak (prompt attacks) and cross-prompt injection (XPIA); plus personally identifiable information (PII), protected or copyrighted material, and off-task answers (the task-adherence control). The classifiers come from Azure AI Content Safety — content filters, prompt shields, and abuse detection.

**Tunable** is the message for policy owners: you set the severity thresholds to match your own standards, and guardrails apply to both models and agents (agent guardrails are in preview).

BDM takeaway: this is brand, user, and legal protection that's on from day one, adjustable to your risk appetite, and enforced in real time rather than after the fact.

Transition: That's the platform in theory — here's a real bank running all of it in production.

Sources: research/2026-07-13-msdocs-foundry-trust-enterprise-readiness.md

---

<!-- Slide 18 | Section: Agents & Tools | Type: quote -->

# Success Story: Commerzbank's "Ava"

> "Ava manages 30,000-plus customer conversations every month, resolving **75% of requests autonomously** and delivering round-the-clock support."

**30,000+ conversations / month · ~75% resolved autonomously · development 2× faster**

— Commerzbank AG, built on Foundry Agent Service

**Speaker Notes:**
A concrete, industry-anchored example (financial services, but the pattern is universal). Commerzbank built "Ava," a customer-facing agent, on Foundry Agent Service — using Foundry models, content safety, and grounding via search.

The numbers are the story: 30,000+ conversations a month, ~75% resolved autonomously, 24/7 — and the team reported development was "twice as fast, compared to previous approaches." Attribute these to Commerzbank specifically.

A quote that lands the trust angle (Denise Reffelmann, Commerzbank): "Ava doesn't just talk to customers — she acts on their behalf. That means she must be as secure and compliant as any human employee." That's a perfect bridge to why grounding and trust matter — the next two capabilities.

Broader pattern Microsoft cites: teams that once spent weeks integrating, securing, and deploying agents are now doing it in days, and can publish a finished agent into Microsoft 365 Copilot and Teams in a few clicks.

Transition: Ava is only useful because it can draw on the bank's own knowledge. That's Capability 3.

Sources: research/2026-07-13-web-foundry-business-value-outcomes.md

---

<!-- Slide 19 | Section: Foundry IQ | Type: transition -->

# Capability 3 — Foundry IQ (Knowledge & Grounding)

*Answers based on your data — not the model's best guess.*

**Speaker Notes:**
Capability 3 solves the single most common complaint about AI: "it makes things up, and it can't see our data."

Foundry IQ is Foundry's managed **knowledge layer**. The theme: better, more trustworthy answers, delivered faster, and secure by default.

Transition: Let's start with why the problem exists in the first place.

Sources: research/2026-07-13-msdocs-foundry-iq-knowledge.md

---

<!-- Slide 20 | Section: Foundry IQ | Type: single-point -->

# The problem: models can't see your data

A model is trained on public data up to a cutoff date — it has never seen your policies, your documents, or your systems, so on its own it *guesses.*

**Grounding** fixes this: retrieve *your* relevant content, hand it to the model, and get an answer based on facts — with citations back to the source.

**Speaker Notes:**
Frame it plainly: "The model powering an agent has a knowledge cutoff and can't access your proprietary data on its own." That's the root cause of hallucinations about *your* business.

Define **grounding** and, for the technical folks, name the pattern: **RAG — retrieval-augmented generation**. Three steps: **Retrieve** relevant content, **Augment** the prompt with it, **Generate** an answer grounded in that content. The citation is the trust feature — every answer can be traced to a source, so people (and auditors) can verify it.

Keep it conceptual here; the next slide shows how Foundry IQ does this without you hand-building the plumbing.

Transition: Here's how Foundry IQ makes grounding a managed, reusable service.

Sources: research/2026-07-13-msdocs-foundry-iq-knowledge.md, research/2026-07-13-web-foundry-business-value-outcomes.md

---

<!-- Slide 21 | Section: Foundry IQ | Type: diagram | Visual: hand-craft -->

# How Foundry IQ works

```
   AGENT asks a question   (runs under the user's own identity)
              │
              ▼
   ┌────────────────────────────┐
   │      KNOWLEDGE BASE         │   one reusable endpoint
   │   (retrieval settings)      │
   └────────────────────────────┘
              │ points to 1..many
              ▼
   ┌────────────────────────────┐
   │     KNOWLEDGE SOURCES       │   SharePoint · files · Blob ·
   │                             │   OneLake · the web · databases
   └────────────────────────────┘
              │
              ▼
   ┌────────────────────────────┐
   │     AGENTIC RETRIEVAL       │   plan → search in parallel →
   │   (Azure AI Search engine)  │   rerank → assemble
   └────────────────────────────┘
              │
              ▼
   GROUNDED ANSWER + CITATIONS   (only content the user is allowed to see)
```

**Speaker Notes:**
Three terms, one sentence: you create a **knowledge base** that points at one or more **knowledge sources**, and when an agent asks a question, **agentic retrieval** runs the search and returns grounded, cited, permission-filtered results.

"Agentic retrieval" is the upgrade over old-style single-query search — it behaves like a research assistant: it breaks a complex question into focused sub-questions, runs them in parallel across sources, reranks for relevance, and assembles a cited answer. It's built on Azure AI Search, a mature enterprise search platform.

The security point is critical and worth slowing down on: queries run under the *caller's* Microsoft Entra identity, honoring existing access controls and Microsoft Purview sensitivity labels. So an agent returns only what that specific user is allowed to see — security lives at the data layer, not bolted on in app code.

For accuracy: knowledge bases are generally available; some newer sources and advanced features are in preview — no need to dwell on the matrix.

Transition: So what does that buy the business?

Sources: research/2026-07-13-msdocs-foundry-iq-knowledge.md

---

<!-- Slide 22 | Section: Foundry IQ | Type: boxes | Visual: hand-craft -->

# Better answers, built once

```
 ┌─────────────────────────┐   ┌─────────────────────────┐
 │   BETTER, TRUSTED        │   │   BUILD ONCE,            │
 │   ANSWERS                │   │   REUSE EVERYWHERE       │
 │ ~36% higher response     │   │ one knowledge base       │
 │ quality vs. older        │   │ grounds many agents —    │
 │ one-step retrieval;      │   │ no per-project retrieval │
 │ citations you can click  │   │ plumbing to rebuild      │
 └─────────────────────────┘   └─────────────────────────┘
 ┌─────────────────────────┐   ┌─────────────────────────┐
 │   SECURE BY DEFAULT      │   │   FASTER DELIVERY        │
 │ permission-aware; honors │   │ 75% of teams found it    │
 │ identity & sensitivity   │   │ easier to ground models  │
 │ labels                   │   │ (Microsoft-commissioned  │
 │                          │   │  Forrester study)        │
 └─────────────────────────┘   └─────────────────────────┘
```

**Speaker Notes:**
Four "so what"s, all from Microsoft's own material.

Quality: benchmarks show agentic retrieval delivering roughly 36% higher response quality than traditional single-shot retrieval-augmented generation, or RAG — and, in the latest engine, up to 54% better recall — with a very high grounding rate, meaning low hallucination.

Present these as Microsoft's benchmark figures.

Reuse: "Build once, reuse everywhere" — one tuned knowledge base can ground many agents, and even other hosts through the open MCP standard.

Tune it in one place; every agent benefits.

Secure by default: permission-aware retrieval is the trust story BDMs care about — agents inherit your existing access controls automatically.

Faster delivery: in the Microsoft-commissioned Forrester Total Economic Impact study, 75% of teams found it easier to ground models in their own knowledge with Foundry IQ.

Always label that study as Microsoft-commissioned.

Transition: Better answers are necessary but not sufficient. To put any of this in production, you need trust — Capability 4.

Sources: research/2026-07-13-msdocs-foundry-iq-knowledge.md, research/2026-07-13-web-foundry-business-value-outcomes.md

---

<!-- Slide 23 | Section: Trust & Enterprise Readiness | Type: transition -->

# Capability 4 — Trust & Enterprise Readiness

*Take AI from a promising prototype to dependable production — without giving up control.*

**Speaker Notes:**
The final capability is what turns experiments into something an enterprise can actually run. AI behaves probabilistically — the same question can yield different answers, an agent takes many steps, and outputs can be wrong, unsafe, or leak data.

Microsoft's framing: this is "a shift from pilot-focused usage to secure, reliable, enterprise-ready production usage," with governance, security, and operational controls "integrated throughout the lifecycle" — not bolted on at the end.

Transition: There are five reinforcing pillars — here they are at a glance.

Sources: research/2026-07-13-msdocs-foundry-trust-enterprise-readiness.md

---

<!-- Slide 24 | Section: Trust & Enterprise Readiness | Type: boxes | Visual: hand-craft -->

# Five pillars of trust

```
 ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
 │  EVALUATION  │  │OBSERVABILITY │  │    SAFETY    │
 │ prove it's   │  │ see what it  │  │ block harm;  │
 │ good & safe  │  │ did, and why │  │ red-team it  │
 └──────────────┘  └──────────────┘  └──────────────┘
 ┌──────────────┐  ┌──────────────┐
 │   SECURITY   │  │  GOVERNANCE  │
 │ identity,    │  │ control the  │
 │ data, network│  │ whole fleet  │
 └──────────────┘  └──────────────┘

   Applied across the lifecycle:  DISCOVER → BUILD → OPERATE
```

**Speaker Notes:**
This is the roadmap for the section — don't go deep here, just orient. Five pillars: evaluation, observability, safety, security, and governance.

The key message: these are not five separate products you assemble yourself. Foundry ships them as a coherent layer, and it plugs into Microsoft security tools many enterprises already own — Entra for identity, Defender for threat protection, Purview for data governance. Fewer gaps, less integration work, one story for auditors.

We'll take them two at a time: first evaluate + observe (know it works and see what it does), then safety + security (keep it in bounds and protect the data), then governance (control it all at scale).

Transition: Start with the two that answer "does it work, and what did it do?"

Sources: research/2026-07-13-msdocs-foundry-trust-enterprise-readiness.md

---

<!-- Slide 25 | Section: Trust & Enterprise Readiness | Type: comparison | Visual: hand-craft -->

# Evaluate and observe

```
        EVALUATION                    │        OBSERVABILITY
        ──────────                    │        ─────────────
  Measure quality & safety with       │  See inside a running system:
  built-in scorers — groundedness,    │  a TRACE records every step —
  relevance, tool-call accuracy,      │  inputs, tool calls, latency —
  task completion, harmful content.   │  so you can answer "what
                                      │  happened, and why?"
  Set a bar BEFORE launch;            │
  keep checking AFTER (drift).        │  Tracing turns on with NO code
                                      │  changes; built on OpenTelemetry.
```

**Speaker Notes:**
Two complementary ideas.

**Evaluation** = proving quality and safety with evidence, not gut feel.

Foundry has built-in "evaluators" that score things like groundedness, relevance, whether the agent used the right tools, whether it completed the task, and whether it produced anything harmful.

You can set an acceptance threshold — e.g., an 85% task-adherence pass rate — before you ship, then run *continuous* evaluation on live traffic to catch drift.

That's what lets a review board sign off.

**Observability** = seeing what a running agent actually did.

A trace is the step-by-step record — it answers "where did this response come from?" and "which step introduced the error or slowdown?"

Two facts land well: tracing often needs *no code changes* (connect Application Insights and it's on within minutes), and it's built on OpenTelemetry, an open standard, so it works across frameworks.

This is the difference between hoping and knowing — and when something goes wrong in production, you diagnose it in minutes instead of guessing.

Transition: Knowing it works is half of trust. The other half is keeping it safe and protecting the data.

Sources: research/2026-07-13-msdocs-foundry-trust-enterprise-readiness.md, research/2026-07-13-web-foundry-business-value-outcomes.md

---

<!-- Slide 26 | Section: Trust & Enterprise Readiness | Type: boxes | Visual: hand-craft -->

# Keep it safe and secure

```
 ┌─────────────────────────────┐  ┌─────────────────────────────┐
 │           SAFETY            │  │          SECURITY            │
 │ The AI Red Teaming Agent    │  │ Identity, not shared keys:   │
 │ proactively finds           │  │ Microsoft Entra ID + role-   │
 │ weaknesses BEFORE an        │  │ based access control (RBAC). │
 │ attacker or customer        │  │                              │
 │ does.                       │  │ "Your data is your data" —   │
 │                             │  │ not used to train others'    │
 │                             │  │ models. Encrypted; stays in  │
 │                             │  │ your region; private network.│
 └─────────────────────────────┘  └─────────────────────────────┘
```

Guardrails (from the Agents section) apply here too — safety spans models and agents.

**Speaker Notes:**
This is the platform-level view of safety and security — the data-protection and proactive-testing half of trust.

**Safety** here is a callback: we detailed guardrails in the Agents section (slide 17). The point to reinforce is that guardrails aren't agent-only — the same content controls also protect core models, so safety spans everything you run on Foundry.

The **AI Red Teaming Agent** is the proactive half: it simulates attacks (built on Microsoft's open-source PyRIT framework) and scores the results with an Attack Success Rate, producing a scorecard that indicates whether the system is ready to deploy — catching weaknesses before a customer or attacker does. Microsoft calls this "shifting left" from costly reactive incidents to proactive testing before deployment.

**Security** answers the questions a Chief Information Security Officer (CISO) asks first.

Access is controlled by identity — **Microsoft Entra ID** (Microsoft's identity service) plus **RBAC** (role-based access control) — which Microsoft recommends over shared API keys.

Then the single most important trust statement for a business audience: "your data is your data" — your prompts and outputs are not available to other customers or model providers, and are not used to train their models.

Add encryption by default, data residency (your data stays in your chosen region), and the option to run entirely on a private network.

BDM takeaway: this is what makes it safe to connect AI to real corporate and customer data.

Transition: One agent is easy to watch. Hundreds across many teams is not — that's governance.

Sources: research/2026-07-13-msdocs-foundry-trust-enterprise-readiness.md

---

<!-- Slide 27 | Section: Trust & Enterprise Readiness | Type: single-point -->

# Govern the whole fleet

The **Foundry Control Plane** is one pane of glass to see, standardize, and govern every agent, model, and tool across the organization — so AI never becomes ungoverned "shadow AI."

*In a Microsoft-commissioned Forrester study, **67%** cited security, privacy, or governance as a top reason for adopting Foundry — above model access and capabilities.*

**Speaker Notes:**
As agents multiply across teams — and even across clouds — leaders lose sight of what's running, what it can access, and whether it's compliant. That's the "shadow agent" risk.

The **Foundry Control Plane** consolidates inventory, observability, compliance, and security into one role-aware interface. Concretely: a searchable inventory of every agent, model, and tool with health and usage; the ability to define and continuously monitor compliance policies fleet-wide (including via Azure Policy); and security signals from Defender and Purview in one place. Every agent also gets a verifiable identity through Microsoft Entra Agent ID, so there's clear ownership and access control.

The 67% figure is a strong closer for this section — label it as the Microsoft-commissioned Forrester Total Economic Impact study. It reframes governance from "compliance burden" to "the top reason customers choose the platform." Governance is what lets teams build fast *inside* guardrails.

Transition: That completes the four capabilities — let's pull it together.

Sources: research/2026-07-13-msdocs-foundry-trust-enterprise-readiness.md, research/2026-07-13-web-foundry-business-value-outcomes.md

---

<!-- Slide 28 | Section: Closing | Type: recap | Visual: hand-craft -->

# Recap: four capabilities, one platform

```
 ┌───────────────────┐  ┌───────────────────┐
 │  1. MODELS        │  │  2. AGENTS & TOOLS│
 │  pick the best    │  │  reason AND act;  │
 │  model per job,   │  │  connect to real  │
 │  no lock-in       │  │  systems; ship    │
 │                   │  │  in days          │
 └───────────────────┘  └───────────────────┘
 ┌───────────────────┐  ┌───────────────────┐
 │  3. FOUNDRY IQ    │  │  4. TRUST &       │
 │  grounded, cited  │  │  ENTERPRISE       │
 │  answers from your│  │  evaluate, observe│
 │  data; build once │  │  secure, govern   │
 └───────────────────┘  └───────────────────┘
```

**Speaker Notes:**
Tie the thread back together at a higher level than any single slide. The four capabilities aren't a menu — they compose: you **choose a model**, wrap it in an **agent** that can act, **ground** it in your knowledge so it's accurate, and wrap the whole thing in **trust** so you can run it in production.

The unifying idea is the through-line from slide 4: it's *one platform*, not stitched-together tools. That coherence is what customers say pays off — organizations that consolidated onto a unified platform reported simpler, stronger execution.

Transition: So what's the one-sentence takeaway?

Sources: research/2026-07-13-msdocs-foundry-overview-model-catalog.md, research/2026-07-13-msdocs-foundry-agent-service-tools.md, research/2026-07-13-msdocs-foundry-iq-knowledge.md, research/2026-07-13-msdocs-foundry-trust-enterprise-readiness.md, research/2026-07-13-web-foundry-business-value-outcomes.md

---

<!-- Slide 29 | Section: Closing | Type: single-point -->

# The bottom line

Microsoft Foundry lets you take an AI idea to production with the **evaluation** to prove it's good, the **observability** to see what it does, the **safety and security** to protect it, and the **governance** to control it — all in one place.

**Speaker Notes:**
This is the close. Deliver the one-line business case slowly — it maps directly to the four capabilities we just walked, so it reinforces the whole talk.

Then simply invite them in: nobody has to commit to a giant program — teams can start small and grow into agents, grounding, and governance as needs mature.

For procurement or commercial questions, route to the account team after the session.

Transition: I'll stop there and open it up.

Sources: research/2026-07-13-msdocs-foundry-trust-enterprise-readiness.md, research/2026-07-13-web-foundry-business-value-outcomes.md, research/2026-07-13-msdocs-foundry-overview-model-catalog.md

---

<!-- Slide 30 | Section: Closing | Type: title-slide -->

# Questions?

*Thank you.*

**Speaker Notes:**
Open the floor. Likely questions and quick, grounded answers:

- **"How is our data protected?"** → "Your data is your data" — not used to train providers' models; encrypted by default; stays in your chosen region; can run on a private network; retrieval is permission-aware.
- **"Do we have to pick one model forever?"** → No — switch models without changing code, and the model router can auto-pick per request.
- **"Can it use our internal documents?"** → Yes, via Foundry IQ — grounded, cited, and only what each user is allowed to see.
- **"Is this production-ready or a science project?"** → Core scenarios are generally available; 100,000+ organizations are building on it, with named customers in production. Some newer features are in preview — flag per feature.
- **"How fast can a team get value?"** → Start with a prompt agent (no code); Microsoft cites teams going from weeks to days, and Commerzbank reported 2× faster development.

For procurement or commercial questions, route to the account team after the session.

Sources: research/2026-07-13-msdocs-foundry-trust-enterprise-readiness.md, research/2026-07-13-msdocs-foundry-overview-model-catalog.md, research/2026-07-13-msdocs-foundry-iq-knowledge.md, research/2026-07-13-web-foundry-business-value-outcomes.md
