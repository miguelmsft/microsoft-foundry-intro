# Research Report: Microsoft Foundry — Platform Overview, Model Catalog & Model Deployment

**Date:** 2026-07-13
**Researcher:** Copilot MS Docs Researcher Agent
**Topic slug:** foundry-overview-model-catalog
**Sources consulted:** 17 Microsoft Learn pages, 1 official Azure product page (azure.microsoft.com), 3 GitHub repositories

> **Scope note for the deck:** This report covers Topic 1 of 5 — *What Microsoft Foundry is* plus the *Model Catalog* and *Model Deployment*. It is written for an introductory, plain-language, 30-minute walkthrough for a mixed audience of technical and business decision-makers. Every capability includes a **💼 Business value** callout in Microsoft's own framing. Per the brief, **no pricing/cost information** is included, and the report focuses exclusively on Microsoft Foundry's **current** capabilities.

---

## Executive Summary

**Microsoft Foundry is a single, unified platform for building, deploying, and managing AI applications and agents.** Instead of stitching together separate tools for picking a model, hosting it, wiring up an agent, and monitoring it in production, a team does all of that in one place. Microsoft describes it as *"a unified Azure platform-as-a-service offering for enterprise AI operations, model builders, and application development"* that *"unifies agents, models, and tools under a single management grouping"* ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry)). For a newcomer, the mental model is simple: you create a **project**, you pick **models** from a large catalog, and you use those models directly or wrap them in **agents** that can use **tools** to get work done.

The headline capability for this part of the deck is the **model catalog**. Foundry gives one point of access to a very large, constantly growing selection of models — Microsoft's own models, OpenAI's frontier models, and models from partners like Anthropic, Meta, Mistral, xAI, DeepSeek, Cohere, NVIDIA, and the Hugging Face community, plus industry-specific models. The core documentation cites *"over 1,900 models"* in the curated Foundry Models catalog, and the Azure product page cites *"over 11,000"* models across the full catalog ([Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview); [Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)). You can browse, filter, benchmark, compare (side-by-side in a playground), and select the right model for each job.

The business payoff — and the theme to carry across the whole deck — is **freedom of model choice**. Because every model is reached through one project, one API, and one endpoint, you can *"switch between models and use them in your application without changing any code"* ([Endpoints for Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/endpoints)). You pick the best model for each task, you avoid being locked into a single provider, and you stay future-proof: new models are made available continuously (and are usable by name the moment they ship), so you can adopt the latest advances without re-architecting your app ([Instant access to models](https://learn.microsoft.com/en-us/azure/foundry/concepts/instant-models)). Microsoft summarizes the platform philosophy as *"Open by design, intelligent by default, and trusted by architecture"* ([Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)).

---

## Table of Contents

1. [Overview — What Microsoft Foundry Is](#1-overview--what-microsoft-foundry-is)
2. [Key Concepts — The Building Blocks & the "One Place to Build" Idea](#2-key-concepts--the-building-blocks--the-one-place-to-build-idea)
3. [Getting Started (Portal, CLI, and a Minimal Code Snippet)](#3-getting-started-portal-cli-and-a-minimal-code-snippet)
4. [Capability Deep-Dive: The Model Catalog](#4-capability-deep-dive-the-model-catalog)
5. [Capability Deep-Dive: Model Deployment & Serving](#5-capability-deep-dive-model-deployment--serving)
6. [Headline Business Value: Freedom of Model Choice](#6-headline-business-value-freedom-of-model-choice)
7. [Best Practices — Choosing & Comparing Models](#7-best-practices--choosing--comparing-models)
8. [Advanced & Related Capabilities (Rounding Out "What Foundry Is")](#8-advanced--related-capabilities-rounding-out-what-foundry-is)
9. [Availability, Preview Status & Limits (No Pricing)](#9-availability-preview-status--limits-no-pricing)
10. [Research Limitations](#10-research-limitations)
11. [Complete Reference List](#11-complete-reference-list)

---

## 1. Overview — What Microsoft Foundry Is

### What It Is

Microsoft Foundry is Microsoft's unified platform for building, deploying, and managing AI apps and agents. It brings the whole workflow — choose a model, deploy it, build an agent, add tools and knowledge, then monitor and govern it — into one product and one management surface.

> "**Microsoft Foundry** is a unified Azure platform-as-a-service offering for enterprise AI operations, model builders, and application development. This foundation combines production-grade infrastructure with friendly interfaces, enabling developers to focus on building applications rather than managing infrastructure."
> — Source: [What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry)

> "Microsoft Foundry unifies agents, models, and tools under a single management grouping with built-in enterprise-readiness capabilities including tracing, monitoring, evaluations, and customizable enterprise setup configurations."
> — Source: [What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry)

The official Azure product page frames the same idea for a business audience:

> "Microsoft Foundry is a unified platform to build, ground, and govern AI apps and agents that understand your business context. It brings together the full agent lifecycle with open development, built-in intelligence, and consistent security, compliance, and policy controls across every agent."
> — Source: [Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)

### Why It Matters

The problem Foundry solves is fragmentation. Building an AI app usually means juggling several disconnected pieces — where you find a model, where you host it, how you connect it to your data, how you turn it into an agent, and how you watch it in production. Foundry consolidates those steps so teams move from idea to production faster and with less operational overhead.

> "Microsoft Foundry is a unified platform for developers to build, customize, and manage generative AI applications. It simplifies workflows across model deployment, agent orchestration, and observability—empowering you to go from prototype to production with confidence."
> — Source: [Training for Microsoft Foundry](https://learn.microsoft.com/en-us/training/azure/ai-foundry)

> "Microsoft Foundry brings together models, tools, and orchestration capabilities to help developers build intelligent agents and applications faster. Whether you're prototyping or scaling production workloads, Microsoft Foundry is your launchpad."
> — Source: [Training for Microsoft Foundry](https://learn.microsoft.com/en-us/training/azure/ai-foundry)

Microsoft calls out three audiences the platform serves, which maps neatly to a mixed TDM/BDM room ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry)):

- **Application developers** building AI-powered products with agents, models, and tools.
- **ML engineers and data scientists** who fine-tune models, run evaluations, and manage model deployments.
- **IT administrators and platform engineers** who govern AI resources, enforce policies, and manage access across teams.

> **💼 Business value (the "one place to build" idea):** One platform for the whole AI lifecycle means less tool-sprawl, less integration work, and a faster path from prototype to production — with consistent security, compliance, and governance applied across everything you build ([Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/); [Training for Microsoft Foundry](https://learn.microsoft.com/en-us/training/azure/ai-foundry)).

### Key Features

At an introductory level, the building blocks and capabilities a newcomer should know ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry)):

- **A large model catalog** — one place to discover and use models from Microsoft, OpenAI, Anthropic, Mistral, xAI, Meta, DeepSeek, Hugging Face, and more.
- **Model deployment & serving** — make a model callable, or call supported models instantly by name.
- **Agents** — combine a model with instructions and tools so it can reason and take action.
- **Tools & knowledge** — connect agents to enterprise/web data and to 1,400+ tools and connectors.
- **Observability & governance** — built-in tracing, monitoring, evaluations, and centralized management of all AI assets.
- **One API and SDKs** — a consistent contract across model providers, with SDKs for Python, C#, JavaScript/TypeScript, and Java, plus a portal (ai.azure.com) and a VS Code extension.

---

## 2. Key Concepts — The Building Blocks & the "One Place to Build" Idea

Foundry is organized as a small set of nested building blocks. Microsoft describes the layering plainly:

> "Microsoft Foundry organizes AI workloads through a layered architecture: a top-level Foundry resource for governance, projects for development isolation, and connected Azure services for storage, search, and secrets management."
> — Source: [Microsoft Foundry architecture](https://learn.microsoft.com/en-us/azure/foundry/concepts/architecture)

### The building blocks, in plain language

- **Foundry resource** — the top-level Azure resource where an organization manages governance settings such as networking, security, and model deployments ([architecture](https://learn.microsoft.com/en-us/azure/foundry/concepts/architecture)).
- **Project** — a workspace *inside* the Foundry resource where a team actually builds. Microsoft defines it as a *"development boundary inside the Foundry resource where teams build and evaluate use cases,"* adding that *"projects let teams prototype within a preconfigured environment, reusing existing model deployments and connections without repeated IT setup"* ([architecture](https://learn.microsoft.com/en-us/azure/foundry/concepts/architecture)).
- **Models** — the AI models you select from the catalog and make available to your project (covered in depth in §4–§5).
- **Agents** — *"a model paired with instructions and tools that can reason over a request and take action"* ([Choose how to build with Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/choose-build-approach)).
- **Tools & project assets** — the connectors, knowledge sources, memory, plus files, evaluations, and traces scoped to a project ([architecture](https://learn.microsoft.com/en-us/azure/foundry/concepts/architecture)).

A simple text diagram of how the pieces fit together (synthesized from the architecture and overview pages):

```
Microsoft Foundry  ── "one place to build, deploy, and manage AI apps & agents"
│
├── Foundry resource ───────── governance: security, networking, model deployments
│     │
│     ├── Project ──────────── a team's workspace to build & evaluate
│     │     ├── Models        (from the catalog: OpenAI, Anthropic, Meta, Mistral,
│     │     │                   xAI, DeepSeek, Microsoft, Cohere, Hugging Face, …)
│     │     ├── Agents        (model + instructions + tools that take action)
│     │     ├── Tools/Knowledge(connectors, retrieval, memory, MCP)
│     │     └── Assets        (files, evaluations, traces)
│     └── Connected Azure services (Storage, Key Vault, Azure AI Search)
│
├── Access surfaces: Foundry portal (ai.azure.com) · SDKs (Python/C#/JS/Java)
│                    · VS Code extension · CLI
└── One unified API & a single endpoint ── one contract across all model providers
```
> — Source: synthesized from [Microsoft Foundry architecture](https://learn.microsoft.com/en-us/azure/foundry/concepts/architecture) and [What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry) | Provenance: synthesized

### What you can build

Foundry supports everything from a single model call to a fully coded, containerized agent:

> "Microsoft Foundry gives you several ways to build, from a single model call to a fully containerized agent."
> — Source: [Choose how to build with Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/choose-build-approach)

The two ends of that spectrum, in newcomer terms ([Choose how to build](https://learn.microsoft.com/en-us/azure/foundry/concepts/choose-build-approach)):

- **Prompt agent (declarative, least to manage):** specify instructions, choose a model, and attach tools — Foundry hosts and runs the agent for you, with no application code or containers to maintain.
- **Hosted agent (full code, most control):** bring your own code or framework, and Foundry runs it with a managed endpoint, scaling, identity, and observability.
- **Just a model call:** if you only need to send prompts to a model with no tools or orchestration, you can start with a single model call.

> **💼 Business value:** The building blocks let IT apply centralized controls at the resource level while individual teams build inside their own project boundaries — so multiple teams can share model deployments and governance *"without repeated IT setup."* Teams can also start simple (a prompt agent or a single model call) and graduate to full code as needs grow, protecting early investment ([architecture](https://learn.microsoft.com/en-us/azure/foundry/concepts/architecture); [Choose how to build](https://learn.microsoft.com/en-us/azure/foundry/concepts/choose-build-approach)).

---

## 3. Getting Started (Portal, CLI, and a Minimal Code Snippet)

> Code and CLI are **secondary** for this introductory deck (there are no demos). This section is included for completeness and to show how low-friction "getting started" is.

### Prerequisites

- An **Azure subscription** ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry)).
- Access to the **Microsoft Foundry portal** at **[ai.azure.com](https://ai.azure.com)** ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry)).
- A **Foundry project** to work in ([Get started with the Foundry SDK](https://learn.microsoft.com/en-us/azure/foundry/quickstarts/get-started-code)).
- For CLI-based deployment: the **Azure CLI (version 2.60 or later)** with the `cognitiveservices` extension, and the **Cognitive Services Contributor** role (or equivalent) on the Foundry resource ([Deploy models using Azure CLI and Bicep](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/create-model-deployments)).

### The simplest path: the portal

For most newcomers the starting point is entirely in the browser — create a project, open the model catalog, and either deploy a model or try it in a playground. No code required to explore ([Deploy Foundry Models in the portal](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/deploy-foundry-models); [Foundry Playgrounds](https://learn.microsoft.com/en-us/azure/foundry/concepts/concept-playgrounds)).

### Terminal / CLI setup (Azure)

These are the actual commands from Microsoft's "Deploy models using Azure CLI and Bicep" guide (resource-group creation added as standard Azure scaffolding). This is an Azure platform, so `az login` and resource scaffolding apply.

```bash
# 1) Install the cognitiveservices CLI extension (Azure CLI 2.60+ required)
az extension add -n cognitiveservices

# 2) Sign in and select your subscription
az login
az account set --subscription "<your-subscription-id>"

# 3) (Standard scaffolding) create a resource group to hold the Foundry resource
az group create --name "myFoundryRg" --location "eastus"

# 4) Create a Foundry resource (an AIServices Cognitive Services account)
az cognitiveservices account create \
  --name "myFoundryResource" \
  --resource-group "myFoundryRg" \
  --custom-domain "myFoundryResource" \
  --location "eastus" \
  --kind AIServices \
  --sku S0

# 5) See which models are available to deploy on this resource
az cognitiveservices account list-models \
  --name "myFoundryResource" \
  --resource-group "myFoundryRg"

# 6) Create a model deployment (example: a small Microsoft Phi model)
az cognitiveservices account deployment create \
  --name "myFoundryResource" \
  --resource-group "myFoundryRg" \
  --deployment-name Phi-4-mini-instruct \
  --model-name Phi-4-mini-instruct \
  --model-version 1 \
  --model-format Microsoft \
  --sku-capacity 1 \
  --sku-name GlobalStandard
```
> — Source: [Deploy models using Azure CLI and Bicep](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/create-model-deployments) | Provenance: adapted (commands verbatim from the page; `az group create` added as standard Azure scaffolding, placeholder names substituted)

### Minimal Python snippet (illustrative only)

Foundry has SDKs for Python, C#, JavaScript/TypeScript, and Java ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry)). The following is Microsoft's own "first API call" — useful for the deck only because it visually demonstrates the freedom-of-choice idea: **the model is just one string** (`model="gpt-5-mini"`), and swapping providers means swapping that string, not rewriting the app.

```python
# Microsoft Foundry: send a prompt and get a response from a model.
# The `model=` value is the only thing that changes to switch models.
from azure.identity import DefaultAzureCredential
from azure.ai.projects import AIProjectClient

# Format: "https://resource_name.ai.azure.com/api/projects/project_name"
PROJECT_ENDPOINT = "your_project_endpoint"

# Create project and OpenAI clients to call the Foundry API
project = AIProjectClient(
    endpoint=PROJECT_ENDPOINT,
    credential=DefaultAzureCredential(),
)
openai = project.get_openai_client()

# Run a Responses API call
response = openai.responses.create(
    model="gpt-5-mini",
    input="What is the size of France in square miles?",
)
print(f"Response output: {response.output_text}")
```
> — Source: [What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry) (also shown in [Instant access to models](https://learn.microsoft.com/en-us/azure/foundry/concepts/instant-models)) | Provenance: verbatim

Before running the Python, you authenticate with the CLI ([Get started with the Foundry SDK](https://learn.microsoft.com/en-us/azure/foundry/quickstarts/get-started-code)):

```bash
# Authenticate the local environment so DefaultAzureCredential works
az login
```
> — Source: [Get started with the Foundry SDK](https://learn.microsoft.com/en-us/azure/foundry/quickstarts/get-started-code) | Provenance: verbatim

---

## 4. Capability Deep-Dive: The Model Catalog

### What the catalog is

The model catalog is the front door to every model in Foundry — the place to discover, compare, and choose models. Microsoft's one-line description:

> "Microsoft Foundry Models is your one-stop destination for discovering, evaluating, and deploying powerful AI models—whether you're building a custom copilot, an agent, enhancing an existing application, or exploring new AI capabilities."
> — Source: [Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview)

### Breadth and variety

The catalog is large and spans every major category of model:

> "Foundry offers a comprehensive catalog of AI models. There are over 1,900 models that range from foundation models, reasoning models, small language models, multimodal models, domain-specific models, and industry models."
> — Source: [Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview)

> "Foundry gives you access to over 1,900 models from Microsoft, OpenAI, Anthropic, Mistral, xAI, Meta, DeepSeek, Hugging Face, and more."
> — Source: [What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry)

The Azure product page states an even larger total across the full catalog (see the note on model counts in §10):

> "Access over 11,000 foundational, open, reasoning, multimodal, and industry-specific models, spanning OpenAI, Anthropic, Meta, Google, xAI, Hugging Face, and frontier models including the new MAI multimodal family."
> — Source: [Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)

**Concrete, current examples to name on a slide** (all from official pages):

- **Frontier / flagship models:**
  - **GPT-5 family** — GPT-5, GPT-5 mini, GPT-5 nano (plus later GPT-5.x releases and `gpt-chat-latest`); described as *"Most capable — complex reasoning, multi-step tasks, and multimodal scenarios."* ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry); [Foundry Models sold by Azure](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure))
  - **GPT-4.1 family** — GPT-4.1, GPT-4.1 mini, GPT-4.1 nano; *"Best balance of capability and cost for production workloads"* / *"Fastest — low-latency, high-throughput scenarios."* ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry))
  - **OpenAI o-series reasoning models** — *"designed to tackle reasoning and problem-solving tasks with increased focus and capability."* ([Foundry Models sold by Azure](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure))
  - **Anthropic Claude** — the Claude family (Opus, Sonnet, Haiku versions); *"Advanced reasoning, code generation, and multimodal tasks."* ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry); [Foundry Models from partners and community](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-from-partners))
  - **xAI Grok** — *"Reasoning, coding, and data extraction."* ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry))
- **Open / open-weight models:**
  - **Meta Llama** — *"Open models — customization and fine-tuning"* (e.g., Llama 4 Scout, Llama 4 Maverick, Llama 3.1-405B). ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry); [Foundry Models from partners and community](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-from-partners))
  - **DeepSeek** — DeepSeek-R1 (*"Open-weight reasoning at scale"*) and DeepSeek-V3.x. ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry); [Model router concepts](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router))
  - **Mistral AI** — Codestral, Ministral, Mistral Small, Mistral Medium, Mixtral; *"Code generation, multilingual, and general-purpose chat."* ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry); [Foundry Models from partners and community](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-from-partners))
  - **gpt-oss** — open-weight OpenAI models (e.g., `gpt-oss-120b`). ([Foundry Models sold by Azure](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure))
  - **Hugging Face hub** — *"hundreds of models for real-time inference,"* maintained by the community. ([Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview))
- **Microsoft models:**
  - **Phi** — small language models (e.g., Phi-4) for *"on-device or resource-constrained environments"*; the product page notes Phi on Foundry has *"over 60 million downloads."* ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry); [Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/))
  - **MAI multimodal family** — Microsoft's own frontier multimodal models. ([Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/))
- **Partner & industry-specific models:** Cohere (chat + embeddings), NVIDIA inference microservices (NIMs), Databricks, NTT Data, and industry models such as **Saifr, Rockwell, Bayer, Cerence, Sight Machine, Page AI, and SDAIA** ([Deployment overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview); [Foundry Models from partners and community](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-from-partners)).
- **Multimodal — beyond text:** image generation (e.g., `gpt-image-1`, Stable Diffusion 3.5 Large, FLUX.1-Kontext-pro), video generation (Sora-2), audio/realtime models, and text embeddings ([Foundry Playgrounds](https://learn.microsoft.com/en-us/azure/foundry/concepts/concept-playgrounds); [Foundry Models sold by Azure](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure)).

### How the catalog is organized

The catalog is organized into two straightforward categories ([Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview)):

1. **Foundry Models sold by Azure** (also called *Azure Direct Models*) — *"hosted and sold by Microsoft,"* deeply integrated into Azure, with Microsoft support and enterprise-grade SLAs. These include all Azure OpenAI models and selected models from top providers. ([Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview); [Foundry Models sold by Azure](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure))
2. **Models from partners and community** — *"the vast majority of the Foundry Models,"* provided by trusted third parties, research labs, and community contributors (for example, Anthropic's Claude family and open models from the Hugging Face hub). ([Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview); [Foundry Models from partners and community](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-from-partners))

> "Understanding the distinction between these categories helps you choose the right models for your specific requirements and strategic goals."
> — Source: [Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview)

### How users browse, compare, and select models

The catalog is built for discovery and comparison ([Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview)):

- **Search & filter** — keyword search plus filters for **Collection** (provider), **Industry**, **Capabilities** (e.g., reasoning, tool calling), and **Inference tasks**.
- **Model cards** — each model has a card with **Quick facts**, a **Details** tab, a **Benchmarks** tab, a **Deployments** tab, and a **License** tab.
- **Leaderboards & benchmarks** — *"View leaderboard"* and *"Compare models"* surface standardized benchmark metrics.
- **Playground** — try a model interactively before committing (see §5 and §7).

On leaderboards specifically:

> "Model leaderboards (preview) in Foundry portal help you compare models in the Foundry model catalog using industry-standard model benchmarks."
> — Source: [Model benchmarks and leaderboards](https://learn.microsoft.com/en-us/azure/foundry/concepts/model-benchmarks)

> "The leaderboards help you compare models across multiple dimensions so you can choose the right model for your use case."
> — Source: [Model benchmarks and leaderboards](https://learn.microsoft.com/en-us/azure/foundry/concepts/model-benchmarks)

Leaderboards cover **quality** (reasoning, knowledge, Q&A, math, coding), **safety**, and **performance** (latency/throughput), plus **scenario** leaderboards that point you to the best model for a specific task such as coding or math ([Model benchmarks and leaderboards](https://learn.microsoft.com/en-us/azure/foundry/concepts/model-benchmarks)).

> **💼 Business value:** One catalog turns "which model should we use?" from a research project into a guided decision. Teams can filter by capability, read standardized benchmark comparisons, and try models hands-on — so they *"choose the right model for your use case"* quickly and with evidence, rather than committing blind ([Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview); [Model benchmarks and leaderboards](https://learn.microsoft.com/en-us/azure/foundry/concepts/model-benchmarks)).

---

## 5. Capability Deep-Dive: Model Deployment & Serving

> **No pricing.** This section describes deployment *concepts* only. Where the source pages discuss billing, those details are intentionally omitted per the brief.

### The core idea

To use a model in an app, you make it available for requests. Microsoft states it plainly:

> "To make a model available for inference requests, you deploy it. Foundry offers two deployment options depending on the model type and your infrastructure needs."
> — Source: [Deployment overview for Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview)

Importantly, **Foundry picks the right path for you**:

> "The Foundry portal automatically selects the appropriate deployment option based on the model you choose."
> — Source: [Deployment overview for Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview)

### Option 0 — Instant access: often no deployment at all (preview)

The lowest-friction path is to skip deployment entirely and call a model by name:

> "Instant access to models lets you call any supported model by name — no deployment required. Create a Foundry project, start coding, and use any available model immediately."
> — Source: [Instant access to models in Microsoft Foundry (preview)](https://learn.microsoft.com/en-us/azure/foundry/concepts/instant-models)

> "With instant access, the workflow is simple — use a supported instant model name in your code. No deployment needed. The same API, SDK, and client you already use for deployments works with instant access models. No second SDK, no separate client, no configuration changes."
> — Source: [Instant access to models in Microsoft Foundry (preview)](https://learn.microsoft.com/en-us/azure/foundry/concepts/instant-models)

### Option 1 — Standard deployment (the main, most capable path)

For production apps, **standard deployment** is the preferred option. It serves models as fully managed APIs — there is no infrastructure for you to run.

> "**Standard deployment in Foundry resources** — For Foundry Models, including Foundry Models sold by Azure … and select Models from partners and community. This option is the preferred and most capable deployment path."
> — Source: [Deployment overview for Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview)

Standard deployment supports a range of **deployment types** that primarily control **where your data is processed** (regional, data-zone US/EU, or global) to meet compliance needs, plus options like provisioned capacity and batch ([Deployment overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview)):

> "**Multiple deployment types** — Global Standard, Data Zone Standard, Regional Standard, Provisioned, Batch, and more. Each type controls where data is processed…"
> — Source: [Deployment overview for Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview) *(quote trimmed to the data-processing concept per brief)*

It also supports **built-in and customizable content filtering**, **keyless authentication** (Microsoft Entra ID), **private networking**, and **provisioned throughput** for predictable, low-latency performance ([Deployment overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview)).

### Option 2 — Managed compute (preview) for open-source & custom models

For open-source and custom-weight models, Foundry offers a managed GPU platform so you still don't have to run servers yourself:

> "Managed compute in Foundry (preview) is a managed GPU platform-as-a-service (PaaS) that hosts open-source and custom-weight models on dedicated GPU capacity. You access managed compute deployments through the same Foundry project endpoint as other deployment types, with no virtual machines, clusters, or serving runtimes to own. Foundry sizes the deployment, provisions the accelerators, and keeps the runtime patched."
> — Source: [Deployment overview for Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview)

Managed compute adds capabilities like **auto-scaling and scale-to-zero**, Microsoft-managed serving runtimes, and model-instance sizing (Foundry chooses the GPUs for you). It targets collections such as Hugging Face models, some Meta and Mistral models, NVIDIA NIMs, industry models, and Databricks ([Deployment overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview)).

> The same page notes the catalog's open-source breadth: *"Microsoft Foundry's catalog includes 10,000+ open-source and partner models, with approximately 50 new models published each month."*
> — Source: [Deployment overview for Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview)

### Serving through one endpoint — the key to switching/comparing

However a model is deployed, it is reached through one project endpoint and one set of credentials — which is exactly what makes switching and comparing models painless:

> "Microsoft Foundry Models enables you to access the most powerful models from leading model providers through a single endpoint and set of credentials. This capability lets you switch between models and use them in your application without changing any code."
> — Source: [Endpoints for Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/endpoints)

In the **portal playground**, comparison is visual and hands-on: you can *"Compare up to three models"* side-by-side, and use the **Model dropdown** to switch among deployed and instant-access models ([Foundry Playgrounds](https://learn.microsoft.com/en-us/azure/foundry/concepts/concept-playgrounds); [Instant access to models](https://learn.microsoft.com/en-us/azure/foundry/concepts/instant-models)).

### Model router — let Foundry pick the best model per request

Foundry can even choose the model for each prompt automatically:

> "Model router is a trained language model that intelligently routes your prompts in real time to the most suitable large language model (LLM). You deploy model router like any other Foundry model."
> — Source: [Model router for Microsoft Foundry concepts](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router)

> "Model router provides a single deployment and chat experience that combines the best features from all of the underlying chat models."
> — Source: [Model router for Microsoft Foundry concepts](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router)

Model router offers configurable **routing modes** (Balanced by default, plus Quality and Cost modes) and lets you define a **model subset** to route across; its latest version is *"updated in place as new models become available"* — so newly released models can join the routing pool without you changing anything ([Model router concepts](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router)).

> **💼 Business value:** Foundry removes deployment friction as a barrier to trying and shipping models. You can call a model instantly with no setup, promote to a fully managed standard deployment for production (no servers to run), and reach every model through one endpoint — so **comparing or swapping models is a config change, not a rewrite**. Model router can even pick the most suitable model per request automatically ([Instant access](https://learn.microsoft.com/en-us/azure/foundry/concepts/instant-models); [Endpoints](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/endpoints); [Model router](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router)).

---

## 6. Headline Business Value: Freedom of Model Choice

This is the message to carry across the deck. Foundry's design — one catalog, one API, one endpoint, continuous model additions — turns "freedom of model choice" from a slogan into a concrete developer experience.

### Pick the best model for each job

Different tasks want different models, and Foundry makes matching them the normal workflow. Microsoft's own guidance illustrates this trade-off between a deep-reasoning model and a fast, high-throughput model:

> "Microsoft Foundry offers multiple variants of generative AI models to meet diverse customer needs. Two of the most widely used models – **GPT-5** and **GPT-4.1** – serve different purposes depending on your workload, latency sensitivity, and reasoning requirements."
> — Source: [GPT-5 vs GPT-4.1 model choice guide](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/model-choice-guide)

> "Foundry Models gives you the flexibility and control to build AI solutions that scale—securely, responsibly, and fast."
> — Source: [Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview)

> "Choose your path—bring your own model, use a hosted one, or integrate seamlessly with Azure services."
> — Source: [Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview)

### Avoid lock-in — switch models without rewriting

Because all models sit behind one contract, moving between providers is low-risk:

> "This capability lets you switch between models and use them in your application without changing any code."
> — Source: [Endpoints for Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/endpoints)

> "**Switch models by changing one string** — use any instant model name in the `model=` line, without creating or deleting deployments."
> — Source: [Instant access to models in Microsoft Foundry (preview)](https://learn.microsoft.com/en-us/azure/foundry/concepts/instant-models)

> "Intelligent model routing dynamically selects the best model for each task, enabling real-time optimization without application rewrites."
> — Source: [Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)

### Openness as a design principle

> "Open by design, intelligent by default, and trusted by architecture."
> — Source: [Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)

> "Foundry supports integration with open protocols and frameworks, third-party knowledge sources, custom tools, and models."
> — Source: [Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)

### Future-proofing — adopt new models as they arrive

The AI landscape changes weekly; Foundry is built to keep pace so your app doesn't fall behind:

> "New models support instant access by default when they're released."
> — Source: [Instant access to models in Microsoft Foundry (preview)](https://learn.microsoft.com/en-us/azure/foundry/concepts/instant-models)

Combined with the catalog adding *"approximately 50 new models … each month"* and model router being *"updated in place as new models become available,"* teams can move to newer, better models continuously rather than through disruptive migrations ([Deployment overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview); [Model router concepts](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router)).

Microsoft also frames deployment as a capability you *grow into*, not a gate:

> "Deployments aren't going away. They remain the right choice when you need reserved throughput, custom content filters, data residency, or advanced enterprise configurations. Instant access simplify the getting-started experience so that deployments become something you level up to, not a gate you must pass before you can use a model."
> — Source: [Instant access to models in Microsoft Foundry (preview)](https://learn.microsoft.com/en-us/azure/foundry/concepts/instant-models)

> **💼 Business value (headline):** *Freedom of model choice* means you are never locked to one provider or one model. You choose the best model for each job, benchmark and swap models as a configuration change, and automatically inherit new models as they ship — protecting today's investment while staying future-proof ([Endpoints](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/endpoints); [Instant access](https://learn.microsoft.com/en-us/azure/foundry/concepts/instant-models); [Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)).

---

## 7. Best Practices — Choosing & Comparing Models

Official guidance for selecting and validating models:

- **Match the model to the workload.** Use deep-reasoning models (e.g., GPT-5) for multi-step planning, analysis, and agentic tool use; use fast, high-throughput models (e.g., GPT-4.1) for real-time chat, customer support, and lightweight summarization ([GPT-5 vs GPT-4.1 model choice guide](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/model-choice-guide)).
- **Start in a playground before you commit code.** *"Use playgrounds to experiment with models and validate ideas before you commit a single line of production code."* The Model playground lets you compare up to three models at once ([Foundry Playgrounds](https://learn.microsoft.com/en-us/azure/foundry/concepts/concept-playgrounds)).
- **Use leaderboards for a first pass, then evaluate on your own data.** Leaderboards give standardized comparisons; for a decision that reflects your actual use case, evaluate models on your own data ([Model benchmarks and leaderboards](https://learn.microsoft.com/en-us/azure/foundry/concepts/model-benchmarks)).
- **Choose the category that fits your needs.** *Models sold by Azure* suit scenarios that need deep Azure integration, Microsoft support, and enterprise SLAs; *models from partners and community* shine for specialized, innovation-led use cases ([Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview)).
- **Let Foundry choose the deployment path.** The portal automatically selects standard deployment vs. managed compute based on the model, and standard deployment is the recommended default *"whenever possible"* ([Deployment overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview)).

**Common pitfalls / anti-patterns to avoid:**

- **Defaulting to the biggest model for everything.** A high-quality but higher-latency reasoning model *"might not suit real-time applications"* — check latency/throughput, not just quality ([Model benchmarks and leaderboards](https://learn.microsoft.com/en-us/azure/foundry/concepts/model-benchmarks)).
- **Treating leaderboard rank as the final answer.** Public benchmarks are a starting point; validate on your own scenario and data ([Model benchmarks and leaderboards](https://learn.microsoft.com/en-us/azure/foundry/concepts/model-benchmarks)).
- **Skipping model-provider terms.** Customers remain responsible for reviewing model cards/descriptions and selecting an appropriate model for their use case ([Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview)).

---

## 8. Advanced & Related Capabilities (Rounding Out "What Foundry Is")

These are beyond the core model-catalog/deployment focus but useful for the opener so the audience sees the full picture ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry)):

- **Build agents** — multi-agent orchestration (SDKs for C# and Python), a **tool catalog** with *"over 1,400 tools,"* **memory** to retain context across interactions, and **Foundry IQ** to ground answers in enterprise or web content with citations.
- **Publishing** — publish agents to Microsoft 365, Teams, BizChat, or as containerized deployments.
- **Operate & govern** — real-time observability (built-in metrics and tracing), centralized management of all agents/models/tools, and enterprise controls (authentication for MCP and A2A, AI gateway integration, and Azure Policy).
- **One API and SDKs** — *"The Microsoft Foundry API provides a consistent contract for building agentic applications across different model providers,"* with SDKs for Python, C#, JavaScript/TypeScript, and Java, plus a VS Code extension.

> "Automate agents to act with real-time precision across 1400+ pre-built connections to business systems including SAP, Salesforce, and Dynamics 365, or extend with custom tools via open MCP standards."
> — Source: [Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)

> **💼 Business value:** The same platform that gives you model choice also gives you the surrounding pieces to ship real products — agents, tools, connectors to business systems, and production-grade observability and governance — so AI investments reach production and stay controllable ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry); [Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)).

---

## 9. Availability, Preview Status & Limits (No Pricing)

Accurate GA vs. preview status matters for a decision-maker audience. As of 2026-07-13, per the official pages consulted:

- **Generally available (GA):** the model catalog, standard deployment in Foundry resources, endpoints/single-endpoint access, playgrounds (the base experience), and model router (date-stamped versions; current version `2025-11-18`) ([Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview); [Deployment overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview); [Model router concepts](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router)).
- **In preview:**
  - **Instant access to models** — preview, and during preview it is supported **only in the West US 3 region**; requires the **Foundry User** role on the project or account ([Instant access to models](https://learn.microsoft.com/en-us/azure/foundry/concepts/instant-models)).
  - **Managed compute deployment** — public preview; **registration is required** to use it ([Deployment overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview)).
  - **Model leaderboards** — preview ([Model benchmarks and leaderboards](https://learn.microsoft.com/en-us/azure/foundry/concepts/model-benchmarks)).
  - Several newer capabilities (e.g., voice agents, routines, Fabric IQ, Work IQ, A2A endpoints) are also in preview ([What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry)).
- **Regional & data-processing options:** standard deployment supports **regional, data-zone (US/EU), and global** processing so teams can meet residency/compliance requirements; managed compute (preview) is currently offered for global deployment ([Deployment overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview)).
- **Model availability varies by region** and, for some partner models, by country/region and marketplace availability ([Foundry Models sold by Azure](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure); [Foundry Models from partners and community](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-from-partners)).
- **Model lifecycle:** models move through a predictable lifecycle (preview → GA → retirement); preview models are not recommended for production ([Foundry Models sold by Azure](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure)).

**Pricing/limits/quotas:** *Intentionally excluded per the brief.* No cost, pricing tier, quota, or throughput-limit figures are included in this report even where the source pages discuss them.

---

## 10. Research Limitations

- **Pricing intentionally excluded.** Several source pages (deployment overview, model router, model choice guide, models-sold-by-azure) include billing/cost details. Per the brief, all cost/pricing content was deliberately omitted, so this report does not represent the full content of those pages.
- **Model-count discrepancy across official pages.** The core docs state *"over 1,900 models"* ([Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview); [What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry)), the deployment overview states *"10,000+ open-source and partner models"* ([Deployment overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview)), and the Azure product page states *"over 11,000"* models ([Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)). The most likely explanation is that "1,900" refers to the curated Foundry Models catalog while "10,000+/11,000" counts the full catalog including the large open-source/community set — but Microsoft's pages do not explicitly reconcile the numbers. **Recommendation for the deck:** say *"1,900+ curated models, and over 11,000 across the full catalog"* and cite both, rather than picking one figure.
- **Deployment terminology is evolving.** The current deployment concept page uses *"Standard deployment"* + *"Managed compute"* + *"Instant access"* ([Deployment overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview)), while the older Foundry Models overview page still uses *"managed compute and serverless deployments"* ([Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview)). This report favors the newer deployment-overview framing and avoids the older label to reduce confusion for a newcomer audience.
- **Provider list varies slightly by page.** The product page names **Google** and the **MAI** family among providers ([Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/)); the core Learn overview pages emphasize Microsoft, OpenAI, Anthropic, Mistral, xAI, Meta, DeepSeek, Cohere, NVIDIA, and Hugging Face. Provider availability changes frequently; the live catalog in the portal is the authoritative list.
- **Preview scope may change quickly.** Features flagged preview here (instant access, managed compute, leaderboards) and their regional limits can change; verify current status in the portal and on the linked pages before presenting.
- **"Freedom of model choice" as an exact phrase.** Microsoft communicates this benefit through phrases like *"Open by design,"* *"switch between models … without changing any code,"* and *"selects the best model for each task … without application rewrites,"* rather than a single canonical slogan. Quotes in §6 are the closest verbatim expressions found in official sources.
- **Some model names are illustrative and time-sensitive.** Specific model versions (e.g., GPT-5.x, Claude Opus/Sonnet/Haiku versions, Llama 4 variants) are named as they appeared in the sources on 2026-07-13; exact versions in the catalog change over time.

---

## 11. Complete Reference List

### Microsoft Learn Documentation
- [What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry) — Platform definition, audiences, building blocks, key capabilities, model families, SDKs, and portal.
- [Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview) — The model catalog: breadth ("over 1,900 models"), the two model categories, filters, model cards, and leaderboards.
- [Foundry Models sold by Azure](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure) — Azure Direct Models; concrete Azure OpenAI + partner model families and modalities (text, image, video, audio, embeddings).
- [Foundry Models from partners and community](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-from-partners) — Anthropic, Cohere, Meta, Microsoft, Mistral AI, NTT Data and how partner/community models are provided.
- [Deployment overview for Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/concepts/deployments-overview) — Two deployment options (standard vs. managed compute), instant access, auto-selection, catalog scale ("10,000+ … ~50 new/month").
- [Instant access to models in Microsoft Foundry (preview)](https://learn.microsoft.com/en-us/azure/foundry/concepts/instant-models) — Call any supported model by name with no deployment; "switch models by changing one string"; future-proofing.
- [Endpoints for Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/endpoints) — Single endpoint + credentials; "switch between models … without changing any code."
- [Model router for Microsoft Foundry concepts](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router) — Automatic per-prompt routing to the most suitable model; routing modes; updated-in-place versioning.
- [Deploy Microsoft Foundry Models in the Foundry portal](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/deploy-foundry-models) — Portal-based deployment walkthrough.
- [Deploy models using Azure CLI and Bicep](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/create-model-deployments) — Verified `az cognitiveservices` CLI commands to create resources and deployments.
- [Model benchmarks and leaderboards in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/model-benchmarks) — Compare models on quality, safety, performance, and scenario leaderboards.
- [Microsoft Foundry Playgrounds](https://learn.microsoft.com/en-us/azure/foundry/concepts/concept-playgrounds) — Try/compare models (up to three) and prototype before writing production code; Model/Agents/Images/Video playgrounds.
- [GPT-5 vs GPT-4.1 model choice guide](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/model-choice-guide) — Practical example of picking the right model for the workload.
- [Microsoft Foundry architecture](https://learn.microsoft.com/en-us/azure/foundry/concepts/architecture) — Foundry resource, project, project assets, and connected resources (building blocks).
- [Choose how to build with Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/choose-build-approach) — From a single model call to prompt agents to hosted agents; developer surfaces.
- [Quickstart: Get started with Microsoft Foundry SDK](https://learn.microsoft.com/en-us/azure/foundry/quickstarts/get-started-code) — First model call and first agent; `az login` auth; links to official samples.
- [Training for Microsoft Foundry](https://learn.microsoft.com/en-us/training/azure/ai-foundry) — Plain-language "unified platform … prototype to production" framing (Microsoft Learn training hub).

### Official Microsoft Product Page
- [Microsoft Foundry product page](https://azure.microsoft.com/en-us/products/ai-foundry/) — Business-value framing: "unified platform to build, ground, and govern"; "Open by design, intelligent by default, and trusted by architecture"; "over 11,000 … models"; "intelligent model routing … without application rewrites."

### GitHub Repositories
- [microsoft-foundry/foundry-samples](https://github.com/microsoft-foundry/foundry-samples) — Official Microsoft Foundry code samples (the Foundry SDK quickstart links to `samples/python/quickstart`). *(Verified reachable; org content may require sign-in.)*
- [Azure-Samples/azureai-samples](https://github.com/Azure-Samples/azureai-samples) — Azure AI samples repository (Python and other languages).
- [Azure/azure-sdk-for-python](https://github.com/Azure/azure-sdk-for-python) — Home of the `azure-ai-projects` Python SDK used in the quickstart snippets.

### Code Samples (embedded in official docs)
- First model call / "switch model by changing one string" — Python, C#, TypeScript, Java, REST — [What is Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry) and [Instant access to models](https://learn.microsoft.com/en-us/azure/foundry/concepts/instant-models).
- Azure CLI deployment commands (`az cognitiveservices account …`) — [Deploy models using Azure CLI and Bicep](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/create-model-deployments).
