# Research Report: Microsoft Foundry — Trust & Enterprise Readiness

**Date:** 2026-07-13
**Researcher:** Copilot MS Docs Researcher Agent
**Topic slug:** foundry-trust-enterprise-readiness
**Sources consulted:** 35 Microsoft Learn pages, 4 official Microsoft GitHub repositories (2 tools/SDKs cited inline + 2 code-sample repos), 3 additional non-Learn Microsoft properties (Responsible AI Standard, Data Protection Addendum, Microsoft Trust Center), and 3 official Microsoft blog posts. No standalone code-sample files were used (see §13 → Code Samples).

> **Scope & framing notes (per request):** This report covers the **current Microsoft Foundry** platform (the unified platform for building AI applications and agents, formerly named *Azure AI Foundry*). It focuses only on current capabilities. It intentionally **excludes all pricing/cost information** and does **not** discuss or compare any legacy architecture. Code samples are included only as short, optional illustrations because the target deck has no live demos — the emphasis is plain-language concepts and Microsoft's stated business value.

---

## Executive Summary

**Microsoft Foundry is Microsoft's unified, enterprise-grade platform for building, deploying, and operating AI models and agents.** For a business or technical decision-maker, the central promise of its "Trust & Enterprise Readiness" story is simple: Foundry lets you move an AI idea from a promising prototype into dependable production **without giving up control, safety, or compliance.** Microsoft describes the platform as unifying "agents, models, and tools under a single management grouping with built-in enterprise-readiness capabilities including tracing, monitoring, evaluations, and customizable enterprise setup configurations" ([What is Microsoft Foundry?](https://learn.microsoft.com/azure/foundry/what-is-foundry)).

Trust in Foundry rests on five reinforcing pillars, each of which this report covers in plain language with Microsoft's own stated business value: **(1) Evaluation** — measure the quality and safety of models and agents before *and* after you ship; **(2) Observability** — trace, monitor, and debug what an agent actually did and why; **(3) Safety & Responsible AI** — content filters, guardrails, and adversarial ("red team") testing built in; **(4) Security & Data Protection** — Microsoft Entra ID identity and role-based access, private networking, encryption, data residency, and the core promise that "your data is your data"; and **(5) Governance & Management at Scale** — a control plane and policy engine so an organization can see, standardize, and govern all its AI across teams.

The most important takeaway for a new audience: these are not add-ons you assemble yourself — they are **integrated throughout the lifecycle**. Microsoft frames the platform's general availability as "a shift from pilot-focused usage to secure, reliable, enterprise-ready production usage," designed for "teams that need to build, deploy, and operate AI systems at scale, with governance, security, and operational controls integrated throughout the lifecycle" ([New Microsoft Foundry portal general availability overview](https://learn.microsoft.com/azure/foundry/concepts/general-availability)). That integration is what turns AI experimentation into something an enterprise can trust in production.

---

## Table of Contents

1. [Overview](#1-overview)
2. [Key Concepts: The Enterprise-Readiness Model](#2-key-concepts-the-enterprise-readiness-model)
3. [Capability 1 — Evaluation](#3-capability-1--evaluation)
4. [Capability 2 — Observability](#4-capability-2--observability)
5. [Capability 3 — Safety & Responsible AI](#5-capability-3--safety--responsible-ai)
6. [Capability 4 — Security & Data Protection](#6-capability-4--security--data-protection)
7. [Capability 5 — Governance & Management at Scale](#7-capability-5--governance--management-at-scale)
8. [Business Value: From Prototype to Production, Safely](#8-business-value-from-prototype-to-production-safely)
9. [Getting Started (Prerequisites, CLI, Optional Code)](#9-getting-started-prerequisites-cli-optional-code)
10. [Best Practices & Common Pitfalls](#10-best-practices--common-pitfalls)
11. [Preview Status, Limits & Quotas (No Pricing)](#11-preview-status-limits--quotas-no-pricing)
12. [Research Limitations](#12-research-limitations)
13. [Complete Reference List](#13-complete-reference-list)

---

## 1. Overview

### What it is

Microsoft Foundry is a single Azure platform where teams discover models, build agents, connect tools and data, and then operate everything in production. Microsoft's own definition:

> "**Microsoft Foundry** is a unified Azure platform-as-a-service offering for enterprise AI operations, model builders, and application development. This foundation combines production-grade infrastructure with friendly interfaces, enabling developers to focus on building applications rather than managing infrastructure."
> — Source: [What is Microsoft Foundry?](https://learn.microsoft.com/azure/foundry/what-is-foundry)

> "Microsoft Foundry unifies agents, models, and tools under a single management grouping with built-in enterprise-readiness capabilities including tracing, monitoring, evaluations, and customizable enterprise setup configurations. The platform provides streamlined management through unified role-based access control (RBAC), networking, and policies under one Azure resource provider namespace."
> — Source: [What is Microsoft Foundry?](https://learn.microsoft.com/azure/foundry/what-is-foundry)

### What "Trust & Enterprise Readiness" means here

For decision-makers, "trust" is not one feature — it is the combination of controls that let a regulated, security-conscious organization put AI in front of customers and employees with confidence. Microsoft organizes the whole lifecycle into three verbs — **Discover, Build, Operate** — and states that this unification lets "teams move faster without trading off reliability, compliance, or operational rigor" ([General availability overview](https://learn.microsoft.com/azure/foundry/concepts/general-availability)). Trust & Enterprise Readiness is primarily about the **Operate** phase plus the safety and evaluation checkpoints woven into **Build**.

### Why it matters (the problem it solves)

AI applications behave probabilistically: the same question can produce different answers, an agent can take many steps, and outputs can be wrong, unsafe, or leak data. Without a trust layer, organizations either (a) never leave the pilot stage because they can't prove the system is safe, or (b) ship something they cannot see into, control, or defend. Foundry's evaluation, observability, safety, security, and governance capabilities exist to close exactly that gap.

### Key features (at a glance)

- **Evaluation** of models and agents for quality, safety, and agent behavior — before and after deployment ([Observability concepts](https://learn.microsoft.com/azure/foundry/concepts/observability)).
- **Observability** via OpenTelemetry-based tracing and Azure Monitor Application Insights monitoring ([Observability concepts](https://learn.microsoft.com/azure/foundry/concepts/observability)).
- **Guardrails and controls** for content safety and prompt-injection defense at defined intervention points ([Guardrails overview](https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview)).
- **AI Red Teaming Agent** for automated adversarial testing ([AI Red Teaming Agent](https://learn.microsoft.com/azure/foundry/concepts/ai-red-teaming-agent)).
- **Microsoft Entra ID + Azure RBAC**, private networking, encryption, and data residency ([Foundry architecture](https://learn.microsoft.com/azure/foundry/concepts/architecture)).
- **Foundry Control Plane** for fleet-wide inventory, observability, compliance, and security ([Foundry Control Plane](https://learn.microsoft.com/azure/foundry/control-plane/overview)).

---

## 2. Key Concepts: The Enterprise-Readiness Model

Before walking through each capability, three framing concepts make the rest of the deck easy to follow.

### 2.1 The AI application lifecycle — trust is applied at every stage

Foundry applies trust controls across the whole lifecycle rather than bolting them on at the end. The observability documentation describes three evaluation stages:

- **Base model selection** — "Select the right foundation model by comparing quality, task performance, ethical considerations, and safety profiles across different models." ([Observability concepts](https://learn.microsoft.com/azure/foundry/concepts/observability))
- **Pre-production evaluation** — validate the app/agent is production-ready with datasets, edge cases, and safety checks *before* release.
- **Post-production monitoring** — continuously watch quality, safety, and operational health in the real world.

```
   DISCOVER            BUILD                         OPERATE
   ─────────           ─────────────────────         ────────────────────────
   Compare models  →   Evaluate before deploy   →    Monitor + continuously
   (quality/safety)    Guardrails + red teaming      evaluate in production
                       Tracing for debugging         Govern the whole fleet
```
*(Text summary of the "three stages of AI application lifecycle evaluation" from [Observability concepts](https://learn.microsoft.com/azure/foundry/concepts/observability).)*

### 2.2 Discover → Protect → Govern (Responsible AI pattern)

Microsoft's Responsible AI guidance for Foundry follows a repeatable pattern grounded in the [Microsoft Responsible AI Standard](https://aka.ms/RAI):

> - "**Discover** agent quality, safety, and security risks before and after deployment...
> - **Protect** – at both the model output and agent runtime levels – against security risks, undesirable outputs, and unsafe actions...
> - **Govern** agents through tracing and monitoring tools and compliance integrations."
> — Source: [Responsible AI for Microsoft Foundry](https://learn.microsoft.com/azure/foundry/responsible-use-of-ai-overview)

### 2.3 Defense in depth — three Microsoft systems working together

Foundry does not defend AI workloads alone; it combines with Microsoft's broader security and governance stack. Microsoft describes the layers:

> "**Foundry guardrails**: Content filters, prompt shields, and abuse detection protect managed inference endpoints at the model layer.
> **Defender for Cloud**: Security posture recommendations identify misconfigurations, and threat protection for Foundry Tools detects jailbreak and user input attacks.
> **Microsoft Purview**: Auditing, sensitive information type (SIT) classification, and Data Security Posture Management (DSPM) for AI provide visibility and governance over prompt and response data."
> — Source: [Manage compliance and security in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/control-plane/how-to-manage-compliance-security)

> 💼 **Business value (plain language):** You are not buying five disconnected tools and gluing them together. Foundry ships a coherent trust layer, and it plugs into the Microsoft security products many enterprises already own (Entra, Defender, Purview). That means fewer gaps, less integration work, and a consistent story for auditors.

---

## 3. Capability 1 — Evaluation

### 3.1 In plain terms

**Evaluation means measuring how good and how safe an AI model or agent is — with evidence, not gut feel.** Because AI outputs vary, you need a repeatable way to score things like "was the answer correct and grounded in our data?", "did the agent follow instructions?", and "did it produce anything harmful?" Foundry provides built-in scorers (called *evaluators*) plus the ability to write your own.

> "Evaluators measure the quality, safety, and reliability of AI responses throughout development. Microsoft Foundry provides built-in evaluators including general-purpose quality metrics (coherence, fluency), RAG-specific metrics (groundedness, relevance), safety and security (hate/unfairness, violence, protected materials), and agent-specific metrics (tool call accuracy, task completion), among others. You can also build custom evaluators tailored to your domain-specific requirements."
> — Source: [Observability in generative AI](https://learn.microsoft.com/azure/foundry/concepts/observability)

### 3.2 What you can evaluate

**Compare and choose a model (before you build).** Foundry provides **model leaderboards** and side-by-side comparison so teams can rank models on quality, safety, and performance (such as latency and throughput) using industry-standard benchmarks, then pick the best fit for a scenario.

> "Model leaderboards (preview) in Foundry portal help you compare models in the Foundry model catalog using industry-standard model benchmarks."
> — Source: [Model leaderboards in Microsoft Foundry portal (preview)](https://learn.microsoft.com/azure/foundry/concepts/model-benchmarks)

The leaderboard interpretation guidance makes the safety dimension explicit: "**Safety scores**: Lower attack success rates indicate more robust models. Consider safety scores alongside quality scores, especially for customer-facing applications" ([Model leaderboards](https://learn.microsoft.com/azure/foundry/concepts/model-benchmarks)). The side-by-side view "lets you evaluate up to three models simultaneously across multiple dimensions" ([Compare models using the model leaderboard](https://learn.microsoft.com/azure/foundry/how-to/benchmark-model-in-catalog)).

**Evaluate an agent (before you deploy).** Agent-specific evaluators score how well an agent handled the task and used its tools:

| Evaluator | What it measures |
| --- | --- |
| **Intent Resolution** | Whether the agent correctly identified and addressed the user's intent |
| **Task Adherence** | How well the agent followed instructions and constraints |
| **Tool Call Accuracy** | Overall accuracy of tool usage |
| **Tool Selection / Tool Input Accuracy / Tool Output Utilization** | Whether the agent picked the right tools, called them correctly, and used their results |
> — Source: [Run evaluations from the Microsoft Foundry portal](https://learn.microsoft.com/azure/foundry/how-to/evaluate-generative-ai-app)

**Quality and RAG evaluators** cover coherence, fluency, groundedness, and relevance; **risk and safety evaluators** cover categories such as hate/unfairness, violence, self-harm, sexual content, protected materials (copyright), code vulnerability, and prompt-injection resilience ([Risk and safety evaluators](https://learn.microsoft.com/azure/foundry/concepts/evaluation-evaluators/risk-safety-evaluators); [Built-in evaluators reference](https://learn.microsoft.com/azure/foundry/concepts/built-in-evaluators)).

**Benchmark evaluations in the portal** let you evaluate the quality and safety of both a **model** deployment and an **agent** from a guided wizard ([Run benchmark evaluations in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/observability/how-to/benchmark-evaluations)).

### 3.3 Before *and* after deployment

Evaluation is not a one-time gate. Foundry supports **pre-production** evaluation and **post-production continuous evaluation** of live traffic at a sampled rate, plus **scheduled** evaluations to detect drift:

> "**Continuous evaluation**: Quality and safety evaluation of production traffic at a sampled rate.
> **Scheduled evaluation**: Scheduled quality and safety evaluation using test datasets to detect system drift."
> — Source: [Observability in generative AI](https://learn.microsoft.com/azure/foundry/concepts/observability)

### 3.4 Why it matters

> "Evaluation is essential for ensuring your agent meets quality and safety standards before deployment. By running evaluations during development, you establish a baseline for your agent's performance and can set acceptance thresholds, such as an 85% task adherence passing rate, before releasing it to users."
> — Source: [Evaluate your AI agents](https://learn.microsoft.com/azure/foundry/observability/how-to/evaluate-agent)

> 💼 **Business value:** Evaluation turns "we think the AI is good" into "we can prove it meets a bar we set." You can pick the right model with data, set a quality/safety threshold before launch, and keep checking after launch so quality doesn't silently degrade. That is the difference between hoping and knowing — and it's what lets a review board sign off on going live.

---

## 4. Capability 2 — Observability

### 4.1 In plain terms

**Observability is the ability to see inside a running AI system — to know what an agent did, in what order, and why.** When an agent takes many steps (call a tool, read a document, call another tool, answer), you need a record of each step to debug problems, explain a result, or investigate an incident.

> "AI observability refers to the ability to monitor, understand, and troubleshoot AI systems throughout their lifecycle."
> — Source: [Observability in generative AI](https://learn.microsoft.com/azure/foundry/concepts/observability)

Foundry groups observability into three capabilities that "work together": **Evaluation** (covered above), **Monitoring**, and **Tracing** ([Observability concepts](https://learn.microsoft.com/azure/foundry/concepts/observability)).

### 4.2 Tracing — "what did the agent do, and why?"

A **trace** records the full journey of a request through your agent — inputs, outputs, tool calls, retries, latency, and token usage — so you can step through exactly what happened.

> "Trace results solve this by allowing you to view the inputs and outputs of each primitive involved in a particular agent run, displayed in the order they were invoked, making it easy to understand and debug your AI agent's behavior."
> — Source: [Agent tracing overview](https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept)

> "Tracing helps you answer questions like 'Where did this response come from?' and 'Which step introduced an error or latency spike?'"
> — Source: [Agent tracing overview](https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept)

Two important, decision-maker-friendly facts:

- **You often don't have to write any code to get tracing.** "The recommended starting point is **server-side tracing**. Foundry enables it for you automatically once you connect an Application Insights resource to your project. No code changes are required, and traces are available within minutes of enabling it." ([Set up tracing in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/observability/how-to/trace-agent-setup))
- **It uses open standards.** "Foundry uses OpenTelemetry semantic conventions so traces are consistent across supported tools and integrations," including LangChain, LangGraph, the OpenAI Agents SDK, and the Microsoft Agent Framework ([Agent tracing overview](https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept); [Observability concepts](https://learn.microsoft.com/azure/foundry/concepts/observability)). Trace data is stored in Azure Monitor Application Insights ([Tracing and data handling](https://learn.microsoft.com/azure/foundry/observability/concepts/trace-data)).

### 4.3 Monitoring — quality and health in production

> "Production monitoring ensures your deployed AI applications maintain quality and performance in real-world conditions. Integrated with Azure Monitor Application Insights, Microsoft Foundry delivers real-time dashboards tracking operational metrics, token consumption, latency, error rates, and quality scores. You can set up alerts when outputs fail quality thresholds or produce harmful content, enabling rapid issue resolution."
> — Source: [Observability in generative AI](https://learn.microsoft.com/azure/foundry/concepts/observability)

The **Agent Monitoring Dashboard** tracks token usage, latency, success rates, and evaluation outcomes for production traffic, and is where teams set up continuous evaluation ([Monitor agents with the Agent Monitoring Dashboard](https://learn.microsoft.com/azure/foundry/observability/how-to/how-to-monitor-agents-dashboard)).

### 4.4 Handling sensitive data in traces

Because traces can capture user inputs and outputs, Microsoft calls out privacy handling directly: "Treat trace data as production telemetry and apply the same access controls and retention policies you use for logs and metrics," and redact secrets/personal data before it reaches telemetry ([Agent tracing overview](https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept)). Access to trace content is governed by roles on the connected Application Insights/Log Analytics resource ([Tracing and data handling](https://learn.microsoft.com/azure/foundry/observability/concepts/trace-data)).

> 💼 **Business value:** When something goes wrong in production — a wrong answer, a slow response, a surprising action — observability is how your team answers "what happened and why" in minutes instead of guessing. It shortens outages, supports incident investigation and audits, and, because tracing can be turned on with no code changes, teams get this visibility fast. In Microsoft's words, it delivers "real-time insights into performance, safety, and quality metrics, enabling rapid issue resolution and maintaining user trust" ([Observability concepts](https://learn.microsoft.com/azure/foundry/concepts/observability)).

---

## 5. Capability 3 — Safety & Responsible AI

### 5.1 In plain terms

**Safety tooling stops the AI from producing or acting on harmful content, and helps you find weaknesses before attackers do.** Foundry builds this in at two levels — the *model output* level and the *agent runtime* level — and adds proactive adversarial testing.

### 5.2 Guardrails and controls (content safety)

> "Microsoft Foundry provides safety and security guardrails that you can apply to core models and agents. Agent guardrails are in preview. Guardrails consist of a set of controls. The controls define a risk to be detected, intervention points to scan for the risk, and the response action to take in the model or agent when the risk is detected."
> — Source: [Guardrails and controls overview in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview)

A **guardrail** is "a named collection of **controls**," and risks are "flagged by classification models designed to detect harmful content" drawn from Azure AI Content Safety ([Guardrails overview](https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview)). Guardrails can scan at **four intervention points**:

> - "**User input** — The prompt sent to a model or agent.
> - **Tool call** (Preview) — The action and data the agent proposes to send to a tool. Agents only.
> - **Tool response** (Preview) — The content returned from a tool to the agent. Agents only.
> - **Output** — The final completion returned to the user."
> — Source: [Guardrails and controls overview](https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview)

Covered risk categories include hate, sexual, self-harm, violence (each with configurable **Off/Low/Medium/High** severity), plus user prompt attacks (jailbreak), indirect (cross-domain) prompt injection, protected material for text and code, groundedness, personally identifiable information (PII), and task adherence ([Guardrails overview](https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview)). By default, models are assigned the **Microsoft.DefaultV2** guardrail so there is safety "by default" ([Guardrails overview](https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview); [Default Guardrail policies for Azure OpenAI](https://learn.microsoft.com/azure/foundry/openai/concepts/default-safety-policies)).

### 5.3 Safety evaluations and risk scoring

The same evaluation engine measures safety risk explicitly — e.g., **Protected materials**, **Code vulnerability**, **Ungrounded attributes**, **Indirect Attack (XPIA)**, and agent-only risks like **Prohibited actions** and **Sensitive data leakage** ([Risk and safety evaluators](https://learn.microsoft.com/azure/foundry/concepts/evaluation-evaluators/risk-safety-evaluators)).

### 5.4 AI Red Teaming Agent (find weaknesses proactively)

Red teaming means simulating an attacker to see whether your AI can be tricked into misbehaving. Foundry automates it.

> "The AI Red Teaming Agent is a powerful tool designed to help organizations proactively find safety risks associated with generative AI systems during design and development of generative AI models and applications."
> — Source: [AI Red Teaming Agent](https://learn.microsoft.com/azure/foundry/concepts/ai-red-teaming-agent)

It builds on Microsoft's open-source **PyRIT** framework ([microsoft/PyRIT](https://github.com/microsoft/PyRIT)) and scores results using the **Attack Success Rate (ASR)** metric, producing a scorecard "to help you decide if the system is ready for deployment" ([AI Red Teaming Agent](https://learn.microsoft.com/azure/foundry/concepts/ai-red-teaming-agent); [Run AI Red Teaming Agent locally](https://learn.microsoft.com/azure/foundry/how-to/develop/run-scans-ai-red-teaming-agent)). Microsoft frames the value as "shifting left":

> "This helps teams 'shift left' from costly reactive incidents to more proactive testing frameworks that can catch issues before deployment... With the AI Red Teaming Agent, organizations can now leverage Microsoft's deep expertise to scale and accelerate their AI development with Trustworthy AI at the forefront."
> — Source: [AI Red Teaming Agent](https://learn.microsoft.com/azure/foundry/concepts/ai-red-teaming-agent)

### 5.5 Responsible AI foundation

All of this is grounded in the [Microsoft Responsible AI Standard](https://aka.ms/RAI) and the Discover → Protect → Govern pattern (see §2.2). For example, "Use content filters and Guardrails to block harmful outputs before they reach users" ([Responsible AI for Microsoft Foundry](https://learn.microsoft.com/azure/foundry/responsible-use-of-ai-overview)).

> 💼 **Business value:** Safety tooling protects your brand, your users, and your legal exposure. Guardrails block harmful or off-limits content in real time; safety evaluations quantify risk; and the AI Red Teaming Agent finds vulnerabilities *before* a customer or an attacker does. Microsoft's framing — catching issues before deployment rather than after a "costly reactive incident" — is exactly the risk-reduction argument a business audience cares about ([AI Red Teaming Agent](https://learn.microsoft.com/azure/foundry/concepts/ai-red-teaming-agent)).

---

## 6. Capability 4 — Security & Data Protection

### 6.1 Identity and access (Microsoft Entra ID + Azure RBAC)

**Who can do what is controlled by identity, not shared secrets.** Foundry uses Microsoft Entra ID for authentication and Azure role-based access control (RBAC) for authorization, and Microsoft explicitly recommends this over API keys:

> "RBAC roles apply when you authenticate using Microsoft Entra ID. If you use key-based authentication instead, the key grants full access without role restrictions. Microsoft recommends using Entra ID authentication for improved security and granular access control."
> — Source: [Role-based access control for Microsoft Foundry](https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry)

Foundry provides least-privilege built-in roles so people get only the access they need — for example **Foundry Agent Consumer** (only call an agent), **Foundry User** (build and test), **Foundry Project Manager**, **Foundry Account Owner**, and **Foundry Owner** ([RBAC for Microsoft Foundry](https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry)). Access can be scoped at the Foundry **resource**, **project**, or even individual **agent** level, and the architecture separates administrative "control plane" actions from developer "data plane" actions:

> "Foundry enforces a clear separation between management and development operations to ensure secure and scalable AI workloads."
> — Source: [Microsoft Foundry architecture](https://learn.microsoft.com/azure/foundry/concepts/architecture)

**Agents get their own identities.** Foundry integrates with **Microsoft Entra Agent ID** so agents are first-class, governable identities rather than anonymous scripts:

> "Microsoft Foundry automatically provisions and manages agent identities throughout the agent lifecycle. This integration simplifies permission management while maintaining security and auditability as agents move from development to production."
> — Source: [Agent identity concepts in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/agents/concepts/agent-identity)

This lets an agent authenticate to downstream systems (Storage, Graph, Key Vault, etc.) via OAuth token exchange "without embedding secrets in prompts, code, or connection strings" ([Agent identity concepts](https://learn.microsoft.com/azure/foundry/agents/concepts/agent-identity)).

### 6.2 "Your data is your data"

This is the single most important trust statement for a business audience. For models sold by Azure in Foundry (which includes Azure OpenAI models), Microsoft commits, verbatim:

> "Your prompts (inputs) and completions (outputs), your embeddings, and your training data:
> - are NOT available to other customers.
> - are NOT available to OpenAI or other providers of Models sold by Azure.
> - are NOT used by providers of Models sold by Azure to improve their models or services.
> - are NOT used to train any generative AI foundation models without your permission or instruction.
> - Customer Data, Prompts, and Completions are NOT used to improve Microsoft or third-party products or services without your explicit permission or instruction."
> — Source: [Data, privacy, and security for Models sold by Azure in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/responsible-ai/openai/data-privacy)

And the models themselves don't retain your data:

> "The models are stateless: no prompts or completions are stored in the model. Additionally, prompts and completions are not used to train, retrain, or improve the base models."
> — Source: [Data, privacy, and security for Models sold by Azure](https://learn.microsoft.com/azure/foundry/responsible-ai/openai/data-privacy)

### 6.3 Encryption

> "By default, Azure services encrypt data at rest and in transit using Microsoft-managed keys with FIPS 140-2 compliant 256-bit AES encryption. No code changes are required."
> — Source: [Microsoft Foundry architecture](https://learn.microsoft.com/azure/foundry/concepts/architecture)

Organizations can optionally supply **customer-managed keys (CMK)** in Azure Key Vault, and can bring their own Key Vault for connection secrets ([Foundry architecture](https://learn.microsoft.com/azure/foundry/concepts/architecture)). Stored data "Is always encrypted at rest with Microsoft's AES-256-encryption by default... Can be deleted by the customer at any time" ([Data privacy](https://learn.microsoft.com/azure/foundry/responsible-ai/openai/data-privacy)).

### 6.4 Data residency

> "Foundry stores all data at rest in the designated Azure geography."
> — Source: [Microsoft Foundry architecture](https://learn.microsoft.com/azure/foundry/concepts/architecture)

Stored data "Is stored at rest in the Foundry resource in the customer's Azure tenant, within the same geography as the resource" ([Data privacy](https://learn.microsoft.com/azure/foundry/responsible-ai/openai/data-privacy)). Where prompts are *processed* depends on the deployment type: **Standard/Regional** stays in one region, **Data Zone** stays within a defined boundary (e.g., the US or the EU), and **Global** may process in any region where the model is deployed — but data stored at rest always remains in the customer-designated geography ([Data privacy](https://learn.microsoft.com/azure/foundry/responsible-ai/openai/data-privacy); [Foundry architecture](https://learn.microsoft.com/azure/foundry/concepts/architecture)).

### 6.5 Network isolation / private networking

Foundry can be locked down so it isn't reachable from the public internet. Microsoft frames three areas to isolate: **inbound** access to the Foundry resource, **outbound** access from the Foundry resource, and **outbound** access from the Foundry Agent client to its dependencies ([How to configure network isolation for Microsoft Foundry](https://learn.microsoft.com/azure/foundry/how-to/configure-private-link)). Inbound isolation uses a **private endpoint (private link)** with public network access set to **Disabled**; for outbound, teams can use a **managed virtual network** (Foundry manages it — "simpler setup") or a **customer-managed / bring-your-own VNet** ("full control over network configuration") ([Foundry architecture](https://learn.microsoft.com/azure/foundry/concepts/architecture)).

### 6.6 Tenant isolation

> "Workloads run in logically isolated environments per Foundry resource. Customer code doesn't share runtime containers with other tenants."
> — Source: [Microsoft Foundry architecture](https://learn.microsoft.com/azure/foundry/concepts/architecture)

### 6.7 Compliance & certifications (conceptually)

Foundry inherits Azure's compliance posture. Microsoft states plainly: "Foundry is an Azure service; [learn more] about applicable Azure compliance offerings" ([Data privacy](https://learn.microsoft.com/azure/foundry/responsible-ai/openai/data-privacy)), and data processing is governed by the [Microsoft Products and Services Data Protection Addendum (DPA)](https://aka.ms/DPA). Azure maintains one of the industry's largest compliance portfolios — 90+ Azure compliance certifications spanning global standards (e.g., ISO/IEC 27001), regional, government, and industry-specific frameworks, with audit reports available through the Microsoft Trust Center / Service Trust Portal ([Configure Microsoft Entra ID to meet identity standards](https://learn.microsoft.com/entra/standards/standards-overview); [ISO/IEC 27001 offering](https://learn.microsoft.com/compliance/regulatory/offering-iso-27001)). For AI-specific security controls, Microsoft publishes an [Azure security baseline for Microsoft Foundry](https://learn.microsoft.com/security/benchmark/azure/baselines/azure-ai-foundry-security-baseline).

> 💼 **Business value:** This pillar answers the questions a CISO, privacy officer, and compliance lead ask first: *Who can access it? Where does our data live? Is it encrypted? Can others see or train on it? Can we keep it off the public internet? Does it meet our regulatory obligations?* Foundry's answers — Entra ID + least-privilege RBAC, "your data is your data," AES-256 encryption with optional customer-managed keys, in-geography data residency, private networking, tenant isolation, and Azure's compliance portfolio — are what make it safe to connect AI to real corporate and customer data.

---

## 7. Capability 5 — Governance & Management at Scale

### 7.1 In plain terms

**Governance is how a whole organization — not just one team — keeps its AI safe, compliant, and under control as usage grows.** One agent is easy to watch; hundreds across many teams and even multiple clouds are not. The **Foundry Control Plane** is the single pane of glass for that.

> "Microsoft Foundry Control Plane is a unified management interface that provides visibility, governance, and control for AI agents, models, and tools across your Foundry enterprise. Foundry Control Plane centralizes management for your AI agent fleet, from build to production."
> — Source: [What is Microsoft Foundry Control Plane?](https://learn.microsoft.com/azure/foundry/control-plane/overview)

> "As your organization evolves from isolated copilots to autonomous multi-agent fleets, you need unified oversight. Foundry Control Plane provides the centralized management that you need to scale reliably."
> — Source: [What is Microsoft Foundry Control Plane?](https://learn.microsoft.com/azure/foundry/control-plane/overview)

### 7.2 What the Control Plane gives you

It "consolidates *inventory, observability, compliance, and security* into one role-aware interface" and integrates with Microsoft Defender, Microsoft Purview, and Microsoft Entra "to provide governance at scale" ([Foundry Control Plane](https://learn.microsoft.com/azure/foundry/control-plane/overview)). Key jobs it supports:

- **Fleet inventory** — a unified, searchable table of every agent, model, and tool across projects (and even agents "registered from other clouds"), with health scores, alerts, and usage ([Foundry Control Plane](https://learn.microsoft.com/azure/foundry/control-plane/overview); [What is Microsoft Foundry?](https://learn.microsoft.com/azure/foundry/what-is-foundry)).
- **Compliance enforcement** — define, apply, and continuously monitor guardrail/compliance policies:

> "The **Compliance** pane lets you define, apply, and continuously monitor guardrails and compliance policies across your AI resources. It provides a unified interface to operationalize responsible AI principles while helping to ensure enterprise-grade safety and regulatory alignment."
> — Source: [What is Microsoft Foundry Control Plane?](https://learn.microsoft.com/azure/foundry/control-plane/overview)

- **Policy at scale via Azure Policy** — administrators can mandate minimum guardrail controls across a subscription or resource group, spot non-compliant deployments, and apply bulk remediation ([Manage compliance and security in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/control-plane/how-to-manage-compliance-security)). Broader Azure Cloud Adoption Framework guidance adds using Azure Policy to "control which AI models your organization uses" ([Govern Azure platform services (PaaS) for AI](https://learn.microsoft.com/azure/cloud-adoption-framework/ai/platform/governance)).
- **Security signals in one place** — view Defender for Cloud recommendations and Microsoft Purview alerts, and schedule automated red-teaming/drift monitoring ([Foundry Control Plane](https://learn.microsoft.com/azure/foundry/control-plane/overview)).

### 7.3 Enterprise data security & compliance via Microsoft Purview

> "By enabling Microsoft Purview on your Azure subscription, you can access, process, and store prompt and response data from Microsoft Foundry apps and agents."
> — Source: [Manage compliance and security in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/control-plane/how-to-manage-compliance-security)

This unlocks Purview Audit, sensitive-information-type (SIT) classification, **Data Security Posture Management (DSPM) for AI**, Insider Risk Management, Communication Compliance, Data Lifecycle Management, and eDiscovery for AI-generated data — "in alignment with enterprise policies and regulatory requirements" ([Manage compliance and security](https://learn.microsoft.com/azure/foundry/control-plane/how-to-manage-compliance-security)).

### 7.4 Organization-wide agent inventory (Microsoft Entra Agent ID)

At Microsoft Ignite 2025, Microsoft introduced **Microsoft Entra Agent ID**, extending Zero Trust identity to AI agents, and the **Microsoft Entra Agent Registry**, which "provides a complete inventory of all agents used in your organization, including Microsoft and third-party agents" ([What's new in Microsoft AI security](https://learn.microsoft.com/security/security-for-ai/whats-new); [What's new at Microsoft Ignite 2025 – Microsoft Entra](https://learn.microsoft.com/entra/fundamentals/whats-new-ignite-2025)). Cloud Adoption Framework guidance recommends using Entra Agent ID to "track and manage your AI agents" as part of model governance ([Govern Azure platform services (PaaS) for AI](https://learn.microsoft.com/azure/cloud-adoption-framework/ai/platform/governance)).

### 7.5 Planning for scale (self-serve with guardrails)

Foundry's rollout guidance helps organizations "avoid security gaps, cost overruns, and access sprawl" by defining isolation boundaries, mapping Entra ID groups to least-privilege roles, choosing a network model, and enabling self-serve *within* clear constraints ([Microsoft Foundry rollout across my organization](https://learn.microsoft.com/azure/foundry/concepts/planning)). Foundry separates "**Control plane RBAC actions** for resource management" from "**Data plane RBAC actions** for development workloads" so IT can centralize control while teams stay productive ([Planning](https://learn.microsoft.com/azure/foundry/concepts/planning)).

> 💼 **Business value:** Governance is what keeps AI from becoming ungoverned "shadow AI." With the Control Plane, leaders get one view of every agent and model, can enforce safety and compliance policies across all teams at once, and can prove control to auditors — while still letting teams build quickly inside guardrails. In Microsoft's words, it is "the centralized management that you need to scale reliably" ([Foundry Control Plane](https://learn.microsoft.com/azure/foundry/control-plane/overview)).

---

## 8. Business Value: From Prototype to Production, Safely

This section consolidates Microsoft's own words on the overarching value — useful as the closing "why it matters" slide.

**Enterprise-ready, production-grade.**
> "The new Microsoft Foundry portal is generally available (GA). This milestone marks a shift from pilot-focused usage to secure, reliable, enterprise-ready production usage for core scenarios."
> — Source: [New Microsoft Foundry portal general availability overview](https://learn.microsoft.com/azure/foundry/concepts/general-availability)

**Speed without sacrificing trust.**
> "Foundry unifies the end-to-end lifecycle across **Discover**, **Build**, and **Operate** so teams can move faster without trading off reliability, compliance, or operational rigor."
> — Source: [General availability overview](https://learn.microsoft.com/azure/foundry/concepts/general-availability)

**Enterprise controls are built in.**
> "At GA, the new Microsoft Foundry portal provides... **Enterprise capabilities** including RBAC, audit logs, compliance controls, monitoring, alerting, and virtual network integration."
> — Source: [General availability overview](https://learn.microsoft.com/azure/foundry/concepts/general-availability)

**Focus on the app, not the plumbing.**
> "This foundation combines production-grade infrastructure with friendly interfaces, enabling developers to focus on building applications rather than managing infrastructure."
> — Source: [What is Microsoft Foundry?](https://learn.microsoft.com/azure/foundry/what-is-foundry)

**Ongoing risk mitigation and compliance.** The AI Red Teaming Agent's findings "can be logged, monitored, and tracked over time directly in Foundry, ensuring compliance and continuous risk mitigation" ([AI Red Teaming Agent](https://learn.microsoft.com/azure/foundry/concepts/ai-red-teaming-agent)).

**Currency check (as of 2026-07-13):** Microsoft's "What's new in Microsoft AI security" page (updated through April 2026) confirms the current direction — an "Agent control plane for Microsoft Foundry" to "Secure, observe, and operate agents directly in Microsoft Foundry," alongside Entra Agent ID, Defender for AI agents, and Purview capabilities ([What's new in Microsoft AI security](https://learn.microsoft.com/security/security-for-ai/whats-new)). Microsoft's broader positioning is captured in official blogs such as *"Enterprise-grade controls for AI apps and agents built with Foundry and Copilot Studio"* and *"Microsoft extends Zero Trust to secure the agentic workforce"* (both May 19, 2025), referenced from that page.

> 💼 **The one-line business case:** Foundry lets an organization take an AI prototype to production with the evaluation to prove it's good, the observability to see what it does, the safety tooling to keep it in bounds, the security and privacy to protect data, and the governance to control it all at scale — reducing risk while accelerating time-to-value.

---

## 9. Getting Started (Prerequisites, CLI, Optional Code)

> **Note for this deck:** The audience is new to Foundry and there are no live demos, so this section is intentionally light. Python examples are **secondary/optional** for a Trust & Enterprise Readiness topic; the concepts above are the priority.

### Prerequisites

- An **Azure account with an active subscription** and a **Microsoft Foundry project** ([Foundry Control Plane prerequisites](https://learn.microsoft.com/azure/foundry/control-plane/overview)).
- **Microsoft Entra ID authentication** configured (recommended over API keys) and appropriate **Azure RBAC** roles for your users and service identities ([RBAC for Microsoft Foundry](https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry)).
- To enable observability: an **Application Insights** resource connected to the project ([Set up tracing](https://learn.microsoft.com/azure/foundry/observability/how-to/trace-agent-setup)).
- For advanced fleet governance: an **AI gateway configured** ([Foundry Control Plane](https://learn.microsoft.com/azure/foundry/control-plane/overview)).

### Terminal / CLI commands (Azure)

Foundry is an Azure service, so the natural CLI is the Azure CLI (`az`). These commands are illustrative and map to the trust concepts above; replace `<...>` placeholders with your values.

```bash
# 1) Sign in and select the subscription that contains your Foundry resource.
az login
az account set --subscription "<subscription-id>"

# 2) (Governance / least privilege) Assign a least-privilege Foundry role to a user
#    at the Foundry resource scope. Microsoft recommends Entra ID + RBAC over API keys.
az role assignment create \
  --assignee "<user-or-service-principal-object-id>" \
  --role "Foundry User" \
  --scope "/subscriptions/<subscription-id>/resourceGroups/<resource-group>/providers/Microsoft.CognitiveServices/accounts/<foundry-resource-name>"

# 3) (Data protection) Inspect the Foundry (Cognitive Services) account, including its
#    JSON capabilities. A "ContentLogging" value of "false" appears only when data storage
#    for abuse monitoring has been turned off for approved subscriptions.
az cognitiveservices account show -n "<foundry-resource-name>" -g "<resource-group>"
```
> — Source: [RBAC for Microsoft Foundry](https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry) (role names/scopes) and [Data, privacy, and security for Models sold by Azure](https://learn.microsoft.com/azure/foundry/responsible-ai/openai/data-privacy) (the `az cognitiveservices account show` verification command). | Provenance: adapted (command #3 is verbatim from the data-privacy article; #1–#2 are standard `az` shapes aligned to the RBAC article)

Note: some network-isolated configurations (e.g., private endpoints that block all public access) are set up via SDK/CLI rather than the portal ([Foundry architecture](https://learn.microsoft.com/azure/foundry/concepts/architecture); [Configure private link](https://learn.microsoft.com/azure/foundry/how-to/configure-private-link)).

### Optional Python (illustrative only)

Client-side tracing (when you want to trace your own app code around an agent call) starts with these packages from the official Foundry Python SDK ([Azure/azure-sdk-for-python → `azure-ai-projects`](https://github.com/Azure/azure-sdk-for-python/tree/main/sdk/ai/azure-ai-projects)) — but remember **server-side tracing needs no code changes** and is the recommended starting point:

```python
# Optional/illustrative: install client-side tracing packages for the Foundry (Python) SDK.
# Server-side tracing requires NO code — Foundry enables it once Application Insights is connected.
# Run this in your terminal, not in Python:
#   pip install azure-ai-projects azure-identity opentelemetry-sdk azure-core-tracing-opentelemetry
#
# Then, in application code, you create the project client with Entra ID auth
# (DefaultAzureCredential) and let Foundry export traces to Azure Monitor.
from azure.identity import DefaultAzureCredential
from azure.ai.projects import AIProjectClient

# Format: "https://<resource_name>.ai.azure.com/api/projects/<project_name>"
PROJECT_ENDPOINT = "<your_project_endpoint>"

project = AIProjectClient(
    endpoint=PROJECT_ENDPOINT,
    credential=DefaultAzureCredential(),  # Microsoft Entra ID authentication (recommended)
)
# 'project' is now authenticated with Entra ID and can drive agents, evaluations, and tracing.
print("Foundry project client ready:", bool(project))
```
> — Source: package list from [Set up tracing in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/observability/how-to/trace-agent-setup); client pattern from [What is Microsoft Foundry?](https://learn.microsoft.com/azure/foundry/what-is-foundry) | Provenance: adapted (verbatim `pip install` line + verbatim client-creation pattern, combined into one illustrative snippet)

---

## 10. Best Practices & Common Pitfalls

**Microsoft-recommended practices (with sources):**

- **Prefer Microsoft Entra ID + RBAC over API keys** for people and services; use keys only where role granularity isn't required ([RBAC for Microsoft Foundry](https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry); [Planning](https://learn.microsoft.com/azure/foundry/concepts/planning)).
- **Treat isolation as the production default.** "For production, treat isolation as the default. Use colocation as a deliberate exception only when workload boundaries, data requirements, and risk acceptance are aligned." ([Planning](https://learn.microsoft.com/azure/foundry/concepts/planning))
- **Evaluate before you ship and continuously after.** Establish a baseline and acceptance threshold pre-deployment, then run continuous/scheduled evaluation to catch drift ([Evaluate your AI agents](https://learn.microsoft.com/azure/foundry/observability/how-to/evaluate-agent); [Observability concepts](https://learn.microsoft.com/azure/foundry/concepts/observability)).
- **Red team before deployment** to "shift left" and catch issues early; enforce it as standard policy across the org ([AI Red Teaming Agent](https://learn.microsoft.com/azure/foundry/concepts/ai-red-teaming-agent); [Govern and secure AI agents](https://learn.microsoft.com/azure/cloud-adoption-framework/ai-agents/governance-security-across-organization)).
- **Standardize a repeatable, secure build process for agents across the org** — bake observability and security into how teams build and ship agents, not just individual projects ([Process to build agents across your organization](https://learn.microsoft.com/azure/cloud-adoption-framework/ai-agents/build-secure-process); [Govern and secure AI agents](https://learn.microsoft.com/azure/cloud-adoption-framework/ai-agents/governance-security-across-organization)).
- **Enforce baseline guardrails and minimum controls fleet-wide** using Control Plane compliance policies / Azure Policy ([Manage compliance and security](https://learn.microsoft.com/azure/foundry/control-plane/how-to-manage-compliance-security)).
- **Protect trace data** — redact secrets/PII and apply the same access controls and retention as other production telemetry ([Agent tracing overview](https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept)).

**Common pitfalls (from Microsoft's rollout guidance):**

- **Treating Preview features as production dependencies** without explicit approval — check the GA feature-readiness table before you rely on something ([General availability overview](https://learn.microsoft.com/azure/foundry/concepts/general-availability)).
- **Assuming API keys give the same governance granularity as Entra ID + RBAC** — they don't ([General availability overview](https://learn.microsoft.com/azure/foundry/concepts/general-availability)).
- **Assuming every feature works behind a virtual network** — some capabilities (e.g., certain tracing and workflow-agent scenarios, and Purview integration) have network-isolation limitations to validate first ([General availability overview](https://learn.microsoft.com/azure/foundry/concepts/general-availability); [Manage compliance and security](https://learn.microsoft.com/azure/foundry/control-plane/how-to-manage-compliance-security)).

---

## 11. Preview Status, Limits & Quotas (No Pricing)

**Pricing: intentionally excluded from this report per the deck's requirements — do not present any cost figures.** (Foundry does publish pricing, and several source pages include pricing links; those were deliberately omitted here.)

**Preview vs. GA status (important for accuracy in an intro deck).** Per the [General availability overview](https://learn.microsoft.com/azure/foundry/concepts/general-availability), as documented:

- **Generally available (GA):** core model flows, core agent development, **Evaluations** (some individual evaluators are Preview), **Guardrails — Models**, **Red teaming**, **Fine-tuning**, Quota, and Admin.
- **Preview (not for production without approval):** **Guardrails — Agents**, Guardrails controls/intervention points, **Monitoring**, Workflows, Memory, cluster-analysis optimization, and the **Operate** panes (Overview, Assets, Compliance) that host the Control Plane experiences.
- **Tracing:** the tracing docs state it is "generally available for prompt and hosted agents" with workflow/external agents in preview ([Agent tracing overview](https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept)); the GA overview table lists it as "Partial GA (GA for prompt agents; Preview for hosted, workflow and external agents)" ([General availability overview](https://learn.microsoft.com/azure/foundry/concepts/general-availability)). *(See Research Limitations for this discrepancy.)*

**Limits / regional notes (conceptual):** Some capabilities (e.g., AI Red Teaming Agent *cloud* red teaming for agentic risks) are limited to specific regions such as East US 2, France Central, Sweden Central, Switzerland West, and US North Central ([AI Red Teaming Agent](https://learn.microsoft.com/azure/foundry/concepts/ai-red-teaming-agent)). Feature and model availability varies by region; confirm before rollout ([Foundry architecture](https://learn.microsoft.com/azure/foundry/concepts/architecture)).

---

## 12. Research Limitations

- **Pricing deliberately excluded.** Per the request, no cost/pricing details are included even though several official pages provide them. Any cost questions must be researched separately.
- **Fast-moving preview/GA status.** Foundry evolves quickly and Microsoft states "GA is a production milestone, not an endpoint" ([General availability overview](https://learn.microsoft.com/azure/foundry/concepts/general-availability)). Preview vs. GA labels captured here reflect the documentation as read on 2026-07-13 and may change; validate current status before presenting hard claims.
- **A genuine cross-page discrepancy on tracing status.** The tracing concept/setup pages say tracing is "generally available for prompt **and hosted** agents," while the GA overview table lists **hosted** agents under Preview. Both are official Microsoft Learn pages. This report surfaces both and leans on the tracing-specific pages for the specific claim, but the discrepancy is unresolved in the source material.
- **Agent-level guardrails are Preview.** Guardrails are GA for models but Preview for agents; several agent-safety intervention points (tool call/tool response) are Preview ([Guardrails overview](https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview)).
- **Compliance/certifications covered conceptually, not enumerated for Foundry specifically.** Foundry inherits Azure's compliance portfolio (governed by the DPA and documented via the Trust Center / Service Trust Portal), but Microsoft Learn does not publish a single Foundry-specific certification list; specific certifications (e.g., ISO 27001, SOC 2, HIPAA, FedRAMP, GDPR) were found on general Azure/Service Trust pages rather than a Foundry page. Confirm exact in-scope certifications for a given service and region via the [Microsoft Trust Center](https://www.microsoft.com/trust-center) for any commitment-grade claim.
- **Some detail pages were read via search excerpts rather than full fetch** (e.g., the monitoring dashboard, benchmark-evaluation wizard, default safety policies, and CAF governance pages). Core claims were cross-checked against fully fetched pages (observability, architecture, control plane, guardrails, data-privacy), but exact UI steps on the excerpt-only pages were not exhaustively verified.
- **GitHub verification was partial.** `microsoft/PyRIT` and `Azure-Samples/azureai-samples` were confirmed via the public GitHub API. `Azure/azure-sdk-for-python` and `microsoft-foundry/foundry-samples` are cited from official Microsoft Learn links; the `microsoft-foundry` org enforces SAML SSO, so its repo metadata could not be independently confirmed via API in this environment.
- **Data-privacy wording is scoped to "Models sold by Azure."** The strongest "your data is your data" commitments are documented for Models sold by Azure (including Azure OpenAI models) in Foundry; models from other providers in the catalog "are subject to the terms provided with the models" ([What is Microsoft Foundry?](https://learn.microsoft.com/azure/foundry/what-is-foundry)). Preview features may not support every stated condition.

---

## 13. Complete Reference List

### Microsoft Learn Documentation

*35 Microsoft Learn pages, all cited inline in the body, grouped by topic below.*

**Microsoft Foundry (core)**
- [What is Microsoft Foundry?](https://learn.microsoft.com/azure/foundry/what-is-foundry) — Platform overview, enterprise-readiness framing, key capabilities, audiences.
- [New Microsoft Foundry portal general availability overview](https://learn.microsoft.com/azure/foundry/concepts/general-availability) — Enterprise-ready GA framing; preview vs. GA feature-readiness table; rollout pitfalls.
- [Microsoft Foundry architecture](https://learn.microsoft.com/azure/foundry/concepts/architecture) — Security-driven separation, VNet integration, tenant isolation, encryption (FIPS 140-2 AES-256), data storage, data residency.
- [Microsoft Foundry rollout across my organization](https://learn.microsoft.com/azure/foundry/concepts/planning) — Governance at scale, security baseline checklist, control vs. data plane, self-serve guardrails.
- [Responsible AI for Microsoft Foundry](https://learn.microsoft.com/azure/foundry/responsible-use-of-ai-overview) — Discover/Protect/Govern pattern; Responsible AI Standard; Defender alerts.

**Evaluation**
- [Observability in generative AI](https://learn.microsoft.com/azure/foundry/concepts/observability) — Three core capabilities (Evaluation/Monitoring/Tracing) and three lifecycle stages.
- [Built-in evaluators reference](https://learn.microsoft.com/azure/foundry/concepts/built-in-evaluators) — Full list of quality/RAG/safety/agent evaluators.
- [Risk and safety evaluators](https://learn.microsoft.com/azure/foundry/concepts/evaluation-evaluators/risk-safety-evaluators) — Protected materials, code vulnerability, XPIA, prohibited actions, etc.
- [Run evaluations from the Microsoft Foundry portal](https://learn.microsoft.com/azure/foundry/how-to/evaluate-generative-ai-app) — Portal evaluation wizard; agent/quality evaluator categories.
- [Evaluate your AI agents](https://learn.microsoft.com/azure/foundry/observability/how-to/evaluate-agent) — Agent evaluation, baselines, acceptance thresholds.
- [Run benchmark evaluations in Microsoft Foundry (preview)](https://learn.microsoft.com/azure/foundry/observability/how-to/benchmark-evaluations) — Quality/safety benchmark evaluation for models and agents.
- [Model leaderboards in Microsoft Foundry portal (preview)](https://learn.microsoft.com/azure/foundry/concepts/model-benchmarks) — Compare models by quality, safety, and performance (latency/throughput).
- [Compare models using the model leaderboard (preview)](https://learn.microsoft.com/azure/foundry/how-to/benchmark-model-in-catalog) — Side-by-side model comparison and leaderboards by scenario.

**Observability**
- [Agent tracing overview](https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept) — What tracing is/answers; OpenTelemetry; security & privacy of traces.
- [Set up tracing in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/observability/how-to/trace-agent-setup) — Server-side (no-code) tracing; client-side SDK packages.
- [Tracing and data handling](https://learn.microsoft.com/azure/foundry/observability/concepts/trace-data) — What trace data captures; access control via Application Insights/Log Analytics.
- [Monitor agents with the Agent Monitoring Dashboard](https://learn.microsoft.com/azure/foundry/observability/how-to/how-to-monitor-agents-dashboard) — Production metrics, evaluation outcomes, continuous evaluation setup.

**Safety & Responsible AI**
- [Guardrails and controls overview in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview) — Guardrails/controls, four intervention points, risk categories, severity, defaults.
- [Default Guardrail policies for Azure OpenAI](https://learn.microsoft.com/azure/foundry/openai/concepts/default-safety-policies) — Safety-by-default policies applied to models.
- [AI Red Teaming Agent](https://learn.microsoft.com/azure/foundry/concepts/ai-red-teaming-agent) — Automated adversarial testing, PyRIT, Attack Success Rate, "shift left," risk categories.
- [Run AI Red Teaming Agent locally (preview)](https://learn.microsoft.com/azure/foundry/how-to/develop/run-scans-ai-red-teaming-agent) — Attack strategies and scorecard output.

**Security & Data Protection**
- [Role-based access control for Microsoft Foundry](https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry) — Entra ID auth recommendation, built-in least-privilege roles, scopes.
- [Data, privacy, and security for Models sold by Azure in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/responsible-ai/openai/data-privacy) — "Your data is your data," stateless models, encryption, residency, abuse monitoring.
- [How to configure network isolation for Microsoft Foundry](https://learn.microsoft.com/azure/foundry/how-to/configure-private-link) — Inbound/outbound isolation, private endpoints, managed vs. BYO VNet.
- [Agent identity concepts in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/agents/concepts/agent-identity) — Entra Agent ID in Foundry; inventory/audit; token exchange without secrets.
- [Azure security baseline for Microsoft Foundry](https://learn.microsoft.com/security/benchmark/azure/baselines/azure-ai-foundry-security-baseline) — Security control baseline and data-protection guidance.

**Governance & Management at Scale**
- [What is Microsoft Foundry Control Plane?](https://learn.microsoft.com/azure/foundry/control-plane/overview) — Unified inventory, observability, compliance, security across the fleet.
- [Manage compliance and security in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/control-plane/how-to-manage-compliance-security) — Defense-in-depth (Foundry + Defender + Purview), guardrail policies (Azure Policy), Purview DSPM for AI.
- [Govern Azure platform services (PaaS) for AI](https://learn.microsoft.com/azure/cloud-adoption-framework/ai/platform/governance) — Model governance via Azure Policy; Entra Agent ID inventory; Defender.
- [Govern and secure AI agents](https://learn.microsoft.com/azure/cloud-adoption-framework/ai-agents/governance-security-across-organization) — Org-wide agent governance/security recommendations.
- [Process to build agents across your organization](https://learn.microsoft.com/azure/cloud-adoption-framework/ai-agents/build-secure-process) — Agent observability and security build process.

**Currency, Identity & Compliance context**
- [What's new in Microsoft AI security](https://learn.microsoft.com/security/security-for-ai/whats-new) — Current (through April 2026) updates: Foundry Control Plane, Entra Agent ID/Registry, Defender for AI, Purview, Spotlighting/Task adherence/Continuous evaluation.
- [What's new at Microsoft Ignite 2025 - Microsoft Entra](https://learn.microsoft.com/entra/fundamentals/whats-new-ignite-2025) — Microsoft Entra Agent ID launch; Conditional Access for agents; AI Prompt Shield.
- [Configure Microsoft Entra ID to meet identity standards](https://learn.microsoft.com/entra/standards/standards-overview) — Azure's 90+ compliance certifications context.
- [ISO/IEC 27001:2013 Information Security Management Standards](https://learn.microsoft.com/compliance/regulatory/offering-iso-27001) — Example Azure compliance offering (Trust Center / Service Trust Portal).

### GitHub Repositories (official Microsoft)
- [microsoft/PyRIT](https://github.com/microsoft/PyRIT) — Python — "The Python Risk Identification Tool for generative AI (PyRIT)"; the open-source engine behind the AI Red Teaming Agent. *Cited inline in §5.4.* (Verified via GitHub API.)
- [Azure-Samples/azureai-samples](https://github.com/Azure-Samples/azureai-samples) — Python — "Official community-driven Azure AI Examples," including evaluation samples. *Rationale:* the official Azure AI sample repo consulted for the evaluation patterns summarized in §3. (Verified via GitHub API.)
- [Azure/azure-sdk-for-python](https://github.com/Azure/azure-sdk-for-python/tree/main/sdk/ai/azure-ai-projects) — Python — the `azure-ai-projects` Foundry SDK used by the optional illustrative snippet in §9 (project client, evaluation, tracing). *Cited inline in §9.*
- [microsoft-foundry/foundry-samples](https://github.com/microsoft-foundry/foundry-samples/tree/main/samples) — IaC/samples — end-to-end security patterns (private networking, customer-managed keys, RBAC). *Rationale:* the official samples repo linked from the Microsoft Foundry Planning page cited in §7.5.

### Code Samples

This introductory Trust & Enterprise Readiness report has **no standalone code-sample files of its own** and no live demos. The only code is the short, optional illustrative snippet in §9, which is *adapted/synthesized* from the cited Microsoft Learn pages ([Set up tracing in Microsoft Foundry](https://learn.microsoft.com/azure/foundry/observability/how-to/trace-agent-setup) and [What is Microsoft Foundry?](https://learn.microsoft.com/azure/foundry/what-is-foundry)). For runnable samples, use the official Microsoft **GitHub repositories listed above** — in particular `Azure-Samples/azureai-samples` (evaluation) and `microsoft-foundry/foundry-samples` (security/IaC patterns).

### Additional official Microsoft context

**Non-Learn Microsoft properties (cited inline in the body):**
- [Microsoft Responsible AI Standard](https://aka.ms/RAI) — Microsoft's Responsible AI Standard; grounds the Discover → Protect → Govern pattern (cited in §2.2 and §5.5).
- [Microsoft Products and Services Data Protection Addendum (DPA)](https://aka.ms/DPA) — governs how Microsoft processes customer and personal data (cited in §6.7).
- [Microsoft Trust Center](https://www.microsoft.com/trust-center) — portal for Microsoft's compliance offerings, certifications, and audit reports (cited in §6.7 and §12 for commitment-grade certification confirmation).

**Official Microsoft blogs** — background and positioning referenced by the Microsoft Learn *What's new in Microsoft AI security* page; they provide supporting context for the enterprise-controls, Zero Trust, and Entra Agent ID positioning discussed in §6–§8 (two of the three are also named by title in §8). Not directly quoted (blog article bodies are JavaScript-rendered and could not be captured verbatim in this environment):
- [Enterprise-grade controls for AI apps and agents built with Foundry and Copilot Studio](https://techcommunity.microsoft.com/blog/microsoft-security-blog/enterprise-grade-controls-for-ai-apps-and-agents-built-with-azure-ai-foundry-and/4414757) (May 19, 2025) — Spotlighting, task adherence, continuous evaluation, Purview/Credo AI/Saidot integrations.
- [Microsoft extends Zero Trust to secure the agentic workforce](https://www.microsoft.com/en-us/security/blog/2025/05/19/microsoft-extends-zero-trust-to-secure-the-agentic-workforce/) (May 19, 2025) — Zero Trust for AI agents; Purview + Foundry integration.
- [Announcing Microsoft Entra Agent ID: Secure and manage your AI agents](https://techcommunity.microsoft.com/blog/microsoft-entra-blog/announcing-microsoft-entra-agent-id-secure-and-manage-your-ai-agents/3827392) (May 19, 2025) — Unified directory/inventory of agent identities across Copilot Studio and Foundry.
