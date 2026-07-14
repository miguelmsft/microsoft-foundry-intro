# Research Report: Microsoft Foundry — Agent Service & Tools

**Date:** 2026-07-13
**Researcher:** Copilot MS Docs Researcher Agent
**Topic slug:** foundry-agent-service-tools
**Sources consulted:** 17 Microsoft Learn pages, 1 official Microsoft blog (devblogs.microsoft.com/foundry), 2 GitHub repositories, 3 code samples

> **Presentation context:** Topic 2 of 5 for an introductory, capability-by-capability walkthrough of the **new Microsoft Foundry** platform for a mixed TDM/BDM audience. This report focuses exclusively on the **current** Microsoft Foundry Agent Service and its tools/orchestration capabilities. It contains **no pricing information** and weaves Microsoft's stated **business value** into every capability. Knowledge/grounding is intentionally kept **light** here (a separate researcher covers "Foundry IQ").

---

## Executive Summary

**Microsoft Foundry Agent Service is a managed platform for building, deploying, and scaling AI agents.** An "agent" is a step up from a chatbot: where a chatbot only generates text, an agent uses an AI model to *reason* about a request and then *take action* — calling tools, reading data, and working through multiple steps to actually finish a task. In Foundry, every agent is assembled from three simple parts: a **model** (the reasoning engine), **instructions** (its goals and guardrails), and **tools** (how it takes action or reaches data) ([What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)). Foundry runs on top of the wider Microsoft Foundry platform, which "unifies agents, models, and tools under a single management grouping" with built-in tracing, monitoring, and evaluations ([What is Microsoft Foundry?](https://learn.microsoft.com/azure/foundry/what-is-foundry)).

The business story is about **speed to production and connecting AI to real work.** Foundry offers two ways to build: **prompt agents** (define a model + instructions + tools with no application code and let Foundry run them) and **hosted agents** (bring your own code in any framework and let Foundry deploy, scale, secure, and monitor it). Agents take real action through a rich catalog of **tools** — built-in ones like web search (preview), code interpreter, and file search, plus **custom** connections through **function calling**, the open **Model Context Protocol (MCP)**, **OpenAPI** APIs, and **Azure Logic Apps** with 1,400+ connectors into enterprise systems. For bigger jobs, multiple specialized agents can be **orchestrated** together (sequential, concurrent, hand-off, group-chat, and manager-coordinated patterns) using the open-source **Microsoft Agent Framework**, and agents can talk to each other through the **Agent-to-Agent (A2A)** protocol.

For decision-makers, the takeaway is that Foundry Agent Service lets teams **automate routine work, build production-ready agents faster, orchestrate complex multi-step tasks, and connect AI directly to enterprise systems and actions** — with enterprise-grade identity, networking, safety, and observability built in from day one ([Transparency Note for Foundry Agent Service](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note)). As Microsoft frames it, "Agents are fast becoming the next layer of application logic — reasoning about goals, calling tools, collaborating with each other, and adapting dynamically." ([Introducing Microsoft Agent Framework](https://devblogs.microsoft.com/foundry/introducing-microsoft-agent-framework-the-open-source-engine-for-agentic-ai-apps/)).

---

## Table of Contents

1. [Overview](#1-overview)
2. [Key Concepts](#2-key-concepts)
3. [Getting Started (Conceptual)](#3-getting-started-conceptual)
4. [Core Capabilities Walkthrough](#4-core-capabilities-walkthrough)
   - 4.1 [Foundry Agent Service: Build, Deploy, Run](#41-foundry-agent-service-build-deploy-run)
   - 4.2 [Tools & Actions](#42-tools--actions)
   - 4.3 [Orchestration: Single-Agent and Multi-Agent](#43-orchestration-single-agent-and-multi-agent)
   - 4.4 [Grounding in Enterprise Knowledge (Light — deferred to Foundry IQ)](#44-grounding-in-enterprise-knowledge-light--deferred-to-foundry-iq)
5. [Configuration & Best Practices](#5-configuration--best-practices)
6. [Advanced Topics](#6-advanced-topics)
7. [Pricing, Limits & Quotas](#7-pricing-limits--quotas)
8. [Research Limitations](#8-research-limitations)
9. [Complete Reference List](#9-complete-reference-list)

---

## 1. Overview

### What It Is

**Foundry Agent Service is a managed service for building, deploying, and running AI agents.** In plain terms: you describe what you want an agent to do, give it access to the right tools and data, and Foundry provides the infrastructure to run it reliably and securely — so your team focuses on the agent's job, not on servers.

> "Foundry Agent Service is a managed platform for building, deploying, and scaling AI agents. Use any framework, any supported model from the Foundry model catalog, and the Responses API as a single entry point."
> — Source: [What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)

Agent Service is part of the broader Microsoft Foundry platform, which brings the pieces of AI development together under one roof:

> "Microsoft Foundry unifies agents, models, and tools under a single management grouping with built-in enterprise-readiness capabilities including tracing, monitoring, evaluations, and customizable enterprise setup configurations."
> — Source: [What is Microsoft Foundry?](https://learn.microsoft.com/azure/foundry/what-is-foundry)

### Why It Matters

Microsoft describes Agent Service as **use-case agnostic** — a foundation for automating routine tasks and unlocking new kinds of knowledge work:

> "Agent Service is **flexible and use-case agnostic.** This presents multiple possibilities to automate routine tasks and unlock new possibilities for knowledge work - whether it is personal productivity agents that send emails and schedule meetings, research agents that continuously monitor market trends and automate report creation, sales agents that can research leads and automatically qualify them, customer service agents that proactively follow up with personalized messages, or developer agents that can upgrade your code base or evolve a code repository interactively."
> — Source: [Transparency Note for Foundry Agent Service](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note)

> **💼 Business value:** Agents let organizations hand off repetitive, multi-step work to software that can reason and act — freeing people for higher-value tasks. Because Foundry manages the underlying infrastructure, teams can go from idea to a working, production-ready agent quickly, and connect that agent to the systems where work actually happens.

### Key Features

Microsoft summarizes Agent Service across these components ([What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)):

- **Responses API** — a single entry point that gives any framework or app access to Foundry models plus platform tools (file search, code interpreter, web search (preview), MCP servers, and more).
- **Agent Runtime** — hosts and scales agents; manages conversations, tool calls, and agent lifecycle.
- **Tools** — built-in tools (web search (preview), file search, memory (preview), code interpreter, MCP servers) plus custom functions, with managed authentication.
- **Models** — works with many models from the Foundry model catalog; swap models without changing agent code.
- **Observability** — end-to-end tracing, metrics, and Application Insights integration.
- **Identity & Security** — Microsoft Entra identity, role-based access control (RBAC), content filters, and virtual network isolation.
- **Publishing** — version agents, create stable endpoints, and share through Microsoft Teams, Microsoft 365 Copilot, and the Entra Agent Registry.

> **⚠️ Preview status (important for presenters):** Per Microsoft, *"Some tools, including memory and web search, are in preview."* Preview vs. general-availability (GA) status changes over time and by region — confirm each tool's current status on the tool-support page before presenting ([What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview); [Quotas, limits, and regional support](https://learn.microsoft.com/azure/foundry/agents/concepts/limits-quotas-regions#tool-support-by-region-and-model)).

Microsoft also lists four "key features" of the service in its Transparency Note ([Transparency Note](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note)):

1. **Rapidly develop and automate processes** — agents integrate with the right tools, systems, and APIs to perform actions.
2. **Integrate with extensive memory and knowledge connectors** — agents manage conversation state and connect to internal/external knowledge for the right context.
3. **Flexible model choice** — pick the best model for the task.
4. **Built-in enterprise readiness** — support data privacy/compliance needs, scale, and complete tasks reliably.

---

## 2. Key Concepts

### What Is an Agent? (for a newcomer)

The simplest way to explain an agent: **a chatbot talks; an agent does.**

> "An agent is an AI application that uses a model from the Foundry model catalog to reason about user requests and take autonomous actions to fulfill them. Unlike a simple chatbot that only generates text, an agent can call tools, access external data, and make decisions across multiple steps to complete a task. In some cases, agents act without a chat interface at all — working autonomously in the background, triggered by system events, to accomplish tasks on a user's or organization's behalf."
> — Source: [What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)

### The Three Building Blocks of Every Agent

Every Foundry agent combines three parts ([What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)):

```
        ┌──────────────────────────────────────────────┐
        │                  AN AGENT                      │
        │                                                │
        │   1) MODEL         2) INSTRUCTIONS   3) TOOLS  │
        │   reasoning &      goals,            take      │
        │   language         constraints,      actions / │
        │   (from the        behavior          reach     │
        │   model catalog)                     data      │
        └──────────────────────────────────────────────┘
                 │ reason           │ decide          │ act
                 ▼                  ▼                 ▼
        "What is the user asking?"  "What should I do?"  "Search / call API / run code"
```

- **Model** — a model from the Foundry model catalog that provides reasoning and language capabilities.
- **Instructions** — define goals, constraints, and behavior (prompt-based, or code in a hosted agent).
- **Tools** — provide access to data or actions, such as search, file operations, or API calls.

### Two Ways to Build an Agent

Foundry lets you choose how much of the platform you use ([What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)):

| Agent type | What it is (plain language) | Who it's for |
| --- | --- | --- |
| **Prompt agents** | You define the agent by configuration — model, instructions, and tools — in the portal or with code, and **Foundry runs it for you**. There's no application code to maintain and no infrastructure to manage, scale, or patch. | Fast starts, internal tools, and production agents that don't need custom orchestration logic. |
| **Hosted agents** | You write the agent's logic **in your own code** (using Agent Framework, LangGraph, the OpenAI Agents SDK, or custom code), package it, and Foundry runs it with a managed endpoint, automatic scaling, a dedicated identity, and observability. | Agents that call into custom code; custom orchestration, multi-agent systems, and custom protocols. |

*(Note: the source page also lists a per-call cost model comparison, which is intentionally omitted here per the deck's no-pricing scope.)*

> "Prompt agents — author a prompt agent in the Foundry portal or define it with SDKs and REST, and Foundry runs it for you."
> — Source: [What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)

> **💼 Business value:** Prompt agents give business and technical teams a low-friction path to a working agent — no servers to run. Hosted agents give engineering teams full control of the logic while still offloading hosting, scaling, identity, and monitoring to Foundry. The same platform serves both, so teams can start simple and grow.

### The Responses API (single entry point)

Behind every agent type sits the **Responses API** — one endpoint for models plus platform tools. This is what lets Foundry offer "any framework, any model" with a consistent way to call tools and manage conversations ([What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)).

> **💼 Business value:** One consistent entry point means teams aren't locked into a single framework or model and don't have to rebuild integration plumbing when they switch models — they can pick the best model for each job and reuse the same tools, protecting today's investment as the technology keeps moving.

### Agents Can Be Grounded in Your Knowledge (kept light — see "Foundry IQ")

Agents don't just reason in a vacuum — they can be **grounded** in enterprise data so answers reflect your organization's information. Foundry provides knowledge tools such as **File Search**, **Grounding with Bing Search**, **SharePoint**, **Microsoft Fabric**, and **Azure AI Search** for this purpose ([Agent tools overview](https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog); [Transparency Note](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note)). **Depth on knowledge and grounding is covered by the separate "Foundry IQ" research topic** — here it's enough to say: *agents can be grounded in your enterprise knowledge.*

---

## 3. Getting Started (Conceptual)

> The deck is concept-and-value focused with **no live demos**. The steps below describe *conceptually* how a team creates and deploys an agent, with a few illustrative commands and one short snippet.

### Prerequisites

At a high level, to build an agent you need ([Agent development lifecycle](https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle); [Quickstart: Get started with Microsoft Foundry SDK](https://learn.microsoft.com/azure/foundry/quickstarts/get-started-code)):

- An **Azure account/subscription** and a **Microsoft Foundry project**.
- A **model deployed** from the Foundry model catalog (or use an instant model).
- For code-based work: the language runtime and the Foundry SDK/CLI/VS Code tooling.

### How You Create and Deploy an Agent (the lifecycle)

Microsoft describes a full **build → test → deploy → monitor** lifecycle. Conceptually:

```
 1. CHOOSE      → prompt agent (no code) or hosted agent (your code)
 2. CREATE/TEST → define model + instructions + tools; try it in the playground
 3. ADD TOOLS   → attach tools for knowledge (data) and actions (APIs)
 4. VERSION     → save meaningful milestones (each version is immutable)
 5. TRACE       → inspect every model call and tool call
 6. EVALUATE    → measure quality & safety; catch regressions
 7. OPTIMIZE    → auto-improve hosted-agent instructions (preview)
 8. PUBLISH     → promote to an "agent application" with a stable endpoint
 9. MONITOR     → track performance & reliability in production
```
> — Source: [Agent development lifecycle](https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle) and [What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)

For **prompt agents**, you author in the portal (or in code) and Foundry runs them. For **hosted agents**, Microsoft explains the deploy path plainly:

> "You package your agent as a container image and push it to Azure Container Registry. When you deploy, Agent Service pulls the image, provisions compute, assigns a dedicated Microsoft Entra ID (agent identity), and exposes a dedicated endpoint. At runtime, your agent code handles requests from clients and can call Foundry models, Toolbox tools, and downstream Azure services using its agent identity. The platform handles scaling, session state persistence, observability, and lifecycle management."
> — Source: [What are hosted agents?](https://learn.microsoft.com/azure/foundry/agents/concepts/hosted-agents)

When you're happy with a version, you **publish it as an "agent application"** — a stable endpoint you can open in a browser, share, or embed in your apps ([Agent development lifecycle](https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle)). Microsoft also publishes an end-to-end deployable example of this build-and-deploy flow ([Azure-Samples/get-started-with-ai-agents](https://github.com/Azure-Samples/get-started-with-ai-agents)).

### Terminal Commands (Azure / Foundry tooling)

Because this is an Azure-based platform, practitioners use the **Azure CLI**, the **Azure Developer CLI (`azd`)**, and Python/.NET package managers. These are illustrative — no commands are run in the deck.

```bash
# Sign in to Azure (used by DefaultAzureCredential in the SDK samples)
az login

# --- Prompt agents: define with the Python SDK ---
pip install azure-ai-projects azure-identity

# --- Hosted agents: provision + deploy in one step with the Azure Developer CLI ---
# azd up combines provisioning (Foundry project, model deployment, container
# registry, Application Insights, managed identity) with deployment.
azd up

# --- Build multi-agent orchestration with the open-source Microsoft Agent Framework ---
pip install agent-framework          # Python
# dotnet add package Microsoft.Agents.AI.Foundry --prerelease   # .NET (C#)
```
> — Sources: [Deploy a hosted agent (azd)](https://learn.microsoft.com/azure/foundry/agents/how-to/deploy-hosted-agent), [Use function calling with Microsoft Foundry agents](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/function-calling), [Microsoft Agent Framework overview](https://learn.microsoft.com/agent-framework/overview/agent-framework-overview)

### Python Setup (conceptual)

A minimal, illustrative "create a prompt agent and give it a tool" pattern:

```python
# Example: Create a prompt agent with a built-in tool (web search — a preview tool), then ask it something.
# Source: https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog
# Provenance: adapted (code is from the source page; the Example/Source/Provenance comments were added)
from azure.identity import DefaultAzureCredential
from azure.ai.projects import AIProjectClient
from azure.ai.projects.models import PromptAgentDefinition, WebSearchTool

# Format: "https://resource_name.ai.azure.com/api/projects/project_name"
PROJECT_ENDPOINT = "your_project_endpoint"

# Create clients to call Foundry API
project = AIProjectClient(
    endpoint=PROJECT_ENDPOINT,
    credential=DefaultAzureCredential(),
)
openai = project.get_openai_client()

# Create an agent with web search enabled
agent = project.agents.create_version(
    agent_name="web-search-agent",
    definition=PromptAgentDefinition(
        model="gpt-4.1-mini",
        instructions="You are a helpful assistant that can search the web.",
        tools=[WebSearchTool()],
    ),
)

# Send a query
response = openai.responses.create(
    input="What are the latest updates to Microsoft Foundry?",
    extra_body={"agent_reference": {"name": agent.name, "type": "agent_reference"}},
)
print(response.output_text)
```
> — Source: [Agent tools overview for Foundry Agent Service](https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog) | Provenance: adapted (source code with added explanatory comments; the web search tool is in preview)

The takeaway for the audience is the **shape**, not the syntax: define `model + instructions + tools`, then call the agent. That's the whole model of a prompt agent.

---

## 4. Core Capabilities Walkthrough

This section maps to the deck's capability-by-capability flow, with a **business-value callout** for each capability.

### 4.1 Foundry Agent Service: Build, Deploy, Run

**Plain terms:** Foundry Agent Service is the managed home for your agents. You bring the *what* (the agent's goal, its data, its allowed actions), and Foundry provides the *how* (running it reliably, securely, and at scale).

Microsoft's "system behavior" description captures the essence:

> "Agent Service provides integration with securely managed data, out-of-the-box tools and automatic tool calling that enable developers to build Agents that can have the ability to reason, plan, and execute tasks from a high-level goal specified by a user. Agent Service enables rapid Agent development with built-in memory management and a sophisticated interface to seamlessly integrate with popular compute platforms, bridging LLM capabilities with general purpose, programmatic actions."
> — Source: [Transparency Note for Foundry Agent Service](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note)

For teams that already write agent code, hosted agents remove the operational burden:

> "When you build agentic applications by using open-source frameworks, you typically manage many cross-cutting concerns: containerization, web server setup, security, memory persistence, scaling, instrumentation, and version rollbacks. These tasks become even more challenging in heterogeneous cloud environments. Hosted agents in Foundry Agent Service solve these challenges for Microsoft Foundry users."
> — Source: [What are hosted agents?](https://learn.microsoft.com/azure/foundry/agents/concepts/hosted-agents)

> **💼 Business value (build production-ready agents faster):** Foundry handles the "undifferentiated heavy lifting" — hosting, scaling, identity, state, and monitoring — so teams ship agents faster and operate them like real production software. Prompt agents mean *no code and no infrastructure to manage*; hosted agents mean *your code, Microsoft's runtime*. Either way, agents get a stable endpoint, versioning, and enterprise controls out of the box.

### 4.2 Tools & Actions

**Plain terms:** A model alone can only produce text. **Tools are what let an agent actually *do* things** — search the web, run code, query your data, or call your APIs and systems.

> "An agent on its own uses a Foundry model to generate text, but tools let it take action - searching the web, running code, querying your data, or calling your own APIs."
> — Source: [Agent tools overview for Foundry Agent Service](https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog)

> "A *tool* is a capability that an agent can invoke during a conversation to perform a specific task. When an agent receives a user message, the Foundry model powering the agent decides whether to call a tool based on the agent's instructions and the available tool definitions."
> — Source: [Agent tools overview for Foundry Agent Service](https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog)

Foundry groups tools into **built-in tools** (ready to use after basic configuration) and **custom tools** (bring your own capabilities).

#### Concrete examples of tool types (current)

**Built-in tools** ([Agent tools overview](https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog)):

| Tool | What it does |
| --- | --- |
| **Web search (preview)** | Retrieve real-time information from the public web and return answers with inline citations. |
| **Code Interpreter** | Write and run Python code in a sandboxed environment (data analysis, math, charts). |
| **File Search** | Augment agents with knowledge from uploaded files or documents via vector search. |
| **Function calling** | Define custom functions the agent can call; your app runs them and returns results. |
| **Azure AI Search** | Ground agents with data from an existing Azure AI Search index. |
| **Azure Functions** | Let agents call your serverless functions for custom actions and dynamic data. |
| **Image Generation (preview)** | Generate images as part of conversations. |
| **Browser Automation (preview)** | Perform browser tasks through natural-language prompts. |
| **Computer Use (preview)** | Interact with computer systems through their user interfaces. |
| **Microsoft Fabric (preview)** | Connect to a Microsoft Fabric data agent for data analysis. |
| **SharePoint (preview)** | Chat with private documents stored in SharePoint. |

> **⚠️ Preview note:** Web search (labeled above) and **memory** are in preview. Microsoft's overview states: *"Some tools, including memory and web search, are in preview."* Several other built-in tools are also in preview, as marked in the table. Verify each tool's current status on the tool-support page before presenting ([What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview); [Quotas, limits, and regional support](https://learn.microsoft.com/azure/foundry/agents/concepts/limits-quotas-regions#tool-support-by-region-and-model)).

**Custom tools** ([Agent tools overview](https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog)):

| Tool | What it does |
| --- | --- |
| **Model Context Protocol (MCP)** | Connect the agent to tools hosted on an MCP server endpoint. |
| **OpenAPI tool** | Connect the agent to external HTTP APIs via an OpenAPI 3.0/3.1 specification. |
| **Agent-to-Agent (A2A) (preview)** | Connect the agent to other agents through A2A-compatible endpoints. |
| **Toolbox** | Bundle multiple tools into a single MCP endpoint for reuse across agents. |

#### Function calling (extend agents with your own capabilities)

> "Microsoft Foundry agents support function calling, which lets you extend agents with custom capabilities. Define a function with its name, parameters, and description, and the agent's Foundry model can request your app to call it. Your app executes the function and returns the output. The agent then uses the result to continue the conversation with accurate, real-time data from your systems."
> — Source: [Use function calling with Microsoft Foundry agents](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/function-calling)

The pattern is five simple steps ([Function calling](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/function-calling)):
1. **Define function tools** (name, parameters, purpose).
2. **Create an agent** registered with those functions.
3. **Send a prompt** — the agent decides if a function is needed.
4. **Execute and return** — your app runs the function and returns the output.
5. **Get the final response** — the agent uses that output to complete its answer.

#### Model Context Protocol (MCP) support

> "MCP is an open standard that defines how applications provide tools and contextual data to large language models (LLMs). It enables consistent, scalable integration of external tools into model workflows."
> — Source: [Connect agents to Model Context Protocol servers](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/model-context-protocol)

In Foundry, you can add **remote MCP servers** from the portal's **Add Tools** catalog (for example, the **Azure DevOps MCP Server** in preview), connect **custom MCP servers hosted on Azure Functions**, and control exactly which actions an agent can perform ([What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)). MCP servers support **key-based**, **Microsoft Entra (managed identity)**, and **OAuth identity passthrough (On-Behalf-Of)** authentication ([Agent tools overview](https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog)). Agents built with Microsoft Agent Framework can likewise consume hosted MCP tools that are managed and executed by the backing service, with a configurable approval step before a tool call runs ([Using hosted MCP tools with agents](https://learn.microsoft.com/agent-framework/agents/tools/hosted-mcp-tools)).

> **Why MCP matters (plain language):** MCP is an *open standard*, so a tool built once can be reused by many agents and many runtimes without custom glue code. It's "best for tools shared across multiple agents or maintained by a different team." ([Agent tools overview](https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog))

#### Toolbox (configure once, reuse everywhere)

> "A *toolbox* is a curated bundle of tools - such as web search, Azure AI Search, code interpreter, file search, MCP servers, and OpenAPI tools - that you configure once and expose as a single MCP-compatible endpoint. Instead of attaching each tool individually to every agent definition, define the collection in a toolbox and connect any agent to the toolbox endpoint."
> — Source: [Agent tools overview for Foundry Agent Service](https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog)

Because a Toolbox is MCP-compatible, "any MCP-capable runtime can consume it - including agents built with Microsoft Agent Framework, LangGraph, GitHub Copilot SDK, and custom code" ([Agent tools overview](https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog)).

> **💼 Business value:** A Toolbox lets a platform team configure and govern a vetted set of tools **once** — with centralized authentication and versioning — and every agent reuses them instead of re-plumbing each one. That means faster, more consistent rollout of new agents and the ability to update or secure tools centrally without touching agent code.

#### Connecting to enterprise systems (Action Tools)

Foundry's Transparency Note frames tools that *take action* as **Action Tools**, which "enable the Agent to perform tasks and take actions on behalf of users." Built-in Action Tools include ([Transparency Note](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note)):

- **Code Interpreter** — write and run Python in a secure environment.
- **Azure Logic Apps** — "a cloud-based PaaS tool that enables automated workflows using **1,400+ built-in connectors**."
- **Azure Functions** — run serverless code for synchronous, asynchronous, long-running, and event-driven actions.
- **OpenAPI 3.0 tools** — connect to external OpenAPI-based APIs securely.
- **Model Context Protocol tools** — connect a service via a remote MCP server.
- **Deep Research tool** — multi-step web-based research.
- **Computer Use** — interact with systems through their UIs.
- **Browser Automation** — perform real-world browser tasks from natural-language prompts.
- **Image Generation** — generate and edit images.
- **Agent2Agent** — connect to another agent endpoint via the A2A protocol.

For no-code enterprise integration, Azure Logic Apps is a standout:

> "These tools use connector actions that run in Azure Logic Apps and let you integrate agents with specific Microsoft and non-Microsoft services, systems, apps, and data sources so you don't have to write any code."
> — Source: [Add agent tools in Foundry backed by connector actions in Azure Logic Apps (preview)](https://learn.microsoft.com/azure/logic-apps/add-agent-tools-connector-actions)

> **💼 Business value (connect AI to real enterprise systems/actions):** Tools are how an agent stops being a demo and starts doing real work — creating a support ticket, looking up a customer record, running an analysis, or kicking off a workflow. With MCP, OpenAPI, Azure Functions, and 1,400+ Logic Apps connectors, agents plug into the systems a business already runs, often with **no custom code**. Centralized authentication (Entra identity, OAuth On-Behalf-Of) means agents act with the right, scoped permissions instead of shared credentials.

### 4.3 Orchestration: Single-Agent and Multi-Agent

#### Single-agent vs. multi-agent (plain language)

A **single agent** handles a task on its own. But some jobs are too broad or complex for one agent's instructions. In a **multi-agent system**, several specialized agents work together — each focused on part of the problem.

> "Multi-agent systems using Agent Service can be designed to achieve performant autonomous workflows for specific scenarios. In multi-agent systems, multiple context-aware autonomous agents, whether humans or AI systems, interact or work together to achieve individual or collective goals specified by the user."
> — Source: [Transparency Note for Foundry Agent Service](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note)

Microsoft's recommended approach is to **start with reliable single agents, then orchestrate them**:

> "When building a new multi-agent solution, start with building singleton agents with Agent Service to get the most reliable, scalable, and secure agents. You can then orchestrate these agents together, using supported orchestration frameworks."
> — Source: [Transparency Note for Foundry Agent Service](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note)

Foundry's guidance even gives a **signal for when to go multi-agent**:

> "When a single agent's system message consistently struggles to handle the complexity, breadth, or depth of a task... the system may benefit from transitioning to a multi-agent architecture... consider decomposing the workload into specialized subtasks, each governed by its own agent."
> — Source: [Transparency Note for Foundry Agent Service](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note)

#### How agents coordinate: Microsoft Agent Framework

The recommended engine for multi-agent orchestration is the **open-source Microsoft Agent Framework**, which works out-of-the-box with Agent Service (it's "wireline compatible" with the Responses API) ([Transparency Note](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note); source on GitHub: [microsoft/agent-framework](https://github.com/microsoft/agent-framework)).

> "Microsoft Agent Framework is an open-source SDK for building AI agents that can reason, use tools, and interact with users and other agents. It supports multiple AI providers and languages."
> — Source: [Microsoft Agent Framework — Frequently Asked Questions](https://learn.microsoft.com/agent-framework/support/faq) (supports .NET/C# and Python; Go is in preview)

> "Microsoft Agent Framework is an **open-source SDK and runtime** designed to let developers build, deploy, and manage sophisticated multi-agent systems with ease. It unifies the **enterprise-ready foundations of Semantic Kernel** with the **innovative orchestration of AutoGen**, so teams no longer have to choose between experimentation and production."
> — Source: [Introducing Microsoft Agent Framework](https://devblogs.microsoft.com/foundry/introducing-microsoft-agent-framework-the-open-source-engine-for-agentic-ai-apps/)

The framework offers three capability categories ([Microsoft Agent Framework overview](https://learn.microsoft.com/agent-framework/overview/agent-framework-overview)):
- **Agents** — individual agents that use models, call tools and MCP servers, and generate responses.
- **Harness** — an "opinionated agent with batteries-included capabilities for long, multi-step tasks."
- **Workflows** — "graph-based workflows that connect agents and functions for multi-step tasks with type-safe routing, checkpointing, and human-in-the-loop support."

#### Multi-agent orchestration patterns

Microsoft Agent Framework provides several built-in orchestration patterns — the "shapes" of how agents cooperate ([Workflow orchestrations](https://learn.microsoft.com/agent-framework/user-guide/workflows/orchestrations/overview)):

| Pattern | How agents coordinate |
| --- | --- |
| **Sequential** | Agents execute one after another in a defined order (like an assembly line). |
| **Concurrent** | Agents execute in parallel (divide and conquer). |
| **Handoff** | Agents transfer control to each other based on context (escalation / expert routing). |
| **Group Chat** | Agents collaborate in a shared conversation (brainstorm / debate). |
| **Magentic** | A manager agent dynamically coordinates specialized agents. |

> "Orchestrations support **human-in-the-loop** interactions through tool approval and request info. Agents can use approval-required tools that pause the workflow for human review before execution."
> — Source: [Workflow orchestrations](https://learn.microsoft.com/agent-framework/user-guide/workflows/orchestrations/overview)

> **💼 Business value:** Human-in-the-loop keeps a person in control of consequential steps — an agent can prepare the work, but a human approves before anything is sent, changed, or committed. That's what makes it safe to automate real business processes in regulated or high-stakes settings, balancing speed with trust and compliance.

```
 SEQUENTIAL      CONCURRENT        HANDOFF            GROUP CHAT        MAGENTIC
 A → B → C       A ┐               A ──► B ──► C      ┌─A─┐            Manager
                 B ├─► merge       (control moves      │   │            ├─► A
                 C ┘               with context)      B───C            ├─► B
                                                      (shared chat)     └─► C
```

#### Agent-to-Agent (A2A) communication

Agents can also call *other* agents through the open **A2A protocol**:

> "The A2A tool enables agent-to-agent communication, making it easier to share context between Foundry-model-powered agents and external agent endpoints through a standardized protocol."
> — Source: [Connect to an A2A agent endpoint from Foundry Agent Service (preview)](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/agent-to-agent)

> **💼 Business value:** A2A is an open, standardized way for agents to work together — including agents built by **different teams or vendors**. For the business, that means specialized agents can be combined into larger solutions without custom point-to-point integration, so investments in individual agents compound instead of becoming disconnected silos.

The Agent Framework blog distinguishes two orchestration styles: **Agent Orchestration** (LLM-driven, creative reasoning and decision-making) and **Workflow Orchestration** (business-logic-driven, deterministic multi-agent workflows) — "flexible collaboration for open-ended tasks, or structured workflows for repeatable enterprise processes." ([Introducing Microsoft Agent Framework](https://devblogs.microsoft.com/foundry/introducing-microsoft-agent-framework-the-open-source-engine-for-agentic-ai-apps/)).

> **Note on the visual "workflows" builder:** Foundry also offers a UI-based **workflows** designer (sequential, group-chat, and human-in-the-loop templates). Microsoft is consolidating orchestration onto Microsoft Agent Framework and, per the docs, recommends using Agent Framework to build **new** workflows ([Build a workflow in Microsoft Foundry (Preview)](https://learn.microsoft.com/azure/foundry/agents/concepts/workflow)). For an introductory deck, present **Microsoft Agent Framework** as the go-forward orchestration engine (see Research Limitations for the retirement detail).

> **💼 Business value (orchestrating complex multi-step tasks):** Multi-agent orchestration lets organizations break big, messy problems into specialized roles that cooperate — a research agent feeds an analysis agent that feeds a drafting agent, with a human approving the final step. The patterns (sequential, concurrent, handoff, group-chat, manager) mean teams don't hand-code routing logic. Microsoft's summary: "Agents are fast becoming the next layer of application logic — reasoning about goals, calling tools, collaborating with each other, and adapting dynamically." ([Introducing Microsoft Agent Framework](https://devblogs.microsoft.com/foundry/introducing-microsoft-agent-framework-the-open-source-engine-for-agentic-ai-apps/))

### 4.4 Grounding in Enterprise Knowledge (Light — deferred to Foundry IQ)

Agents can be **grounded** in your organization's data so their answers are accurate and specific. Foundry provides knowledge tools including **File Search** (RAG over your documents), **Grounding with Bing Search**, **SharePoint**, **Microsoft Fabric**, and **Azure AI Search**, and simplifies secure access to SharePoint/Fabric through **On-Behalf-Of (OBO)** authentication so an agent only sees files the user is allowed to see ([Transparency Note](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note); [Agent tools overview](https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog)).

> **Scope note:** Depth on knowledge, grounding, and retrieval is covered by the separate **"Foundry IQ"** research topic. For this deck, the single message is: **agents can be grounded in enterprise knowledge**, and that grounding respects each user's permissions.

---

## 5. Configuration & Best Practices

### Recommended configuration (conceptual)

- **Store secrets in connections, not code.** "Store secrets in a managed secret store and reference them through connections instead of hardcoding them in code, configuration files, or prompts." ([Agent development lifecycle](https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle))
- **Prefer Microsoft Entra authentication for tools/MCP.** "When in doubt, start with Microsoft Entra authentication if the MCP server supports it. It eliminates the need to manage secrets and provides built-in token rotation." ([Agent tools overview](https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog))
- **Use least privilege for agent identities.** Each agent can have a dedicated Entra identity with scoped access ([What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)).
- **Version deliberately.** Each saved agent version is immutable, enabling controlled rollout and rollback ([Agent development lifecycle](https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle)).

### Best practices (from Microsoft)

- **Choose and integrate tools thoughtfully.** "Select tools that are stable, well-documented, and suited to the agent's intended uses... Limit the number of tools to those that genuinely enhance functionality and specify how and when the agent should use them." ([Transparency Note](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note))
- **Require approval for high-risk MCP operations.** "Require approval for high-risk operations, especially tools that write data or change resources," and "use an allow list of tools." ([Connect agents to Model Context Protocol servers](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/model-context-protocol))
- **Establish human-in-the-loop oversight.** "Ensure that a user or human operator can easily intervene, correct, or override the agent's decisions, especially when those decisions have safety or legal implications." ([Transparency Note](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note))
- **Trace and evaluate.** Use tracing to confirm which tools were called, and run evaluations (intent resolution, tool-call accuracy, task adherence) before publishing ([Transparency Note](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note)).

### Common pitfalls & anti-patterns

- **Too many tools on one agent.** "If... a high number of tools are configured on a single agent, the agent's guidance may become fragmented, outdated, or misleading." ([Transparency Note](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note))
- **Unsaved changes are temporary.** To compare versions, view history, or run full evaluations, you must save changes as a version ([Agent development lifecycle](https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle)).
- **Publishing can change permissions.** "Permissions assigned to the project identity don't automatically transfer to the published agent. After publishing, reassign the necessary privileges to the agent application's identity." ([Agent development lifecycle](https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle))
- **Trusting third-party servers blindly.** For non-Microsoft MCP servers, "rely on servers hosted by trusted service providers themselves rather than proxies," and review data shared with them ([Connect agents to Model Context Protocol servers](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/model-context-protocol)).

> **💼 Business value (trust & governance):** These practices are why Foundry agents can move from prototype to production responsibly — with scoped identities, approval gates for risky actions, human oversight, and full traceability of every decision an agent makes.

---

## 6. Advanced Topics

### Enterprise readiness built in

Every agent inherits enterprise-grade infrastructure ([What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)):

- **Agent identity** — a dedicated Microsoft Entra identity per agent for secure, scoped access without shared credentials (can authenticate to external MCP servers; OAuth On-Behalf-Of supported).
- **Private networking** — run agents inside your Azure virtual network; hosted agents support bring-your-own VNet with VM-isolated per-session sandboxes.
- **Role-based access control (RBAC)** — control who can create, invoke, and manage agents.
- **Content safety / guardrails** — integrated content filters help mitigate prompt-injection risks, including cross-prompt injection (XPIA).

### Observability

Agent Service provides "end-to-end tracing, metrics, and Application Insights integration" so you can "see every decision your agent makes" ([What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)). Microsoft recommends OpenTelemetry traces to "reconstruct the agent's reasoning process, isolate issues, tune prompts, and verify guideline adherence" ([Transparency Note](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note)).

### Publishing & distribution

Published agents can be shared where users already work:

> "Distribution — Share published agents through Microsoft 365 Copilot and Teams and the Entra Agent Registry, putting your agents where your users already work. Foundry Agent Service supports the OpenResponses and Activity Protocols for Microsoft 365 publishing... and the A2A protocol (preview) for agent-to-agent communication."
> — Source: [What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)

### Why an open, framework-agnostic foundation matters

The Agent Framework announcement explains the production problem Foundry + Agent Framework are built to solve:

> "Yet despite the excitement, the **path from prototype to production has been fraught with obstacles**. Many of the most popular open-source frameworks are fragmented... And most importantly, **enterprise readiness is missing**: observability, compliance hooks, security, and long-running durability are table stakes in OSS frameworks."
> — Source: [Introducing Microsoft Agent Framework](https://devblogs.microsoft.com/foundry/introducing-microsoft-agent-framework-the-open-source-engine-for-agentic-ai-apps/)

Open standards (MCP, A2A, OpenAPI) keep agents "portable and vendor-neutral," and hosted agents / Agent Framework add the enterprise readiness — "built-in observability, approvals, security, and long-running durability." ([Introducing Microsoft Agent Framework](https://devblogs.microsoft.com/foundry/introducing-microsoft-agent-framework-the-open-source-engine-for-agentic-ai-apps/))

### Concrete cross-industry use cases (from Microsoft)

Foundry's Transparency Note gives intended-use examples that are ideal for a BDM audience ([Transparency Note](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note)):

- **Healthcare** — assemble standard procedures and shift policies into concise orientations for new nurses (HR reviews the final output).
- **Retail** — recommend gift options based on stated needs and past purchases.
- **Government** — triage incoming citizen service requests and route them to the right department.
- **Education** — gather age-appropriate, reputable resources for a lesson (teacher verifies).
- **Manufacturing** — monitor inventory, schedule restocking, and optimize shift rosters (management confirms).

Each example pairs automation with a **human-in-the-loop** checkpoint — reinforcing that agents augment people rather than replace judgment.

---

## 7. Pricing, Limits & Quotas

**N/A for this deck by design.** Per the presentation constraints, this report intentionally excludes all cost and pricing information. (Note: some source pages, such as the agent-type comparison and preview tool notices, do reference cost models and preview supplemental terms; those cost details were deliberately omitted here.) Model availability, tool availability, and preview status vary by region — see Microsoft's "Quotas, limits, and regional support" and each tool's own page for current status ([What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview)).

---

## 8. Research Limitations

- **Naming across sources / dates.** Current Microsoft Learn documentation uses **"Microsoft Foundry"** and **"Microsoft Foundry Agent Service."** The Microsoft Agent Framework announcement blog is dated **October 1, 2025** and refers to **"Azure AI Foundry Agent Service"** (the prior name) in places. Per the deck's scope, this report standardizes on the **current** "Microsoft Foundry" naming and only quotes the blog where its wording is neutral or uses "Microsoft Agent Framework." No "old vs. new" framing was used.
- **"Connected agents" terminology.** The topic brief references "connected agents." In current Microsoft Foundry, the capability of agents **coordinating and delegating to specialized agents** is delivered through **Microsoft Agent Framework** orchestration patterns and the **Agent-to-Agent (A2A)** protocol — both covered in this report. Documentation that uses the literal named feature "Connected Agents" sits outside the current capability set this deck focuses on, so it was intentionally not carried forward. If the presenter specifically needs that literal feature name, flag it for a targeted follow-up.
- **Visual "workflows" builder is being consolidated.** The Foundry docs state: *"Microsoft Foundry is retiring workflows on December 1, 2026. If you're looking to build new workflows, use Microsoft Agent Framework."* ([Build a workflow in Microsoft Foundry (Preview)](https://learn.microsoft.com/azure/foundry/agents/concepts/workflow)). The report presents Agent Framework as the go-forward orchestration engine and flags the visual workflow builder only lightly. Because the presentation date (2026-07-13) precedes that retirement, the visual builder still exists today; verify current status before presenting.
- **Preview vs. GA.** The **tool catalog and core tools framework are generally available**, but a number of individual tools are in **preview**. Per Microsoft's overview, *"Some tools, including memory and web search, are in preview."* Other preview tools include Image Generation, Browser Automation, Computer Use, Microsoft Fabric, SharePoint, Agent-to-Agent (A2A), the custom code interpreter, and the agent optimizer. Preview status and regional availability change frequently; confirm each tool's current status on the tool-support page before the presentation ([What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview); [Quotas, limits, and regional support](https://learn.microsoft.com/azure/foundry/agents/concepts/limits-quotas-regions#tool-support-by-region-and-model)).
- **Grounding kept intentionally light.** Knowledge/grounding depth (File Search internals, Foundry IQ, retrieval quality) was deferred to the separate "Foundry IQ" research topic, as instructed.
- **Code samples are illustrative, not demoed.** Per scope, only a couple of short conceptual snippets are included. The Python snippet's code is drawn from the tool-catalog page (adapted with added explanatory comments); model names shown in some source snippets (e.g., "gpt-4.1-mini," "gpt-5-mini," "gpt-5.4-mini") are examples from the docs, not recommendations.
- **Tooling note (transparency).** The Microsoft Learn MCP server (`microsoft_docs_search`, `microsoft_docs_fetch`, `microsoft_code_sample_search`) was used for all Microsoft Learn and devblogs content; GitHub repositories were verified via the public GitHub API (the available `gh` token was blocked by organization SAML SSO, so repo metadata was confirmed with unauthenticated `curl` to `api.github.com`).

---

## 9. Complete Reference List

### Microsoft Learn Documentation
- [What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/azure/foundry/agents/overview) — Core overview: definition of the service, what an agent is, agent types (prompt vs. hosted), tools, enterprise capabilities, publishing.
- [What is Microsoft Foundry?](https://learn.microsoft.com/azure/foundry/what-is-foundry) — Platform framing: unifies agents, models, and tools with built-in enterprise readiness.
- [Agent tools overview for Foundry Agent Service](https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog) — What tools are, built-in vs. custom tool types, Toolbox, authentication, full tool tables.
- [Agent development lifecycle](https://learn.microsoft.com/azure/foundry/agents/concepts/development-lifecycle) — Create → test → tools → version → trace → evaluate → publish → monitor; pitfalls.
- [What are hosted agents?](https://learn.microsoft.com/azure/foundry/agents/concepts/hosted-agents) — Plain-language deploy story for code-based agents; cross-cutting concerns Foundry handles.
- [Use function calling with Microsoft Foundry agents](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/function-calling) — Function-calling definition and the five-step pattern.
- [Connect agents to Model Context Protocol servers](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/model-context-protocol) — MCP definition, public/private MCP endpoints, Toolbox-as-MCP, best practices.
- [Connect to an A2A agent endpoint from Foundry Agent Service (preview)](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/agent-to-agent) — Agent-to-Agent protocol for cross-agent communication.
- [Build a workflow in Microsoft Foundry (Preview)](https://learn.microsoft.com/azure/foundry/agents/concepts/workflow) — Visual orchestration patterns (sequential, group chat, human-in-the-loop); consolidation onto Agent Framework.
- [Transparency Note for Foundry Agent Service](https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note) — Capabilities, action tools, knowledge tools, multi-agent orchestration, intended uses, best practices, limitations.
- [Quickstart: Get started with Microsoft Foundry SDK](https://learn.microsoft.com/azure/foundry/quickstarts/get-started-code) — Conceptual "generate a response, create an agent, converse" flow.
- [Deploy a hosted agent (azd)](https://learn.microsoft.com/azure/foundry/agents/how-to/deploy-hosted-agent) — `azd up` deployment lifecycle for hosted agents.
- [Add agent tools in Foundry backed by connector actions in Azure Logic Apps (preview)](https://learn.microsoft.com/azure/logic-apps/add-agent-tools-connector-actions) — No-code enterprise integration via Logic Apps connectors, packaged as MCP servers.
- [Microsoft Agent Framework overview](https://learn.microsoft.com/agent-framework/overview/agent-framework-overview) — Agents, Harness, Workflows; when to use agents vs. workflows; successor to Semantic Kernel + AutoGen.
- [Workflow orchestrations (Microsoft Agent Framework)](https://learn.microsoft.com/agent-framework/user-guide/workflows/orchestrations/overview) — Sequential, Concurrent, Handoff, Group Chat, Magentic patterns; human-in-the-loop.
- [Using hosted MCP tools with agents (Microsoft Agent Framework)](https://learn.microsoft.com/agent-framework/agents/tools/hosted-mcp-tools) — Hosted MCP server integration, persistent agents, tool-approval workflow.
- [Microsoft Agent Framework — Frequently Asked Questions](https://learn.microsoft.com/agent-framework/support/faq) — Open-source status; supported languages (.NET, Python; Go preview).

### Official Microsoft Blog
- [Introducing Microsoft Agent Framework: The Open-Source Engine for Agentic AI Apps](https://devblogs.microsoft.com/foundry/introducing-microsoft-agent-framework-the-open-source-engine-for-agentic-ai-apps/) (devblogs.microsoft.com/foundry, Oct 1, 2025) — Why agents need a new foundation; Agent Framework as open-source SDK+runtime; orchestration styles; enterprise-readiness; "next layer of application logic."

### GitHub Repositories (verified via public GitHub API)
- [microsoft/agent-framework](https://github.com/microsoft/agent-framework) — "A framework for building, orchestrating and deploying AI agents and multi-agent workflows with support for Python and .NET." (official Microsoft open-source repo).
- [Azure-Samples/get-started-with-ai-agents](https://github.com/Azure-Samples/get-started-with-ai-agents) — "Basic sample for deploying AI agents web app with Azure AI Foundry and SDKs" (official Azure-Samples repo).

### Code Samples (conceptual, drawn from official docs)
- Create a prompt agent with a built-in tool (Python) — [Agent tools overview](https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog) (adapted).
- Five-step function-calling pattern — [Use function calling with Microsoft Foundry agents](https://learn.microsoft.com/azure/foundry/agents/how-to/tools/function-calling).
- Minimal agent creation (Python/.NET/Go) — [Microsoft Agent Framework overview](https://learn.microsoft.com/agent-framework/overview/agent-framework-overview).
