# Research Report: Microsoft Foundry — Business Value & Customer Outcomes

**Date:** 2026-07-13
**Researcher:** Copilot Web Researcher Agent
**Topic slug:** foundry-business-value-outcomes
**Sources consulted:** 14 web pages (all official Microsoft), 0 GitHub repositories

> **Purpose of this report (read me first).** This is Topic 5 of 5 source material for a 30‑minute *introductory* Microsoft Foundry deck aimed at business decision‑makers (BDMs) and technical decision‑makers (TDMs) who are new to Foundry. It supplies the **business‑value and customer‑outcome** language the content team will weave into each **capability slide**. Every value theme below is tagged with the capability slide it belongs to: **Models**, **Agents & Tools**, **Foundry IQ / Knowledge**, **Trust & Enterprise Readiness**, or **Unified Platform (cross‑cutting)**.
>
> **Scope guardrails applied:** Focused exclusively on the current **Microsoft Foundry** platform. No legacy/"hub"/"classic" or "new vs. old" framing. **No pricing or cost figures** (dollar amounts, pricing tiers, and ROI/payback dollar math were intentionally excluded — see [Research Limitations](#12-research-limitations)). All numbers are traceable to a cited official Microsoft source.

---

## Executive Summary

**Microsoft Foundry is Microsoft's unified platform for building, grounding, running, and governing AI apps and agents.** The official product page describes it plainly: *"Microsoft Foundry is a unified platform to build, ground, and govern AI apps and agents that understand your business context."* ([Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)) For a new audience, the one‑line story is: Foundry is the single place where an organization can pick the best AI model for a job, build an agent, connect it safely to company knowledge, prove it works, ship it to where people already work, and keep it under governance — without stitching together disconnected tools.

**Why it matters now:** As of July 2026, *"More than 100,000 organizations are already building on Microsoft Foundry,"* with companies like Adobe, Telefónica, and Tata Consultancy Services running agents in production ([Azure Blog, July 9, 2026](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/)). Microsoft frames the business problem bluntly through its EVP of CoreAI, Jay Parikh: *"The winners won't be those with the most demos, but those that turn AI into a governed, continuously improving system for running real work."* ([Official Microsoft Blog, June 2, 2026](https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/)) The pain Foundry removes is the "integration tax" of assembling AI one piece at a time — a problem a Microsoft‑commissioned Forrester study quantified in operational terms (see below).

**The six value themes** this report supplies — each mapped to a capability slide — are: (1) **Freedom of model choice** (Models); (2) **Faster time‑to‑market / developer productivity** (Agents & Tools); (3) **Better, grounded answers from enterprise knowledge** (Foundry IQ); (4) **Production confidence & trust** (Trust & Enterprise Readiness — evaluation, observability, safety); (5) **Enterprise readiness / governance / security** (Trust & Enterprise Readiness); and (6) **Unified platform** (cross‑cutting). Real outcomes back them up: Commerzbank's "Ava" agent handles **30,000+ conversations a month and resolves ~75% autonomously**; the same team says supporting frameworks made development **twice as fast** ([Commerzbank story](https://www.microsoft.com/en/customers/story/25676-commerzbank-ag-azure-ai-foundry-agent-service)). In a Microsoft‑commissioned Forrester study, organizations using Foundry reported **up to 35% higher technical‑team productivity** and **75% found it easier to ground models in their own knowledge** ([Azure Blog, Forrester TEI](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/)).

---

## Table of Contents

1. [Overview](#1-overview)
2. [Core Business Problems Foundry Solves (Plain Language)](#2-core-business-problems-foundry-solves-plain-language)
3. [Value Theme → Capability Slide: Freedom of Model Choice](#3-value-theme--capability-slide-freedom-of-model-choice-models)
4. [Value Theme → Capability Slide: Faster Time‑to‑Market & Developer Productivity](#4-value-theme--capability-slide-faster-time-to-market--developer-productivity-agents--tools)
5. [Value Theme → Capability Slide: Better, Grounded Answers](#5-value-theme--capability-slide-better-grounded-answers-foundry-iq--knowledge)
6. [Value Theme → Capability Slide: Production Confidence & Trust](#6-value-theme--capability-slide-production-confidence--trust-trust--enterprise-readiness)
7. [Value Theme → Capability Slide: Enterprise Readiness, Governance & Security](#7-value-theme--capability-slide-enterprise-readiness-governance--security-trust--enterprise-readiness)
8. [Value Theme → Capability Slide: Unified Platform (Cross‑Cutting)](#8-value-theme--capability-slide-unified-platform-cross-cutting)
9. [Customer Stories & Outcome Metrics](#9-customer-stories--outcome-metrics)
10. [Quotable Value Statements from Microsoft Leadership](#10-quotable-value-statements-from-microsoft-leadership)
11. [Adoption & Scale Metrics (Consolidated)](#11-adoption--scale-metrics-consolidated)
12. [Research Limitations](#12-research-limitations)
13. [Complete Reference List](#13-complete-reference-list)

> Note: the section numbering below is continuous (1–13) for easy navigation; it does not use the generic code‑report template sections because this is a business‑value (non‑code) deliverable.

---

## 1. Overview

### What It Is
Microsoft Foundry is Microsoft's end‑to‑end platform for building AI applications and agents. Two official definitions to choose from for an intro slide:

> "Microsoft Foundry is a unified platform to build, ground, and govern AI apps and agents that understand your business context. It brings together the full agent lifecycle with open development, built-in intelligence, and consistent security, compliance, and policy controls across every agent."
> — Source: [Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)

> "Microsoft Foundry is Microsoft's end-to-end platform for building, running, governing, and distributing AI agents."
> — Source: [Frontier models and production agents (Azure Blog, July 9, 2026)](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/)

A simple three‑word framing Microsoft uses on the product page: **"Open by design, intelligent by default, and trusted by architecture."** ([Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/))

Microsoft organizes Foundry into three pillars that map cleanly to a capability walkthrough:

> "Foundry brings together the capabilities organizations need to move agents into production across three pillars: **Build**: Open and flexible across models and frameworks. **Generate**: Connected to enterprise data, tools, and users. **Govern**: Secured, managed, and optimized for long-term value."
> — Source: [Frontier models and production agents (Azure Blog, July 9, 2026)](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/)

### Why It Matters (the business imperative, in plain language)
AI has moved from experiments to running real work. A Microsoft‑commissioned global study with IDC of more than 4,000 business leaders found the market has already crossed the line into adoption, and that *how* you use AI is the differentiator:

> "The findings reveal 68% of these companies are using AI today, but the real difference lies in how they're using it. In the study, Frontier firms, the ones leading AI transformation, report they are achieving returns that are three times higher than slow adopters."
> — Source: [Microsoft Ignite 2025 Book of News](https://news.microsoft.com/ignite-2025-book-of-news/)

The study also names the exact obstacles Foundry is built to remove: *"Among organizations surveyed, many are navigating challenges around security, privacy, governance and cost, as well as ethical considerations, integration complexity and scaling from pilot to production."* ([Microsoft Ignite 2025 Book of News](https://news.microsoft.com/ignite-2025-book-of-news/)) *(This IDC data describes the AI market broadly, not Foundry customers specifically — use it as "why act now" context, not a Foundry outcome.)*

### Key Capabilities (the slides this report feeds)
- **Foundry Models** — one catalog of frontier, open, and task‑specific models, with a model router.
- **Foundry Agent Service** — hosted runtime to build, run, and publish production agents (with memory, tools/toolboxes, multi‑agent workflows).
- **Foundry IQ** — a managed knowledge layer that grounds agents in enterprise data with citations and permissions.
- **Trust & Enterprise Readiness** — observability (tracing, evaluation, monitoring), safety, and the Foundry Control Plane (governance, identity, security).
- **Unified Platform** — one place spanning the full lifecycle, plus distribution into Microsoft 365 Copilot and Teams.

---

## 2. Core Business Problems Foundry Solves (Plain Language)

Use these as the "problem" half of each capability slide. Every problem is stated in plain language and paired with the Foundry answer.

| # | Business problem (plain language) | Foundry answer | Capability slide | Primary source |
|---|-----------------------------------|----------------|------------------|----------------|
| 1 | "We're locked into one AI model and worry we'll pick the wrong one." | Access to a large catalog of models + a router that picks the best model per task. | **Models** | [Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview) |
| 2 | "Our teams spend weeks stitching tools together instead of building." | One platform to build and ship agents; teams go from weeks to days. | **Agents & Tools** | [Azure Blog, July 9, 2026](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/) |
| 3 | "The AI makes things up and can't see our data." | Grounded, cited answers from enterprise knowledge via Foundry IQ. | **Foundry IQ** | [What is Foundry IQ?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq) |
| 4 | "We can't trust AI in production — we can't see what it did or prove quality." | Built‑in tracing, evaluation, and monitoring across the lifecycle. | **Trust & Enterprise Readiness** | [Observability in generative AI](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability) |
| 5 | "Security, compliance, and 'shadow agents' scare us." | Governance built on Entra, Purview, Defender; fleetwide visibility and control. | **Trust & Enterprise Readiness** | [Microsoft Ignite 2025 Book of News](https://news.microsoft.com/ignite-2025-book-of-news/) |
| 6 | "We have too many disconnected AI tools and pilots that never scale." | One coherent, interoperable platform for the whole agent lifecycle. | **Unified Platform** | [Official Microsoft Blog, June 2, 2026](https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/) |

Microsoft's own framing of problem #2 and #6, verbatim:

> "Enterprises can't afford to assemble their agent strategy one piece at a time. Disconnected tools stitched together after the fact can slow teams down and introduce unnecessary risk. Building, contextualizing, running, governing, and improving agents should happen within one coherent system."
> — Source: [AI alone won't change your business (Official Microsoft Blog, June 2, 2026)](https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/)

---

## 3. Value Theme → Capability Slide: Freedom of Model Choice (Models)

**Capability slide:** **Models / Model Catalog**
**One‑line value:** *Pick the best model for each job — and switch as the field moves — without re‑platforming or lock‑in.*

### The problem it solves
Organizations fear betting on a single model and being stranded when a better one appears. Microsoft's position is that no single model wins every workload.

### The value (plain language)
- **A large, open catalog.** *"Microsoft Foundry Models is your one-stop destination for discovering, evaluating, and deploying powerful AI models."* The catalog has *"over 1,900 models that range from foundation models, reasoning models, small language models, multimodal models, domain-specific models, and industry models"* from providers including *"Microsoft, OpenAI, DeepSeek, Hugging Face, Meta, and more"* — plus Anthropic's Claude family ([Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview)).
- **Best‑of‑breed, not lock‑in.** As of June 2026, *"Claude is now generally available in Microsoft Foundry"* alongside OpenAI's GPT frontier models ([What's New in Microsoft Foundry, June 2026](https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-june-2026/)). At Ignite 2025 Microsoft positioned this as unique: *"Now Azure is the only cloud supporting access to both Claude and GPT frontier models for its customers."* ([Actioning agentic AI, Azure Blog](https://azure.microsoft.com/en-us/blog/actioning-agentic-ai-5-ways-to-build-with-news-from-microsoft-ignite-2025/))
- **Automatic best‑model selection.** A **model router** is generally available in Foundry that *"automatically selects the best model for the task,"* balancing performance and complexity from a single endpoint, delivering *"up to 40% faster responses … in early customer deployments — all without code changes or loss in quality"* ([Microsoft Ignite 2025 Book of News](https://news.microsoft.com/ignite-2025-book-of-news/)).

### Quotes a presenter can use
> "Response from the community is clear: model diversity matters. When you're building AI apps and agents, having options means you can optimize for what matters most to your users. Microsoft Foundry gives you flexibility while maintaining enterprise-grade security, compliance, and governance."
> — Source: [Actioning agentic AI: 5 ways to build with news from Microsoft Ignite 2025 (Azure Blog)](https://azure.microsoft.com/en-us/blog/actioning-agentic-ai-5-ways-to-build-with-news-from-microsoft-ignite-2025/)

> "Together, the GPT-5.6 series gives organizations the flexibility to match model capability … and performance requirements to specific business scenarios, rather than forcing every workload onto a single model."
> — Source: [Frontier models and production agents (Azure Blog, July 9, 2026)](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/) *(Provenance: verbatim; ellipsis removes a cost reference to comply with the no‑pricing scope.)*

> "Enterprises require a wide variety of models and the ability to match the right model to the right job."
> — Source: [AI alone won't change your business (Official Microsoft Blog, June 2, 2026)](https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/)

### Presenter one‑liners (drop‑in)
- "One catalog, many models — choose the right brain for each job."
- "Bring the newest models in as they arrive; no re‑platforming, no lock‑in."
- "Let Foundry auto‑route each request to the best model — up to 40% faster responses, no code changes."

---

## 4. Value Theme → Capability Slide: Faster Time‑to‑Market & Developer Productivity (Agents & Tools)

**Capability slide:** **Agents & Tools (Foundry Agent Service)**
**One‑line value:** *Build and ship production agents in days, not weeks — where developers already work.*

### The problem it solves
Senior engineers burn time on "undifferentiated" plumbing — integrations, context pipelines, and bespoke governance — instead of building differentiated capabilities.

### The value (plain language)
- **Weeks → days.** Microsoft's summary of customer behavior: *"The pattern is consistent: teams that once spent weeks integrating, securing, and deploying agents are now doing it in days, on infrastructure that meets their compliance bar, reaching users through tools they already trust."* ([Azure Blog, July 9, 2026](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/))
- **One production runtime for any framework.** Hosted agents in Foundry Agent Service give *"developers one production runtime for agents built with any framework and harness—Microsoft Agent Framework, GitHub Copilot SDK, LangGraph, OpenClaw, Hermes, and others"* ([Azure Blog, July 9, 2026](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/)). It's *"enterprise-ready on day one."*
- **Build where developers already work.** Agent development *"starts where developers already work—in GitHub Copilot and Microsoft Visual Studio (VS) Code."* ([Azure Blog, July 9, 2026](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/))
- **Ship once, reach everyone.** Publishing Foundry agents to Microsoft 365 Copilot and Teams is generally available: *"you can now publish any agent directly into Microsoft 365 Copilot and Teams in a few clicks — no rebuilding per surface — and the agent keeps its capabilities as it moves through one governed publishing pipeline."* ([What's New in Microsoft Foundry, June 2026](https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-june-2026/))
- **Less repetitive work at scale.** In the Microsoft‑commissioned Forrester TEI study, *"organizations using Foundry avoided much of this work, improving technical team productivity up to 35%"* ([Forrester TEI blog](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/)).

### Quotes a presenter can use
> "Our developers can go super fast because they can get what they need in Microsoft Foundry … We estimate that we reduce overall development time by 30%–40%."
> — Global head of technology platforms, professional services, quoted in [The economics of enterprise AI: Forrester TEI (Azure Blog)](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/)

> "The biggest gains come from giving technical teams a reusable foundation, including models, agents, and tools that scale across use cases and eliminate repetitive work. When AI development becomes repeatable, value accelerates and confidence follows."
> — Source: [The economics of enterprise AI: Forrester TEI (Azure Blog)](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/)

### Supporting customer proof
Commerzbank's team reported that GitHub Copilot, Microsoft Foundry tools, and agentic frameworks *"made development twice as fast, compared to previous approaches"* ([Commerzbank story](https://www.microsoft.com/en/customers/story/25676-commerzbank-ag-azure-ai-foundry-agent-service)).

### Presenter one‑liners (drop‑in)
- "From weeks to days: build, secure, and deploy agents on one platform."
- "Build in GitHub and VS Code; run in Foundry; ship to Teams and Copilot in a few clicks."
- "Any framework — Microsoft Agent Framework, LangGraph, CrewAI, Claude Agent SDK — one runtime."

---

## 5. Value Theme → Capability Slide: Better, Grounded Answers (Foundry IQ / Knowledge)

**Capability slide:** **Foundry IQ / Knowledge**
**One‑line value:** *Accurate, cited answers from your own enterprise knowledge — with less hallucination and no custom RAG plumbing.*

### The problem it solves
A model alone can't see your proprietary data and has a knowledge cutoff, so it guesses. Building retrieval pipelines by hand for every project is slow and brittle.

### The value (plain language)
- **Grounding, defined.** *"Agents need context from scattered enterprise content to accurately answer questions. The Foundry model powering an agent has a knowledge cutoff and can't access your proprietary data on its own. With Foundry IQ, you can create a configurable, multi-source knowledge base that provides agents with permission-aware responses based on your organization's data."* ([What is Foundry IQ?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq))
- **Answers you can trust and trace.** Foundry IQ returns *"grounded answers with citations"* and can *"Return extractive data with citations so agents can reason over raw content and trace answers to source documents"* ([What is Foundry IQ?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)).
- **Permission‑aware by design.** It runs *"queries under the caller's Microsoft Entra identity for end-to-end permission enforcement"* and honors *"Microsoft Purview sensitivity labels,"* so agents *"return only authorized content"* ([What is Foundry IQ?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)).
- **No hand‑built RAG.** *"Foundry IQ streamlines knowledge retrieval from multiple sources including SharePoint, Fabric, and the web. Powered by Azure AI Search, it delivers policy-aware retrieval without having to build complex custom RAG pipelines."* ([Actioning agentic AI, Azure Blog](https://azure.microsoft.com/en-us/blog/actioning-agentic-ai-5-ways-to-build-with-news-from-microsoft-ignite-2025/))
- **Build once, reuse everywhere.** *"Multiple agents can share the same knowledge base"* ([What is Foundry IQ?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)); Microsoft calls it *"the SLA-backed knowledge layer behind every Foundry agent"* ([Azure Blog, July 9, 2026](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/)).

### Quotes a presenter can use
> "Microsoft IQ organizes, secures, and surfaces the right information in forms agents can actually use, so they can reach accurate insight without drowning in noise or hallucinating answers."
> — Source: [AI alone won't change your business (Official Microsoft Blog, June 2, 2026)](https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/)

> "Foundry IQ is a fully managed knowledge system designed to ground AI agents. Agents will be able to connect to one knowledge base running a knowledge retrieval engine over multiple data sources … while respecting user permissions. Integration with Microsoft Purview will also support compliance, data security and governance."
> — Source: [Microsoft Ignite 2025 Book of News](https://news.microsoft.com/ignite-2025-book-of-news/)

### Supporting data point
In the Microsoft‑commissioned Forrester TEI study, *"75% of teams cited easier model grounding or knowledge source integration with Foundry IQ"* ([Forrester TEI blog](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/)).

### Presenter one‑liners (drop‑in)
- "Answers grounded in *your* data — with citations you can click."
- "Respects who's allowed to see what: permission‑aware retrieval by default."
- "Skip the custom RAG project — connect SharePoint, Fabric, and the web in one knowledge base."

---

## 6. Value Theme → Capability Slide: Production Confidence & Trust (Trust & Enterprise Readiness)

**Capability slide:** **Trust & Enterprise Readiness** (evaluation, observability, safety)
**One‑line value:** *Know your AI works before and after you ship — measure quality and safety, see exactly what an agent did.*

### The problem it solves
Teams stall between pilot and production because they can't see inside agent behavior or prove quality and safety.

### The value (plain language)
- **Why observability matters.** *"The AI application lifecycle requires robust evaluation frameworks to ensure AI systems deliver accurate, relevant, and reliable outputs. Without rigorous assessment, AI systems risk generating responses that are inaccurate, inconsistent, poorly grounded, or potentially harmful."* ([Observability in generative AI](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability))
- **Three built‑in capabilities:** **Evaluation**, **Monitoring**, and **Tracing**. Foundry provides *"built-in evaluators including general-purpose quality metrics (coherence, fluency), RAG-specific metrics (groundedness, relevance), safety and security (hate/unfairness, violence, protected materials), and agent-specific metrics (tool call accuracy, task completion)"* ([Observability in generative AI](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability)).
- **Test for attacks before you ship.** An *"AI red teaming agent simulates complex attacks using Microsoft's PyRIT framework to identify safety and security vulnerabilities before deployment"* ([Observability in generative AI](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability)).
- **See what happened, in production.** Tracing and evaluation for hosted agents are generally available: you can *"See exactly what an agent did, why, and where it went wrong, and evaluate behavior systematically before and after you ship."* ([Azure Blog, July 9, 2026](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/)) Tracing is *"Built on OpenTelemetry standards."* ([Observability in generative AI](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability))

### Quotes a presenter can use
> "AI only creates value when it shows up in real systems—systems that are reliable, observable, and aligned to business outcomes."
> — Source: [Frontier models and production agents (Azure Blog, July 9, 2026)](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/)

> "Evals and traces: Observability and traces make agent behavior measurable. If you can't measure it, you can't improve it."
> — Source: [AI alone won't change your business (Official Microsoft Blog, June 2, 2026)](https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/)

> "This is where your agent stops being a project and starts becoming a production system."
> — Source: [AI alone won't change your business (Official Microsoft Blog, June 2, 2026)](https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/)

### Why trust is the unlock (business framing)
> "In essence, trust is a permission slip that enables organizations to expand from isolated process automation projects into higher-impact work at scale."
> — Source: [The economics of enterprise AI: Forrester TEI (Azure Blog)](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/)

### Presenter one‑liners (drop‑in)
- "Ship with confidence: evaluate quality and safety before *and* after go‑live."
- "Trace every step — see what the agent did, why, and where it went wrong."
- "Red‑team your agent for safety before customers ever see it."

---

## 7. Value Theme → Capability Slide: Enterprise Readiness, Governance & Security (Trust & Enterprise Readiness)

**Capability slide:** **Trust & Enterprise Readiness** (governance, identity, security, compliance)
**One‑line value:** *Trust, compliance, and control at scale — every agent has an identity, and IT can see and govern the entire fleet.*

### The problem it solves
As agents multiply, IT loses sight of what's running, what it can access, and whether it's compliant — the "shadow agent" risk.

### The value (plain language)
- **Govern the whole fleet from one place.** The **Foundry Control Plane** provides a *"Unified view to observe, control and govern 100% of an organization's agents across Microsoft Foundry, Microsoft Entra, Copilot Studio and external platforms."* It *"will bring observability, behavioral guardrails and lifecycle management into one environment where teams can monitor agent health, performance and cost, plus apply policies and take action in real time"* ([Microsoft Ignite 2025 Book of News](https://news.microsoft.com/ignite-2025-book-of-news/)).
- **Every agent gets a verifiable identity.** *"Entra Agent ID assigns each agent a verifiable identity to establish ownership, lineage and access control across environments"* ([Microsoft Ignite 2025 Book of News](https://news.microsoft.com/ignite-2025-book-of-news/)).
- **Built on trusted security foundations.** The Control Plane is *"Built on Microsoft Entra Agent ID for verified identity, with Microsoft Defender securing runtime activity and Microsoft Purview protecting data flow"* ([Microsoft Ignite 2025 Book of News](https://news.microsoft.com/ignite-2025-book-of-news/)).
- **Inherit the trust model you already have.** *"Identity, security, and compliance are built in from the start, so the agents that your teams rely on day to day inherit the same trust model as the rest of your environment."* ([Official Microsoft Blog, June 2, 2026](https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/))
- **Run where compliance requires.** *"Foundry offers Global, Data Zone, and Regional deployments, so you can align AI to your sovereignty, compliance, and performance requirements, running frontier models while keeping data processing in-region."* ([Azure Blog, July 9, 2026](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/))

### Quotes a presenter can use
> "Governance is easy to claim and much harder to deliver. Making it real means starting with a single stack that spans development through production, built on the identity, access, compliance, and security foundations enterprises already trust."
> — Source: [AI alone won't change your business (Official Microsoft Blog, June 2, 2026)](https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/)

> "One place. Full visibility. Real control over what your agents do and don't do."
> — Source: [AI alone won't change your business (Official Microsoft Blog, June 2, 2026)](https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/)

### Supporting data point (why customers choose Foundry)
> "It's no surprise that 67% of surveyed organizations cited concerns with AI security, privacy, or governance as a top reason for adopting Microsoft Foundry, ranking it higher than model access, capabilities, and cost inefficiencies."
> — Source: [The economics of enterprise AI: Forrester TEI (Azure Blog)](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/)

### Presenter one‑liners (drop‑in)
- "No more shadow agents: every agent has an identity and shows up in one catalog."
- "Governance built on Entra, Purview, and Defender — the controls you already trust."
- "Run frontier models while keeping data in‑region for sovereignty and compliance."

---

## 8. Value Theme → Capability Slide: Unified Platform (Cross‑Cutting)

**Capability slide:** **Unified Platform** (use on the opening/closing slide; also reinforce on every capability slide)
**One‑line value:** *One place to build, ground, run, and govern AI — fewer disconnected tools, less risk, faster scale.*

### The problem it solves
Point solutions accumulate, each adding its own governance, integration, and context plumbing. The hidden cost is the "stitching" between them, and pilots that never scale.

### The value (plain language)
- **One coherent system.** Foundry brings *"the full agent lifecycle"* together *"with open development, built-in intelligence, and consistent security, compliance, and policy controls across every agent"* ([Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)).
- **Less context‑switching, less overhead.** *"Our deep integrations help you streamline AI development and governance with less context-switching and operational overhead."* ([Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/))
- **Consolidation pays off.** In the Forrester TEI study, *"organizations that focused energy consolidating on a unified platform outperformed those which did not. Their execution is simpler and therefore stronger."* And *"32% of surveyed organizations that adopted Foundry were able to decrease costs by decommissioning legacy AI tools"* (i.e., retiring duplicative/legacy AI tooling) ([Forrester TEI blog](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/)).

### Quotes a presenter can use
> "The Forrester TEI study makes one thing unmistakable: enterprise AI ROI compounds when AI is treated as a platform, not a series of one-off projects."
> — Source: [The economics of enterprise AI: Forrester TEI (Azure Blog)](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/)

> "Every leading enterprise will converge on this model: a central AI platform that orchestrates work across the business, bringing together data, models, agents, and human judgment into a continuously improving and secure system."
> — Source: [AI alone won't change your business (Official Microsoft Blog, June 2, 2026)](https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/)

### Presenter one‑liners (drop‑in)
- "One platform for the whole journey: models, agents, knowledge, trust, and distribution."
- "Stop stitching tools together — build once, reuse everywhere."
- "Treat AI as a platform, not a pile of pilots."

---

## 9. Customer Stories & Outcome Metrics

> These are official Microsoft customer stories and named references. Numbers are quoted verbatim from the source. Use them as proof points on the relevant capability slide.

### Commerzbank AG — financial services (Germany) → *Agents & Tools; Trust; Foundry IQ*
**Headline metrics (verbatim):** *"Ava manages 30,000-plus customer conversations every month, resolving 75% of requests autonomously and delivering round-the-clock support."* Also: development was *"twice as fast, compared to previous approaches."*
- Built "Ava," a customer‑facing banking agent, on **Foundry Agent Service**, using **Azure OpenAI in Foundry Models**, **Azure AI Content Safety**, grounding via **Azure AI Search**, and **Azure Speech in Foundry Tools**.
- Story date on page: 11/18/2025.

> "Foundry Agent Service gives us the building blocks for the future and has changed how we think about service. Ava offers expert knowledge 24/7 without waiting time and empowers our teams, because they can now focus on what they do best: building customer relationships, solving complex problems, and driving innovation."
> — Gerald Ertl, Managing Director, Head of Strategic AI Program, Commerzbank AG. Source: [Commerzbank AG customer story](https://www.microsoft.com/en/customers/story/25676-commerzbank-ag-azure-ai-foundry-agent-service)

> "Security and trust are foundational. Ava doesn't just talk to customers—she acts on their behalf. That means she must be as secure and compliant as any human employee."
> — Denise Reffelmann, Business Product Owner, Commerzbank AG. Source: [Commerzbank AG customer story](https://www.microsoft.com/en/customers/story/25676-commerzbank-ag-azure-ai-foundry-agent-service)

### Levi Strauss & Co. — retail → *Agents & Tools; Unified Platform*
**Outcome (qualitative):** *"By orchestrating agents through a unified Super Agent experience, Levi Strauss & Co. reduces complexity, accelerates decision-making, and enables real-time access to insights across the business."*
- Uses **Microsoft Foundry** as the orchestration layer plus **GitHub Copilot**, **Microsoft Agent Framework**, **Azure Functions**, and **Microsoft Teams** to build purpose‑driven agents and a unified "Super Agent."
- Story date on page: 6/4/2026.

> "As a best-in-class direct-to-consumer retailer, the biggest thing that's changed for us is the speed at which we need to operate. This isn't just about a tool—it's a wholesale workplace transformation."
> — Jason Gowans, Chief Digital and Technology Officer, Levi Strauss & Co. Source: [Levi Strauss & Co. customer story](https://www.microsoft.com/en/customers/story/26647-levi-strauss-and-co-microsoft-foundry)

### Telefónica — telecommunications → *Agents & Tools; Unified Platform; Enterprise Readiness*
> "Telefónica has adopted Microsoft Foundry as the core of their corporate agentic platform, with the first wave of agents tackling network operations—a telco's most complex, strategic domain—across Microsoft Agent Framework, hosted agents, AI Gateway, and Azure Logic Apps."
> — Source: [Frontier models and production agents (Azure Blog, July 9, 2026)](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/)

### Viva Republica (Toss) — financial platform (Asia) → *Enterprise Readiness / sovereignty*
> "Microsoft Foundry's APAC Data Zone allows us to keep data processing regionally anchored while accessing advanced AI models at scale. This gives us the confidence to accelerate AI innovation responsibly and reinforces our ambition to be a leading AI-powered financial platform in Asia."
> — Hongsoo Kim, Chief Data and AI Officer (CDAO), Viva Republica (Toss). Source: [Frontier models and production agents (Azure Blog, July 9, 2026)](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/)

### Named production references (no public metrics found in‑scope)
Microsoft states that *"companies like Adobe, Telefónica, and Tata Consultancy Services are running agents in production today"* on Foundry ([Azure Blog, July 9, 2026](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/)). Use these as logo/credibility references; specific outcome numbers for Adobe and TCS were not found in the sources consulted.

---

## 10. Quotable Value Statements from Microsoft Leadership

> Ready‑to‑present quotes attributed to Microsoft leaders and official posts. All verbatim; each links to its source.

**Jay Parikh — Executive Vice President, CoreAI, Microsoft** ([Official Microsoft Blog, June 2, 2026](https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/)):

> "The winners won't be those with the most demos, but those that turn AI into a governed, continuously improving system for running real work."

> "The real opportunity is teams of agents executing long running work across functions like software delivery, support, finance, HR, and operations — with the identity, context, policy, and human oversight required to trust them in production."

> "We are building a comprehensive agent platform: one that supports many models, is open, and gives you choice and flexibility at every layer of the stack. And we are purposefully designing it with developers at the center."

> "To succeed in this new era, an agent platform must meet a higher bar. It must run real production workloads, map real organizational complexity, and manage real business responsibility."

**Tina Schuchman — Corporate Vice President, Microsoft Foundry** ([Azure Blog, July 9, 2026](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/)):

> "AI only creates value when it shows up in real systems—systems that are reliable, observable, and aligned to business outcomes."

> "…these capabilities bring frontier models, production agent runtime, enterprise-grade identity, security, and compliance controls, and distribution across Microsoft 365 into a single platform—helping organizations move from experimentation to production without assembling disconnected tools and services."

**Don Scott — General Manager, Microsoft Foundry** ([Azure Blog, Forrester TEI, March 6, 2026](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/)):

> "When AI development becomes repeatable, value accelerates and confidence follows."

> "…trust is a permission slip that enables organizations to expand from isolated process automation projects into higher-impact work at scale."

---

## 11. Adoption & Scale Metrics (Consolidated)

> Only metrics traceable to an official Microsoft source are listed. Financial/ROI/dollar figures were intentionally excluded per the no‑pricing scope (see Limitations).

| Metric (verbatim where possible) | What it supports | Source |
|----------------------------------|------------------|--------|
| **"More than 100,000 organizations are already building on Microsoft Foundry"** (July 2026) | Overall adoption / momentum | [Azure Blog, July 9, 2026](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/) |
| Model catalog: **"over 1,900 models"** across providers (Microsoft, OpenAI, DeepSeek, Hugging Face, Meta, Anthropic, and more) | Model choice | [Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview) |
| Model router: **"up to 40% faster responses … without code changes or loss in quality"** (early customer deployments) | Model choice / productivity | [Ignite 2025 Book of News](https://news.microsoft.com/ignite-2025-book-of-news/) |
| Forrester TEI (survey of 154 AI decision‑makers): **technical‑team productivity up to 35%** | Developer productivity | [Forrester TEI blog](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/) |
| Forrester TEI: customer estimate of **"reduce overall development time by 30%–40%"** | Time‑to‑market | [Forrester TEI blog](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/) |
| Forrester TEI: **75%** of teams found easier model grounding / knowledge integration with Foundry IQ | Grounded answers | [Forrester TEI blog](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/) |
| Forrester TEI: **67%** cited security/privacy/governance concerns as a top reason for adopting Foundry | Governance / trust | [Forrester TEI blog](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/) |
| Forrester TEI: **32%** decommissioned legacy AI tools after adopting Foundry | Unified platform / consolidation | [Forrester TEI blog](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/) |
| Commerzbank "Ava": **30,000+ conversations/month, ~75% resolved autonomously, 24/7**; development **twice as fast** | Customer outcome (agents) | [Commerzbank story](https://www.microsoft.com/en/customers/story/25676-commerzbank-ag-azure-ai-foundry-agent-service) |
| Market context (Microsoft‑commissioned IDC study, 4,000+ leaders): **68% using AI today**; Frontier firms report **returns 3× higher than slow adopters**; **agentic AI use projected to triple** in two years | "Why act now" business case | [Ignite 2025 Book of News](https://news.microsoft.com/ignite-2025-book-of-news/) |

**Attribution caution (important for a customer‑facing deck):** The widely circulated figure "over 90% of the Fortune 500" appears in official Microsoft sources tied to **Copilot Studio** agent‑building (e.g., *"more than 230,000 organizations — including 90% of the Fortune 500 — have already used Copilot Studio to build AI agents and automations,"* [Microsoft Build 2025 blog](https://blogs.microsoft.com/blog/2025/05/19/microsoft-build-2025-the-age-of-ai-agents-and-building-the-open-agentic-web/)), **not** specifically to Microsoft Foundry. Do not present "90% of the Fortune 500" as a Foundry‑specific stat. Use the Foundry‑specific **"more than 100,000 organizations building on Microsoft Foundry"** instead.

---

## 12. Research Limitations

- **Pricing/cost figures deliberately excluded (by request).** The Microsoft‑commissioned **Forrester Total Economic Impact™ (TEI) study** blog contains headline financial figures (a three‑year ROI percentage and multiple dollar‑value benefit and cost‑avoidance totals). These were intentionally **omitted** from this report to comply with the no‑pricing/no‑cost scope of the deck. If leadership later wants the financial case, those figures and the full methodology are in the cited study and blog. Similarly, the model router's officially stated cost‑reduction percentage and the Forrester "payback period" were omitted; only non‑price operational outcomes (e.g., "up to 40% faster responses," "up to 35% productivity") are included.
- **Commissioned studies — conflict disclosure.** The **Forrester TEI study** was *"commissioned by Microsoft and conducted by Forrester Consulting"* (composite‑organization modeling; survey of 154 decision‑makers plus 10 interviews). The **IDC study** of 4,000+ leaders was also *"commissioned"* by Microsoft. Treat their figures as vendor‑commissioned research, not independent third‑party findings. The IDC "68% using AI / 3× returns" data describes the AI market broadly, **not** Foundry customers specifically.
- **Model‑count discrepancy.** The current Foundry Models documentation states *"over 1,900 models"* ([Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview)), while some Microsoft portal/marketing surfaces and earlier posts have cited larger catalog counts (e.g., "11,000+" on a portal page and a June 2025 Microsoft Cloud blog). This report uses the conservative, most‑recently‑verified documentation figure (1,900+) and emphasizes the *range and provider breadth* rather than an exact count. Recommend the content team confirm the latest official number close to the presentation date.
- **Some Foundry capabilities are in preview.** Several governance features (e.g., Foundry Control Plane agent controls, Entra Agent ID assignment, some Foundry IQ features) are described as **preview** in the Ignite 2025 Book of News and Foundry IQ docs, while tracing/evaluation and publishing to Microsoft 365 Copilot/Teams reached **GA** by mid‑2026. Confirm GA/preview status per feature at presentation time, as it changes month to month (Microsoft publishes a monthly "What's New in Microsoft Foundry" digest).
- **Named references without public metrics.** Adobe and Tata Consultancy Services are cited by Microsoft as running agents in production on Foundry, but no public outcome metrics for them were found in the sources consulted; only Commerzbank and Levi Strauss have detailed, quotable customer stories (with Telefónica and Viva Republica/Toss providing shorter, quotable references).
- **Sourcing choices.** This report relies almost exclusively on **official Microsoft sources** (azure.microsoft.com/blog, blogs.microsoft.com, news.microsoft.com, learn.microsoft.com, devblogs.microsoft.com/foundry, and Microsoft customer‑story pages), per the sourcing rules. Secondary/community sources surfaced during discovery (Medium, LinkedIn, forums, analyst recaps) were **not** used for any headline claim.
- **Legacy/"classic" architecture intentionally out of scope.** Per instructions, no comparison to any prior "hub‑based" or "classic" experience is included, even though some official docs discuss migration from earlier products.

---

## 13. Complete Reference List

### Official Microsoft — Blogs & Newsroom
- [Frontier models and production agents: Advancing Microsoft Foundry for the agentic era](https://azure.microsoft.com/en-us/blog/frontier-models-and-production-agents-advancing-microsoft-foundry-for-the-agentic-era/) — Azure Blog, July 9, 2026 (Tina Schuchman, CVP Microsoft Foundry). Most current adoption figure ("100,000+ organizations"), Build/Generate/Govern pillars, Telefónica & Toss references, GPT‑5.6 GA.
- [The economics of enterprise AI: What the Forrester TEI study reveals about Microsoft Foundry](https://azure.microsoft.com/en-us/blog/the-economics-of-enterprise-ai-what-the-forrester-tei-study-reveals-about-microsoft-foundry/) — Azure Blog, March 6, 2026 (Don Scott, GM Microsoft Foundry). Operational outcome percentages; trust‑as‑permission‑slip framing.
- [AI alone won't change your business. The system running it will.](https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/) — The Official Microsoft Blog, June 2, 2026 (Jay Parikh, EVP CoreAI). Strategy/leadership quotes across all value themes.
- [Actioning agentic AI: 5 ways to build with news from Microsoft Ignite 2025](https://azure.microsoft.com/en-us/blog/actioning-agentic-ai-5-ways-to-build-with-news-from-microsoft-ignite-2025/) — Azure Blog, Dec 10, 2025 (Natalie Wossene). Claude in Foundry / model choice; Foundry IQ framing.
- [Microsoft Ignite 2025 Book of News](https://news.microsoft.com/ignite-2025-book-of-news/) — Newsroom. Official Foundry section: MCP tools, model router (GA), Agent Service, Foundry IQ, Foundry Control Plane; the Microsoft‑commissioned IDC study.
- [Microsoft Build 2025: The age of AI agents and building the open agentic web](https://blogs.microsoft.com/blog/2025/05/19/microsoft-build-2025-the-age-of-ai-agents-and-building-the-open-agentic-web/) — The Official Microsoft Blog. Source of the "230,000 organizations / 90% of Fortune 500 used **Copilot Studio**" figure (used here only to caution against mis‑attributing it to Foundry).

### Official Microsoft — Product & Documentation
- [Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/) — Unified‑platform definition; "Open by design, intelligent by default, and trusted by architecture."
- [What is Microsoft Foundry? (Microsoft Learn)](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-azure-ai-foundry) — Platform definition and enterprise‑readiness scope.
- [Microsoft Foundry Models overview (Microsoft Learn)](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview) — Catalog scope ("over 1,900 models"), providers, model categories.
- [What is Foundry IQ? (Microsoft Learn)](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq) — Grounding, citations, permission‑aware retrieval, Entra/Purview.
- [Observability in generative AI (Microsoft Learn)](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability) — Evaluation, monitoring, tracing; built‑in evaluators; AI red teaming (PyRIT).

### Official Microsoft — Foundry Dev Blog
- [What's New in Microsoft Foundry | June 2026 (devblogs.microsoft.com/foundry)](https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-june-2026/) — Nick Brady. Claude GA; publishing agents to Microsoft 365 Copilot & Teams (GA).

### Official Microsoft — Customer Stories
- [Commerzbank AG fuels 30,000 monthly conversations with Foundry Agent Service](https://www.microsoft.com/en/customers/story/25676-commerzbank-ag-azure-ai-foundry-agent-service) — Financial services; "Ava" agent; 30K+ conversations/month, ~75% autonomous, 2× faster development.
- [Levi Strauss & Co. simplifies work and accelerates decision-making with Microsoft Foundry](https://www.microsoft.com/en/customers/story/26647-levi-strauss-and-co-microsoft-foundry) — Retail; unified "Super Agent" orchestration.

### Notes on sources NOT used for headline claims
Community/secondary items surfaced during discovery — e.g., Medium explainers, LinkedIn posts (including one attributing "80,000 customers / 90% of Fortune 500" to Foundry), analyst/press recaps, and forum threads — were reviewed for orientation only and are **not** cited as authority. The "90% of Fortune 500" figure is corroborated only for **Copilot Studio** in official sources, not Foundry.
